const modules = import.meta.glob(
  "./OakForestKitchen/*.{png,jpg,jpeg,webp,avif}",
  { eager: true },
);

export const oakForestKitchenImages = Object.keys(modules)
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
  .map((key) => modules[key].default);
