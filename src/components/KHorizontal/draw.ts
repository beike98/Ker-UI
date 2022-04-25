import { Ref, UnwrapNestedRefs } from "vue";
import { ConfigModel } from "./configModel";

/**
 * draw 绘图逻辑
 * @param canvas canvas实例
 * @param config config配置
 */
const draw = (
  canvas: Ref<HTMLCanvasElement | null>,
  config: UnwrapNestedRefs<ConfigModel>
) => {
  if (!canvas.value || !config) return;
  canvas.value.style.borderRadius = "100px";
  const ctx = canvas.value.getContext("2d");
  if (!ctx) return;

  // 适配两倍屏
  const ratio = 2;
  canvas.value.width = config.size.width * ratio;
  canvas.value.height = config.size.height * ratio;
  canvas.value.style.width = config.size.width + "px";
  canvas.value.style.height = config.size.height + "px";
  ctx.scale(ratio, ratio);

  let start = 0;
  config.params.forEach(({ color, progress }) => {
    if (!progress) return;
    const width = (config.size.width * progress) / 100;
    ctx.fillStyle = color;
    ctx.fillRect(start, 0, width, config.size.height);
    start += width;
    ctx.fillStyle = config.text.color;
    ctx.fillText(progress + "%", start - width / 2 - 8, 10);
  });
};

export { draw };
