import React from "react";

const FlipCard = ({
  frontTitle,
  frontText,
  backTitle,
  backText,
  frontImage,
  bg = "bg-sky-200",
}) => {
  return (
      <div
  className="
    group perspective
    w-[90%] h-40         /* mobile default (rectangle) */
    md:w-[90%] md:h-40   /* tablet keeps rectangle */
    lg:w-80 lg:h-70     /* desktop switches to square */
  "
>
      <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">

        {/* Front */}
        <div
          className={`absolute inset-0 ${bg} shadow-xl text-white p-4 flex flex-col justify-center items-center backface-hidden `}
        >
          {/* Image centered */}
          {frontImage && (
            <img
              src={frontImage}
              alt={frontTitle}
              className="w-16 h-16 mb-4 object-contain"
            />
          )}

          {/* Text centered */}
          <h3 className="text-lg font-semibold text-center">{frontTitle}</h3>
          <p className="text-sm opacity-90 text-center">{frontText}</p>
        </div>

        {/* Back */}
        <div
          className={`absolute inset-0 ${bg} shadow-xl text-white p-6 flex flex-col justify-center items-center rotate-y-180 backface-hidden `}
        >
          <h3 className="text-xl font-semibold mb-2">{backTitle}</h3>
          <p className="text-center text-sm opacity-90">{backText}</p>
        </div>

      </div>
    </div>
  );
};

export default FlipCard;
