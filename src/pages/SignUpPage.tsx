import { useState } from "react";
import { useSignUpMutation } from "../queries/hooks/useMutations";

const SignupPage: React.FC = () => {
  const { signUpMutation } = useSignUpMutation();

  const [formData, setFormData] = useState({
    userId: "",
    nickname: "",
    password: "",
    confirmPassword: "",
  });

  const handleChangeFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value.trim(),
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("비밀번호가 일치하지 않습니다!");
      return;
    }

    const userPayload = {
      id: formData.userId,
      password: formData.password,
      nickname: formData.nickname,
    };

    signUpMutation(userPayload);

    // console.log("Submitted Data:", formData);
  };

  return (
    <main className="flex items-center justify-center min-h-screen">
      <section className="border border-white rounded-md p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">회원가입</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="userId" className="block text-sm font-medium">
              아이디
            </label>
            <input
              type="text"
              id="userId"
              name="userId"
              value={formData.userId}
              onChange={handleChangeFormData}
              placeholder="아이디를 입력하세요"
              required
              className="mt-1 block w-full rounded-md shadow-sm text-black"
            />
          </div>
          <div>
            <label htmlFor="nickname" className="block text-sm font-medium ">
              닉네임
            </label>
            <input
              type="text"
              id="nickname"
              name="nickname"
              value={formData.nickname}
              onChange={handleChangeFormData}
              placeholder="닉네임을 입력하세요"
              required
              className="mt-1 block w-full  rounded-md shadow-sm  text-black"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium ">
              비밀번호
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChangeFormData}
              placeholder="비밀번호를 입력하세요"
              required
              className="mt-1 block w-full  rounded-md shadow-sm  text-black"
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium ">
              비밀번호 확인
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChangeFormData}
              placeholder="비밀번호를 다시 입력하세요"
              required
              className="mt-1 block w-full  rounded-md shadow-sm  text-black"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            회원가입하기
          </button>
        </form>
      </section>
    </main>
  );
};

export default SignupPage;
