<template>
    <div class="row vh-100 bg">
        <div class="col-12 p-0">
            <div class="bg-left">
                <img src="../assets/Path.svg" class="w-100" alt="">
            </div>
            <div class="container">
                <HomeContent></HomeContent>
            </div>
        </div>
    </div>
</template>

<script>
    import HomeContent from "../components/HomeContent";
    export default {
        name: "HomeSecurity",
        components: {HomeContent}
    }
</script>

<style scoped>

</style>