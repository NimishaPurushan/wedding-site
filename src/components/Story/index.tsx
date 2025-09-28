export default function Story({ content }: { content: string }) {
  return (
    <div className="story bg-gradient-to-b from-pink-50 to-white text-gray-800 text-center px-6 py-12 rounded-2xl shadow-md max-w-3xl mx-auto">
      <h1 className="text-5xl font-extrabold mb-6 text-orange-300 drop-shadow-sm tracking-wide">
        Our Love Story
      </h1>
      <p className="text-lg leading-relaxed text-gray-700 italic max-w-2xl mx-auto">
        {content.split("\n").map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))}
      </p>
    </div>
  );
}
