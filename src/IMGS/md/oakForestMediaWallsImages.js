// Auto-import all media wall images from ./OakForestMediaWalls using CRA's webpack.
// Exported order is deterministic (sorted by filename).

const importAll = (context) =>
  context
    .keys()
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map(context);

export const oakForestMediaWallsImages = importAll(
  require.context("./OakForestMediaWalls", false, /\.(png|jpe?g|webp|avif)$/i),
);
