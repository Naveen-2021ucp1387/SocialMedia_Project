import React, { useContext, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/Post-list-store";
import WelcomeMessage from "./WelcomeMessage";
const PostList = (props) => {
  const { postList, addIntialPosts } = useContext(PostListData);
  const [dataFetched, setDataFetched] = useState(false);
  if (!dataFetched) {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addIntialPosts(data.posts);
      });
    setDataFetched(true);
  }
  return (
    <div>
      {postList.length === 0 && <WelcomeMessage />}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
