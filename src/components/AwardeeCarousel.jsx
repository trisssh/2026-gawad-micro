import { useState, useMemo, useEffect, useRef, useCallback } from "react";

// Array into chunks (default 4 per page)
function chunkArray(arr, size) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

function AwardeeCard({ image, alt }) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-amber-100/80 bg-white p-2 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-amber-300">
      <div className="overflow-hidden rounded-lg">
        <img
          src={image}
          alt={alt}
          className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    </div>
  );
}



  export default function AwardeeCarousel({
  items,
  itemsPerPage = 4,
  autoPlay = true,
  intervalMs = 5000,
}) {
  const [pageIndex, setPageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  const pages = useMemo(
    () => chunkArray(items, itemsPerPage),
    [items, itemsPerPage]
  );

  const totalPages = pages.length;
  const isSinglePage = totalPages <= 1;

  const goPrev = useCallback(() => {
    setPageIndex((i) => (i === 0 ? totalPages - 1 : i - 1));
  }, [totalPages]);

  const goNext = useCallback(() => {
    setPageIndex((i) => (i === totalPages - 1 ? 0 : i + 1));
  }, [totalPages]);

  // Autoplay logic
  useEffect(() => {
    if (!autoPlay || isSinglePage || isPaused) return;

    intervalRef.current = setInterval(() => {
      goNext();
    }, intervalMs);

    return () => clearInterval(intervalRef.current);
  }, [autoPlay, isSinglePage, isPaused, intervalMs, goNext]);

  // Manual navigation
  const handleManualNav = (action) => {
    action();
    setIsPaused(true);
    clearInterval(intervalRef.current);

    // autoplay continue
    setTimeout(() => setIsPaused(false), intervalMs);
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Sliding track */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${pageIndex * 100}%)` }}
        >
          {pages.map((page, pageIdx) => (
            <div key={pageIdx} className="w-full flex-shrink-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {page.map((item, i) => (
                  <AwardeeCard key={i} image={item.image} alt={item.alt} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Prev / Next arrows */}
      {!isSinglePage && (
        <>
          <button
            onClick={() => handleManualNav(goPrev)}
            aria-label="Previous"
            className="absolute -left-3 md:-left-5 top-1/2 -translate-y-1/2
                       w-9 h-9 md:w-10 md:h-10 rounded-full bg-white border border-amber-200
                       shadow-md flex items-center justify-center
                       text-amber-600 hover:bg-amber-500 hover:text-white
                       transition-colors duration-200 z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <button
            onClick={() => handleManualNav(goNext)}
            aria-label="Next"
            className="absolute -right-3 md:-right-5 top-1/2 -translate-y-1/2
                       w-9 h-9 md:w-10 md:h-10 rounded-full bg-white border border-amber-200
                       shadow-md flex items-center justify-center
                       text-amber-600 hover:bg-amber-500 hover:text-white
                       transition-colors duration-200 z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </>
      )}

      {/* Dots indicator */}
      {!isSinglePage && (
        <div className="flex justify-center gap-2 mt-5">
          {pages.map((_, i) => (
            <button
              key={i}
              onClick={() => handleManualNav(() => setPageIndex(i))}
              aria-label={`Go to page ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === pageIndex
                  ? "w-6 bg-amber-500"
                  : "w-2 bg-amber-200 hover:bg-amber-300"
              }`}
            />
          ))}
        </div>
      )}

      {/* Page counter */}
      {!isSinglePage && (
        <p className="text-center text-xs text-gray-400 mt-2">
          {pageIndex + 1} / {totalPages}
        </p>
      )}
    </div>
  );
}

