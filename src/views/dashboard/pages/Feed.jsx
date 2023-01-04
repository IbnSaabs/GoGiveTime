import React from "react";
import {Layout, AddPost} from "../../../components/Dashboard";
import post from "../../../assets/Content.png";

const Feed = () => {
  return (
    <Layout>
      {/* replace below image with addPost,Photo post frame */}
      <AddPost />
      {/* <img src={post} className="w-full" alt="" /> */}
    </Layout>
  );
};

export default Feed;
