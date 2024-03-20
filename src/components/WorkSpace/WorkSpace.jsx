import {
  Outlet,
  NavLink,
  useSearchParams,
  useNavigate,
} from "react-router-dom";
import LogoBlack from "../../assets/LeadUpBlack.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faL } from "@fortawesome/free-solid-svg-icons";
import { useToken } from "../../context/tokenContext";
import { useEffect, useState } from "react";
import "./workSpace.css"
import "../../button.css";
function WorkSpace() {
  const navigate = useNavigate();
  const [token, setToken] = useToken();
  const [searchParams, setSearchParamas] = useSearchParams();
  const [userData, setuserData] = useState();
  const [companyData, setCompanyData] = useState();

  // get user token if there is no token on the url or session storage it will navigate back to log in
  useEffect(() => {
    console.log("Getting the token");
    const urlToken = searchParams.get("token");
    if (urlToken) {
      setToken(urlToken);
      return;
    }
    if (!token) {
      navigate("/signup");
    }
  }, [token]);

  // get user Data after checking for the token
  useEffect(() => {
  }, []);

  const [ isActive, setIsActive] = useState(true)
  return (
    <>
      <header>
        <section>
          <nav className=" fixed top-0">
            <div
            onClick={()=>{
              setIsActive(!isActive)
            }}
              className={`bg-[#ff000048] h-[100vh] fixed w-[100vw] top-0 mobile-nav-workspace-bg-color ${
                  isActive ? "active" : ""
              }`}
            ></div>
            <ul
              role="list"
              className={`bg-[#F8F9FA]  w-2/4 fixed bottom-0 top-0  h-[100vh] flex flex-col m-0 pb-14 pt-6 justify-between mobile-nav-workspace ${
                isActive ? "active" : ""
              } md:hidden `}
            >
              <div className="divide-y-2 gap-1">
                <li className="flex">
                  <NavLink
                    to="/workspace/dashboard"
                    className=" container-main py-4 flex justify-between hover:bg-gray-200"
                  >
                    DashBoard
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className=" self-center"
                      style={{ color: "#000" }}
                    />
                  </NavLink>
                </li>
                <li className="flex">
                  <NavLink
                    to="/workspace/settings"
                    className=" container-main py-4 flex justify-between hover:bg-gray-200"
                  >
                    Settings
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className=" self-center"
                      style={{ color: "#000" }}
                    />
                  </NavLink>
                </li>
                <li className="flex">
                  <NavLink
                    to="/workspace/employee"
                    className=" container-main py-4 flex justify-between hover:bg-gray-200"
                  >
                    Employee
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      style={{ color: "#000" }}
                    />
                  </NavLink>
                </li>
              </div>
              <div className="container-main flex">
                <button className=" btn btn--danger block flex-1">
                  logout
                </button>
              </div>
            </ul>
          </nav>
        </section>
      </header>
      <main className="">
        <Outlet />
      </main>
    </>
  );
}
export default WorkSpace;
