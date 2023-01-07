import React from "react";

import { Layout, AddPost, Posts } from "../../../components/Dashboard";
import posts from "../../../utils/testData";

const Feed = () => {
  return (
    <Layout>
      <AddPost />
      {posts.map((post) => (
        <React.Fragment key={post.id}>
          <Posts post={post} />
        </React.Fragment>
      ))}
    </Layout>
  );
};

export default Feed;
