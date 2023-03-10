<template>
    <div class="popup-wrap show">
        <div class="popup-bg"></div>
        <div class="popup popup-select">
            <div class="popup-box">
                <div class="pop-head">
                    <p class="title">타이틀이 출력됩니다.</p>
                    <button type="button" class="btn-close">팝업닫기</button>
                </div>
                <div class="pop-body">
                    <ul class="list-line">
                        <li>
                            <input type="radio" name="selectpopup" id="rdselect0">
                            <label for="rdselect0">아이콘 없는 경우</label>
                        </li>
                        <li>
                            <input type="radio" name="selectpopup" id="rdselect1" class="authicon default">
                            <label for="rdselect1">기본 로그인</label>
                        </li>
                        <li>
                            <input type="radio" name="selectpopup" id="rdselect2" class="authicon bio">
                            <label for="rdselect2">바이오 인증</label>
                        </li>
                        <li>
                            <input type="radio" name="selectpopup" id="rdselect3" class="authicon pattern">
                            <label for="rdselect3">패턴 로그인</label>
                        </li>
                        <li>
                            <input type="radio" name="selectpopup" id="rdselect4" class="authicon pin">
                            <label for="rdselect4">PIN 번호 로그인</label>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>