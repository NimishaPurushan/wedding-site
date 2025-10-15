type StoryContent = {
  storyContent: string;
  photoUrl: string;
};

export default function Story({
  content
}: {
  content: StoryContent[];
}) {

  return (
    <div className="flex flex-col gap-8 items-start max-w-4xl mx-auto">
      {content.map((line, index) => (
      <div
        key={index}
        className={`flex flex-col md:flex-row ${
        index % 2 === 0 ? '' : 'md:flex-row-reverse'
        } gap-8 items-center w-full`}
      >
        <div className="md:w-1/2 w-full flex justify-center">
        <img
          src={line.photoUrl}
          className="rounded shadow-md max-w-full h-auto"
          alt={`Story photo ${index + 1}`}
        />
        </div>
        <div className="md:w-1/2 w-full">
        <p className="text-lg leading-relaxed text-gray-700 italic">
          {line.storyContent}
        </p>
        </div>
      </div>
      ))}
    </div>
  );
}
