<template> 
    <main>
        <router-view></router-view>
        <v-footer></v-footer>
    </main>     
</template>

<script>
    import footer from './component/nav/footer.vue';
    export default{
        components:{
            'v-footer':footer
        }
    } 
</script>

<style>
    *{
        margin: 0px;
        padding: 0px;
        list-style: none;
    }
</style>