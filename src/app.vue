<template>
    <v-app id="app">
        <app-nav-bar></app-nav-bar>
        <v-container
            class="pa-2 ma-0"
            style="background-color: #e9eced;max-width: 100%"
        >
            <v-content transition="slide-x-transition">
                <router-view></router-view>
            </v-content>
        </v-container>
    </v-app>
</template>

<script>
import AppNavBar from '@/components/app_nav_bar';

export default {
    name: 'App',
    components: {
        AppNavBar
    }
};
</script>
.theme--light.v-text-field--outline:not(.v-input--is-focused):not(.v-input--has-state)>.v-input__control>.v-input__slot:hover{
border-width: 1px; border-style: solid; border-color: #6fbd44;
<style></style>
