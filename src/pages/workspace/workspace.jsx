/* eslint-disable no-unused-vars */
import { Outlet, useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useToken } from "../../context/tokenContext";
import HeaderWorkSpace from "../../components/workspace/header";
import { requestuserData } from "../../utils/workspace/user";
import ErrorWorkspace from "../../components/workspace/error";
import LoadingWorkSpace from "../../components/ui/loading";
import { useUserContext } from "../../context/userContext";
import { useEmployeesContext } from "../../context/employeesContext";

function Workspace() {
  const [searchParams, _setSearchParams] = useSearchParams();
  const [token, setToken] = useToken();
  const navigate = useNavigate();
  const urlToken = searchParams.get("token");

  // user data
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});
  const [userContext, setUserContext] = useUserContext();
  const [employeesContext, setEmployeeContext] = useEmployeesContext();
  const [error, setError] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    document.body.classList.remove("bg-primary");
    document.body.classList.add("bg-white");
  }, []);

  useEffect(() => {
    if (urlToken) {
      setToken(urlToken);
      getUserData();
      getEmployees();
      return;
    }
    if (token) {
      getUserData();
      getEmployees();
      return;
    }
    if (!token && !urlToken) {
      navigate("/");
    }
  }, [token]);

  const getEmployees = async()=>{
      const employees = [
        {
          name: "Diego Auza",
          photo:
            "https://cdn.vox-cdn.com/thumbor/7u-vFaqxvGqKAdvY21ZDAK4Z9Fw=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22870860/Bubble_gum_gamerpic.jpg",
          id: "01111",
          email: "auzajuan1@gmail.com",
          dob: "10/04/2004",
          active: true,
          updated: "2024-07-10T23:45:55.789+00:00",
        },
        {
          name: "Diegfo Auza",
          photo:
            "https://cdn.vox-cdn.com/thumbor/7u-vFaqxvGqKAdvY21ZDAK4Z9Fw=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22870860/Bubble_gum_gamerpic.jpg",
          id: "0111ff1",
          email: "auzajuan1@gmail.com",
          dob: "10/04/2004",
          active: true,
          updated: "2024-07-10T23:45:38.789+00:00",
        },
        {
          name: "Diego Auza",
          photo:
            "https://cdn.vox-cdn.com/thumbor/7u-vFaqxvGqKAdvY21ZDAK4Z9Fw=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22870860/Bubble_gum_gamerpic.jpg",
          id: "0111fdfdf1",
          email: "auzajuan1@gmail.com",
          dob: "10/04/2004",
          active: false,
          updated: "2024-07-11T16:45:55.789+00:00",
        },
        {
          name: "Luis Carlos Auza",
          photo: "",
          id: "1033",
          email: "auzajuan1@gmail.com",
          dob: "10/04/2004",
          active: false,
          updated: "2024-07-11T10:45:55.789+00:00",
        },
        {
          name: "Julie",
          photo: "",
          id: "31231",
          email: "auzajuan1@gmail.com",
          dob: "10/04/2004",
          active: false,
          updated: "2024-07-01T00:05:49.656+00:00",
        },
        {
          name: "Juan David",
          photo:
            "https://steamuserimages-a.akamaihd.net/ugc/786371856221183225/2F04B32CA10AD1ADBC01CE5D4DC6F7AF0E96AE6C/?imw=512&imh=512&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true",
          id: "43434",
          email: "auzajuan1@gmail.com",
          dob: "10/04/2004",
          active: false,
          updated: "2024-07-09T12:05:40.101+00:00",
        },
        {
          name: "Marcos Pedro",
          photo: "",
          id: "1231",
          email: "auzajuan1@gmail.com",
          dob: "10/04/2004",
          active: true,
          updated: "2024-07-02T22:25:35.404+00:00",
        },
        {
          name: "Carlos Pedro",
          photo: "",
          id: "123331",
          email: "auzajuan1@gmail.com",
          dob: "10/04/2004",
          active: true,
          updated: "2024-07-11T13:35:25.707+00:00",
        },
        {
          name: "Luis Palma",
          photo: "",
          id: "123441",
          email: "auzajuan1@gmail.com",
          dob: "10/04/2004",
          active: false,
          updated: "2024-07-11T05:55:45.505+00:00",
        },
      ];
      setEmployeeContext(employees)

  }


  const getUserData = async () => {
    setError(null);
    setErrorMessage("");
    try {
      const response = await requestuserData(token);
      if (response.ok && response.status == 200) {
        setIsLoading(false);
        const body = await response.json();
        setUser(body.user.google || body.user.local);
        setUserContext(body.user.google || body.user.local);
      }
      if (!response.ok && response.status == 401) {
        throw new Error("Unauthorized, Error status : 401");
      }
      if (!response.ok) {
        throw new Error("Server Error, Error status : 500");
      }
    } catch (err) {
      // this lines only works on offline mode
      // setIsLoading(false)
      // setError(false)

      // this lines must be uncommented when working online
      setIsLoading(false);
      setError(true);
      setErrorMessage(err.message);
    }
  };

  return (

      <div className="grid grid-cols-12  px-3 py-5  md:px-0 md:py-0 grid-rows-1 gap-0 md:grid-cols-12 md:grid-rows-2 md:gap-x-3 md:gap-y-5 h-[100vh] w-[100vw] ">
        <HeaderWorkSpace user={user} />
        {isLoading && <LoadingWorkSpace />}
        {error && <ErrorWorkspace message={errorMessage} />}
        {!isLoading && !error && <Outlet />}
      </div>

  );
}

export default Workspace;
