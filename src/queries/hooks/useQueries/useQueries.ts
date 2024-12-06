import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY_USER_INFO } from "../../queryKeys/queryKeys";
import { getUserInfo } from "../../../apis/myPageApi";

export const useGetUserInfo = () => {
  const {
    data: userInfo,
    isLoading: isUserInfoLoading,
    isError: isUserInfoError,
  } = useQuery({
    queryKey: [QUERY_KEY_USER_INFO],
    queryFn: getUserInfo,
  });

  return { userInfo, isUserInfoLoading, isUserInfoError };
};
