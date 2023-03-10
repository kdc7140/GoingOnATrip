<template>
  <div id="app">
    <TheLayout :scrollTop="scrollTop">
      <CommonPopup></CommonPopup>
      <router-view @changeHeader="changeHeader"/>
    </TheLayout>
  </div>
</template>

<script>

import TheLayout from "@/layouts/TheLayout";
import CommonPopup from "@/components/layout/CommonPopup";

export default {
  name: 'App',
  components: { TheLayout, CommonPopup },
  data() {
    return {
      scrollTop : 0,
    };
  },
  methods : {
    changeHeader(scroll){
      this.scrollTop = scroll;
    }
  }
};
</script>

<style scoped>

</style>
