import { useMutation, useQueryClient } from "@tanstack/react-query";
import { testCreateSinglePost } from "../../apis/test";
import { QUERY_KEY_POSTS } from "../queryKeys/queryKeys";

export const useCreateNewPostMutation = () => {
  const queryClient = useQueryClient();

  const { mutate: createNewPostMutation } = useMutation({
    mutationFn: (newPost: { title: string; body: string; userId: number }) =>
      testCreateSinglePost(newPost),
    onSuccess: (data) => {
      console.log("onSuccess called with:", data);
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY_POSTS],
      });
    },
    onError: (error) => {
      console.error("Mutation failed:", error);
    },
  });

  return { createNewPostMutation };
};
