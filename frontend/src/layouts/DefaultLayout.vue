<template>
  <div class="content-wrap" :class="[$route.meta.className]">
      
      <!-- scrollBox가 올라갔을때 stickyon / 내려갔을때 stickyoff  각각의 class 는 추가시 기존 클래스 삭제-->
      <Header v-if="$route.path != '/main'"></Header>
      <slot></slot>
      <Footer v-if="showYN()"></Footer>
  </div>
</template>

<script>
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
//import CommonUtil from '@/common/CommonUtil';

export default {
  name: "DefaultLayout",
  components: { Header, Footer },
  props: {
    scrollTop : {
      type: Number,
      default : 0
    },
  },
  data() {
    return {
      isChange: false,
    };
  },
  mounted(){
  },
  watch: {
    scrollTop(af,bf){
      if(af > bf){
        this.isChange = true;
      }
    }
  },
  computed : {
    //headerClass(){
    //  if(!this.isChange) return "";
    //  else{
    //    return this.scrollTop > 0 ? "stickyon" : "stickyoff"
    //  }
    //}
  },
  methods : {
    showYN(){
      if(this.$route.path != '/regMb' && this.$route.path != '/chpw'){
        return true;
      }else{
        return false;
      }
    }
  }
};
</script>
