<template>
    <div>
        <el-progress type="dashboard" :percentage="this.game.time" :color="colors"></el-progress>
    </div>
</template>

<script>
export default {
    name: 'indicator',
    props: [ 'game'],
    
}
</script>

<style scoped>

</style>