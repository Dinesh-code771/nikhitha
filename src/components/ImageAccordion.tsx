import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface ImageCategory {
  name: string;
  images: string[];
  icon?: React.ReactNode;
}

interface ImageAccordionProps {
  categories: ImageCategory[];
  projectTitle: string;
}

const ImageAccordion: React.FC<ImageAccordionProps> = ({
  categories,
  projectTitle,
}) => {
  const [openCategory, setOpenCategory] = useState<string | null>("Bedrooms");

  const toggleCategory = (categoryName: string) => {
    setOpenCategory(openCategory === categoryName ? null : categoryName);
  };

  return (
    <div className="space-y-4">
      {categories.map((category) => (
        <div
          key={category.name}
          className="border border-slate-200 rounded-lg overflow-hidden"
        >
          <button
            onClick={() => toggleCategory(category.name)}
            className="w-full px-6 py-4 bg-slate-50 hover:bg-slate-100 transition-colors duration-200 flex items-center justify-between text-left"
          >
            <div className="flex items-center space-x-3">
              {category.icon && (
                <span className="text-slate-600">{category.icon}</span>
              )}
              <h3 className="text-lg font-semibold text-slate-800 capitalize">
                {category.name}
              </h3>
            </div>
            {openCategory === category.name ? (
              <ChevronUp className="w-5 h-5 text-slate-600" />
            ) : (
              <ChevronDown className="w-5 h-5 text-slate-600" />
            )}
          </button>

          {openCategory === category.name && (
            <div className="p-6 bg-white">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {category.images.map((image, index) => (
                  <div
                    key={index}
                    className="rounded-lg overflow-hidden bg-slate-100 aspect-video"
                  >
                    <img
                      src={image}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      alt={`${projectTitle} - ${category.name} ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ImageAccordion;
