<template>
  <div class="contents">
    <img src="@/assets/img/chpw-logo2.png">
    <div class="change-box">
      <div class="info-box-line">
        <span>아이디<span>*</span></span>
        <input type="text" v-model="inputId" placeholder="아이디를 입력하세요">
      </div>
      <div class="info-box-line">
        <span>이름<span>*</span></span>
        <input type="password" v-model="inputName" placeholder="이름을 입력해주세요.">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "changePw",
  data() {
    return {
      inputId: '',
      inputName: '',
    };
  },
}
</script>

<style scope>
.change-box{
   padding: 5%;
}
.info-box-line > span{
  font-size: .9rem;
  font-weight: bold;
  margin-left: 3px;
}
.info-box input{
  width:100%;
  height:6vh;
  box-sizing: border-box;
  border: 1px solid #efefef;
  border-radius : 0.3rem;
  padding-left: .5rem;
  margin-top: .3rem;
}
</style>