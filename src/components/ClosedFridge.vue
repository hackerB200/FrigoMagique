<template>
    <v-row justify="center">
        <v-col cols="12" md="8">
            <v-card class="fridge-card mx-auto rounded-xl" color="info">

                <!-- Intérieur du frigo -->
                <div class="pa-5">
                    <div class="fridge-header">
                        <v-card-title>
                            <span class="text-h4">Mon Frigo</span>
                        </v-card-title>
                        <v-card class="fridge-handle round-xl mt-3" color="primary"></v-card>
                    </div>
                    <v-divider :thickness="4" color="primary" class="border-opacity-100 divider"></v-divider>
                </div>

                <!-- Porte -->
                <router-link :to="'/Fridge'">
                    <v-card class="fridge-handle round-xl mr-5 mt-5" color="primary"></v-card>
                    <v-row justify="center">
                        <v-col cols="12" md="8">
                            <v-card height="600px" width="400px" class="mt-15" color="info" variant="flat">
                                <v-card-text class="text-h3">Ouvrir mon frigo</v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>
                </router-link>

            </v-card>
        </v-col>
    </v-row>
</template>

<script setup>

</script>

<style scoped>
.fridge-card {
    position: relative;
    width: 700px;
    height: 900px;
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

.divider {
    margin-bottom: 20px;
}
</style>