import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import { loginApi } from "../../apis/loginApi";

import type { LoginRequest } from "../../types/loginTypes";

export const useLoginMutation = () => {
  const navigate = useNavigate();
  const { login } = useAuthStore();

  const { mutate: loginMutation } = useMutation({
    mutationFn: (data: LoginRequest) => loginApi(data),
    onSuccess: (loginData) => {
      localStorage.setItem("accessToken", loginData.accessToken);
      login();
      alert("로그인이 완료되었습니다!");
      navigate("/");
    },
    onError: () => {
      alert("로그인 중 오류가 발생했습니다.");
    },
  });

  return { loginMutation };
};
