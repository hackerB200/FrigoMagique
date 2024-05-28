<template>
	<v-icon color="warning" id="main-icon">mdi-cart-outline</v-icon>
	<span class="text-h4">Bienvenue au Supermarché</span>
	<display-stand></display-stand>
</template>

<script setup>
import DisplayStand from '../components/DisplayStand.vue';
</script>

<style scoped>
#main-icon {
	font-size: 60px;
	margin: 10px 15px;
}
</style>
