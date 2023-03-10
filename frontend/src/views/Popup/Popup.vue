<template>
  <div class="ml-16 mt-20">
    <h2 class="ft-size-xlarge mb-30">공통 팝업</h2>
    <div class="mb-20"><el-button @click="PopAlertActive = !PopAlertActive">공통 alert</el-button></div>
    <div class="mb-20"><el-button @click="PopConfirmActive = !PopConfirmActive">공통 confirm</el-button></div>
    <div class="mb-20"><el-button @click="popPickerActive = !popPickerActive">공통 datePicker</el-button></div>

    <pop-alert v-if="PopAlertActive" @click="PopAlertActive = !PopAlertActive"></pop-alert>
    <pop-confirm v-if="PopConfirmActive" @click="PopConfirmActive = !PopConfirmActive"></pop-confirm>
    <pop-picker v-if="popPickerActive" @close="popClose" :popBtn="'선택'" :cancelButtonText="'닫기'" :initYear="'2020'" :initMonth="'1'"></pop-picker>
  </div>
</template>

<script>
import PopAlert from "@/views/Popup/PopAlert";
import PopConfirm from "@/views/Popup/PopConfirm";

export default {
  components: {
    PopAlert,
    PopConfirm,

  },
  name: "Popup",
  data() {
    return {
      PopAlertActive: false,
      PopConfirmActive: false,
      popPickerActive : false
    };
  },
  mounted(){
    console.log('popup mounted');
  },
  methods: {
    popClose(rst){
      console.log(rst);
      this.popPickerActive = false
    }
  },
};
</script>
