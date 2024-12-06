import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY_POSTS } from "../queryKeys/queryKeys";
import { testGetPosts } from "../../apis/test";

export const useGetPosts = () => {
  const {
    data: posts,
    isLoading: isSinglePostLoading,
    isError: isSinglePostError,
  } = useQuery({ queryKey: [QUERY_KEY_POSTS], queryFn: testGetPosts });

  return { posts, isSinglePostLoading, isSinglePostError };
};
