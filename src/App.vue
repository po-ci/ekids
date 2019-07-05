<template>
    <v-app>
        <!--Menu Lateral-->
        <v-navigation-drawer
                persistent
                :mini-variant="miniVariant"
                :clipped="clipped"
                v-model="drawer"
                enable-resize-watcher
                fixed
                app
        >

            <my-name-is></my-name-is>
            <v-divider></v-divider>
            <stats class="pa-2"></stats>
            <v-divider></v-divider>
            <v-list dense>
                <template v-for="item in nav">
                    <v-layout
                            v-if="item.heading"
                            :key="item.heading"
                            row
                            align-center
                    >
                        <v-flex xs6>
                            <v-subheader v-if="item.heading">
                                {{ item.heading }}
                            </v-subheader>
                        </v-flex>
                        <v-flex xs6 class="text-xs-center">
                            <a href="#!" class="body-2 black--text">EDIT</a>
                        </v-flex>
                    </v-layout>
                    <v-list-group
                            v-else-if="item.children"
                            v-model="item.model"
                            :key="item.text"
                            :prepend-icon="item.model ? item.icon : item['icon-alt']"
                            append-icon=""
                    >
                        <v-list-tile slot="activator">
                            <v-list-tile-content>
                                <v-list-tile-title>
                                    {{ item.text }} / {{ item.esText }}
                                </v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                        <v-list-tile
                                v-for="(child, i) in item.children"
                                :key="i"
                                :to="child.link" exact
                        >
                            <v-list-tile-action v-if="child.icon">
                                <v-icon>{{ child.icon }}</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title>
                                    {{ item.text }} / {{ item.esText }}
                                </v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list-group>
                    <v-list-tile v-else :key="item.text" :to="item.link" exact>
                        <v-list-tile-action>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>
                                {{ item.text }} / {{ item.esText }}
                            </v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </template>
            </v-list>


        </v-navigation-drawer>


        <!--TOP Menu-->
        <v-toolbar
                app
                :clipped-left="clipped"
        >
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title v-text="title"></v-toolbar-title>
            <v-spacer></v-spacer>

            <v-btn icon to="/albums">
                <v-icon>layers</v-icon>
            </v-btn>

            <v-btn icon to="/">
                <v-icon>home</v-icon>
            </v-btn>

        </v-toolbar>


        <!--Contenido-->
        <v-content>
            <router-view></router-view>
        </v-content>


        <!--    <v-footer :fixed="fixed" app>
                <span>&copy; 2018 - ZfMetal</span>
            </v-footer>-->
    </v-app>
</template>

<script>
    import MyNameIs from './modules/app/components/MyNameIs.vue'
    import Stats from './modules/app/components/Stats.vue'
    import nav from './nav'

    export default {
        name: 'App',
        components: {
            MyNameIs, Stats
        },
        data() {
            return {
                nav: nav,
                clipped: false,
                drawer: false,
                fixed: false,
                miniVariant: false,
                right: true,
                rightDrawer: false,
                title: 'EKIDS'
            }
        }
    }
</script>
