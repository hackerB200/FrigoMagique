<template>
    <!-- Dialogue confirmation pour vider le frigo -->
    <v-dialog max-width="500" v-model="dialogDisplay">
        <v-card class="pa-2">
            <v-card-title class="d-flex justify-space-between align-center">
                <span class="text-h6">Êtes-vous sur de tout manger ?</span>
                <v-btn icon @click="dialogDisplay = false">
                    <v-icon color="accent">mdi-window-close</v-icon>
                </v-btn>
            </v-card-title>
            <v-card-text class="text-info text-body-1">
                Voulez-vous vraiment tout manger, au risque d'avoir l'estomac qui explose ?
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="success" @click="eatEverything">Confirmer</v-btn>
                <v-btn color="accent" @click="dialogDisplay = false">Annuler</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>

    <!-- Frigo -->
    <v-row justify="center">
        <v-col cols="12" md="8">
            <v-card class="fridge-card mx-auto rounded-xl" color="info">
                <!-- Intérieur du frigo -->
                <div class="pa-5">

                    <!-- Partie congélateur -->
                    <div class="fridge-header">
                        <v-card-title>
                            <span class="text-h4">Mon Frigo</span>
                        </v-card-title>
                        <v-card class="fridge-handle round-xl mt-3" color="primary"></v-card>
                        <v-card-subtitle class="text-h6">
                            Liste des articles dans le frigo
                        </v-card-subtitle>

                        <v-row justify="center" class="mt-1">
                            <v-col cols="7" class="d-flex align-center ml-n4">
                                <v-autocomplete v-model="searchText" @update:model-value="searchFood"
                                    :items="itemToSearch" prepend-inner-icon="mdi-magnify" menu-icon=""
                                    placeholder="Chercher dans mon frigo" width="50%" :style="{ height: '56px' }"
                                    variant="solo" auto-select-first item-props clearable
                                    no-data-text="Pas d'aliment avec ce nom"></v-autocomplete>
                            </v-col>
                            <v-col cols="5" class="d-flex align-center ml-n4">
                                <v-btn v-bind:disabled="fridgeItems.length == 0" @click="dialogDisplay = true"
                                    color="success" height="56px" class="text-subtitle-1" variant="text">
                                    <template v-slot:prepend>
                                        <v-icon size="25">mdi-stomach</v-icon>
                                    </template>
                                    TOUT MANGER
                                </v-btn>
                            </v-col>
                        </v-row>

                        <v-row justify="center" class="mt-1 ml-4">
                            <v-col class="d-flex align-center ml-n4">
                                <v-btn class="text-subtitle-1 pa-2 pr-5 mt-2" height="50px" @click="magicShopping"
                                    variant="text" color="blue">
                                    <template v-slot:prepend>
                                        <v-icon color="blue" class="mx-2" size="25">mdi-magic-staff</v-icon>
                                    </template>
                                    LANCER LE SORT ABRAKADACOURSES
                                </v-btn>
                            </v-col>
                            <v-col class="d-flex align-center ml-n4">
                                <v-btn class="text-subtitle-1 pa-2 mt-2" height="50px" to="/Supermarket" variant="text"
                                    color="warning">
                                    <template v-slot:prepend>
                                        <v-icon color="warning" class="mx-2" size="25">mdi-logout</v-icon>
                                        FAIRE LES COURSES
                                    </template>
                                </v-btn>
                            </v-col>
                        </v-row>
                    </div>

                    <!-- Partie intérieure -->
                    <v-divider :thickness="4" color="primary" class="border-opacity-100"></v-divider>
                    <v-container class="fridge-list">
                        <v-row>
                            <v-col v-for="item in fridgeItems" :key="item.id" cols="12" sm="6" md="4">

                                <v-card outlined color="secondary" height="100%" class="px-1">
                                    <v-card-title>{{ item.name }}
                                        <span class="text-subtitle-2"> x {{ item.qte }}</span>
                                    </v-card-title>
                                    <v-img :src="item.photo" height="125px"></v-img>

                                    <v-card-actions class="d-flex flex-column align-end">
                                        <v-btn color="warning" @click="eatFood(item)" class="mb-2">
                                            <template v-slot:prepend>
                                                <v-icon class="mr-2">mdi-silverware-fork-knife</v-icon>
                                                Manger
                                            </template>
                                        </v-btn>
                                        <v-btn color="error" @click="removeItem(item.id)" class="mb-2">
                                            <template v-slot:prepend>
                                                <v-icon class="mr-2">mdi-delete</v-icon>
                                                Supprimer
                                            </template>
                                        </v-btn>
                                    </v-card-actions>
                                </v-card>

                            </v-col>
                        </v-row>
                    </v-container>

                    <!-- Message tips si frigo vide -->
                    <v-snackbar v-model="showEmptyDisplay" color="tertiary">
                        Le frigo est vide... il est temps d'aller faire les courses non ?
                        <template v-slot:actions>
                            <v-btn color="accent" variant="text" @click="showEmptyDisplay = false">
                                Fermer
                            </v-btn>
                        </template>
                    </v-snackbar>
                </div>
            </v-card>
        </v-col>
    </v-row>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue';

