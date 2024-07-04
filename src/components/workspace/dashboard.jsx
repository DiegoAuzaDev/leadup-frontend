import { useUserContext } from "../../context/userContext";
import SectionTitle from "../ui/sectionTitle";
import { faNetworkWired } from "@fortawesome/free-solid-svg-icons";

function Dashboard() {
  const [user, _setUser] = useUserContext();

  console.log(user);
  return (
    <div className="grid mt-20 col-span-full">
      <section className=" border-2 rounded-custom border-surface-dark">
        <SectionTitle title={"Manage yout deliveries"} icon={faNetworkWired} mainButton={"see all"} />
        
      </section>
      <section>
        <p>Hello From Map and extra data</p>
      </section>
      <section> Hello from calendar </section>
    </div>
  );
}

export default Dashboard;
