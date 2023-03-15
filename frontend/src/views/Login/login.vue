<template>
  <div class="login-wrap">
    <div class="main_logo">
      <img src="../../assets/img/br-logo.png">
    </div>

    <div class="login">
      <div>
        <p>아이디</p>
        <input type="text" v-model="inputId" class="id" placeholder="아이디를 입력하세요.">
      </div>
      <div>
        <p>비밀번호</p>
        <input type="password" v-model="inputPw" class="pw" placeholder="비밀번호를 입력하세요.">
      </div>
    </div>
    <div class="login_wrap">
      <button class="btn_login" :disabled="!canLogin" @click="onLogin">Log in</button>
    </div>
    <div class="login_footer">
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
      inputId : '',
      inputPw : '',
      memberList : this.$store.state.storage.MEMBER_INFO,
    };
  },

  mounted(){
    console.log("login");
  },
  
  computed: {
   canLogin() {
      return (this.inputId !== "" && this.inputPw !== "") ? true : false;
   }
  },

  watch:{

  },

  methods: {
    //화면이동
    goMovePage(link){
      this.$router.push(link);
    },

    onLogin(){
      let loginCheck = "N";
      for(let i=0; i<this.memberList.length; i++){
        if(this.memberList[i].id == this.inputId && this.memberList[i].pw == this.inputPw){
          loginCheck = "Y";
          break;
        }
      }

      if(loginCheck == "Y"){
        this.$router.push('/main');
      }else{
        this.$popAlert('회원정보가 올바르지 않습니다.');
      }
    }

  },
};
</script>

<style>
body{
  margin: 0px;
}
.login-wrap{
  padding: 10%;
}
.main_logo{
  text-align: center;
  margin-top: 30%;
}
input{
  width:100%;
  height:6vh;
  box-sizing: border-box;
  border: 1px solid #efefef;
  border-radius : 0.3rem;
  padding-left: 1rem;
}
.login > div{
  margin-top: 5vh;
}
.login p{
  margin: 0.5rem 0 0.5rem 0.3rem;
}
.login_wrap{
  box-sizing: border-box;
}
.btn_login{
  margin: 9vh 0 0 0;
  width: 100%;
  height: 5vh;
  border-radius : 0.3rem;
  border: 1px solid #efefef;
  background: #4060d4;
  color: white;
  height:6vh;
}
.btn_login:disabled{
  background: gray;
}
.login_footer{
  text-align: center;
  margin-top: 0.5rem;
}
.login_footer > button{
  border:none;
  background-color: white;
}

img{
  width:80%;
}
</style>
