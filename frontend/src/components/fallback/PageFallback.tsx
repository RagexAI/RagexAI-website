import React from "react";

const PageFallback: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="h-14 bg-gray-200 animate-pulse" />

      <div className="flex">
        <aside className="hidden md:block w-64 h-[calc(100vh-56px)] bg-gray-100 p-4 space-y-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="h-4 bg-gray-300 rounded animate-pulse"
            />
          ))}
        </aside>
        <main className="flex-1 p-6 space-y-6">
   
          <div className="h-8 w-56 bg-gray-300 rounded animate-pulse" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="h-40 bg-gray-200 rounded-lg animate-pulse"
              />
            ))}
          </div>

          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded animate-pulse w-full" />
            <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6" />
            <div className="h-4 bg-gray-200 rounded animate-pulse w-4/6" />
            <div className="h-4 bg-gray-200 rounded animate-pulse w-3/6" />
          </div>
        </main>
      </div>
    </div>
  );
};

export default PageFallback;