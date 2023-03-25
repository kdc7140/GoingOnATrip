<template>
  <div class="header">
      <header>
          <button type="button" class="btn-first back" v-if="$route.name != 'main'" @click="back">이전화면</button>
          <span>{{ $route.name }}</span>
          <!-- <button type="button" class="btn-last menu" @click="isSideMenuOn = true">메뉴</button> -->
          <!--<button type="button" class="btn-last close">닫기</button>-->
      </header>
      <!-- header에서 btn-first 버튼이 없는 경우 class first로 분기 -->
      <!-- <h1>{{ $route.name }}</h1> -->
      <side-menu v-if="isSideMenuOn" @close="isSideMenuOn = false"></side-menu>
  </div>
</template>

<script>
import EventBus from "@/common/EventBus";
import SideMenu from "@/components/layout/SideMenu";

export default {
  name: "Header",
  components: { SideMenu },
  props: {
  },
  data() {
    return {
      isSideMenuOn: false,
      title : "",
    };
  },
  methods: {
    reloadChart(){
      EventBus.$emit('loadChartRelease');
      
      if(isMorpheus()){
        M.pop.instance('갱신되었습니다.');
      }else{
        this.$alert('갱신되었습니다.');
      }
    },
    back() {
      this.$router.go(-1);
    },
  },
  watch: {
    
  },
  mounted() {
    console.log(this.$route.name);
  }
};
</script>
<style>
.btn-first{
  background-position: right center;
}
h2{
  margin: 0;
  
}
</style>
