<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-card class="mx-auto" color="tertiary">
                    <v-row align="center">
                        <v-col cols="4">
                            <v-card-title>Produits disponibles</v-card-title>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field id="searchInput" prepend-inner-icon="mdi-magnify" density="compact"
                                label="Chercher dans le supermarché" variant="solo" hide-details single-line
                                @click:prepend-inner="searchFood" @click:clear="resetSearch" clearable></v-text-field>
                        </v-col>
                    </v-row>

                    <v-container class="supermarket-list">
                        <v-row>
                            <v-col v-for="product in resultProducts" :key="product.id" cols="12" sm="6" md="4" lg="3">
                                <v-card outlined class="pt-5">
                                    <v-img :src="product.photo" height="150px"></v-img>
                                    <v-card-title>{{ product.name }}</v-card-title>
                                    <v-card-subtitle>
                                        <v-number-input :id="'' + product.id" :rules="required" :min="1" :max="20"
                                            control-variant="split" label="Quantité" :model-value="1"
                                            clearable></v-number-input>
                                    </v-card-subtitle>
                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn color="success" @click="addToFridge(product)" class="m-1 pr-3">
                                            <template v-slot:prepend>
                                                <v-icon class="mr-2">mdi-plus-circle</v-icon>
                                                Acheter
                                            </template>
                                        </v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-container>
                    <v-divider></v-divider>
                </v-card>
            </v-col>
        </v-row>
        <v-snackbar v-model="confirmedMessage.display" color="tertiary">
            {{ confirmedMessage.text }}
            <template v-slot:actions>
                <v-btn color="accent" variant="text" @click="confirmedMessage.display = false">
                    Fermer
                </v-btn>
            </template>
        </v-snackbar>
    </v-container>
</template>

<script setup>

import { onMounted, reactive, ref } from 'vue';

import supermarket from '@/sevices/supermarket.js';

const supermarketService = new supermarket();
let products = ref([]);
let resultProducts = ref([]);
let required = [value => !!value || 'Champ requis'];
let confirmedMessage = reactive({ text: '', display: false });

onMounted(() => {
    loadProducts();

    document.getElementById('searchInput').addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            searchFood();
        }
    });
});

function resetSearch() {
    document.getElementById('searchInput').value = '';
    searchFood();
}

function loadProducts() {
    let data = supermarketService.getProducts();
    products.value = data;
    resultProducts.value = data;
}

function addToFridge(product) {
    let inputQte = document.getElementById(product.id);
    const qte = parseInt(inputQte.value);
    if (inputQte.value == "" || qte < 1) {
        console.error('Quantité invalide');
        confirmedMessage.text = 'Mauvaise quantité';
        confirmedMessage.display = true;
        return;
    }

    supermarketService.addFoodToFridge(product, qte).then((data) => {
        if (data.status == 0) {
            console.error('Erreur lors de l\'ajout de l\'article:', product);
            return;
        }
        confirmedMessage.text = product.name + ' ajouté au frigo';
        confirmedMessage.display = true;
    }).catch((error) => {
        console.error('Erreur lors de l\'ajout de l\'article:', error);
    });
}

function searchFood() {
    let searchText = document.getElementById('searchInput').value;
    let result = products.value.filter((product) => {
        if (searchText == '') return true;
        return product.name.toLowerCase().includes(searchText.toLowerCase());
    });
    if (result.length == 0) {
        confirmedMessage.text = 'Aucun résultat trouvé';
        confirmedMessage.display = true;
    }
    resultProducts.value = result;
}

</script>

<style scoped>
.supermarket-list {
    max-height: 600px;
    overflow-y: auto;
}
</style>