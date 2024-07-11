import { useUserContext } from "../../context/userContext";
import SectionTitle from "../ui/sectionTitle";
import {
  faCalendarAlt,
  faNetworkWired,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";
import WorkspaceUserTitle from "../ui/workspaceUserTitle";
import EmployeeStatus from "../ui/employeeStatus";
import DashboardMap from "./dashboardMap";
import { useEmployeesContext } from "../../context/employeesContext";
import EmptyList from "../ui/emptyList";

function Dashboard() {
  const [user] = useUserContext();
  const [employees] = useEmployeesContext();
  return (
    <>
      <section className=" overflow-scroll flex flex-col row-span-2 col-span-full mt-10 md:col-span-10 md:my-5 md:mr-5 lg:grid lg:grid-cols-12 lg:grid-rows-12 lg:gap-5">
        <WorkspaceUserTitle
          name={user.name}
          photo={user.photo}
          email={user.email}
        />

        <div className="border-2 rounded-custom border-surface-dark mb-8 md:col-span-6 lg:col-span-8 lg:row-span-6 lg:m-0 lg:overflow-hidden">
          {/* MAP CONTAINER  */}
          <SectionTitle
            title={"Manage your deliveries"}
            icon={faNetworkWired}
            mainButton={"see all"}
            mainRedirect={"vehicles"}
          />
          <div className=" h-80 md:h-[30em] lg:h-full rounded-b-custom overflow-hidden">
            <DashboardMap />
          </div>
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
        <div className="min-h-[25rem] lg:min-h-fit lg:h-auto border-2 rounded-custom border-surface-dark mb-8 lg:col-span-8 lg:row-span-6 lg:m-0 overflow-scroll">
          <SectionTitle
            title={"Team"}
            icon={faPeopleGroup}
            mainButton={"see all"}
            mainRedirect={"team"}
          />
          {employees.length != 0 ? (
            <div>
              {employees.map((employee) => (
                <EmployeeStatus
                  key={employee.id}
                  active={employee.active}
                  employeeId={employee.id}
                  employeeName={employee.name}
                  employeePhoto={employee.photo}
                  updated={employee.updated}
                />
              ))}
            </div>
          ) : null}
          {employees.length == 0 ? (
            <div className="flex justify-center mt-8">
              <EmptyList
                title={"Your employee list is empty"}
                text={"get your team ready"}
                redirectText={"Add team member"}
                redirect={"/leadUp/workspace/team"}
              />
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
}

export default Dashboard;
