
// const App = () => {
//   return (
//     <div className="min-h-screen">
      
//     </div>
//   )
// }
// =======
import React from "react";
import { Loader } from "./components/Loader";
//manually delaying page component by 3000ms to test visibility of loader
const TestPage = React.lazy(() =>
  Promise.all([
    import("./views/LandingPage"),
    new Promise((resolve) => setTimeout(resolve, 3000)),
  ]).then(([moduleExports]) => moduleExports)
);

const App = () => {
  return (
    //implemented a general loader
    <React.Suspense fallback={<Loader />}>
      <TestPage />
    </React.Suspense>
  );
};


export default App;
