import React from "react";

//manually delaying page component by 3000ms to test visibility of loader
const Layout = React.lazy(() =>
  Promise.all([
    import("../../../components/Dashboard/Layout"),
    new Promise((resolve) => setTimeout(resolve, 3000)),
  ]).then(([moduleExports]) => moduleExports)
);
// import Layout from "../../../components/Dashboard/Layout";
import post from "../../../assets/Content.png";
import { Loader } from "../../../components/Loader";

const Feed = () => {
  return (
    <React.Suspense fallback={<Loader />}>
      <Layout>
        <img src={post} className="w-full" alt="" />
      </Layout>
    </React.Suspense>
  );
};

export default Feed;
