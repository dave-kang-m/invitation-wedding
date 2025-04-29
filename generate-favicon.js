import fs from "fs";
import { createCanvas } from "canvas";

// 캔버스 생성
const canvas = createCanvas(32, 32);
const ctx = canvas.getContext("2d");

// 배경 색상 설정
ctx.fillStyle = "#ffffff";
ctx.fillRect(0, 0, 32, 32);

// 두 개의 하트 그리기
function drawHeart(x, y, size, color) {
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(x, y + size / 4);
  ctx.bezierCurveTo(x, y, x - size / 2, y, x - size / 2, y + size / 4);
  ctx.bezierCurveTo(
    x - size / 2,
    y + size / 2,
    x,
    y + (size * 3) / 4,
    x,
    y + size
  );
  ctx.bezierCurveTo(
    x,
    y + (size * 3) / 4,
    x + size / 2,
    y + size / 2,
    x + size / 2,
    y + size / 4
  );
  ctx.bezierCurveTo(x + size / 2, y, x, y, x, y + size / 4);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.restore();
}

// 첫 번째 하트 (분홍색)
drawHeart(14, 9, 12, "#e98a8a");

// 두 번째 하트 (파랑색, 약간 겹치도록)
drawHeart(18, 9, 12, "#8a9ce9");

// 이니셜 추가
ctx.font = "bold 8px Arial";
ctx.fillStyle = "#ffffff";
ctx.textAlign = "center";
ctx.textBaseline = "middle";
ctx.fillText("W", 16, 16);

// PNG 파일로 저장
const buffer = canvas.toBuffer("image/png");
fs.writeFileSync("./public/favicon.png", buffer);

console.log("Favicon.png 생성 완료");
