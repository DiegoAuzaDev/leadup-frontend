import { API_URL} from "../keys"

async function requestEmployeeList (id, token){
    const employeeList = await fetch(`${API_URL}/api/employee/${id}`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    return employeeList
}

export {requestEmployeeList}
