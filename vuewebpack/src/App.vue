<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    //用參數方式寫api比較好
    const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products`;
    this.$http.get(api).then(response => {
      console.log(response.data);
    });
  }
};
</script>

<style lang="scss">
@import "./assets/all";
</style>
