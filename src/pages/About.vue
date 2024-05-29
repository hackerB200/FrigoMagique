<template>
	<v-card width="80%" class="mx-auto border-md border-accent border-opacity-75 rounded-xl">
		<v-sheet width="100%" color="#c64646" class="pb-5">
			<v-card-title class="text-h4">A propos</v-card-title>
			<v-card-subtitle class="text-h5">Application de frigo par Eva Tubia</v-card-subtitle>
		</v-sheet>

		<v-card-text>
			<v-container>
				<span class="text-h6">Consignes</span>
				<v-list lines="two">
					<v-list-item>
						<v-list-item-title>1. "Afficher le contenu du frigo"</v-list-item-title>
						<v-list-item-subtitle>Disponible sur la page du frigo :
							<v-btn size="x-small" color="accent" to="/Fridge" variant="text">Aller au frigo</v-btn>
						</v-list-item-subtitle>
					</v-list-item>

					<v-list-item>
						<v-list-item-title>2. "Ajouter un nouveau produit au frigo"</v-list-item-title>
						<v-list-item-subtitle>
							Sur la page du Supermarché en cliquant sur "Acheter" sur le produit souhaité
							<v-btn size="x-small" color="warning" to="/Supermarket" variant="text">
								Aller au Supermarché
							</v-btn>
						</v-list-item-subtitle>
					</v-list-item>

					<v-list-item>
						<v-list-item-title>3. "Supprimer un produit du frigo"</v-list-item-title>
						<v-list-item-subtitle>
							Sur la page du frigo en cliquant sur "Supprimer" sur le produit souhaité
						</v-list-item-subtitle>
					</v-list-item>

					<v-list-item>
						<v-list-item-title>4. "Ajouter 1 à la qte d'un produit présent dans le
							frigo"</v-list-item-title>
						<v-list-item-subtitle>
							Sur la page du Supermarché en cliquant sur "Acheter" sur un produit déjà dans notre frigo
						</v-list-item-subtitle>
					</v-list-item>

					<v-list-item>
						<v-list-item-title>5. "Supprimer 1 à la qte d'un produit présent dans le
							frigo"</v-list-item-title>
						<v-list-item-subtitle>
							Sur la page du frigo en cliquant sur "Manger" sur le produit souhaité
						</v-list-item-subtitle>
					</v-list-item>

					<v-list-item>
						<v-list-item-title>6. "Rechercher des produits"</v-list-item-title>
						<v-list-item-subtitle>
							Sur la page du frigo en utilisant la barre de recherche avancée, qui permet de chercher
							seulement des produits qui existent dans le frigo
						</v-list-item-subtitle>
					</v-list-item>
				</v-list>

				<v-divider class="ma-2"></v-divider>
				<span class="text-h6">Autres fonctionnalités principales</span>
				<v-list lines="two">
					<v-list-item>
						<v-list-item-title>1. Vider le frigo en une fois</v-list-item-title>
						<v-list-item-subtitle>
							Sur la page frigo en cliquant sur "Tout manger" pour supprimer tous les produits du frigo
						</v-list-item-subtitle>
					</v-list-item>

					<v-list-item>
						<v-list-item-title>2. Courses automatiques aléatoires</v-list-item-title>
						<v-list-item-subtitle>
							Sur la page du Supermarché en cliquant sur "Lancer le sort ABRAKADACOURSES" pour ajouter
							des produits aléatoires dans le frigo
						</v-list-item-subtitle>
					</v-list-item>

					<v-list-item>
						<v-list-item-title>3. Recherche de produits dans le supermarché</v-list-item-title>
						<v-list-item-subtitle>
							Sur la page du supermarché en cherchant un nom dans la barre de recherche
						</v-list-item-subtitle>
					</v-list-item>
				</v-list>
			</v-container>
		</v-card-text>
	</v-card>
</template>
