<template>
  <div class="footer">
    <footer>
      <button class="footer-first">Home</button>
      <button class="footer-second">Tour</button>
      <button class="footer-third">Hetel</button>
      <button class="footer-fourth">Setting</button>
    </footer>
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
.footer-second{
  margin-left: 10px;
}
.footer-second{
  margin-left: 10px;
}
.footer-fourth{
  /*left: 50%;*/
}
</style>
