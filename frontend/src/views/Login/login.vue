<template>
  <div>
		<h1>Sample Page</h1>
    <button @click="apiTest">API 통신 테스트 type1</button><br/><br/>

  </div>
   
</template>

<script>

import CommonUtil from '@/common/commonUtil.js';

export default {
  name: "Example",
  data() {
    return {
      openActive : false,
      testData : 0,
    };
  },
  
  computed: {
   
  },

  watch:{

  },

  methods: {

    async apiTest(){
			console.log(rst);
    },

  },

  mounted() {

  },
};
</script>

<style>

</style>
