<template>
  <div class="content">
    <div class="scrollBox">
			<div class="main-top-img">
				<swiper :options="swiperStoreOption">
					<swiper-slide><img src="@/assets/img/main-seoul.png"></swiper-slide>
					<swiper-slide><img src="@/assets/img/main-gyungju.png"></swiper-slide>
					<swiper-slide><img src="@/assets/img/main-junju.png"></swiper-slide>
					<swiper-slide><img src="@/assets/img/main-busan.png"></swiper-slide>
					<swiper-slide><img src="@/assets/img/main-gapyung.png"></swiper-slide>
					<div class="swiper-store-pagination swiper-pagination" slot="pagination"></div>
				</swiper>
			</div>

      <div class="menuBox">
        <div class="menuBox-Line">
          <div><button class="btn-main-ico hotel2"></button><span>숙소</span></div>
          <div><button class="btn-main-ico tour2"></button><span>관광</span></div>
          <div><button class="btn-main-ico map2"></button><span>지도</span></div>
					<div><button class="btn-main-ico car2"></button><span>지도</span></div>
        </div>
        <div class="menuBox-Line">
          <div><button class="btn-main-ico hotel"></button><span>숙소</span></div>
          <div><button class="btn-main-ico tour"></button><span>관광</span></div>
          <div><button class="btn-main-ico map"></button><span>지도</span></div>
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

import 'swiper/css/swiper.css'
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'

export default {
  name: "mainBoard",
	components: {
		Swiper,
		SwiperSlide,
	},
	directives:{
		swiper: directive
	},
  data() {
    return {
      swiperStoreOption: {
        slidesPerView: 'auto',
        spaceBetween: 0, 
        centerInsufficientSlides: true,
				autoplay:{
					delay:3000,
					disableOnInteraction: false,
				},
        pagination: {
					el: '.swiper-store-pagination',
					clickable: true
				},
      },
    };
  },

	mounted() {
    this.callTourInfo();
  },
  
  computed: {
   
  },

  watch:{

  },

  methods: {

    async callTourInfo(){
      let rst = await this.$MNetSend({
        url: 'KorService1/areaCode1?numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=testApp&_type=json&serviceKey=rgXZ3rOUIYxsqr5KQHmmbdeuK1GLbBsVEPVgsPs1BainOEzB%2Fb4SJAwSAwSmOptsTZGS%2FftcnUAxM%2FKFjW1EXw%3D%3D',
      });

      console.log(rst);
    }

  },
  
};
</script>

<style scoped>
.scrollBox{
  width:100%;
  height: 100%;
  position: relative;
}
.main-top-img img{
  width: 100%;
	height: 13rem;
}
.main-search{
  background-color: white;
  opacity: 0.7;
  margin: 5%;
  border: 1px solid #efefef;
  height:4vh;
  width:70%
}
.menuBox{
  position: relative;
  text-align: center;
  height: 10rem;
  /*margin: 6%;*/
  padding: 3% 0 3% 0;
  
}
.menuBox-Line{
  height: 50%;
  display: flex;
  justify-content: space-between;
	padding-bottom: .8rem;
}
.menuBox-Line > div{
  display: inline-block;
  height: 100%;
}
.menuBox-Line button{
  display: inline-block;
  background-color: white;
  border: 1px solid #efefef;
  /*border-radius: 30px;*/
  width: 4rem;
  height: 70%;
  margin: .5rem .8rem 0.3rem .8rem;
  padding: 3% 0 3% 0;
  /*box-shadow: 1px 1px 4px grey;*/
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
.menuBox-Line .car{
  background-image: url("../../assets/img/ico-car.png");
  background-size : 100% 100%;
}

.menuBox-Line .hotel2{
  background-image: url("../../assets/img/ico-hotel2.png");
  background-size : 100% 100%;
}
.menuBox-Line .tour2{
  background-image: url("../../assets/img/ico-tour2.png");
  background-size : 100% 100%;
}
.menuBox-Line .map2{
  background-image: url("../../assets/img/ico-map2.png");
  background-size : 100% 100%;
}
.menuBox-Line .car2{
  background-image: url("../../assets/img/ico-car2.png");
  background-size : 100% 100%;
}
.mainBox{
  margin: 10%;
}

.mainBox img{
  width: 100%;
  position: relative;
}
.swiper-pagination-bullet{
	background: white;
	color:white;
}

</style>
