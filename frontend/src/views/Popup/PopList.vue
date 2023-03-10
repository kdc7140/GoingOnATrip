<template>
  <div class="popup-wrap show">
    <div class="popup-bg"></div>
    <div class="popup popup-select">
        <div class="popup-box" :class="{'no-head' : popNoHead}">
            <div class="pop-head">
                {{popTitle}}
                <button type="button" class="btn-close" @click="$emit('close')">팝업닫기</button>
            </div>
            <div class="pop-body">
                <ul class="list-line">
                    <li v-for="(item,idx) in popList" :key="'selectL'+idx" >
                        <input type="radio" name="selectRadio" :id="'select'+idx" :checked="item.lb == popSelectedItem" @click="selectItem(item)">
                        <label :for="'select'+idx">{{item.lb}}</label>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
  name: 'PopList',
  props: {
    popNoHead:{
      type: Boolean,
      default: false
    },
    popTitle: {
      type: String,
      default: "",
    },
    popList: {
      type: Array,
      default: [],
      required : true
    },
    popSelectedItem: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
    };
  },
  computed: {
  },
  watch: {
  },
  mounted() {
  },
  methods : {
    selectItem(item){
      this.$emit('close',item.vl);
    }
  }
};
</script>