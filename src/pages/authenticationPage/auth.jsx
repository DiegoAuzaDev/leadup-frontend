import { useLocation } from "react-router-dom";

import Header from "../../components/landPage/header";
import SignUp from "../../components/landPage/signUp";
import SignIn from "../../components/landPage/signIn";

function Auth() {
  const location = useLocation();
  const isSignup = location.pathname === "/auth/signUp";
  return (
    <>
      <Header isAuth={true} />
      <main className="  bg-primary  pt-[100px]">
        <section className=" container-main grid grid-cols-12">
          {isSignup ? <SignUp /> : <SignIn />}
        </section>
      </main>
    </>
  );
}

export default Auth;
