<template>
    <div>
        <div class="end-game-container" v-if="getLose">Game Over! You lost but your final score was {{ getScore }} on {{ getDifficulty }} </div>
        <div class="end-game-container" v-else-if="getWin">You win! Your final score was {{ getScore }} on {{ getDifficulty }} </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: 'WinLose',
    computed: {
        ...mapGetters([
            'getLose',
            'getWin',
            'getDifficulty',
            'getScore'
        ])
    },
}
</script>

<style scoped>

</style>