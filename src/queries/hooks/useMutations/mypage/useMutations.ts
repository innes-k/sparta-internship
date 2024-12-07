import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUserInfo } from "../../../../apis/myPageApi";
import { QUERY_KEY_USER_INFO } from "../../../queryKeys/queryKeys";

import type { UpdateUserInfoRequest } from "../../../../types/myPageTypes";

export const useUpdateUserInfoMutation = () => {
  const queryClient = useQueryClient();

  const { mutate: updateUserInfoMutation } = useMutation({
    mutationFn: (newUserInfo: UpdateUserInfoRequest) => updateUserInfo(newUserInfo),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY_USER_INFO] });
      alert("회원정보 수정이 완료되었습니다!");

      console.log("updated userInfo data", data.data);
    },
    onError: () => {
      alert("회원정보 수정 중 오류가 발생했습니다.");
    },
  });

  return { updateUserInfoMutation };
};
