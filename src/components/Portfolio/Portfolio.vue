<template>
    <div>
        <app-stock v-for="stock in stocks" :stock="stock"></app-stock>
    </div>
</template>

<script>
 import {mapGetters} from 'vuex';
 import Stock from './Stock';
  export default {
    name: "portfolio",
    computed: {
      ...mapGetters({
        stocks:'stockPortfolio'
      })
    },
    components: {
      appStock: Stock
    },
  }
</script>

<style scoped>

</style>