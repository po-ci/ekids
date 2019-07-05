<template>
    <v-container fluid>
        <v-slide-y-transition mode="out-in">
            <v-tabs
                    v-model="active"
                    color="indigo"
                    dark
                    slider-color="yellow"
                    :show-arrows="true"
            >
                <v-tabs-slider color="yellow"></v-tabs-slider>
                <v-tab key="0" ripple>Learn</v-tab>
                <v-tab-item key="0">
                    <learn
                            :category="category"
                            :words="getCategoryVocabularyList(category)"
                            :enName="enName"
                            :esName="esName"
                            :enTitle="enTitle"
                            :esTitle="esTitle"
                            :fab="fab"
                            :textEnable="textEnable"
                    >
                    </learn>
                </v-tab-item>
            </v-tabs>
        </v-slide-y-transition>
    </v-container>
</template>

<script>

    import MiximPages from './MixinPages'
    import Learn from '../components/Vocabulary/Learn'
    import {mapGetters} from 'vuex'

    export default {
        name: "Vocabulary",
        components: {Learn},
        props: {
            category: {type: String, default: "asd"}
        },
        mixins: [MiximPages],
        computed: {
            ...mapGetters([
                'getCategoryVocabularyList'
            ]),

        },
        data: function () {
            return {
                active: 0,
                fab: false,
                textEnable: false,
                img: true,
                enName: "ggggg",
                esName: "xxxxx",
                enTitle: "eeeee",
                esTitle: "yyyyy",
            }
        }

    }
</script>

<style scoped>

</style>