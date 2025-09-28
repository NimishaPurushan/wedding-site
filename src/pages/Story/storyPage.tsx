import Story from "../../components/Story";
import useContentLoader from "../../utils/contentLoader";

export const StoryPage = () => {
  const { content, error, loading } = useContentLoader();
  const storyContent = content?.storyContent || "";
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div
      id="story"
      className="flex flex-col items-center justify-center min-h-screen bg-white"
    >
      <Story content={storyContent} />
    </div>
  );
};
