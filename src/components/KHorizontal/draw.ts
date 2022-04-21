import { Ref } from "vue";

function draw(canvas: Ref<HTMLCanvasElement | null>) {
  if (!canvas.value) return;
  canvas.value.style.borderRadius = "100px";
  const ctx = canvas.value.getContext("2d");
  if (!ctx) return;
  ctx.fillStyle = "#6865DE";
  ctx.fillRect(0, 0, 150, 12);
  ctx.fillStyle = "#F4901D";
  ctx.fillRect(150, 0, 150, 12);
  ctx.fillStyle = "#0EC763";
  ctx.fillRect(300, 0, 150, 12);
  ctx.fillStyle = "#FF0000";
  ctx.fillRect(450, 0, 150, 12);
  ctx.fillStyle = "#FFFFFF";
  ctx.fillText("45%", 70, 10);
  ctx.fillText("45%", 230, 10);
  ctx.fillText("45%", 370, 10);
  ctx.fillText("45%", 530, 10);
}

export { draw };
