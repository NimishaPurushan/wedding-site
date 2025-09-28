import { useEffect, useRef, useState } from "react";


type WeddingEvent = {
  venue: string;
  mapLink: string;
  description: string;
  caption: string;
  date: string; // e.g. "November 30, 2025 at 9:00 AM"
};

export type WeddingData = {
  weddingDate: string; // ISO date format "2025-11-30T09:00:00Z"
  Addresses: {
    [key: string]: WeddingEvent
  };
  countdownMessage: string;
  invitationMessage: string;
  storyTitle: string;
  storyContent: string;
  photosTitle: string;
  photosContent: string;
  eventsTitle: string;
  eventsContent: string;
};



export async function loadContent(signal?: AbortSignal): Promise<WeddingData> {
  const response = await fetch("/content.json", {
    cache: "force-cache",
    signal,
  });
  if (!response.ok) {
    throw new Error(`Failed to load content.json: ${response.statusText}`);
  }
  const data = await response.json();
  return data;
}


export default function useContentLoader() {
  const ref = useRef(0);
 const [content, setContent] = useState<any>(null);
 const [error, setError] = useState<string | null>(null);
 const [loading, setLoading] = useState<boolean>(false);
  
 
 useEffect(() => {
    ref.current += 1;
    console.log("ContentLoader mounted or updated", ref.current);
  });

  useEffect(() => {
    const signal = new AbortController()
    setLoading(true);
    loadContent(signal.signal)
      .then((data: WeddingData) => {
        setContent(data);
      })
      .catch((error: { name: string; }) => {
        if (error.name !== "AbortError"){
          setError("Failed to load content.");
        }
      }).finally(() => {
        setLoading(false);
      });

    return () => {
      signal.abort();
    };
  }, []);

  return { content, error, loading };
}

