// Auto-import all wardrobe images from ./OakForestWardrobes using CRA's webpack.
// Exported order is deterministic (sorted by filename).

const importAll = (context) =>
  context
    .keys()
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map(context);

export const oakForestWardrobesImages = importAll(
  require.context("./OakForestWardrobes", false, /\.(png|jpe?g|webp|avif)$/i),
);
