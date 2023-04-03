<template>
  <div class="contents">
    <div>여행정보</div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      festivalData : [],
      areaCode: '',
    }
  },
  mounted(){
    console.log('지역 행사 정보');
    const { areaCode } = this.$route.query;
    this.areaCode = areaCode;
    this.callTourInfo();
  },
  methods:{
    async callTourInfo(){
      console.log(this.areaCode);
      let rst = await this.$MNetSend({
        url: `KorService1/searchFestival1?numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=GOAT&_type=json&arrange=Q&eventStartDate=20230301&eventEndDate=20230331&areaCode=${this.areaCode}&${this.getServiceKey()}`,
      });

      console.log(rst);

			this.festivalData = rst.response.body.items.item;
    },
  }
}
</script>

<style>

</style>