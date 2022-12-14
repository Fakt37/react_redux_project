import React from "react";
import Post from "./Post";

const FetchedPosts = ({ posts }) => {
  if (!posts.length) {
    return <button className="btn btn-primary">Загрузить посты</button>;
  }
  return posts.map((post) => <Post post={post} key={post} />);
};

export default FetchedPosts;
