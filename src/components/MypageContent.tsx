import { useEffect, useState } from "react";
import { useGetUserInfo } from "../hooks/mypage/useQueries";
import { useUpdateUserInfoMutation } from "../hooks/mypage/useMutations";
import TextInput from "../common/TextInput";
import SubmitButton from "../common/SubmitButton";
import MypageProfileImg from "./MypageProfileImg";

const MypageContent: React.FC = () => {
  const [profileImage, setProfileImage] = useState<string>("");
  const [newFile, setNewFile] = useState<File>();
  const [nickname, setNickname] = useState<string>("");
  const [isEditing, setIsEditing] = useState<boolean>(false); // 수정 상태 여부

  const { userInfo, isUserInfoLoading, isUserInfoError } = useGetUserInfo();
  const { updateUserInfoMutation } = useUpdateUserInfoMutation();

  useEffect(() => {
    if (userInfo) {
      setProfileImage(userInfo.avatar);
      setNickname(userInfo.nickname);
    }
  }, [userInfo]);

  if (isUserInfoLoading) {
    return <div>Loading...</div>;
  }

  if (isUserInfoError) {
    return <div>Error</div>;
  }

  const { id: userId, nickname: originalNickname, avatar: originalAvatar } = userInfo;

  // 닉네임 변경 핸들러
  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  // 수정하기/저장하기 버튼 핸들러
  const handleButtonClick = () => {
    if (isEditing) {
      if (nickname === originalNickname && profileImage === originalAvatar) {
        alert("변경된 값이 없습니다.");
        return;
      } else {
        console.log("newFile", newFile);
        updateUserInfoMutation({ avatar: newFile!, nickname });
      }
    }
    setIsEditing(!isEditing);
  };

  return (
    <>
      <MypageProfileImg
        profileImage={profileImage}
        setProfileImage={setProfileImage}
        setNewFile={setNewFile}
        isEditing={isEditing}
      />

      {/* 아이디 */}
      <TextInput
        id="userId"
        label="아이디"
        name="userId"
        value={userId}
        onChange={() => {}}
        type="text"
        className="border-gray-300 bg-gray-100 text-gray-500 cursor-not-allowed"
        placeholder=""
        required={false}
      />

      {/* 닉네임 */}
      <TextInput
        id="nickname"
        label="닉네임"
        name="nickname"
        value={nickname}
        onChange={handleNicknameChange}
        type="text"
        placeholder="닉네임을 입력하세요"
        className={`${
          isEditing
            ? "border-blue-500 text-black"
            : "border-gray-300 text-gray-500 bg-gray-100 cursor-not-allowed"
        }`}
        required
      />

      {/* 버튼 */}
      <SubmitButton type="button" onClick={handleButtonClick}>
        {isEditing ? "저장하기" : "내 정보 수정하기"}
      </SubmitButton>
    </>
  );
};

export default MypageContent;
