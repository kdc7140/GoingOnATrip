<template>
  <div class="footer">
    <footer>
      <button class="footer-first" @click="footerMovePage(1)">Home</button>
      <button class="footer-second" @click="footerMovePage(2)">Tour</button>
      <button class="footer-third" @click="footerMovePage(3)">Hetel</button>
      <button class="footer-last" @click="footerMovePage(4)">Setting</button>
    </footer>
  </div>
</template>

<script>

export default {
  name: "Footer",
  props: {
    footerStyle: {
      type: String,
      default: ""
    }
  },
  methods:{
    footerMovePage(idx){
      if(idx == 1){

      }else if(idx == 2){
        
      }else if(idx == 3){

      }else if(idx == 4){
        this.$router.push('/setting');
      }
    }
  }
};
</script>

<style>
footer{
  box-shadow: 3px 3px 7px grey;
  display: flex;
  justify-content: space-between;
  padding: 1% 6% 3% 6%;
}
.footer-first{
  background-image: url("../../assets/img/ico-home.png");
  background-size : 100% 100%;
  border: 1px solid #ffffff;
}
.footer-second{
  background-image: url("../../assets/img/ico-home.png");
  background-size : 100% 100%;
  border: 1px solid #ffffff;
}
.footer-third{
  background-image: url("../../assets/img/ico-home.png");
  background-size : 100% 100%;
  border: 1px solid #ffffff;
}
.footer-last{
  background-image: url("../../assets/img/ico-set.png");
  background-size : 100% 100%;
  border: 1px solid #ffffff;
  margin-top: 1%;
}
</style>
