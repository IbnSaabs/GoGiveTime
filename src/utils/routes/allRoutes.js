import {
  EnableLocation,
  ForgotPassword,
  LocationSetup,
  PasswordReset,
  PasswordResetLinkResend,
  PasswordUpdated,
  SignIn,
  SignUp,
  VerifyEmail,
} from "../../views/authentication";

import App from "../../App";
import SelectInterests from "../../views/interest/SelectInterest";
import AddExpertise from "../../views/interest/AddExpertise";
import RegistrationSuccess from "../../views/interest/RegistrationSuccessfull";
import LandingPage from "../../views/LandingPage";

//dasboard imports
import Feed from "../../views/dashboard/pages/Feed";
import Events from "../../views/dashboard/pages/Events";
import Profile from "../../views/dashboard/pages/Profile";
import Message from "../../views/dashboard/pages/Message";
import Notification from "../../views/dashboard/pages/Notification";

const routes = [
  // Authentication route
  { path: "/landing", element: <LandingPage /> },
  { path: "/sign-in", element: <SignIn /> },
  { path: "/sign-up", element: <SignUp /> },
  { path: "/verify-email", element: <VerifyEmail /> },
  { path: "/forgot-password", element: <ForgotPassword /> },
  { path: "/password-reset-link", element: <PasswordResetLinkResend /> }, // when password reset link has been sent to user email, it routes to this page
  { path: "/password-reset", element: <PasswordReset /> },
  { path: "/password-updated", element: <PasswordUpdated /> },
  { path: "/location-setup", element: <LocationSetup /> },
  { path: "/enable-location", element: <EnableLocation /> },

  //test route for preloader
  { path: "/", element: <App /> },

  //Interest Routes
  { path: "/select-interest", element: <SelectInterests /> },
  { path: "/add-expertise", element: <AddExpertise /> },
  { path: "/registration-successfull", element: <RegistrationSuccess /> },


  //dasboard routes
  { path: "/dashboard", element: <Feed /> },
  { path: "/events", element: <Events /> },
  { path: "/profile", element: <Profile /> },
  { path: "/messages", element: <Message /> },
  { path: "/notifications", element: <Notification /> },
];

export { routes };
