import { useUserContext } from "../../context/userContext";
import SectionTitle from "../ui/sectionTitle";
import { faNetworkWired } from "@fortawesome/free-solid-svg-icons";
import WorkspaceUserTitle from "../ui/workspaceUserTitle";
import EmployeeStatus from "../ui/employeeStatus";

function Dashboard() {
  const [user, _setUser] = useUserContext();

  console.log(user);
  return (
    <>
      <section className=" row-span-2 col-span-full mt-10 md:col-span-10 md:my-5 md:mr-5 lg:grid lg:grid-cols-12 lg:grid-rows-12 lg:gap-5">

        <WorkspaceUserTitle
          name={user.name}
          photo={user.photo}
          email={user.email}
        />

        <div className="border-2 rounded-custom border-surface-dark mb-8 md:col-span-6 lg:col-span-8 lg:row-span-6 lg:m-0">
          {/* MAP CONTAINER  */}
          <SectionTitle
            title={"Manage your deliveries"}
            icon={faNetworkWired}
            mainButton={"see all"}
            // TODO set redirect address
            mainRedirect={"TODO"}
          />
          <div className=" min-h-20"></div>
        </div>

    {/* CALENDAR  */}
        <div className="border-2 rounded-custom border-surface-dark mb-8 lg:m-0 lg:col-span-4 lg:row-span-12">
          <EmployeeStatus
            status={"active"}
            employeePhoto={user.photo}
            employeeName={user.name}
            employeeId={"12312312312asdfasdf"}
          />
        </div>

       {/* EMPLOYEE STATUS  */}
        <div className="border-2 rounded-custom border-surface-dark mb-8 lg:col-span-8 lg:row-span-6 lg:m-0">
          <EmployeeStatus
            status={"active"}
            employeePhoto={user.photo}
            employeeName={user.name}
            employeeId={"12312312312asdfasdf"}
          />
        </div>
      </section>
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
