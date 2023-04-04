<template>
  <div class="contents">
    <div class="event-box">
      <div class="top-txt">
        <h3 v-if="!CommonUtil.isEmpty(festivalData)">{{ selectArea.si }} {{ selectArea.gun }} 행사정보입니다</h3>
        <h3 v-if="CommonUtil.isEmpty(festivalData)">{{ selectArea.si }} {{ selectArea.gun }} 행사정보가 없습니다.</h3>
        <span v-if="!CommonUtil.isEmpty(festivalData)">관심있는 행사 정보를 찾아보세요</span>
      </div>
      <template v-for="(item,idx) in festivalData">
        <div class="event-list-box" :key="item.contentid">
          <img :src="item.firstimage2">
          <div class="event-info">
            <h4>{{ item.title }}</h4>
            <span>주소 : {{ item.addr1 }}</span>
            <span>일시 : {{ item.eventstartdate }}~{{ item.eventenddate }}</span>
            <span>전화 : {{ item.tel }}</span>
            <button>지도보기</button>
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
    console.log('지역 행사 정보');
    console.log(CommonUtil.isEmpty(this.festivalData));
    const { selectArea } = this.$route.query;
    this.selectArea = selectArea;
    this.areaCode = selectArea.areaCode;
    this.sigunguCode = selectArea.sigunguCode;
    this.callTourInfo();
  },
  methods:{
    async callTourInfo(){
      console.log(this.areaCode);
      let rst = await this.$MNetSend({
        url: `KorService1/searchFestival1?numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=GOAT&_type=json&arrange=Q&eventStartDate=20230301&eventEndDate=20230331&&areaCode=${this.areaCode}&sigunguCode=${this.sigunguCode}&${this.getServiceKey()}`,
      });

      console.log(rst);

			this.festivalData = rst.response.body.items.item;
    },
  }
}
</script>

<style>
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
  display: flex;
  border-bottom: 1px solid #bcbcbc;
  height: 12rem;
  padding: 1rem;
}
.event-list-box img{
  height: 12rem;
  width: 8rem;
}
.event-info{
  display: block;
  margin-left: 1rem;
}
.event-info h4{
  margin-top: .2rem;
  margin-bottom: 1rem;
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
}
</style>