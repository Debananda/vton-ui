import { LoaderCircle, X } from "lucide-react";
import React from "react";
interface ImageGridProps {
  userImage: string;
  isGeneratingImg: boolean;
  generatedImage: string;
  removeUserImage: () => void;
  generateUserLook: () => void;
}
const ImageGrid: React.FC<ImageGridProps> = ({
  generateUserLook,
  userImage,
  removeUserImage,
  isGeneratingImg,
  generatedImage,
}) => {
  const removeImage = () => {
    removeUserImage();
  };
  return (
    <div className="grid grid-cols-2 gap-2">
      <div className="aspect-3/4 rounded relative border border-gray-200 p-1">
        <img
          src={userImage}
          className="aspect-3/4 w-full h-full object-cover"
        />
        <button
          type="button"
          className="rounded-full bg-black text-white absolute top-2 right-2 p-1 cursor-pointer"
          onClick={removeImage}
        >
          <X size={16} />
        </button>
      </div>
      <div className="aspect-3/4 rounded relative border border-gray-200 p-1">
        {generatedImage ? (
          <img
            src={generatedImage}
            className="aspect-3/4 w-full h-full object-cover"
          />
        ) : (
          <button
            className="bg-slate-800 text-white cursor-pointer px-4 py-2 w-full absolute bottom-1 flex items-center justify-center disabled:cursor-not-allowed"
            disabled={isGeneratingImg}
            onClick={generateUserLook}
          >
            {isGeneratingImg && (
              <LoaderCircle size={18} className="animate-spin mr-2" />
            )}
            Generate Image
          </button>
        )}
      </div>
    </div>
  );
};

export default ImageGrid;
