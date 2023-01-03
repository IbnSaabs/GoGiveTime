import React from "react";
import Layout from "../../../components/Dashboard/Layout";
import post from "../../../assets/Content.png";

const Feed = () => {
  return (
    <Layout>
      {/* replace below image with addPost,Photo post frame */}
      <img src={post} className="w-full" alt="" />
    </Layout>
  );
};

export default Feed;
