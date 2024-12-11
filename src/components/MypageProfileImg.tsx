import type { MypageProfileImgProps } from "../types/myPageTypes";

const MypageProfileImg: React.FC<MypageProfileImgProps> = ({
  profileImage,
  setProfileImage,
  setNewFile,
  isEditing,
}) => {
  // 프로필 이미지 변경 핸들러
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);

      setProfileImage(imageUrl);
      setNewFile(file);
    }
  };

  return (
    <>
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
    </>
  );
};

export default MypageProfileImg;
