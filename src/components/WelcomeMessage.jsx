import React from "react";

const WelcomeMessage = ({ onGetPostsClick }) => {
  return (
    <center className="welcome-message">
      <h1>Welcome! No Posts Yet</h1>
      <button
        type="button"
        onClick={onGetPostsClick}
        className="btn btn-primary"
      >
        Get Post From Server
      </button>
    </center>
  );
};

export default WelcomeMessage;
