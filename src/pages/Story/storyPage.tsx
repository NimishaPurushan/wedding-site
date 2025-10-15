
import Story from "../../components/Story";
import useContentLoader from "../../utils/contentLoader";
import { fetchImages } from "../../utils/mediaLoader";
import { useState } from "react";

const textStyle = {
    textDecoration: "none",
    color: "#bc8729",
    fontWeight: "bold",
  };

type Photo = { url: string; title?: string | null };

type StoryContent = {
  storyContent: string;
  photoUrl: string;
};

import { useEffect } from "react";

export const StoryPage = () => {
  const { content, error, loading } = useContentLoader();
  const storyText = content?.storyContent || [""];

  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading2, setLoading2] = useState(true);
  const [error2, setError2] = useState<Error | null>(null);
  const [storyContent, setStoryContent] = useState<StoryContent[]>([]);
  
    useEffect(() => {
      let isMounted = true;
      (async () => {
        try {
          const data = await fetchImages();
        
          if (isMounted && data) {
            // filter out nulls from fetchImages()
            setPhotos(data.filter((photo): photo is Photo => photo !== null));
          }
        } catch (e) {
          if (isMounted) setError2(e as Error);
        } finally {
          if (isMounted) setLoading2(false);
        }
      })();
      return () => {
        isMounted = false;
      };
    }, []);

    // Build storyContent after both storyText and photos are available
    useEffect(() => {
      if (storyText.length && photos.length) {
        const newStoryContent = storyText.map((element: string, i: number) => {
          const randomPhoto = photos[i]?.url || "";
          return { storyContent: element, photoUrl: randomPhoto };
        });
        setStoryContent(newStoryContent);
      }
    }, [storyText, photos]);

    if (loading2) return <div>Loading images…</div>;
    if (error2) return <div>Failed to load images: {error2.message}</div>;
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div
        id="story"
        className="flex flex-col items-center justify-center min-h-screen bg-white"
      >
        <div className="story bg-gradient-to-b from-orange-50 to-white text-gray-800 text-center px-6 py-12 rounded-2xl shadow-md max-w-3xl mx-auto">

          <h1 className="text-5xl font-extrabold mb-6 text-pink-300 drop-shadow-sm tracking-wide" style={textStyle}>
            Our Journey Together
          </h1>
          {
            content && content.poemLines?.map((line: string, index: number) => (
              <p
                key={index}
                className="text-lg md:text-2xl font-light text-orange-500"
              >
                {line}
              </p>
            ))
          }
          {/* Add space after poem */}
          <div className="my-8" />
          <div className="my-6" />
          <div className="my-6" />


          <Story content={storyContent}  />
        </div>
      </div>
    </div>
  );
};
