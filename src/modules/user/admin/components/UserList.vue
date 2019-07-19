<template>
    <div>
        <v-card class="elevation-6">

            <v-card-title>
                <v-layout>
                    <v-flex class="text-xs-center"><h2>Usuarios</h2></v-flex>
                </v-layout>
            </v-card-title>

            <v-card-text>
                <v-layout row wrap>
                    <v-flex md6 xs12 class="offset-md6">
                        <v-text-field
                                v-model="search"
                                append-icon="search"
                                label="Search"
                                single-line
                                hide-details
                                class="pa-0 px-2"
                        ></v-text-field>
                    </v-flex>
                </v-layout>
                <v-data-table
                        class="mt-3"
                        :headers="headers"
                        :items="users"
                        :search="search"
                        :expand="expand"
                        :loading="loadingUsers">

                    <template slot="no-data">

                        <div v-if=""
                             color="info"
                             outline
                             class="text-xs-center">
                            Cargando usuarios
                        </div>

                        <div v-if="false"
                             outline
                             color="info">
                            Sin datos
                        </div>

                    </template>

                    <template slot="items" slot-scope="props">
                        <tr @click="props.expanded = !props.expanded">

                            <td>
                                <v-avatar size="36px">
                                    <img :src="props.item.avatarurl?props.item.avatarurl:src" />
                                </v-avatar>
                            </td>

                            <!--NAME-->
                            <td>{{ props.item.name }}</td>

                            <!--USERNAME-->
                            <td>{{ props.item.username}}</td>

                            <!--EMAIL-->
                            <td>{{ props.item.email}}</td>

                            <!--ACTIVE-->
                            <td v-if="props.item.active == 1">
                                <v-icon color="success">check_circle</v-icon>
                            </td>
                            <td v-else>
                                <v-icon color="error">highlight_off</v-icon>
                            </td>

                            <!--ACTIONS-->
                            <td class="text-xs-center">
                                <v-icon small class="mr-2" @click="editUser(props.item)">edit</v-icon>
                            </td>

                        </tr>
                    </template>


                    <template v-slot:expand="props">
                        <v-card flat>
                            <v-card-text>
                                <v-layout row wrap>
                                    <v-flex xs12 class="text-xs-center">
                                        <span><b>Telefono: </b>{{ props.item.phone }} </span>
                                    </v-flex>
                                </v-layout>
                            </v-card-text>
                        </v-card>
                    </template>

                </v-data-table>
            </v-card-text>
        </v-card>


        <v-dialog :value="dialog" width="800" persistent>
            <user-create v-if="creating" v-on:closeDialog="dialog=false"></user-create>
        </v-dialog>


        <snackbar :message="flashMessage"/>

        <v-btn class="elevation-8" color="#D81B60" fab fixed bottom right dark @click="openCreate">
            <v-icon>add</v-icon>
        </v-btn>
    </div>

</template>

<script>
    import {mapActions, mapState} from 'vuex'
    import Snackbar from "./Snackbar";
    import UserCreate from "./UserCreate";

    export default {
        name: "UserCrud",
        components: {
            UserCreate,
            Snackbar
        },
        mounted: function () {
            this.fetchUsers()
        },
        data() {
            return {
                src: '/assets/user.jpg',
                headers: [
                    {text: '', value: 'img', sortable: false},
                    {text: 'Nombre', value: 'name'},
                    {text: 'Usuario', value: 'username'},
                    {text: 'Email', value: 'email'},
                    {text: 'Activo', value: 'active'},
                    {text: 'Aciones', value: 'acciones', sortable: false},
                ],
                search: '',
                dialog: false,
                creating:false,
                user: {},
                expand: false,
                username: false
            }
        },
        computed: {
            ...mapState({
                flashMessage: state => state.admin.flashMessage,
                loadingUsers: state => state.admin.loadingUsers,
                loadingRoles: state => state.admin.loadingRoles,
                users: state => state.admin.users,
            }),
        },
        methods: {
            ...mapActions(['fetchUsers']),
            openCreate() {
                this.creating = true
                this.dialog = true
            },

        },

    }
</script>

<style scoped>

</style>