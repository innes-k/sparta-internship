import { useState } from "react";
import { useLoginMutation } from "../queries/hooks/useMutations/login/useMutations";

const LoginPage: React.FC = () => {
  const { loginMutation } = useLoginMutation();

  const [formData, setFormData] = useState({
    userId: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value.trim(),
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const usePayload = {
      id: formData.userId,
      password: formData.password,
    };

    loginMutation(usePayload);

    // console.log("Submitted Data:", formData);
  };

  return (
    <main className="flex items-center justify-center min-h-screen">
      <section className="border border-white rounded-md p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">로그인</h1>
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
              onChange={handleChange}
              placeholder="아이디를 입력하세요"
              required
              className="mt-1 block w-full rounded-md shadow-sm text-black"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium">
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
              className="mt-1 block w-full rounded-md shadow-sm text-black"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            로그인하기
          </button>
        </form>
      </section>
    </main>
  );
};

export default LoginPage;
