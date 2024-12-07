import TextInput from "../common/TextInput";
import { useFormData } from "../hooks/common/useFormData";
import { useSignUpMutation } from "../hooks/signUp/useMutations";

const SignupPage: React.FC = () => {
  // 테스트 id, pw : christmasTest

  const { signUpMutation } = useSignUpMutation();

  const { formData, handleChangeFormData } = useFormData({
    userId: "",
    nickname: "",
    password: "",
    confirmPassword: "",
  });

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
  };

  return (
    <main className="flex items-center justify-center min-h-screen">
      <section className="border border-white rounded-md p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">회원가입</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
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
            id="nickname"
            label="닉네임"
            name="nickname"
            value={formData.nickname}
            onChange={handleChangeFormData}
            placeholder="닉네임을 입력하세요"
            required
          />
          <TextInput
            id="password"
            label="비밀번호"
            name="password"
            value={formData.password}
            onChange={handleChangeFormData}
            placeholder="비밀번호를 입력하세요"
            required
            type="password"
          />
          <TextInput
            id="confirmPassword"
            label="비밀번호 확인"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChangeFormData}
            placeholder="비밀번호를 다시 입력하세요"
            required
            type="password"
          />
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
