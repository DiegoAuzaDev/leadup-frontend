import { useToken } from "../../context/tokenContext";

function CreateNewCompany() {
    
  const [token, setToken] = useToken();
  const headers = {
    Authorization: `Bearer ${token}`,
    "application-type": "application/json",
  };
}

export default CreateNewCompany;
