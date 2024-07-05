import { useUserContext } from "../../context/userContext";
import SectionTitle from "../ui/sectionTitle";
import { faNetworkWired } from "@fortawesome/free-solid-svg-icons";
import UserAvatar from "../ui/userAvatar";
import WorkspaceUserTitle from "../ui/workspaceUserTitle";
import EmployeeStatus from "../ui/employeeStatus";

function Dashboard() {
  const [user, _setUser] = useUserContext();

  console.log(user);
  return (
    <>
      <section className="md:hidden lg:hidden col-span-full mt-14">
        <WorkspaceUserTitle
          name={user.name}
          photo={user.photo}
          email={user.email}
        />

        <div className="border-2 rounded-custom border-surface-dark mb-8">
          <SectionTitle
            title={"Manage yout deliveries"}
            icon={faNetworkWired}
            mainButton={"see all"}
            // TODO set redirect address
            mainRedirect={"TODO"}
          />
          <div className=" min-h-20"></div>
        </div>

    TODO Need to complete employee Status
        <div className="border-2 rounded-custom border-surface-dark mb-8">
          <EmployeeStatus
            status={"active"}
            employeePhoto={user.photo}
            employeeName={user.name}
            employeeId={"12312312312asdfasdf"}
          />
        </div>
      </section>
      <section className=" sm:hidden md:hidden  border-2 rounded-custom border-surface-dark"></section>
      <section className=" sm:hidden lg:hidden "></section>
    </>
  );
}

export default Dashboard;

{
  /* <SectionTitle
  title={"Manage yout deliveries"}
  icon={faNetworkWired}
  mainButton={"see all"}
/>; */
}

// className=" border-2 rounded-custom border-surface-dark row-span-2"
