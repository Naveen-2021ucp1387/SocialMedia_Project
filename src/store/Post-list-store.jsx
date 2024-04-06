import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  return currPostList;
};
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POSTLIST
  );
  const addPost = () => {};
  const deletePost = () => {};
  return (
    <PostList.Provider
      value={{
        postList: postList,
        addPost: addPost,
        deletePost: deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};
const DEFAULT_POSTLIST = [
  {
    id: "1",
    title: "Going to Mumbai",
    body: "Hello everyone going mumbai for vacation",
    reaction: "2",
    userId: "user-9",
    tags: ["vacation", "enjoying"],
  },
  {
    id: "2",
    title: "React Project",
    body: "Hello every creating a new React Project for Frontend",
    reaction: "4",
    userId: "user-10",
    tags: ["react", "learn"],
  },
];
export default PostListProvider;
