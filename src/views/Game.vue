<template>
    <div>
        <game-interface v-bind="game"/>
        <Indicator v-bind="game"/>
        <div class="time-container">{{ this.game.game.time }}</div>
    </div>
</template>

<script>
import GameInterface from '../components/GameInterfaceNew.vue';
import Indicator from '../components/Indicator';
export default {
    name: 'Game',
    data() {
        return {
            game: this.$route.params,
        }
    },
    methods: {
    },
    components: {
        GameInterface,
        Indicator,
    },
    created () {
        console.log(this.game)
        if (this.game.game == null) {
            console.log('true');
            this.$router.push({name: 'Launcher'})
        }
    },
}
</script>

<style scoped>

</style>