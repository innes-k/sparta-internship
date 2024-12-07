import { useState } from "react";
import { useLoginMutation } from "../queries/hooks/useMutations/login/useMutations";
import TextInput from "../commons/TextInput";

const LoginPage: React.FC = () => {
  const { loginMutation } = useLoginMutation();

  const [formData, setFormData] = useState({
    userId: "",
    password: "",
  });

  const handleChangeFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value.trim(),
    }));
  };

  const handleSubmitLoginInfo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const usePayload = {
      id: formData.userId,
      password: formData.password,
    };

    loginMutation(usePayload);
  };

  return (
    <main className="flex items-center justify-center min-h-screen">
      <section className="border border-white rounded-md p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">로그인</h1>
        <form onSubmit={handleSubmitLoginInfo} className="space-y-4">
          <TextInput
            id="userId"
            label="아이디"
            name="userId"
            value={formData.userId}
            onChange={handleChangeFormData}
            placeholder="아이디를 입력하세요"
            required
          />
          <TextInput
            id="password"
            label="비밀번호"
            name="password"
            value={formData.password}
            onChange={handleChangeFormData}
            type="password"
            placeholder="비밀번호를 입력하세요"
            required
          />
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
