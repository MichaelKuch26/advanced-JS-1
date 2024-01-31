// Экспорт

export const name = 'square';

export function draw(ctx, length, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, length, length);

  return {
    length: length,
    x: x,
    y: y,
    color: color
  };
}

// внутри блоков экспортировать нельзя

// Импорт

// import { name, draw, reportArea, reportPerimeter } from './script';

import * as Square from './script'; // Импортируем всё что можно

