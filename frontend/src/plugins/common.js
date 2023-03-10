import axios from "axios";
import EventBus, { $popAlert, $popConfirm, $list } from "@/common/EventBus";
import { MNetSend } from '@/common/service.api';


export default {
  install(Vue) {

    // axios 생성
    const axiosInstance = axios.create({
      baseURL: "/",
      withCredentials: false, // send cookies when cross-domain requests
      timeout: 10000 // request timeout
    });

    // vue 공통 method 주입
    Vue.prototype.$axios = axiosInstance;

    Vue.prototype.$popAlert = $popAlert;
    Vue.prototype.$popConfirm = $popConfirm;
    Vue.prototype.$list = $list;
       
    Vue.prototype.$MNetSend = MNetSend;

    /*
    * 팝업 닫는 것에 대한 헬퍼 함수
    */
    Vue.prototype.$autoClosePop = function (props = []) {
      console.log("popup close");
      if(!Array.isArray(props)) throw new Error('props 파라미터는 배열이여야합니다.');
      let exist = false;
      props.forEach((prop) => {
        if(this[prop] === true) {
          this[prop] = false;
          exist = true;
          return false; // 반복문 종료
        }
      })
      return exist;
    }

  }
};
