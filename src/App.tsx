import AuthLayout from "./auth/AuthLayout";
import LoginForm from "./auth/LoginForm";
import SignUpForm from "./auth/forms/SignUpForm";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route index path="/" element={<LoginForm />} />
          <Route path="/signup" element={<SignUpForm />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
