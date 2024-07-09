import { useUserContext } from "../../context/userContext";
import SectionTitle from "../ui/sectionTitle";
import {
  faCalendarAlt,
  faNetworkWired,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";
import WorkspaceUserTitle from "../ui/workspaceUserTitle";
import EmployeeStatus from "../ui/employeeStatus";

function Dashboard() {
  const [user, _setUser] = useUserContext();

  console.log(user);
  return (
    <>
      <section className="flex flex-col row-span-2 col-span-full mt-10 md:col-span-10 md:my-5 md:mr-5 lg:grid lg:grid-cols-12 lg:grid-rows-12 lg:gap-5">
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
            mainRedirect={"vehicles"}
          />
          <div className="min-h-[20rem] lg:h-full"></div>
        </div>

        {/* CALENDAR  */}
        <div className="border-2 rounded-custom border-surface-dark mb-8 lg:m-0 lg:col-span-4 lg:row-span-12">
          <SectionTitle
            title={"Calendar"}
            icon={faCalendarAlt}
            mainButton={"see all"}
            mainRedirect={"calendar"}
          />
          <div className=" min-h-32">
            <p>calendar</p>
          </div>
        </div>

        {/* EMPLOYEE STATUS  */}
        <div className="border-2 rounded-custom border-surface-dark mb-8 lg:col-span-8 lg:row-span-6 lg:m-0">
          <SectionTitle
            title={"Team"}
            icon={faPeopleGroup}
            mainButton={"see all"}
            // TODO set redirect address
            mainRedirect={"team"}
          />
          <div className=" min-h-32">
          </div>
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
