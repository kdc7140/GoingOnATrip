<template>
  <div>
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
      eventInfo: {}
    };
  },
  mounted() {
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
      const script = document.createElement("script");
      //autoload=false 가 없으면 지도 load시 메서드를 호출하는 로직이 적용되지 않아서 오류가 남
      script.src ="//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=ee6ff6af8ff192fd64d9886bfec45459"; // &autoload=false api를 로드한 후 맵을 그리는 함수가 실행되도록 구현
      script.onload = () => window.kakao.maps.load(this.loadMap); // 스크립트 로드가 끝나면 지도를 실행될 준비가 되어 있다면 지도가 실행되도록 구현

      document.head.appendChild(script); // html>head 안에 스크립트 소스를 추가
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
      var iwContent = `<div class="overlaybox " style="padding:5px;">${this.eventInfo.addr1}</div>`; // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
      var iwPosition = new kakao.maps.LatLng(this.eventInfo.mapy, this.eventInfo.mapx); //인포윈도우 표시 위치입니다

      // 인포윈도우를 생성합니다
      var infowindow = new kakao.maps.InfoWindow({
          position : iwPosition, 
          content : iwContent 
      });
        
      // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
      infowindow.open(this.map, this.marker); 
    }
  },
};
</script>

<style>
#map {
  width: 100%;
  height: 400px;
}
.overlaybox {
  position:relative;
  width:auto;
  height:auto;
  background: #4060d4;
  color: white;
  border-radius : 0.3rem;
}
</style>