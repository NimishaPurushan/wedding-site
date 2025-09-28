import { useEffect } from "react";
import Photos from "../../components/Photos";
import { fetchImages } from "../../utils/mediaLoader";
import { useState } from "react";

type Photo = { url: string; title?: string | null };

export const PhotosPage = () => {
  // const photos = [
  //     // Add your photo URLs here
  //     "photos/IMG_9893.jpeg",
  //     "photos/IMG_9895.jpeg",
  //     "photos/IMG_9897.jpeg"
  // ];

  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;
    (async () => {
      try {
        const data = await fetchImages();
        console.log("Fetched photos:", data);
        if (isMounted) {
          // filter out nulls from fetchImages()
          if (data) {
            setPhotos(data.filter((photo): photo is Photo => photo !== null));
          }
        }
      } catch (e) {
        if (isMounted) setError(e as Error);
      } finally {
        if (isMounted) setLoading(false);
      }
    })();
    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) return <div>Loading images…</div>;
  if (error) return <div>Failed to load images: {error.message}</div>;

  return (
    <div
      id="photos"
      className="flex flex-col items-center justify-center min-h-screen bg-white"
    >
      <div className="photos text-black text-center px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Our Photos</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <Photos key={index} url={photo.url} />
          ))}
        </div>
      </div>
    </div>
  );
};
