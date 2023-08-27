import { useState } from "react";
import group906 from "../../../assets/images/group-906.png";

type AvatarMap = {
  [key: number]: string;
};

const initialAvatar: AvatarMap = {
  1: group906,
  2: group906,
  3: group906,
  4: group906,
  5: group906,
  6: group906,
};

const useProfileImage = () => {
  // State to manage the currently selected avatar.
  const [avatarImage, setAvatarImage] = useState<string>(initialAvatar[1]);
  const [imageUrl, setImageUrl] = useState<string | undefined>();

  // Function to handle the avatar selection.
  const handleAvatarClick = (item: any) => {
    const imageIndex = item?.item || 1; //initialAvatar[item?.item || 1];
    setAvatarImage(initialAvatar[imageIndex]);
  };

  const handleUploadImage = (image: string) => {
    // Implementation for uploading image
    console.log("handleUploadImage", image);
    setImageUrl(image);
  };

  return {
    imageUrl,
    initialAvatar,
    avatarImage,
    handleAvatarClick,
    handleUploadImage,
  };
};

export default useProfileImage;
