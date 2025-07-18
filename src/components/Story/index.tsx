export default function Story({ content }: { content: string }) {
  return (
    <div className="story text-black text-center px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Our Love Story</h1>
      <p className="mb-2">{content}</p>
      <p className="mb-2">From that moment, they knew they were meant to be together.</p>
      <p className="mb-2">After many adventures and cherished moments, they decided to take the next step.</p>
      <p>Join us as we celebrate our journey and the love that brought us here.</p>
    </div>
  );
}
