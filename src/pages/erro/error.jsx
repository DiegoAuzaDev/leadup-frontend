import { NavLink } from "react-router-dom";
import Footer from "../../components/footer";
import Header from "../../components/header";

function ErrorPage() {
  return (
    <>
      <Header />
      <main className="container-main pt-[200px]">
        <div className=" px-[1.5rem] h-[70vh] flex flex-col justify-center items-center">
          <p className="text-[4.027rem] md:text-[5.986rem] lg:text-[7.815rem] font-bold text-primary">
            Oops!
          </p>
          <p className=" underline text-[1.266rem] md:text-[1.44rem] lg:text-[1.563rem] text-primary">
            404 - PAGE NOT FOUND
          </p>
          <p className=" text-center">
            The page you are looking for might have been removed
            <br />
            had it changed or it temporarly unavailable
          </p>
          <NavLink className={"btn"} to={"/"}>
            Go home
          </NavLink>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default ErrorPage;
