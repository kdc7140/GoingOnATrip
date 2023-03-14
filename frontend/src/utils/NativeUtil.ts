import CommonUtil from "@/utils/CommonUtil";

var lodash = require('lodash');

export default class NativeUtil {
  static callCellPhone(item: string) {
    let phoneNumber = item;
    let regex = /[^0-9]/g; // 숫자가 아닌 문자열을 선택하는 정규식
    phoneNumber = phoneNumber.replace(regex, ""); // 원래 문자열에서 숫자가 아닌 모든 문자열을 빈 문자로 변경
    if (isMorpheus()) {
      if (!CommonUtil.isEmpty(phoneNumber)) {
        M.sys.call(phoneNumber);
      } else {
        M.pop.instance("통화 가능한 연락처가 없습니다.");
      }
    } else {
      if (!CommonUtil.isEmpty(phoneNumber)) {
        alert("웹이라 통화가 안됨 실제 전화걸 폰번호 : " + phoneNumber);
      } else {
        alert("통화 가능한 연락처가 없습니다.");
      }

      console.log("웹이라 통화가 안됨", item, phoneNumber);
    }
  }

  static fileDownload(url: string, fileNm: string) {
    if (isMorpheus()) {
      if (wnIf.device == DT_ANDROID) {
        M.apps.browser(url, "UTF-8");
      } else {
        //한글이면 다운로드 후 파일 앱에서 확인, 아니면 바로 뷰어로 연동 가능
        if (
          fileNm.substring(fileNm.lastIndexOf(".") + 1).toLowerCase() == "hwp"
        ) {
          M.execute("exWNFileDownloadAndOpen", url, fileNm, "Y");
        } else {
          M.execute("exWNFileDownloadAndOpen", url, fileNm, "N");
        }
      }
    } else {
      window.open(url);
    }
  }

  //지문 인증 사용가능한지 확인
  static bioCertUseCheck() {
    if (!isMorpheus()) {
      return new Promise((resolve, reject) => {
        let result = {
          result: "SUCCESS",
        };
        resolve(result);
      });
    }

    if (M.navigator.device("android")) {
      return new Promise((resolve, reject) => {
        M.plugin("3rd_fingerprint_basic").check({
          callback: function (status: any, result: any) {
            console.log(status, result);

            let _status = "";

            if (status == "SUCCESS" && result.result == "SUCCESS") {
              resolve(result);
            } else {
              if (result.result_code == 402) {
                // 생체 인증 사용은 가능하나 등록이 안되어 있는 경우
                _status = "NOT_REGIST";
              } else if (result.errorCode == "7" || result.errorCode == "9") {
                // 시도횟수가 많은 경우
                _status = "EXCEED_TRY";
              } else {
                _status = "FAIL";
              }

              reject(_status);
            }
          },
        });
      });
    } else if (M.navigator.device("ios")) {
      return new Promise((resolve, reject) => {
        M.plugin("3rd_iOS_fingerprint_basic").check({
          callback: function (status: any, result: any) {
            var _status = "";
            if (status == "SUCCESS" && result.result == "SUCCESS") {
              resolve(result);
            } else {
              if (result.result_code == 402) {
                // 생체 인증 사용은 가능하나 등록이 안되어 있는 경우
                _status = "NOT_REGIST";
              } else if (result.result_code == "408") {
                // Touch ID, Face ID 잠겼을 경우
                _status = "EXCEED_TRY";
              } else {
                _status = "FAIL";
              }

              reject(_status);
            }
          },
        });
      });
    }
  }

  //지문 인증
  static bioCert() {
    if (!isMorpheus()) {
      return new Promise((resolve, reject) => {
        let result = {
          result: "SUCCESS",
        };
        resolve(result);
      });
    }
    
    if (M.navigator.device("android")) {
      console.log("지문 인증");
      return new Promise((resolve, reject) => {
        M.plugin("3rd_fingerprint_basic").auth({
          callback: function (status: any, result: any) {
            var _status = status;
            if (status == "SUCCESS" && result.result == "SUCCESS") {
              _status = "SUCCESS";

              resolve(result);
            } else {
              //if (result.errorCode == "7" || result.errorCodㄴe == "9") {
              //  // 시도횟수가 많은 경우
              //  _status = "EXCEED_TRY";
              //} else {
              //  _status = "FAIL";
              //}

              reject(result.message);
            }
          },
        });
      });
    } else if (M.navigator.device("ios")) {
      return new Promise((resolve, reject) => {
        M.plugin("3rd_iOS_fingerprint_basic").auth({
          callback: function (status: any, result: any) {
            var _status = status;
            if (status == "SUCCESS" && result.result == "SUCCESS") {
              _status = "SUCCESS";

              resolve(result);
            } else {
              //if (result.errorCode == "7" || result.errorCodㄴe == "9") {
              //  // 시도횟수가 많은 경우
              //  _status = "EXCEED_TRY";
              //} else {
              //  _status = "FAIL";
              //}

              reject(result.message);
            }
          },
        });
      });
    }
  }

