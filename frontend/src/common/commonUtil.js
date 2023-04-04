var empty = require("is-empty");

//공통함수
export default class CommonUtil {
  static CommonFunc = () => {
    console.log("common Test");
  };

	static isEmpty = (data) => {
		return empty(data);
	}
}