import Food from '../models/Food.js';
import supermarket from '@/sevices/supermarket.js';

const supermarketService = new supermarket();
let fridgeItems = reactive([]);
let itemToSearch = reactive([]);
let searchText = '';
let dialogDisplay = ref(false);
let showEmptyDisplay = ref(false);

onMounted(() => {
    loadFridgeItems();
});

function eatEverything() {
    for (let item of fridgeItems) {
        removeItem(item.id);
    }
    dialogDisplay.value = false;
}

function searchFood(value) {
    if (value == null) {
        loadFridgeItems();
        return;
    }
    loadFridgeItems(value);
}

function loadFridgeItems(filter = null) {
    fridgeItems.splice(0, fridgeItems.length);
    itemToSearch.splice(0, itemToSearch.length);

    let url = 'https://webmmi.iut-tlse3.fr/~pecatte/frigo/public/13/produits';
    if (filter != null) {
        url += '?search=' + filter;
    }

    fetch(url)
        .then(response => response.json())
        .then(data => {
            for (let item of data) {
                fridgeItems.push(new Food(item));
                itemToSearch.push({ title: item.nom, value: item.nom });
            }
            if (fridgeItems.length == 0) {
                showEmptyDisplay.value = true;
            }
        })
        .catch(error => {
            console.error('Erreur lors du chargement des articles:', error);
        });
}

function removeItem(id) {
    fetch('https://webmmi.iut-tlse3.fr/~pecatte/frigo/public/13/produits/' + id, {
        method: 'DELETE'
    })
        .then(response => response.json())
        .then(data => {
            if (data.status == 0) {
                console.error('Erreur lors de la suppression de l\'article:', data);
                return;
            }
            loadFridgeItems();
        })
        .catch(error => {
            console.error('Erreur lors de la suppression de l\'article:', error);
        });
}

function eatFood(item) {
    if (item.qte - 1 <= 0) { // S'il n'en reste qu'un, on le supprime
        removeItem(item.id);
        return;
    }

    fetch('https://webmmi.iut-tlse3.fr/~pecatte/frigo/public/13/produits', { // Sinon, on décrémente la quantité
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: item.id,
            nom: item.name,
            qte: item.qte - 1,
            photo: item.photo
        })
    })
        .then(response => response.json())
        .then(data => {
            if (data.status == 0) {
                console.error('Erreur lors de la mise à jour de l\'article:', data);
                return;
            }
            loadFridgeItems();
        })
        .catch(error => {
            console.error('Erreur lors de la mise à jour de l\'article:', error);
        });
}

function magicShopping() {
    let randomIndex = getRandomIndex();
    let randomProducts = getProductsByIndexes(randomIndex);

    for (let product of randomProducts) {
        let qte = Math.floor(Math.random() * 5) + 1; // On prend entre 1 et 5 articles
        supermarketService.addFoodToFridge(product, qte).then((data) => {
            if (data.status == 0) {
                console.error('Erreur lors de l\'ajout de l\'article:', product);
                return;
            }
            if (randomProducts.indexOf(product) == randomProducts.length - 1) { // Si c'est le dernier article à ajouter alors on peut recharger la liste
                loadFridgeItems();
            }
        }).catch((error) => {
            console.error('Erreur lors de l\'ajout de l\'article:', error);
        });
    }
}

function getRandomIndex() {
    let tabIndex = [];
    for (let i = 0; i < Math.floor(Math.random() * 5) + 1; i++) { // On prend entre 1 et 5 articles
        tabIndex.push(Math.floor(Math.random() * 28) + 101); // On prend des indices entre 101 et 128
    }
    return tabIndex;
}

function getProductsByIndexes(tabIndex) {
    let supermarket = supermarketService.getProducts();
    let randomProducts = [];
    for (let index of tabIndex) {
        randomProducts.push(supermarket.find(product => product.id == index));
    }
    return randomProducts;
}

</script>

<style scoped>
.fridge-card {
    position: relative;
    width: 700px;
    height: 900px;
}

.fridge-list {
    height: 600px;
    overflow-y: auto;
}

.fridge-header {
    height: 250px;
}

.fridge-handle {
    display: flex;
    float: right;
    width: 20px;
    height: 100px;
}

.align-center {
    display: flex;
    align-items: center;
}
</style>