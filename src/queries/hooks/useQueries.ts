import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY_SINGLE_POST } from "../queryKeys/queryKeys";
import { testGetSinglePost } from "../../apis/test";

export const useGetSinglePost = () => {
  const {
    data: singlePost,
    isLoading: isSinglePostLoading,
    isError: isSinglePostError,
  } = useQuery({ queryKey: [QUERY_KEY_SINGLE_POST], queryFn: testGetSinglePost });

  return { singlePost, isSinglePostLoading, isSinglePostError };
};
