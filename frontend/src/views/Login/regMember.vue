<template>
  <div class="contents">
    <div class="info-box">
      <div class="app-info-box">
        <div class="info-box-line">
          <span>아이디<span>*</span></span>
          <div class="id-box">
            <input v-model="inputId" placeholder="아이디를 입력하세요.">
            <button @click="dupleConfirm">중복확인</button>
          </div>
        </div>
        <div class="info-box-line">
          <span>비밀번호<span>*</span></span>
          <input type="password" v-model="ipnutPassword" placeholder="비밀번호를 입력하세요.">
        </div>
        <div class="info-box-line">
          <span>비밀번호 확인<span>*</span></span>
          <input type="password" v-model="passwordConfirm" placeholder="비밀번호를 입력하세요.">
        </div>
      </div>
      
      <div class="per-info-box">
        <div class="info-box-line">
          <span>이름<span>*</span></span>
          <input v-model="inputName" placeholder="이름을 입력하세요.">
        </div>
        <div class="info-box-line">
          <span>생년월일<span>*</span></span>
          <input type="number" v-model="inputBirth" placeholder="생년월일 6자리를 입력하세요.">
        </div>
        <div class="info-box-line">
          <span>핸드폰번호<span>*</span></span>
          <input type="number" v-model="inputPhone" placeholder="-없이 13자리를 입력하세요.">
        </div>
      </div>
      
      <div>
        <button class="register-button" @click.stop="regiMember">회원가입</button>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "regMember",
  data() {
    return {
      regiMemberInfo: this.getStorage('MEMBER_INFO'),
      dupleYN : "N",
      inputId : '',
      ipnutPassword: '',
      passwordConfirm: '',
      inputName: '',
      inputBirth: '',
      inputPhone: '',
    };
  },
  mounted(){
    console.log(this.$route.path);
    console.log(this.getStorage('MEMBER_INFO'));
  },
  watch:{
    inputPhone(){
      console.log(this.inputPhone.length);
    }
  },
  methods:{
    dupleConfirm(){
      this.dupleYN = 'N';
      
      if(this.regiMemberInfo !== ''){
        this.regiMemberInfo.forEach((item, idx) => {
          if(item.id == this.inputId){
            this.dupleYN = "Y";
          }
        });
      }
      
      if(this.dupleYN == "Y"){
        this.$popAlert('이미 사용중인 아이디입니다.');
      }else{
        if(this.inputId == ''){
          this.$popAlert('아이디를 입력해주세요.');
        }else{
          this.$popAlert('사용가능한 아이디입니다.');
        }
      }
    },
    async regiMember(){
      if(this.dupleYN == "Y"){
        this.$popAlert('아이디 중복확인을 해주세요.');
      }else if(this.ipnutPassword == '' || this.passwordConfirm == ''){
        this.$popAlert('비밀번호를 입력해주세요.');
      }else if(this.ipnutPassword !== this.passwordConfirm){
        this.$popAlert('비밀번호가 일치하지 않습니다.');
      }else if(this.inputBirth.length != 6){
        this.$popAlert('생년월일 6자리를 확인해주세요');
      }else if(this.inputPhone.length != 11){
        this.$popAlert('핸드폰 번호 13자리를 확인해주세요');
      }else{
        let dupleUserYN = 'N';
        if(this.regiMemberInfo !== ''){
          this.regiMemberInfo.forEach((item, idx) => {
            if(item.name == this.inputName && item.birth == this.inputBirth && item.phoneNum == this.inputPhone){
              dupleUserYN = "Y"
            }
          });
        }
        
        if(dupleUserYN == "Y"){
          this.$popAlert('이미 가입된 사용자입니다.');
        }else{
          await this.setStorage('MEMBER_INFO', {
            id : this.inputId,
            pw : this.ipnutPassword,
            name : this.inputName,
            birth : this.inputBirth,
            phoneNum : this.inputPhone,
          });
          await this.$popAlert('회원가입이 완료되었습니다. 로그인 후 이용해주세요.');

          this.$router.replace('/login');
        }
      }
    }
  }
}
</script>

<style scope>
.info-box{
  padding: 5%;
  background-color: white;
}
.info-box-line{
  margin: 1rem 0 1rem 0;
}
.info-box-line > span{
  font-size: .9rem;
  font-weight: bold;
  margin-left: 3px;
}
.id-box{
  display: flex;
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
.info-box input::placeholder{
  color:#b3b3b3;
}
.id-box > button{
  border-radius : 0.3rem;
  border: 1px solid #efefef;
  background: #4060d4;
  color: white;
  width:30%;
  margin-top: .3rem;
}
.register-button{
  margin: 5vh 0 0 0;
  width: 100%;
  height: 5vh;
  border-radius : 0.3rem;
  border: 1px solid #efefef;
  background: #4060d4;
  color: white;
  height:6vh; 
}
span > span{
  color: red;
}
</style>