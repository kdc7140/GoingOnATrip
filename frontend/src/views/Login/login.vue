<template>
  <div class="content">
    <div class="logo"><img src="../../assets/img/br-logo.png"></div>

    <div class="login">
      <div>
        <p>아이디</p>
        <input class="id" placeholder="아이디를 입력하세요.">
      </div>
      <div>
        <p>비밀번호</p>
        <input class="pw" placeholder="비밀번호를 입력하세요.">
      </div>
    </div>
    <div class="login_wrap">
      <button class="btn_login">Log in</button>
    </div>
    <div class="btn_footer">
      <button @click="goMovePage('regMb')">회원가입</button>
      <button @click="goMovePage('chpw')">비밀번호변경</button>
    </div>
  </div>
</template>

<script>


export default {
  name: "login",
  data() {
    return {

    };
  },

  mounted(){
    console.log("login");
  },
  
  computed: {
   
  },

  watch:{

  },

  methods: {
    //화면이동
    goMovePage(link){
      this.$router.push(link);
    }

  },

  mounted() {

  },
};
</script>

<style>
.content{
  margin: 15px;
}
.logo{
  text-align: center;
  margin-top: 30%;
}
input{
  width:100%;
  height:5vh;
  box-sizing: border-box;
  border: 1px solid #efefef;
  border-radius : 0.3rem;
}
.login{
  margin-top: 4vh;
}
.login p{
  margin: 0.5rem 0 0.5rem 0.3rem;
}
.login_wrap{
  box-sizing: border-box;
}
.btn_login{
  margin: 10vh 0 0 0;
  width: 100%;
  height: 5vh;
  border-radius : 0.3rem;
  border: 1px solid #efefef;
}
.btn_footer{
  text-align: center;
}
.btn_footer > button{
  border:none;
  background-color: white;
}

img{
  width:80%;
}
</style>
