<template>
    <div class="popup-wrap show">
        <div class="popup-bg"></div>
        <div class="popup">
            <!-- 타이틀 없을 경우 no-head -->
            <div class="popup-box" :class="{'no-head' : popNoHead}">
                <div class="pop-head">{{popTitle}}</div>
                <div class="pop-body" v-html="popMsg">

                </div>
                <div class="pop-foot">
                    <p class="btn-wrap">
                        <button type="button" class="btn line" @click="popClick(false)">{{cancelButtonText}}</button>
                        <button type="button" class="btn" @click="popClick(true)">{{popBtn}}</button>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'PopConfirm',
  props: {
    popNoHead:{
      type: Boolean,
      default: false
    },
    popTitle: {
      type: String,
      default: "",
    },
    popMsg: {
      type: String,
      default: "",
    },
    popBtn: {
      type: String,
      default: "확인",
    },
    cancelButtonText: {
      type: String,
      default: "취소",
    },
    isLeft : {
      type: Boolean,
      default : false
    }
  },
  data() {
    return {
      PopConfirm: true,
    };
  },
  methods : {
    popClick: function(isTrueOrFalse) {
      this.$emit("click", isTrueOrFalse) ;
    },
  }
};
</script>