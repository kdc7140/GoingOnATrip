<template>
  <div class="content">
    <div class="scrollBox">
      <div class="menuBox">
        <div class="menuBox-Line">
          <div><button class="btn-main-ico hotel"></button><span>숙소</span></div>
          <div><button class="btn-main-ico tour"></button><span>관광</span></div>
          <div><button class="btn-main-ico map"></button><span>지도</span></div>
        </div>
        <div class="menuBox-Line">
          <div><button class="btn-main-ico hotel"></button><span>숙소</span></div>
          <div><button class="btn-main-ico tour"></button><span>관광</span></div>
          <div><button class="btn-main-ico map"></button><span>지도</span></div>
        </div>
      </div>

      <div class="mainBox">
        <p>여행정보</p>
        <img src="@/assets/img/main-img.png">
      </div>

      
    </div>
		
	</div>
</template>

<script>


export default {
  name: "mainBoard",
  data() {
    return {

    };
  },

	mounted() {

  },
  
  computed: {
   
  },

  watch:{

  },

  methods: {

  },
  
};
</script>

<style scoped>
.menuBox{
  text-align: center;
  height: 25vh;
  /* width:80%; */
  background: #3984db;
  margin: 10%;
  border-radius: 30px;
  padding: 3% 0 3% 0;
}
.menuBox-Line{
  height: 50%;
  display: flex;
  justify-content: space-between;
  padding: 0 5vw 0 5vw;
}
.menuBox-Line > div{
  display: inline-block;
  height: 100%;
}
.menuBox-Line button{
  display: inline-block;
  background-color: white;
  border: 1px solid #efefef;
  border-radius: 30px;
  width: 3rem;
  height: 60%;
  margin: .5rem .8rem 0.3rem .8rem;
  padding: 3% 0 3% 0;
}
.menuBox-Line span{
  display: block;
  font-size: .8rem;
  color: white;
  font-weight: bold;
}

.menuBox-Line .hotel{
  background-image: url("../../assets/img/ico-hotel.png");
  background-size : 100% 100%;
}
.menuBox-Line .tour{
  background-image: url("../../assets/img/ico-tour.png");
  background-size : 100% 100%;
}
.menuBox-Line .map{
  background-image: url("../../assets/img/ico-map.png");
  background-size : 100% 100%;
}
.mainBox{
  margin: 10%;
}

.mainBox img{
  width: 100%;
}

</style>
