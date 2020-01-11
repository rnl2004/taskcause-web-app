<template>
    <span>
        <v-navigation-drawer
            app
            v-model="drawer"
            class="blue"
            dark
            disable-resize-watcher
        >
            <v-list>
                <template v-for="(item, index) in items">
                    <v-list-tile :key="index" :to="item.url">
                        <v-list-tile-content>
                            {{ item.title }}
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider :key="`divider-${index}`"></v-divider>
                </template>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar app color="blue darken-4" dark>
            <v-toolbar-side-icon
                class="hidden-md-and-up"
                @click="drawer = !drawer"
            ></v-toolbar-side-icon>
            <v-spacer class="hidden-md-and-up"></v-spacer>
            <router-link to="/">
                <v-toolbar-title>{{ appTitle }}</v-toolbar-title>
            </router-link>
            <v-btn flat class="hidden-sm-and-down nav-menu" to="/organization"
                >Organization</v-btn
            >
            <v-spacer class="hidden-sm-and-down"></v-spacer>
            <div v-if="true" class="hidden-sm-and-down">
                <v-btn flat to="/sign-in">SIGN IN</v-btn>
            </div>
        </v-toolbar>
    </span>
</template>

<script>
export default {
    name: 'AppNavigation',
    data() {
        return {
            appTitle: 'TaskCause App',
            drawer: false,
            items: [
                { title: 'Organization', url: '/organization' },
                { title: 'Sign In', url: '/sign-in' }
            ]
        };
    },
    computed: {
        isAuthenticated() {
            return true;
        }
    },
    methods: {
        logout() {
            this.$store.dispatch('userSignOut');
        }
    }
};
</script>

<style scoped>
a {
    color: white;
    text-decoration: none;
}
</style>
