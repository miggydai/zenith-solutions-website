import React from "react";

const logoMarquee: React.FC = () => {
  return (
    <div className="w-full h-auto overflow-x-hidden bg-slate-600">
      <div className="relative flex overflow-x-hidden">
        <div className="py-12 animate-marquee whitespace-nowrap">
          <span className="text-4xl mx-4">Marquee Item 1</span>
          <span className="text-4xl mx-4">Marquee Item 2</span>
          <span className="text-4xl mx-4">Marquee Item 3</span>
          <span className="text-4xl mx-4">Marquee Item 4</span>
          <span className="text-4xl mx-4">Marquee Item 5</span>
        </div>
      </div>
    </div>
  );
};

export default logoMarquee;
