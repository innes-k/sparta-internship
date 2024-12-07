import { useFormData } from "../hooks/common/useFormData";
import { useSignUpMutation } from "../hooks/signUp/useMutations";
import SubmitButton from "../common/SubmitButton";
import TextInput from "../common/TextInput";

const SignUpContent = () => {
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
      <SubmitButton type="submit">회원가입하기</SubmitButton>
    </form>
  );
};

export default SignUpContent;
