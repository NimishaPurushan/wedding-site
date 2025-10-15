// contentLoader.ts
import { createClient } from "contentful";

const client = createClient({
  space: import.meta.env.VITE_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_DELIVERY_ACCESS_TOKEN,
});

export async function fetchImages() {
  const entries = await client.getAssets();
  

  return entries.items.map((item) => {
    const image = item.fields.file; // Assuming 'image' is the asset field
    if (!image || !image.url) {
      console.warn("Image URL is missing for item:", item);
      return null; // Skip this item if no URL
    }
    return {
      url: image.url.startsWith("//") ? `https:${image.url}` : image.url,
    };
  });
}
