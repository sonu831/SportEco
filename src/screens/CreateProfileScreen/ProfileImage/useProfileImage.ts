import { useState } from "react";
import group906 from "../../../assets/images/group-906.png";

type AvatarMap = {
  [key: number]: number;
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
  const [avatarImage, setAvatarImage] = useState<number | undefined>();

  // Function to handle the avatar selection.
  const handleAvatarClick = (imageCounter: number = 1) => {
    setAvatarImage(initialAvatar[imageCounter]);
  };

  const handleUploadImage = () => {
    // Implementation for uploading image
  };

  return {
    initialAvatar,
    avatarImage,
    handleAvatarClick,
    handleUploadImage,
  };
};

export default useProfileImage;
