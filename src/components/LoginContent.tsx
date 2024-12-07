import { useFormData } from "../hooks/common/useFormData";
import { useLoginMutation } from "../hooks/login/useMutations";
import SubmitButton from "../common/SubmitButton";
import TextInput from "../common/TextInput";

const LoginContent = () => {
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
  );
};

export default LoginContent;
