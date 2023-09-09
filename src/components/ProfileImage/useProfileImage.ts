import { useState } from "react";
import { uploadUserProfilePicture } from "../../services/users";
import { AppDispatch } from "../../store";
import { useDispatch } from "react-redux";
import group902 from "../../assets/images/group902.png";
import group904 from "../../assets/images/group904.png";
import group905 from "../../assets/images/group905.png";
import group908 from "../../assets/images/group908.png";
import group907 from "../../assets/images/group907.png";
import group909 from "../../assets/images/group909.png";

type AvatarMap = {
  [key: number]: string;
};

const initialAvatar: AvatarMap = {
  1: group902,
  2: group904,
  3: group905,
  4: group908,
  5: group907,
  6: group909,
};

const useProfileImage = () => {
  const dispatch = useDispatch<AppDispatch>();
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
    dispatch(uploadUserProfilePicture(image)).then((res) => {
      console.log("uploadUserProfilePicture res---->", res);
    });
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
