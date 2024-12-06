import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignupPage: React.FC = () => {
  const [formData, setFormData] = useState({
    username: "",
    nickname: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

    alert("회원가입이 완료되었습니다!");
    // console.log("Submitted Data:", formData);
    formData && navigate("/");
  };

  return (
    <main className="flex items-center justify-center min-h-screen">
      <section className="border border-white p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">회원가입</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium">
              아이디
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
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
