<template>
  <div class="footer">
    <footer>
      <div> 
        <button class="footer-first" @click="footerMovePage(1)">Home</button>
        <span>홈</span>
      </div>
      <div> 
        <button class="footer-second" @click="footerMovePage(2)">Tour</button>
        <span>관광</span>
      </div>
      <div> 
        <button class="footer-third" @click="footerMovePage(3)">Map</button>
        <span>지도</span>
      </div>
      <div> 
        <button class="footer-last" @click="footerMovePage(4)">Setting</button>
        <span>세팅</span>
      </div>
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
        this.$router.push('/main');
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
footer span{
  display: block;
  text-align: center;
  font-size: .8rem;
  color: #7a7a7a;
}
.footer-first{
  background-image: url("../../assets/img/ico-home.png");
  background-size : 100% 100%;
  border: 1px solid #ffffff;
}
.footer-second{
  background-image: url("../../assets/img/ico-tour.png");
  background-size : 100% 100%;
  border: 1px solid #ffffff;
  background-color: white;
}
.footer-third{
  background-image: url("../../assets/img/ico-map.png");
  background-size : 100% 100%;
  border: 1px solid #ffffff;
}
.footer-last{
  background-image: url("../../assets/img/ico-set.png");
  background-size : 100% 100%;
  border: 1px solid #ffffff;
  /* margin-top: 1%; */
}
</style>
