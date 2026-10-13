// Synthetic micrograph for the segmentation toy: a field of Gaussian grains is the ground
// truth; speckle noise on top is the input. Thresholding stands in for the CNN.
export const W = 160;
export const H = 110;

export function makeSample(random = Math.random) {
  const seeds = Array.from({ length: 30 }, () => ({ x: random() * W, y: random() * H, r: 4 + random() * 6 }));
  const truth = new Uint8Array(W * H);
  const noisy = new Float32Array(W * H);
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      let f = 0;
      // max, not sum, so neighbouring grains stay separate like a real microstructure
      for (const s of seeds) f = Math.max(f, Math.exp(-((x - s.x) ** 2 + (y - s.y) ** 2) / (2 * s.r * s.r)));
      const i = y * W + x;
      truth[i] = f > 0.55 ? 1 : 0;
      noisy[i] = Math.min(1, Math.max(0, 0.2 + 0.6 * f + (random() - 0.5) * 0.6));
    }
  }
  return { truth, noisy };
}

// Box blur: the "pre-labeling" smoothing step.
export function blur(field, r) {
  if (!r) return field;
  const out = new Float32Array(W * H);
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      let sum = 0, n = 0;
      for (let dy = -r; dy <= r; dy++) {
        for (let dx = -r; dx <= r; dx++) {
          const xx = x + dx, yy = y + dy;
          if (xx >= 0 && yy >= 0 && xx < W && yy < H) {
            sum += field[yy * W + xx];
            n++;
          }
        }
      }
      out[y * W + x] = sum / n;
    }
  }
  return out;
}

export function predict(field, threshold) {
  const out = new Uint8Array(field.length);
  for (let i = 0; i < field.length; i++) out[i] = field[i] > threshold ? 1 : 0;
  return out;
}

export function iou(pred, truth) {
  let inter = 0, union = 0;
  for (let i = 0; i < pred.length; i++) {
    if (pred[i] && truth[i]) inter++;
    if (pred[i] || truth[i]) union++;
  }
  return union ? inter / union : 0;
}
