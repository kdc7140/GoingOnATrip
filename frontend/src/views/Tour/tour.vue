<template>
    <div class="contents">
      <div class="top-line">원하는 정보를 찾아보세요.</div>
      <div class="menu-line">
        <select v-model="selectedItem" @change="selectedCode">
          <option v-for="(item, index) in selectList" :key="index" :value="item.value" >{{ item.name }}</option>
        </select>
        <select v-model="selectedItem" @change="selectedCode">
          <option v-for="(item, index) in selectList" :key="index" :value="item.value" >{{ item.name }}</option>
        </select>
        <select v-model="selectedItem" @change="selectedCode">
          <option v-for="(item, index) in selectList" :key="index" :value="item.value" >{{ item.name }}</option>
        </select>
        <button>검색</button>
      </div>
      <div class="btn-box">
        <div class="top-txt">
          <span>선택한 지역에서 진행중인 행사정보를 확인할 수 있어요</span>
          <p v-show="!pageDepth" @click="pageDepth=true">지역선택으로 돌아가기 > </p>
        </div>
        
        <div class="top-btn-box" v-show="pageDepth">
          <div>
            <button @click="getSigunguCode(1), selectArea.si='서울시'">서울</button>
            <button @click="getSigunguCode(2), selectArea.si='인천시'">인천</button>
            <button @click="getSigunguCode(3), selectArea.si='대전시'">대전</button>
          </div>
          <div>
            <button @click="getSigunguCode(4), selectArea.si='대구시'">대구</button>
            <button @click="getSigunguCode(5), selectArea.si='광주시'">광주</button>
            <button @click="getSigunguCode(7), selectArea.si='울산시'">울산</button>
          </div>
          <div>
            <button @click="getSigunguCode(6), selectArea.si='부산시'">부산</button>
          </div>
        </div>
  
        <div class="bottom-btn-box" v-show="pageDepth">
          <div>
            <button @click="getSigunguCode(31), selectArea.si='경기도'">경기도</button>
            <button @click="getSigunguCode(32), selectArea.si='강원도'">강원도</button>
            <button @click="getSigunguCode(33), selectArea.si='충북'">충청북도</button>
          </div>
          <div>
            <button @click="getSigunguCode(34), selectArea.si='충남'">충청남도</button>
            <button @click="getSigunguCode(35), selectArea.si='경북'">경상북도</button>
            <button @click="getSigunguCode(36), selectArea.si='경남'">경상남도</button>
          </div>
          <div>
            <button @click="getSigunguCode(37), selectArea.si='전북'">전라북도</button>
            <button @click="getSigunguCode(38), selectArea.si='전남'">전라남도</button>
            <button @click="getSigunguCode(39), selectArea.si='제주도'">제주도</button>
          </div>
        </div>
  
        <div class="sigungu-box" v-show="!pageDepth">
          <!--<template v-for="(item,idx) in sigunguArr">
            <div v-if="idx%3 == 0 || idx == sigunguArr.length-1" :key="idx">
              <button @click="goTourInfo(item.code)" :key="item.code">{{ item.name }}</button>
            </div>
          </template>-->
          <div>
            <template v-for="(item) in sigunguArr">
              <button @click="goTourInfo(item.code,item.name)" :key="item.code">{{ item.name }}</button>
            </template>
          </div>
        </div>
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
        selectArea: {
          si: '',
          gun: '',
          areaCode: '',
          sigunguCode: '',
        },
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
      }
    },
    mounted(){
      console.log('여행정보');
    },
    methods:{
      async getSigunguCode(code){
        let rst = await this.$MNetSend({
          url: `KorService1/areaCode1?numOfRows=30&MobileOS=ETC&MobileApp=GOAT&areaCode=${code}&_type=json&${this.getServiceKey()}`,
        });
  
        console.log(rst);
  
        this.pageDepth = false;
  
        this.selectArea.areaCode = code;
        this.sigunguArr = rst.response.body.items.item;
      },
  
      goTourInfo(code,name){
        console.log(code,name);
        this.selectArea.sigunguCode = code;
        this.selectArea.gun = name;
        this.$router.push({
          path: '/tourInfo',
          query:{
            selectArea : JSON.stringify(this.selectArea),
          }
        });
      },

      selectedCode(){
        console.log(this.selectedItem);
        // console.log(evt.target.value);
      }
      
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
  }
  .btn-box{
    padding: 1rem;  
  }
  
  .top-txt{
    text-align: center;
    margin-bottom: 2rem;
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
  .top-btn-box, .bottom-btn-box, .sigungu-box{
    margin: 1rem 1rem 2.5rem 1rem;
    justify-content: space-between;
    display: flex;
    flex-direction: column;
  }
  .btn-box button{
    border: 1px solid #efefef;
    border-radius: 10px;
    background: #4060d4;
    color:white;
    height: 2.6rem;
    width : 6.2rem;
    margin: .2rem;
    font-weight: bold;
  }
  </style>