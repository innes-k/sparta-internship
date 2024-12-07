import { useFormData } from "../hooks/common/useFormData";
import { useLoginMutation } from "../hooks/login/useMutations";
import SubmitButton from "../common/SubmitButton";
import TextInput from "../common/TextInput";

const LoginPage: React.FC = () => {
  const { loginMutation } = useLoginMutation();

  const { formData, handleChangeFormData } = useFormData({
    userId: "",
    password: "",
  });

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
          <SubmitButton type="submit">로그인하기</SubmitButton>
        </form>
      </section>
    </main>
  );
};

export default LoginPage;
