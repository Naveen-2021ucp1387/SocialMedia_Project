import React, { useContext, useRef } from "react";
import { PostList } from "../store/Post-list-store";
const CreatePost = (props) => {
  const { addPost } = useContext(PostList);
  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionElement = useRef();
  const tagsElement = useRef();

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionElement.current.value;
    const tags = tagsElement.current.value.split(" ");
    addPost(userId, postTitle, postBody, reactions, tags);

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionElement.current.value = "";
    tagsElement.current.value = "";
  };
  return (
    <form className=" create-post" onSubmit={handleOnSubmit}>
      <div className="mb-3">
        <label for="userId" className="form-label">
          Enter your UserID
        </label>
        <input
          type="text"
          ref={userIdElement}
          className="form-control"
          id="title"
          placeholder="Your UserID..."
        />
      </div>

      <div className="mb-3">
        <label for="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          ref={postTitleElement}
          className="form-control"
          id="title"
          placeholder="How are you feeling..."
        />
      </div>
      <div className="mb-3">
        <label for="body" className="form-label">
          Post Content
        </label>
        <textarea
          row="4"
          ref={postBodyElement}
          type="text"
          className="form-control"
          id="title"
          placeholder="Tell us about it..."
        />
      </div>
      <div className="mb-3">
        <label for="reaction" className="form-label">
          Number Of Reations
        </label>
        <input
          row="4"
          type="text"
          ref={reactionElement}
          className="form-control"
          id="title"
          placeholder="How many People Reacted"
        />
      </div>
      <div className="mb-3">
        <label for="tags" className="form-label">
          HashTags
        </label>
        <input
          row="4"
          ref={tagsElement}
          type="text"
          className="form-control"
          id="title"
          placeholder="Your tags separated by space..."
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
