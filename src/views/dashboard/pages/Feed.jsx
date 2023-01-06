import React from "react";
import { Layout, AddPost } from "../../../components/Dashboard";
import post from "../../../assets/Content.png";
import Comment from "../../../components/Dashboard/Comment";

const Feed = () => {
  return (
    <Layout>
      {/* replace below image with addPost,Photo post frame */}
      <AddPost />
      {/* <img src={post} className="w-full" alt="" /> */}
      {/* testing my comments component */}
      <Comment />
    </Layout>
  );
};

export default Feed;
