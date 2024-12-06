import axios from "axios";

export const testGetPosts = async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return response.data;
};

export const testCreateSinglePost = async (newPost: {
  title: string;
  body: string;
  userId: number;
}) => {
  const response = await axios.post("https://jsonplaceholder.typicode.com/posts", newPost);
  return response.data;
};
