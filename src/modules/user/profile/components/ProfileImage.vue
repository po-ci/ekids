<template>

    <v-card-text class="text-xs-center">
        <profile-avatar v-on:avatarClick="pickFile"></profile-avatar>


        <v-form ref="form" autocomplete="off" v-model="valid">
            <input
                    type="file"
                    style="display: none"
                    ref="img"
                    accept="image/*"
                    @change="onFilePicked"
            >

            <v-alert
                    :value="errors.img.length?true:false"
                    color="error"
                    icon="warning"
                    outline
            >
                <ul>
                    <li v-for="error in errors.img">
                        {{error}}
                    </li>
                </ul>
            </v-alert>

        </v-form>
    </v-card-text>

</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    import ProfileAvatar from './ProfileAvatar'

    export default {
        name: "ProfileImage",
        components: {ProfileAvatar},
        data: () => ({
            valid: true,
            imageName: null,
            errors: {
                img: []
            },
            img: null,
        }),
        computed: {
            ...mapGetters([
                'getMe',
                'isAuth',
                'getAuthLoading'
            ]),
        },
        methods: {
            ...mapActions(['avatarChange']),
            pickFile() {
                this.$refs.img.click()
            },
            resetValidation: function () {
                this.valid = true
                this.errors = {
                    img: []
                }
            },
            onFilePicked: function (e) {

                this.img = e.target.files[0]
                this.imageName = this.img

                this.resetValidation()

                if (this.$refs.form.validate()) {
                     this.avatarChange({id: this.getMe.id, avatar: this.img}).then((response) => {

                     })

                }
            },
        }
    }
</script>

<style scoped>

</style>