<template>
  <div class="hello">
   <a href="#" @click.prevent="signout">登出</a>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: 'welcome to',
    };
  },
  methods: {
    signout() {
      const api = `${process.env.APIPATH}/logout`;
      const vm = this;
      this.$http.post(api).then((response) => {
        console.log(response.data);
        //如果成功後畫面跳到登入畫面
        if (response.data.success) {
          vm.$router.push('/login');
        }
      });
    },
  },
};


</script>
