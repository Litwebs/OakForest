const modules = import.meta.glob(
  "./OakForestWardrobes/*.{png,jpg,jpeg,webp,avif}",
  { eager: true },
);

export const oakForestWardrobesImages = Object.keys(modules)
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
  .map((key) => modules[key].default);
