<template>
  <div class="intro_wrap">
		<div class="logo">
			<img src="../../assets/img/br-logo.png">
		</div>
	</div>
   
</template>

<script>

import CommonUtil from '@/common/commonUtil.js';

export default {
  name: "intro",
  data() {
    return {

    };
  },

	mounted() {
		setTimeout(()=> {
			this.$router.push('/login');
		}, 2000)
  },
  
  computed: {
   
  },

  watch:{

  },

  methods: {

  },
  
};
</script>

<style scoped>
.intro_wrap{
	background-image: url("../../assets/img/backImg03.png");
	height: 100vh;
	text-align: center;
	background-repeat: no-repeat;
	background-size: contain;
	background-size : 100% 100%;
}

img{
	margin-top: 60%;
}

</style>
