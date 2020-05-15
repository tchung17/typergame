<template>
    <el-select v-model="options.value" @change="changeDifficulty(options.value)" placeholder="Select Difficulty">
        <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        :disabled="item.disabled"
        >
        </el-option>
    </el-select>
</template>

<script>
    import { mapActions } from 'vuex';
    export default {
        name: "DifficultySelector",
        data() {
            return {
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
            ...mapActions([
                'changeDifficulty'
            ])
        },
    }
</script>

<style scoped>

</style>