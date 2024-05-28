<template>
	<v-app>
		<!-- Barre d'outils -->
		<v-app-bar color="primary">
			<v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
			<v-toolbar-title class="text-h5">Mon Frigo</v-toolbar-title>

			<v-btn to="/" class="mr-3 pr-5">
				<template v-slot:prepend>
					<v-icon color="secondary" class="icon-nav" size="22">mdi-home</v-icon>
					Accueil
				</template>
			</v-btn>
			<v-btn to="/Fridge" class="mr-3 pr-5">
				<template v-slot:prepend>
					<img src="/favicon.ico" class="icon-nav">
					Frigo
				</template>
			</v-btn>
			<v-btn to="/Supermarket" class="mr-15 pr-5">
				<template v-slot:prepend>
					<v-icon color="warning" class="icon-nav" size="22">mdi-cart-outline</v-icon>
					Supermarché
				</template>
			</v-btn>
		</v-app-bar>

		<!-- Navigation latérale gauche -->
		<v-navigation-drawer app v-model="drawer" temporary>
			<v-list>
				<router-link to="/">
					<v-list-item class="item-nav">
						<template v-slot:prepend>
							<v-icon class="icon-nav" color="secondary">mdi-home</v-icon>
						</template>
						<v-list-item-title>Accueil</v-list-item-title>
					</v-list-item>
				</router-link>

				<router-link to="/Fridge">
					<v-list-item class="item-nav">
						<template v-slot:prepend>
							<v-icon><img src="/favicon.ico" class="icon-nav"></v-icon>
						</template>
						<v-list-item-title>Frigo</v-list-item-title>
					</v-list-item>
				</router-link>

				<router-link to="/Supermarket">
					<v-list-item class="item-nav">
						<template v-slot:prepend>
							<v-icon class="icon-nav" color="warning">mdi-cart-outline</v-icon>
						</template>
						<v-list-item-title>Supermarché</v-list-item-title>
					</v-list-item>
				</router-link>

				<router-link to="/About">
					<v-list-item class="item-nav">
						<template v-slot:prepend>
							<v-icon class="icon-nav" color="secondary">mdi-information</v-icon>
						</template>
						<v-list-item-title>À propos</v-list-item-title>
					</v-list-item>
				</router-link>
			</v-list>
		</v-navigation-drawer>

		<!-- Contenu principal -->
		<v-main>
			<v-container>
				<router-view></router-view>
			</v-container>
		</v-main>
	</v-app>
</template>

<script setup>
import { ref } from 'vue';
import router from './router';

const { $route } = router;
const drawer = ref(false);
</script>

<style>
.item-nav {
	display: flex;
	align-items: center;
	justify-content: flex-start;
}

.item-nav:hover {
	background-color: rgba(0, 0, 0, 0.1);
}

.icon-nav {
	margin: 5%;
	max-height: 23px;
}

a {
	text-decoration: none;
	color: inherit;
}
</style>
