<template>
    <div class="contents">
      
      <div class="menu-line">
        <select class="select-box" v-model="areaCode" @change="changeSi">
          <option v-for="(item, index) in siList" :key="index" :value="item.value" >{{ item.name }}</option>
        </select>
        <select class="select-box" v-model="sigunguCode" @change="changeGungu">
          <option v-for="(item, index) in gunGuList" :key="index" :value="item.value" >{{ item.name }}</option>
        </select>
        <select class="select-box" v-model="selectedItem" @change="selectedCode">
          <option v-for="(item, index) in selectList" :key="index" :value="item.value" >{{ item.name }}</option>
        </select>
        <button class="btn-search" @click="callTourInfo">검색</button>
      </div>
      <div class="top-line">지역을 선택해 여행정보를 확인해보세요.</div>
      <div class="event-box">
        <div class="top-txt">
          <span>선택한 지역의 정보입니다.</span>
          <p v-show="!pageDepth" @click="pageDepth=true">지역선택으로 돌아가기 > </p>
        </div>

        <template v-for="(item,idx) in festivalData">
          <div class="event-list-box" :key="item.contentid">
            <img :src="item.firstimage2">
            <div class="event-info">
              <h4>{{ item.title }}</h4>
              <button @click="viewMap(item)">지도보기</button>
              <span>주소 : {{ item.addr1 }}</span>
            </div>
          </div>
        </template>


      </div>
    </div>
  </template>
  
  <script scope>
  export default {
    name: "eventInfo",
    data(){
      return{
        pageDepth : true,
        sigunguArr: [],
        areaCode: '',
        sigunguCode: '',

        selectedSi: '',
        siList: [
          { name: "선택해주세요.", value: "" },
          { name: "서울특별시", value: "1" },
          { name: "인천광역시", value: "2" },
          { name: "대전광역시", value: "3" },
          { name: "대구광역시", value: "4" },
          { name: "광주광역시", value: "5" },
          { name: "울산광역시", value: "7" },
          { name: "부산광역시", value: "6" },
          { name: "경기도", value: "31" },
          { name: "강원도", value: "32" },
          { name: "충청북도", value: "33" },
          { name: "충청남도", value: "34" },
          { name: "경상북도", value: "35" },
          { name: "경상남도", value: "36" },
          { name: "전라북도", value: "37" },
          { name: "전라남도", value: "38" },
          { name: "제주도", value: "39" },
        ],

        selectedGunGu: '',
        gunGuList: [
          { name: "선택해주세요.", value: "" },
        ],

        selectedItem : "",
        // 12:관광지, 14:문화시설, 15:축제공연행사, 25:여행코스, 28:레포츠, 32:숙박, 38:쇼핑, 39:음식점
        selectList: [
          { name: "선택해주세요.", value: "" },
          { name: "관광지", value: "12" },
          { name: "문화시설", value: "14" },
          { name: "축제공연행사", value: "15" },
          { name: "여행코스", value: "25" },
          { name: "레포츠", value: "28" },
          { name: "쇼핑", value: "38" },
        ],

        festivalData : [],
      }
    },
    mounted(){
      console.log('여행정보');
    },
    methods:{
      //시군구 코드 조회
      async getSigunguCode(code){
        let rst = await this.$MNetSend({
          url: `KorService1/areaCode1?numOfRows=30&MobileOS=ETC&MobileApp=GOAT&areaCode=${code}&_type=json&${this.getServiceKey()}`,
        });
  
        console.log(rst);
        this.gunGuList = [{ name: "선택해주세요.", value: "" }];
        rst.response.body.items.item.forEach((item,idx) => {
          this.gunGuList.push({
            name: item.name, value: item.code
          });
        });
      },
      //시, 도 선택
      changeSi(){
        this.getSigunguCode(this.areaCode);
      },
      //군, 구 선택
      changeGungu(){
        if(this.areaCode === ""){
          this.$popAlert("시, 도를 선택해주세요.");
        }else{

        }
      },
      //카테고리 선택
      selectedCode(){
        console.log(this.selectedItem);
        // console.log(evt.target.value);
      },
      //여행정보 검색
      async callTourInfo(){
        console.log(this.areaCode);
        let rst = await this.$MNetSend({
          url: `KorService1/areaBasedList1?numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=GOAT&_type=json&arrange=Q&contentTypeId=${this.selectedItem}&areaCode=${this.areaCode}&sigunguCode=${this.sigunguCode}&${this.getServiceKey()}`,
          
        });
  
        console.log(rst);
        this.festivalData = rst.response.body.items.item;
      },
      viewMap(data){
        this.$router.push({
          path : '/eventMap',
          query:{
            eventInfo: data,
          }
        });
      },

    }
  }
  </script>
  
  <style>
  .top-line{
    text-align: center;
    background-color: #4060d4;
    color: white;
    font-size: .8rem;
    padding: .3rem;
    height: 1.3rem;
    display : flex;
    justify-content : center;
    align-items : center;
  }
  .menu-line{
    height: 2.5rem;
  }
  .select-box{
    border: 1px solid #efefef;
    height: 100%;
    width: 28%;
  }
  .btn-search{
    border: 1px solid #efefef;
    border-radius: 5px;
    background: #4060d4;
    color:white;
    height: 100%;
    width: 16%;
  }
  .event-box{
    padding: 1rem;
  }
  .top-txt{
    text-align: center;
    margin-bottom: 1rem;
  }
  .top-txt > h3{
    color:#4060d4;
    margin-bottom: .2rem;
  }
  .top-txt > span{
    font-size: .8rem;
    color:#b8b8b8;
  }
  .top-txt > p{
    font-size: .9rem;
  }

  .event-list-box{
    display: block;
    border-bottom: 1px solid #bcbcbc;
    height: auto;
    padding: 1rem;
  }
  .event-list-box img{
    height: 10rem;
    width: 20rem;
  }
  .event-info{
    display: block;
    margin-left: 1rem;
  }
  .event-info h4{
    /* margin-top: .2rem; */
    margin-right: 1rem;
    display: inline;
  }
  .event-info span{
    display: block;
    font-size: .8rem;
    margin-top: .3rem;
    margin-bottom: .3rem;
    color: #7a7a7a;
  }
  .event-info button{
    border: 1px solid #efefef;
    background: #4060d4;
    color:white;
    height: 2rem;
    width : 5rem;
    margin-top: .4rem;
    font-weight: bold;
    display: inline;
  }

  </style>