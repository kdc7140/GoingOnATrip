<template>
  <!-- show/close로 애니메이션 효과 사용 가능 -->
  <div class="side-menu-wr" :class="[isCloseMenu ? 'close' : 'show']">
    <div class="side-menu-top">
      <div class="side-menu-title">Side Menu</div>
      <button type="button" class="side-menu-close" @click="closeSideMenu">닫기</button>
    </div>
    <div class="side-menu scrollBox">
      <div ref="menu1">
        <div class="side-menu-list">
          <p>소영</p>
          <button @click="goPage('/weather')">날씨조회</button>
        </div>
        <div class="side-menu-list">
          <p>동창</p>
          <button @click="goPage('/sky')">기상특보</button>
          <button @click="goPage('/sea')">바다예보</button>
        </div>
        <div class="side-menu-list">
          <p>현주</p>
          <button @click="goPage('/location')">관심지역 설정</button>
        </div>
        <div class="side-menu-list">
          <p>정아</p>
          <button @click="goPage('/tempe')">전국 온도/강수</button>
        </div>
        <div class="side-menu-list">
          <p>정동</p>
          <button @click="goPage('/mountain')">산악날씨</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "SideMenu",
  components: {  },
  data() {
    return {
      isCloseMenu : false,
      selectedMenu : 'menu1',
      brandCodeName : 'AA',
      brandCodeNum : '0000',
    };
  },
  computed: {

  },
  watch: {
  },
  mounted() {
    console.log('side menu');
  },
  methods: {
    closeSideMenu(){
      this.isCloseMenu = true;
      //close 애니메이션이 0.3초 이기 때문에 강제 타임아웃 설정
      setTimeout(()=>{
        this.$emit('close');
      },300);
    },

    goPage(link){
      this.closeSideMenu();
      this.$router.push(link);
    }
  },
};
</script>
