import React from "react";
import { Connect } from "react-redux";
import Post from "./Post";

const Posts = ({ posts }) => {
  if (!posts.length) {
    return <p className="text-left">Постов пока нет</p>;
  }
  return posts.map((post) => <Post post={post} key={post} />);
};

export default Posts;
