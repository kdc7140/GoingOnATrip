<template>
  <div class="contents">
    <img src="@/assets/img/chpw-logo2.png">
    <div class="change-box" v-if="tabIdx == 1">
      <div class="info-box-line">
        <span>아이디<span>*</span></span>
        <input type="text" v-model="inputId" placeholder="아이디를 입력하세요">
      </div>
      <div class="info-box-line">
        <span>이름<span>*</span></span>
        <input type="password" v-model="inputName" placeholder="이름을 입력해주세요.">
      </div>
    </div>
    <div class="change-box" v-if="tabIdx == 2">
      <div class="info-box-line">
        <span>비밀번호<span>*</span></span>
        <input type="text" v-model="inputPassword" placeholder="아이디를 입력하세요">
      </div>
      <div class="info-box-line">
        <span>비밀번호 확인<span>*</span></span>
        <input type="password" v-model="passwordConfirm" placeholder="이름을 입력해주세요.">
      </div>
    </div>
    <div class="footer-box">
      <button class="btn-prev" @click="pageTab(-1)">{{prevBtnName }}</button>
      <button class="btn-next" :disabled="!canNext" @click="pageTab(1)">{{nextBtnName}}</button>
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
      inputPassword: '',
      passwordConfirm: '',
      tabIdx : 1,
      prevBtnName: '이전',
      nextBtnName: '다음',
    };
  },
  mounted(){
    console.log("A");
  },
  computed: {
    canNext() {
      if(this.tabIdx == 1){
        if(this.inputId !== "" && this.inputName !== ""){
          return true;
        }else{
          return false;
        }
      }else if(this.tabIdx == 2){
        if(this.inputPassword !== "" && this.passwordConfirm !== ""){
          return true;
        }else{
          return false;
        }
      }
    }
  },
  methods:{
    async pageTab(idx){
      if(this.tabIdx == 1){
        if(idx == 1){
          this.tabIdx = this.tabIdx+idx;
          this.nextBtnName = "변경하기"
        }
      }else if(this.tabIdx == 2){
        if(idx == -1){
          this.tabIdx = this.tabIdx+idx;
          this.nextBtnName = "다음";
        }
        
        if(idx == 1){
          //store 유저 정보 수정
          if(this.regiMemberInfo !== ''){
          this.regiMemberInfo.forEach((item, idx) => {
            if(item.name == this.inputName && item.id == this.inputId){
              this.setStorage('CHANGE_MEMBER_INFO', {
                id : this.inputId,
                pw : this.ipnutPassword,
                name : this.inputName,
                birth : item.birth,
                phoneNum : item.phoneNum,
              })
            }
          });
        }

          await this.$popAlert("비밀번호가 변경되었습니다.");
          this.$router.replace('/login');
        }
      }
    }
  }
}
</script>

<style scope>
.contents > img{
  width: 70%;
  margin: auto;
  display: block;
  padding-top: 15%;
}
.change-box{
   padding: 5%;
   background-color: white;
}
.info-box-line{
  margin: 2rem 0 2rem 0;
}
.info-box-line > span{
  font-size: .9rem;
  font-weight: bold;
  margin-left: 3px;
}
.info-box-line input{
  width:100%;
  height:2.5rem;
  box-sizing: border-box;
  border: 1px solid #efefef;
  border-radius : 0.3rem;
  padding-left: .5rem;
  margin-top: .3rem;
}
span > span{
  color: red;
}
.footer-box{
  text-align: center;
}
.footer-box > .btn-next{
  margin: 8rem .3rem .3rem .3rem;
  width: 45%;
  /*height: 5vh;*/
  border-radius : 0.3rem;
  border: 1px solid #efefef;
  background: #4060d4;
  color: white;
  height:3rem;
  font-weight: bold;
}
.footer-box > .btn-prev{
  margin: 3rem .3rem .3rem .3rem;
  width: 45%;
  height: 3rem;
  border-radius : 0.3rem;
  border: 1px solid #efefef;
  background: #808080;
  color: white;
  height:3rem; 
  font-weight: bold;
}
.footer-box > .btn-next:disabled{
  background: #808080;
}
</style>