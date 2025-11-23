import axios from "axios";
import { useState } from "react";
import { useSessionStorage } from "usehooks-ts";

const blobToBase64 = (blob: Blob) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
};
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
    formData.append("user_pic", dataURLtoFile(userImage, "userImage.png"));
    // productImages.forEach((img) => {
    //   formData.append(`product_images`, img);
    // });
    formData.append(`product_images`, productImages[0]);
    const response = await axios.post("/api/gemini/generateImage1", formData, {
      responseType: "blob",
    });
    const base64String = (await blobToBase64(response.data)) as string;
    return base64String;
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
    setIsGeneratingImg(true);
    const generatedUserImg = await fetchGeneratedImage(
      userImage,
      productImages,
      setIsGeneratingImg
    );
    setIsGeneratingImg(false);
    setGeneratedImage(generatedUserImg || "");
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
