<template>
  <div class="content">
    <div class="scrollBox">
      <div class="menuBox">
        <div class="menuBox-Line">
          <button>여행</button>
          <button>여행</button>
          <button>여행</button>
        </div>
        <div class="menuBox-Line">
          <button>여행</button>
          <button>여행</button>
          <button>여행</button>
        </div>
      </div>

      <div class="mainBox">
        <p>여행정보</p>
      </div>

      
    </div>
		
	</div>
</template>

<script>


export default {
  name: "mainBoard",
  data() {
    return {

    };
  },

	mounted() {

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
.menuBox{
  text-align: center;
  height: 25vh;
  width:80%;
  background: #3984db;
  margin: 10%;
  border-radius: 30px;
}
.menuBox-Line{
  height: 50%;
}
.menuBox-Line > button{
  display: inline-block;
  background-color: white;
  border: 1px solid #efefef;
  border-radius: 30px;
  width: 4rem;
  height: 75%;
  margin: .5rem;
}
.menuBox-Line > div{
  display: inline-block;
  background-color: white;
  border-radius: 30px;
  width: 4rem;
  height: 100%;
  /*margin: .5rem;*/
}
.mainBox{
  margin: 10%;
}

</style>
