<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12 class="pa-3">
                <v-card class="elevation-6">
                    <v-card-title>
                        <v-layout>
                            <v-flex class="text-xs-center"><h2>Usuarios</h2></v-flex>
                        </v-layout>

                    </v-card-title>
                </v-card>
            </v-flex>
            <v-flex xs12 class="pa-3">
                <v-card class="elevation-6">
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
                                :items="getUsers.users"
                                :search="search"
                                :expand="expand"
                                :loading="getUsersLoading">

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
                                        <v-avatar
                                                size="36px"
                                        >
                                            <img
                                                    :src="props.item.avatar?props.item.avatar.image:src"
                                                    alt="Avatar"
                                            >
                                        </v-avatar>
                                    </td>
                                    <td>{{ props.item.firstName }}</td>
                                    <td>{{ props.item.username}}</td>

                                    <td v-if="props.item.isActive == 1">
                                        <v-icon
                                                color="success">check_circle
                                        </v-icon>
                                    </td>
                                    <td v-else>
                                        <v-icon color="error">highlight_off</v-icon>
                                    </td>


                                    <!--       <td class="text-xs-center">
                                             {{props.item}}
                                           </td>-->

                                    <td class="text-xs-center">
                                        <v-icon
                                                small
                                                class="mr-2"
                                                @click="editUser(props.item)"
                                        >
                                            edit
                                        </v-icon>
                                    </td>
                                </tr>
                            </template>


                            <template v-slot:expand="props">
                                <v-card flat>
                                    <v-card-text>
                                        <v-layout row wrap>
                                            <v-flex xs12 class="text-xs-center">
                                                <span><b>Email: </b>{{ props.item.email }} </span>
                                                <span><b>Telefono: </b>{{ props.item.phone }} </span>
                                            </v-flex>
                                        </v-layout>
                                    </v-card-text>
                                </v-card>
                            </template>

                        </v-data-table>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
        <users-crud-dialog
                v-if="dialog"
                :user="user"
                :title="title"
                :open="dialog"
                :show-password="showPassword"
                :username-disable="username"
                @closeDialog="dialog = false"
        >
        </users-crud-dialog>


        <v-snackbar
                v-model="snackbar"
                :color="'success'"
                :timeout="4000"
        >
            {{getFlashMessage}}
            <v-btn
                    dark
                    flat
                    @click="snackbar = false"
            >
                <v-icon>close</v-icon>
            </v-btn>
        </v-snackbar>

        <v-btn class="elevation-8"
               color="#D81B60"
               fab
               fixed
               bottom
               right
               dark
               @click="openDialog">
            <v-icon>add</v-icon>
        </v-btn>
    </v-container>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    import UsersCrudDialog from './UsersCrudDialog'

    export default {
        name: "UserCrud",
        components: {
            UsersCrudDialog
        },
        mounted: function () {
            this.fetchAll()
        },
        data() {
            return {
                src: '/assets/user.jpg',
                headers: [
                    {text: '', value: 'img', sortable: false},
                    {text: 'Nombre', value: 'firstName'},
                    {text: 'Usuario', value: 'username'},
                    // {text: 'Email', value: 'email'},
                    {text: 'Activo', value: 'active'},
                    // {text: 'Telefono', value: 'phone'},
                    //  {text: 'Log', value: 'log', sortable: false},
                    {text: 'Aciones', value: 'acciones', sortable: false},
                ],
                search: '',
                dialog: false,
                user: {},
                title: null,
                showPassword: false,
                snackbar: false,
                expand: false,
                username: false
            }
        },
        computed: {
            ...mapGetters(['getUsers', 'getUsersLoading', 'getFlashMessage']),
            getSrc: function(image) {
                console.log(image)
                if (image) {
                    return image
                } else {
                    return this.src
                }
            },
        },
        methods: {
            ...mapActions(['fetchAll']),
            openDialog() {
                this.$store.commit('SET_ERROR_USER', [])
                this.username = false
                this.user = {}
                this.title = "Nuevo Usuario"
                this.showPassword = true
                this.dialog = true
            },
            editUser(userObject) {
                this.$store.commit('SET_ERROR_USER', [])
                this.username = true
                this.title = 'Editando Usuario'
                this.user = userObject
                this.showPassword = false
                this.dialog = true

            }
        },
        watch: {
            getFlashMessage: function (value) {
                if (value) {
                    this.snackbar = true
                }

            }
        }
    }
</script>

<style scoped>

</style>