  //pin 등록
  static registerPin() {
    if (!isMorpheus()) {
      return new Promise((resolve, reject) => {
        let result = {
          result: "SUCCESS",
        };
        resolve(result);
      });
    }

    if (M.navigator.device("android")) {
      return new Promise((resolve, reject) => {
        M.execute("exWNPinLockActivity", {
          length: 6,
          type: "REGISTER",
          callback: M.response.on(function (status: any, result: any) {
              var _status = status;
              if (status == "SUCCESS" && result.result == "SUCCESS") {
                resolve(result);
              } else {
                reject(result.message);
              }
            })
            .toString(),
        });
      });
    } else if (M.navigator.device("ios")) {
      var params = {
        length: 6,
        activity: "PinLockViewController",
      };
      return new Promise((resolve, reject) => {
        M.plugin("3rd_iOS_pin_basic").register({
          param: params,
          callback: function (status: any, result: any) {
            var _status = status;
            if (status == "SUCCESS" && result.result == "SUCCESS") {
              resolve(result);
            } else {
              reject(result.message);
            }
          },
        });
      });
    }
  }

  //pin 인증
  static pinCert() {
    if (!isMorpheus()) {
      return new Promise((resolve, reject) => {
        let result = {
          result: "SUCCESS",
        };
        resolve(result);
      });
    }

    if (M.navigator.device("android")) {
      return new Promise((resolve, reject) => {
        M.execute("exWNPinLockActivity", {
          length: 6,
          type: "AUTH",
          callback: M.response.on(function (status: any, result: any) {
              var _status = status;
              if (status == "SUCCESS" && result.result == "SUCCESS") {
                resolve(result);
              } else {
                reject(result);
              }
            })
            .toString(),
        });
      });
    } else if (M.navigator.device("ios")) {
      return new Promise((resolve, reject) => {
        var params = {
          length: 6,
          activity: "PinLockViewController",
        };

        M.plugin("3rd_iOS_pin_basic").auth({
          param: params,
          callback: function (status: any, result: any) {
            var _status = status;
            if (status == "SUCCESS" && result.result == "SUCCESS") {
              resolve(result);
            } else {
              reject(result);
            }
          },
        });
      });
    }
  }

  //패턴 등록
  static registerPattern() {
    if (!isMorpheus()) {
      return new Promise((resolve, reject) => {
        let result = {
          result: "SUCCESS",
        };
        resolve(result);
      });
    }

    if (M.navigator.device("android")) {
      return new Promise((resolve, reject) => {
        M.execute("exWNPatternLockActivity", {
          type: "reset",
          callback: M.response.on(function (status: any, result: any) {
              var _status = status;
              if (status == "SUCCESS" && result.result == "SUCCESS") {
                resolve(result);
              } else {
                reject(result.message);
              }
            })
            .toString(),
        });
      });
    } else if (M.navigator.device("ios")) {
      return new Promise((resolve, reject) => {
        M.plugin("3rd_iOS_pattern_basic").lock({
          type: "reset",
          callback: function (status:any, result:any) {
            var _status = status;
            if (status == "SUCCESS" && result.result == "SUCCESS") {
              resolve(result);
            } else {
              reject(result.message);
            }
          },
        });
      });
    }
  }

  //패턴 인증
  static certPattern() {
    if (!isMorpheus()) {
      return new Promise((resolve, reject) => {
        let result = {
          result: "SUCCESS",
        };
        resolve(result);
      });
    }
    
    if (M.navigator.device("android")) {
      return new Promise((resolve, reject) => {
        M.execute("exWNPatternLockActivity", {
          type: "lock",
          callback: M.response.on(function (status: any, result: any) {
              var _status = status;
              if (status == "SUCCESS" && result.result == "SUCCESS") {
                resolve(result);
              } else {
                reject(result);
              }
            })
            .toString(),
        });
      });
    } else if (M.navigator.device("ios")) {
      return new Promise((resolve, reject) => {
        M.plugin("3rd_iOS_pattern_basic").lock({
          type: "lock",
          callback: function (status: any, result: any) {
            var _status = status;
            if (status == "SUCCESS" && result.result == "SUCCESS") {
              _status = "SUCCESS";

              if (status == "SUCCESS" && result.result == "SUCCESS") {
                resolve(result);
              } else {
                reject(result);
              }
            }
          },
        });
      });
    }
  }

  // AES256 암호화
  static exWNAES256Encrypt = function (plainStr: string) {
    return isMorpheus()
      ? M.execute("exWNAES256Encrypt", plainStr)
      : "AE69sMVsOlvqhYfp6QocFA==";
  };

  // AES256 복호화
  static exWNAES256Decrypt = function (encStr: string) {
    return M.execute("exWNAES256Decrypt", encStr);
  };
}