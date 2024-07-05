import { useUserContext } from "../../context/userContext";
import SectionTitle from "../ui/sectionTitle";
import { faNetworkWired } from "@fortawesome/free-solid-svg-icons";
import UserAvatar from "../ui/userAvatar";
import WorkspaceUserTitle from "../ui/workspaceUserTitle";

function Dashboard() {
  const [user, _setUser] = useUserContext();

  console.log(user);
  return (
    <>
      <section className="md:hidden lg:hidden col-span-full mt-14">
       <WorkspaceUserTitle name={user.name} photo={user.photo} email={user.email} />

        <div className="border-2 rounded-custom border-surface-dark row-span-2">
          <SectionTitle
            title={"Manage yout deliveries"}
            icon={faNetworkWired}
            mainButton={"see all"}
            // TODO set redirect address
            mainRedirect={"TODO"}
          />
          <div className=" min-h-20"></div>
        </div>
      </section>
      <section className="lg:hidden"></section>
      <section className="md:hidden"></section>
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
