import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login } from "../../../../apis/loginApi";

import type { LoginRequest } from "../../../../types/loginTypes";

export const useLoginMutation = () => {
  const navigate = useNavigate();

  const { mutate: loginMutation } = useMutation({
    mutationFn: (data: LoginRequest) => login(data),
    onSuccess: (loginData) => {
      console.log("loginData", loginData);
      alert("로그인이 완료되었습니다!");
      navigate("/");
    },
    onError: () => {
      alert("로그인 중 오류가 발생했습니다.");
    },
  });

  return { loginMutation };
};
