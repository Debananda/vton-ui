import React from "react";
import ImageGrid from "./ImageGrid";
import useGenerateImage from "../../hooks/useGenerateImage";

interface VirtualTryOnProps {
  images: string[];
}
const VirtualTryOn: React.FC<VirtualTryOnProps> = ({ images }) => {
  const { userImage, setUserImage, generateLook } = useGenerateImage();
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const selectFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        // The result attribute contains the data as a URL representing the file's data as a base64 encoded string.
        const dataUrl = e.target!.result;
        console.log(dataUrl);
        setUserImage(dataUrl as string);
      };

      reader.onerror = (error) => {
        console.error("Error reading file:", error);
      };

      // Read the file as a Data URL
      reader.readAsDataURL(file);
    }
  };
  const generateUserLook = () => {
    generateLook(images);
  };
  return (
    <div>
      {!userImage && (
        <>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={selectFile}
          />
          <button
            type="button"
            className="border border-gray-400 bg-gray-100 text-black py-2 px-4  w-full"
            onClick={() => fileInputRef.current?.click()}
          >
            Upload your image
          </button>
        </>
      )}
      {userImage && <ImageGrid generateUserLook={generateUserLook} />}
    </div>
  );
};

export default VirtualTryOn;
