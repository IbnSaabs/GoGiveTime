import {
  EnableLocation,
  ForgotPassword,
  LocationSetup,
  PasswordReset,
  PasswordResetLinkResend,
  SignIn,
  SignUp,
  VerifyEmail,
} from "../../views/authentication";

import App from "../../App";
import SelectInterests from "../../views/interest/SelectInterest";
import AddExpertise from "../../views/interest/AddExpertise";
import RegistrationSuccess from "../../views/interest/RegistrationSuccessfull";
import LandingPage from "../../views/LandingPage";

const routes = [
  // Authentication route
  { path: "/landing", element: <LandingPage /> },
  { path: "/sign-in", element: <SignIn /> },
  { path: "/sign-up", element: <SignUp /> },
  { path: "/verify-email", element: <VerifyEmail /> },
  { path: "/forgot-password", element: <ForgotPassword /> },
  { path: "/pasword-reset-link", element: <PasswordResetLinkResend /> },
  { path: "/password-reset", element: <PasswordReset /> },
  { path: "/location-setup", element: <LocationSetup /> },
  { path: "/enable-location", element: <EnableLocation /> },

  //test route for preloader
  { path: "/", element: <App /> },

  //Interest Routes
  { path: "/select-interest", element: <SelectInterests /> },
  { path: "/add-expertise", element: <AddExpertise /> },
  { path: "/registration-successfull", element: <RegistrationSuccess /> },
];

export { routes };
