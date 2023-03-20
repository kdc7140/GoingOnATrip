<template>
  <div class="content">
    <div class="scrollBox">
      <input class="main-search" placeholder="검색어를 입력하세요.">
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
        <p>오늘의 여행정보</p>
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
.scrollBox{
  width:100%;
  height: 100%;
  position: relative;
}
.scrollBox::before{
  /*background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.0) 5%,
    rgba(20, 20, 20, 0.2) 10%,
    rgba(20, 20, 20, 0.5) 15%,
    rgba(20, 20, 20, 0) 20%,
    rgba(20, 20, 20, 0) 100%
  ), url("../../assets/img/main-back2.png");*/
  background-image: url("../../assets/img/main-back2.png");
  background-repeat: no-repeat;
  background-size : 100%;
  position: absolute;
  width: 100%;
  height: 100%;
  content: '';
  opacity:0.7;
}
.main-search{
  background-color: white;
  opacity: 0.7;
  margin: 7%;
  border: 1px solid #efefef;
  height:3vh;
  width:70%
}
.menuBox{
  position: relative;
  text-align: center;
  height: 22vh;
  /*background: #3984db;*/
  background: white;
  margin: 6% 6% 6% 6%;
  border-radius: 20px;
  padding: 3% 0 3% 0;
  box-shadow: 1px 3px 3px grey;
  
}
.menuBox-Line{
  height: 50%;
  display: flex;
  justify-content: space-between;
  padding: 0 7vw 0 7vw;
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
  box-shadow: 1px 1px 4px grey;
}
.menuBox-Line span{
  display: block;
  font-size: .8rem;
  /*color: white;*/
  color: black;
  /*font-weight: bold;*/
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
  position: relative;
}

</style>
