import { useLocation } from "react-router-dom";
import Header from "../../components/header";
import SignUp from "../../components/signUp";
import SignIn from "../../components/signIn";
import { useEffect } from "react";

function Auth() {
  useEffect(() => {
    document.body.classList.add("bg-primary");
  }, []);
  const location = useLocation();
  const isSignup = location.pathname === "/auth/signUp";
  return (
    <>
      <Header isAuth={true} />
      <main className="  bg-primary  pt-[300px]">
        <section className=" container-main grid grid-cols-12">
          {isSignup ? <SignUp /> : <SignIn />}
        </section>
      </main>
    </>
  );
}

export default Auth;
