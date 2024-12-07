import { useEffect, useState } from "react";
import { useGetUserInfo } from "../queries/hooks/useQueries/useQueries";
import { useUpdateUserInfoMutation } from "../queries/hooks/useMutations/mypage/useMutations";

const MyPage: React.FC = () => {
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

  // 프로필 이미지 변경 핸들러
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);

      setProfileImage(imageUrl);
      setNewFile(file);
    }
  };

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
    <main className="flex items-center justify-center min-h-screen">
      <section className="border border-white p-8 w-full max-w-md rounded-md shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">마이페이지</h1>

        {/* 프로필 이미지 */}
        <div className="flex flex-col items-center mb-6">
          <img
            src={profileImage === null ? "https://via.placeholder.com/150" : profileImage}
            alt="프로필 이미지"
            className="w-32 h-32 rounded-full object-cover mb-4 border border-gray-300"
          />
          {isEditing && (
            <label
              htmlFor="profileImage"
              className="cursor-pointer bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              프로필 이미지 변경
            </label>
          )}

          <input
            type="file"
            id="profileImage"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
        </div>

        {/* 아이디 */}
        <div className="mb-4">
          <label className="text-sm font-medium mb-1">아이디</label>
          <input
            type="text"
            value={userId}
            readOnly
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 bg-gray-100 text-gray-500 cursor-not-allowed"
          />
        </div>

        {/* 닉네임 */}
        <div className="mb-6">
          <label className="text-sm font-medium mb-1">닉네임</label>
          <input
            type="text"
            value={nickname}
            onChange={handleNicknameChange}
            readOnly={!isEditing}
            placeholder="닉네임을 입력하세요"
            className={`mt-1 block w-full border rounded-md p-2 ${
              isEditing
                ? "border-blue-500 text-black"
                : "border-gray-300 text-gray-500 bg-gray-100 cursor-not-allowed"
            }`}
          />
        </div>

        {/* 버튼 */}
        <button
          onClick={handleButtonClick}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          {isEditing ? "저장하기" : "내 정보 수정하기"}
        </button>
      </section>
    </main>
  );
};

export default MyPage;
