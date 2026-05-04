const modules = import.meta.glob(
  "./OakForestHomepage/*.{png,jpg,jpeg,webp,avif}",
  { eager: true },
);

export const oakForestHomeImages = Object.keys(modules)
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
  .map((key) => modules[key].default);
