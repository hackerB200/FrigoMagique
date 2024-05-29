import Food from "@/models/Food";
import { reactive } from "vue";

export default class supermarket {

    products = reactive([]);

    constructor() {
        this.getSupermarketProducts();
    }

    getProducts() {
        return this.products;
    }

    // Récupère les produits du supermarché (fichier json)
    getSupermarketProducts () {
        // fetch('https://hackerb200.github.io/FrigoMagique/public/supermarket.json')
        // fetch('/FrigoMagique/public/supermarket.json')
        fetch('https://hackerb200.github.io/Supermarket/supermarket.json')
            .then(response => response.json())
            .then(data => {
                for (let product of data) {
                    this.products.push(new Food(product));
                }
            })
            .catch(error => {
                console.error('Erreur lors du chargement des produits:', error);
            });
    }

    // Ajoute un produit au frigo
    async addFoodToFridge(food, qte) {
        return fetch('https://webmmi.iut-tlse3.fr/~pecatte/frigo/public/13/produits', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nom: food.name ? food.name : food.nom,
                qte: qte,
                photo: food.photo
            })
        })
        .then(response => response.json())
    }
    
}