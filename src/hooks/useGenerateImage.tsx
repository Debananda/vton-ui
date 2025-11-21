import axios from "axios";
import { useState } from "react";
import { useSessionStorage } from "usehooks-ts";

const dataURLtoFile = (dataurl: string, filename: string): File => {
  const arr = dataurl.split(",");
  const mimeMatch = arr[0].match(/:(.*?);/);
  const mime = mimeMatch ? mimeMatch[1] : "application/octet-stream"; // Default MIME type if not found
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  const blob = new Blob([u8arr], { type: mime });
  return new File([blob], filename, { type: mime, lastModified: Date.now() });
};

const fetchGeneratedImage = async (
  userImage: string,
  productImages: string[],
  setLoading: (loading: boolean) => void
) => {
  try {
    setLoading(true);
    const formData = new FormData();
    formData.append("userImage", dataURLtoFile(userImage, "userImage.png"));
    productImages.forEach((img) => {
      formData.append(`productImages`, img);
    });
    const response = await axios.post("/api/gemini/generateImage", formData, {
      responseType: "blob",
    });
    const imageUrl = URL.createObjectURL(response.data);
    return imageUrl;
  } catch (e: unknown) {
    console.error(e);
  } finally {
    setLoading(false);
  }
};
const useGenerateImage = () => {
  const [userImage, setUserImage, removeUserImage] = useSessionStorage(
    "userImageVTON",
    ""
  );
  const [generatedImage, setGeneratedImage] = useState<string>("");
  const [isGeneratingImg, setIsGeneratingImg] = useState(false);

  const generateLook = async (productImages: string[]) => {
    if (!userImage) return;
    const generatedImg = await fetchGeneratedImage(
      userImage,
      productImages,
      setIsGeneratingImg
    );
    setGeneratedImage(generatedImg || "");
  };

  return {
    userImage,
    generatedImage,
    isGeneratingImg,
    setUserImage,
    removeUserImage,
    generateLook,
  };
};
export default useGenerateImage;
