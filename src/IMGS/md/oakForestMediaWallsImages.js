const modules = import.meta.glob(
  "./OakForestMediaWalls/*.{png,jpg,jpeg,webp,avif}",
  { eager: true },
);

export const oakForestMediaWallsImages = Object.keys(modules)
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
  .map((key) => modules[key].default);
