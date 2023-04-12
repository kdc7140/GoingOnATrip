<template>
    <div class="contents">
      <div class="event-box">
        <div class="top-txt">
          <h3 v-if="!CommonUtil.isEmpty(festivalData)">{{ selectArea.si }} {{ selectArea.gun }} 관광정보입니다</h3>
          <h3 v-if="CommonUtil.isEmpty(festivalData)">{{ selectArea.si }} {{ selectArea.gun }} 관광정보가 없습니다.</h3>
          <span v-if="!CommonUtil.isEmpty(festivalData)">관심있는 관광 정보를 찾아보세요</span>
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
  
  <script>
  
  import CommonUtil from '@/common/commonUtil';
  
  export default {
    data(){
      return{
        festivalData : [],
        areaCode: '',
        sigunguCode: '',
        selectArea : {},
      }
    },
    mounted(){
      console.log('지역 관광 정보');
      const { selectArea } = this.$route.query;
      this.selectArea = JSON.parse(selectArea);
      this.areaCode = this.selectArea.areaCode;
      this.sigunguCode = this.selectArea.sigunguCode;
      this.callTourInfo();
    },
    methods:{
      async callTourInfo(){
        console.log(this.areaCode);
        let rst = await this.$MNetSend({
          url: `KorService1/areaBasedList1?numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=GOAT&_type=json&arrange=Q&contentTypeId=12&areaCode=${this.areaCode}&sigunguCode=${this.sigunguCode}&${this.getServiceKey()}`,
          
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
      }
    }
  }
  </script>
  
  <style scoped>
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