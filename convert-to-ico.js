import fs from "fs";
import pngToIco from "png-to-ico";

// PNG 파일을 ICO 파일로 변환
try {
  pngToIco(["./public/favicon.png"])
    .then((buf) => {
      fs.writeFileSync("./public/favicon.ico", buf);
      console.log("favicon.ico 파일이 생성되었습니다.");
    })
    .catch((err) => {
      console.error("변환 중 오류 발생:", err);
    });
} catch (err) {
  console.error("파일 처리 중 오류 발생:", err);
}
