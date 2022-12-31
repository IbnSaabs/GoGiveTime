import {
  ConfirmPasswordReset,
  ConfirmPasswordUpdated,
  EnableLocation,
  ForgotPassword,
  LocationSetup,
  PasswordReset,
  SignIn,
  SignUp,
  VerifyEmail,
} from "../../views/authentication";

import App from "../../App";

const routes = [
  // Authentication route
  { path: "/sign-in", element: <SignIn /> },
  { path: "/sign-up", element: <SignUp /> },
  { path: "/verify-email", element: <VerifyEmail /> },
  { path: "/forgot-password", element: <ForgotPassword /> },
  { path: "/pasword-reset-confirmation", element: <ConfirmPasswordReset /> },
  { path: "/password-reset", element: <PasswordReset /> },
  {
    path: "/password-update-confirmation",
    element: <ConfirmPasswordUpdated />,
  },
  { path: "/location-setup", element: <LocationSetup /> },
  { path: "/enable-location", element: <EnableLocation /> },

  //include other routes and a descriptive comment here

  {
    path: "/",
    element: <App />,
  },
];

export { routes };
