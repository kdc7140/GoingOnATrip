<template>
  <div class="footer_wrap">
    <div class="footer">
      <div>홈</div>
      <div>관광</div>
      <div>숙박</div>
      <div>설정</div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Footer",
  props: {
    footerStyle: {
      type: String,
      default: ""
    }
  }
};
</script>

<style>
.footer > div{
  display: inline-block;
}
</style>
