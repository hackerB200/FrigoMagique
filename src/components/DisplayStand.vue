<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-card class=" mx-auto" color="tertiary">
                    <v-card-title>Produits disponibles</v-card-title>
                    <v-container class="supermarket-list">
                        <v-row>
                            <v-col v-for="product in products" :key="product.id" cols="12" sm="6" md="4" lg="3">
                                <v-card outlined class="pt-5">
                                    <v-img :src="product.photo" height="150px"></v-img>
                                    <v-card-title>{{ product.name }}</v-card-title>
                                    <v-card-subtitle>
                                        <v-number-input :id="'' + product.id" :rules="required" :min="1" :max="20"
                                            control-variant="split" label="Quantité" :model-value="1"></v-number-input>
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
                    Close
                </v-btn>
            </template>
        </v-snackbar>
    </v-container>
</template>

<script setup>
import { onMounted, reactive } from 'vue';

import supermarket from '@/sevices/supermarket.js';

const supermarketService = new supermarket();
let products = reactive([]);
let required = [value => !!value || 'Champ requis'];
let confirmedMessage = reactive({ text: '', display: false });


onMounted(() => {
    loadProducts();
});

function loadProducts() {
    products = supermarketService.getProducts();
}

function addToFridge(product) {
    let inputQte = document.getElementById(product.id);
    const qte = parseInt(inputQte.value);
    if (qte < 1) {
        console.error('Quantité invalide');
        return;
    }

    supermarketService.addFoodToFridge(product, qte).then((data) => {
        if (data.status == 0) {
            console.error('Erreur lors de l\'ajout de l\'article:', product);
            return;
        }
        confirmedMessage.text = product.name + ' ajouté au frigo';
        confirmedMessage.display = true;
        inputQte.value = 1;
    }).catch((error) => {
        console.error('Erreur lors de l\'ajout de l\'article:', error);
    });
}

</script>

<style scoped>
.supermarket-list {
    max-height: 600px;
    overflow-y: auto;
}
</style>