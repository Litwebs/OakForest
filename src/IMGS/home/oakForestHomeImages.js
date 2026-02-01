// Auto-import all homepage images from ./OakForestHomepage using CRA's webpack.
// Exported order is deterministic (sorted by filename).

const importAll = (context) =>
  context
    .keys()
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map(context);

export const oakForestHomeImages = importAll(
  require.context("./OakForestHomepage", false, /\.(png|jpe?g|webp|avif)$/i),
);
