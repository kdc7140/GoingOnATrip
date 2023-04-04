<template>
  <div class="contents">
    <div class="scrollBox">
			<div class="main-top-img">
				<swiper :options="swiperTopOption">
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
          <div @click="movePage('/hotel')"><button class="btn-main-ico hotel"></button><span>숙소</span></div>
          <div @click="movePage('/tour')"><button class="btn-main-ico tour"></button><span>여행</span></div>
          <div @click="movePage('/selectLoc')"><button class="btn-main-ico event"></button><span>행사</span></div>
					<div @click="movePage('/camping')"><button class="btn-main-ico camping"></button><span>캠핑</span></div>
        </div>
        <div class="menuBox-Line">
          <div @click="movePage('/pet')"><button class="btn-main-ico pet"></button><span>w.반려동물</span></div>
          <div @click="movePage('/rent')"><button class="btn-main-ico car"></button><span>렌트카</span></div>
          <div><button class="btn-main-ico map"></button><span>지도</span></div>
					<div><button class="btn-main-ico map"></button><span>지도</span></div>
        </div>
      </div>

      <div class="mainBox">
        <p>이달의 행사</p>
				<swiper :options="swiperFestivalOption">
					<template v-for="(item, idx) in festivalData">
						<swiper-slide :key="item.contentid" v-show='item.isOpen'><img :src="item.firstimage" @load="sildeView(item,idx)"></swiper-slide>
					</template>
					<div class="swiper-store-pagination swiper-pagination" slot="pagination"></div>
				</swiper>
      </div>

    </div>
		
	</div>
</template>

<script>

import 'swiper/css/swiper.css'
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import Vue from 'vue';


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
			festivalData: [],
      slideViewYN : 'Y',

			swiperFestivalOption:{
				slidesPerView: '1',
        spaceBetween: 10, 
        centerInsufficientSlides: true,
				feedmode : true,
			},
      swiperTopOption: {
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
    console.log(this.getServiceKey());
  },
  
  computed: {
   
  },

  watch:{

  },

  methods: {
    async callTourInfo(){
      let rst = await this.$MNetSend({
        url: `KorService1/searchFestival1?numOfRows=15&pageNo=1&MobileOS=ETC&MobileApp=GOAT&_type=json&arrange=Q&eventStartDate=20230301&eventEndDate=20230331&${this.getServiceKey()}`,
      });

      console.log(rst);

			this.festivalData = rst.response.body.items.item;

      this.festivalData.forEach((item, idx) => {
        Vue.set(item, 'isOpen', true);
      });
    },

    movePage(url){
      this.$router.push(url);
    },

    sildeView(item, idx){
      if(document.querySelectorAll('.mainBox .swiper-slide')[idx].offsetHeight > 450){
        Vue.set(item, 'isOpen', true);
      }else{
        Vue.set(item, 'isOpen', false);
      }
    }

  },
  
};
</script>

<style scoped>
.scrollBox{
  width:100%;
  height: 100%;
  position: relative;
	background-color: white;
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
	padding: 0rem 0.8rem 0rem 0.8rem;
}
.menuBox-Line > div{
  display: inline-block;
  height: 80%;
	border: 1px solid #efefef;
	border-radius: 30px;
	padding-bottom: .5rem;
	margin: .2rem;
	border-radius: 20px;
}
.menuBox-Line button{
  display: inline-block;
  background-color: white;
  border: 1px solid #ffffff;
  /*border-radius: 30px;*/
  width: 3rem;
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
.menuBox-Line .event{
  background-image: url("../../assets/img/ico-event.png");
  background-size : 100% 100%;
}
.menuBox-Line .camping{
  background-image: url("../../assets/img/ico-camping.png");
  background-size : 100% 100%;
}
.menuBox-Line .pet{
  background-image: url("../../assets/img/ico-pet.png");
  background-size : 100% 100%;
}
.menuBox-Line .car{
  background-image: url("../../assets/img/ico-car.png");
  background-size : 100% 100%;
}
.menuBox-Line .map{
  background-image: url("../../assets/img/ico-map.png");
  background-size : 100% 100%;
}




.mainBox{
  margin: 6%;
}

.mainBox img{
  width: 100%;
  position: relative;
}
.swiper-pagination-bullet{
	background: white;
	color:white;
}

.swiper-container {overflow: visible;}
/*.swiper-slide {opacity:0.4; transition:opacity 0.3s;}*/
.swiper-slide-active,
.swiper-slide-active + .swiper-slide,
.swiper-slide-active + .swiper-slide + .swiper-slide,
.swiper-slide-active + .swiper-slide + .swiper-slide + .swiper-slide {opacity:1}

</style>
