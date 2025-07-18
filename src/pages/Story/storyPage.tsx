import Layout from "../../components/Layout";
import Story from "../../components/Story";
import { loadContent } from "../../utils/contentLoader";
import { useEffect, useState } from "react";

export const StoryPage = () => {
  const [content,setcontent] = useState("");

  useEffect(() =>{
    loadContent()
      .then((data) => setcontent(data.storyContent))
  }, []);

  return (
   <Layout>
        <div className="flex flex-col items-center justify-center min-h-screen bg-white">
            <Story content={content} />
        </div>
    </Layout>
  );
}