import { useMutation } from "@tanstack/react-query";
import { signUp } from "../../apis/signUpApi";

import type { SignUpRequest } from "../../types/signUpTypes";
import { useNavigate } from "react-router-dom";

export const useSignUpMutation = () => {
  const navigate = useNavigate();

  const { mutate: signUpMutation } = useMutation({
    mutationFn: (data: SignUpRequest) => signUp(data),
    onSuccess: (signUpData) => {
      console.log("signUpData", signUpData);
      alert("회원가입이 완료되었습니다!");
      navigate("/login");
    },
    onError: () => {
      alert("회원가입 중 오류가 발생했습니다.");
    },
  });

  return { signUpMutation };
};
