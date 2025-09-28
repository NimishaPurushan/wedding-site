import { useEffect, useState } from "react";
import floralBg from "../assets/background.jpg";

const IntroPage = () => {
  const poemLines = [
    "He was the calm of mountain air,",
    "She was the ocean, bold and rare.",
    "Through distance, storms, and fleeting years,",
    "They held on tight to love sincere.",
    "Now hand in hand, their hearts declare,",
    "A lifetime’s journey, love to share.",
  ];

  const [visibleLines, setVisibleLines] = useState<String[]>([]);
  const [showPoem, setShowPoem] = useState(false);

  useEffect(() => {
    const hasVisited = true;

    if (!hasVisited) {
      setShowPoem(true);
      // Reveal lines one by one
      poemLines.forEach((line, index) => {
        setTimeout(() => {
          setVisibleLines((prev) => [...prev, line]);
        }, index * 2000); // 2s interval per line
      });
    }
  }, []);

  const handleJoin = () => {
    setShowPoem(false);
  };

  if (!showPoem) return <></>;

  const layoutStyle = {
    backgroundImage: `url(${floralBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div
      className="h-screen w-screen flex items-center justify-center bg-pink-100 bg-cover bg-center relative"
      style={layoutStyle}
    >
      {/* Soft overlay for readability */}
      <div className="absolute inset-0 bg-pink-200/30 backdrop-blur-sm"></div>

      {/* Poem Content */}
      <div className="relative z-10 text-center px-6">
        <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-pink-200 p-8 max-w-2xl mx-auto">
          <div className="space-y-6">
            {visibleLines.map((line, i) => (
              <p
                key={i}
                className="text-xl md:text-2xl font-light text-pink-800 opacity-0 animate-fadeIn"
                style={{ animationDelay: `${i * 2}s` }}
              >
                {line}
              </p>
            ))}
          </div>

          {/* Anchor link at bottom */}
          {visibleLines.length === poemLines.length && (
            <div className="mt-8">
              <button
                onClick={handleJoin}
                className="px-8 py-4 font-semibold rounded-3xl shadow-lg transition-all duration-300 transform hover:scale-105"
                style={{
                  backgroundColor: "#bc8729",
                  color: "white",
                  border: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#a67523";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#bc8729";
                }}
              >
                Be part of our journey
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
