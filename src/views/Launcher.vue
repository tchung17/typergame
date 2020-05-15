<template>
    <div class="container">
        <el-select v-model="options.value" @change="changeDifficulty(options.value)" placeholder="Select Difficulty">
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            >
            </el-option>
        </el-select>
        <el-button type="primary" plain @click="startGame()">Start Game</el-button>
        <el-button type="primary" plain @click="goToLeaderboard()">Leaderboards</el-button>
    </div>
</template>

<script>
export default {
    name: 'Launcher',
    data() {
        return {
            difficulty: '',
            options: [{
                value: 'easy',
                label: 'easy',
                }, {
                value: 'medium',
                label: 'medium',
                }, {
                value: 'hard',
                label: 'hard'
                }],
                value: 'easy'
            }
        
    },
    methods: {
        startGame() {
            if (this.difficulty != '') {
                let game = { 
                time: 10, 
                difficulty: this.difficulty, 
                score: 0 
                };
                this.$router.push({ name: 'Game', params: { game }});
            }
        },
        goToLeaderboard() {
            this.$router.push({ name: 'Leaderboard'})
        },
        changeDifficulty(value) {
            this.difficulty = value;
        }
    }
}
</script>

<style scoped>
.container{
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>