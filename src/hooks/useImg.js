import { createResource } from "../Utils";

const cache = new Map();

export default function loadImage(source) {
  let resource = cache.get(source);
  if (resource) return resource;

  resource = createResource(
    () =>
      new Promise((resolve, reject) => {
        const img = new window.Image();
        img.src = source;
        img.addEventListener("load", () => resolve(source));
        img.addEventListener("error", () =>
          reject(new Error(`Failed to load image ${source}`))
        );
      })
  );

  cache.set(source, resource);
  return resource;
}
