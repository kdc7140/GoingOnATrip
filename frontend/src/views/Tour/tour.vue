<template>
  <div class="contents">
    <div class="btn-box">
      <div class="top-txt">
        <h3>지역을 선택해주세요</h3>
        <span>선택한 지역에서 진행중인 행사정보를 확인할 수 있어요</span>
        <p v-show="!pageDepth" @click="pageDepth=true">지역선택으로 돌아가기 > </p>
      </div>
      
      <div class="top-btn-box" v-show="pageDepth">
        <div>
          <button @click="getSigunguCode(1)">서울</button>
          <button @click="getSigunguCode(2)">인천</button>
          <button @click="getSigunguCode(3)">대전</button>
        </div>
        <div>
          <button @click="getSigunguCode(4)">대구</button>
          <button @click="getSigunguCode(5)">광주</button>
          <button @click="getSigunguCode(7)">울산</button>
        </div>
        <div>
          <button @click="getSigunguCode(6)">부산</button>
        </div>
      </div>

      <div class="bottom-btn-box" v-show="pageDepth">
        <div>
          <button @click="getSigunguCode(31)">경기도</button>
          <button @click="getSigunguCode(32)">강원도</button>
          <button @click="getSigunguCode(33)">충청북도</button>
        </div>
        <div>
          <button @click="getSigunguCode(34)">충청남도</button>
          <button @click="getSigunguCode(35)">경상북도</button>
          <button @click="getSigunguCode(36)">경상남도</button>
        </div>
        <div>
          <button @click="getSigunguCode(37)">전라북도</button>
          <button @click="getSigunguCode(38)">전라남도</button>
          <button @click="getSigunguCode(39)">제주도</button>
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
            <button @click="goTourInfo(item.code)" :key="item.code">{{ item.name }}</button>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tourInfo",
  data(){
    return{
      pageDepth : true,
      sigunguArr: [],
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

      this.sigunguArr = rst.response.body.items.item;
    },

    goTourInfo(code){
      this.$router.push({
        path: '/tourLocation',
        query:{
          areaCode : code,
        }
      });
    },
    
  }
}
</script>

<style>
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