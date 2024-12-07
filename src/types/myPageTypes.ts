export interface UpdateUserInfoRequest {
  avatar: File;
  nickname: string;
}

export interface MypageProfileImgProps {
  profileImage: string;
  setProfileImage: React.Dispatch<React.SetStateAction<string>>;
  setNewFile: React.Dispatch<React.SetStateAction<File | undefined>>;
  isEditing: boolean;
}
