// Auto-import all kitchen images from ./OakForestKitchen using CRA's webpack.
// Exported order is deterministic (sorted by filename).

const importAll = (context) =>
  context
    .keys()
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map(context);

export const oakForestKitchenImages = importAll(
  require.context("./OakForestKitchen", false, /\.(png|jpe?g|webp|avif)$/i),
);
