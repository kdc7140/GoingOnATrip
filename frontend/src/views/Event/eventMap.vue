<template>
  <div class="contents">
    <div id="map"></div>
  </div>
</template>

<script>
export default {
  name: "KakaoMap", // 컴포넌트 이름 지정
  data() {
    return {
      // map 객체 설정
      map: null,
      marker: '',
      eventInfo: {},
      customOverlays : [],
    };
  },
  mounted() {
    console.log('지도보기');
    const { eventInfo } = this.$route.query;
    this.eventInfo = eventInfo;

  	// api 스크립트 소스 불러오기 및 지도 출력
    if (window.kakao && window.kakao.maps) {
      this.loadMap();
    } else {
      this.loadScript();
    }
  },
  methods: {
  	// api 불러오기
    loadScript() {
      // const script = document.createElement("script");
      // //autoload=false 가 없으면 지도 load시 메서드를 호출하는 로직이 적용되지 않아서 오류가 남
      // script.src ="//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=ee6ff6af8ff192fd64d9886bfec45459"; // &autoload=false api를 로드한 후 맵을 그리는 함수가 실행되도록 구현
      // script.onload = () => window.kakao.maps.load(this.loadMap); // 스크립트 로드가 끝나면 지도를 실행될 준비가 되어 있다면 지도가 실행되도록 구현

      // document.head.appendChild(script); // html>head 안에 스크립트 소스를 추가

      const script = document.createElement("script");
      /* global kakao */
      script.onload = () => kakao.maps.load(this.loadMap);
      script.src = "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=ee6ff6af8ff192fd64d9886bfec45459";
      document.head.appendChild(script);
    },
    // 맵 출력하기
    loadMap() {
      const container = document.getElementById("map"); 
      const options = {
        center: new window.kakao.maps.LatLng(this.eventInfo.mapy, this.eventInfo.mapx), 
        level: 3
      };

      this.map = new window.kakao.maps.Map(container, options); 
      this.loadMaker();
    },
    // 지정한 위치에 마커 불러오기
    loadMaker() {
      const markerPosition = new window.kakao.maps.LatLng(
        this.eventInfo.mapy,
        this.eventInfo.mapx
      );

      this.marker = new window.kakao.maps.Marker({
        position: markerPosition,
      });

      this.marker.setMap(this.map);
      this.drawInfoWindow();
    },
    drawInfoWindow(){
      var content = document.createElement('div');
      content.classList.add('overlaybox');
      // content.style.cssText = "background-color:white;color:blue;border-radius:4px;"
      content.innerText = this.eventInfo.addr1;
      content.onclick = () =>{
        this.viewEventInfo();
      };

      var position = new kakao.maps.LatLng(this.eventInfo.mapy, this.eventInfo.mapx);  

      // 커스텀 오버레이를 생성합니다
      var customOverlay = new kakao.maps.CustomOverlay({
          position: position,
          content: content   
      });

      // 커스텀 오버레이를 지도에 표시합니다
      customOverlay.setMap(this.map);
      

    },
    viewEventInfo(){
      console.log("success!!!!!");
    }
  },
};
</script>

<style>
#map {
  width: 100%;
  height: 100%;
}
.overlaybox {
  position:relative;
  top: -3.5rem;
  font-size: .8rem;
  /* width:auto; */
  /* height:auto; */
  background: #4060d4;
  color: white;
  border-radius : 0.3rem;
  padding:5px;
}
</style>