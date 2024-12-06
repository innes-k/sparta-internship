import { Link } from "react-router-dom";
import { useGetPosts } from "../queries/hooks/useQueries";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { testCreateSinglePost } from "../apis/test";
import { QUERY_KEY_POSTS } from "../queries/queryKeys/queryKeys";

const MainPage = () => {
  const queryClient = useQueryClient();

  const { posts, isSinglePostLoading, isSinglePostError } = useGetPosts();

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

  if (isSinglePostLoading) {
    return <div>로딩중</div>;
  }

  if (isSinglePostError) {
    return <div>에러</div>;
  }

  const handleTestUseMutation = () => {
    const newPost = {
      title: "Test Title",
      body: "Test Body",
      userId: 1,
    };

    createNewPostMutation(newPost);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">Sparta Internship Task</h1>
        <p className="text-xl font-light drop-shadow-sm">
          간단한 회원가입, 로그인, 마이페이지 구현
        </p>
      </header>
      <section className="flex justify-center gap-6">
        <button onClick={handleTestUseMutation}>useMutation 테스트용</button>
        <Link
          to="/login"
          className="px-6 py-3 text-lg bg-white text-blue-500 rounded-lg shadow-lg hover:bg-blue-100 hover:shadow-xl transition duration-300"
        >
          로그인
        </Link>
        <Link
          to="/signup"
          className="px-6 py-3 text-lg bg-white text-purple-500 rounded-lg shadow-lg hover:bg-purple-100 hover:shadow-xl transition duration-300"
        >
          회원가입
        </Link>
        <Link
          to="/mypage"
          className="px-6 py-3 text-lg bg-white text-gray-800 rounded-lg shadow-lg hover:bg-gray-200 hover:shadow-xl transition duration-300"
        >
          마이페이지
        </Link>
      </section>
    </div>
  );
};

export default MainPage;
