import Header from "../../components/header";
import Footer from "../../components/footer";
import { NavLink } from "react-router-dom";
import ContactImage from "../../assets/contactImg.webp"
import WorkSpaceImage from "../../assets/placeHolderImage.png";

function LandPage() {
  return (
    <>
      <Header />
      <main id="home" className="pt-[200px]">
        <section className=" container-main mb-5">
          <div className="flex flex-col items-center">
            <span className=" text-primary-light font-bold text-lg">
              Get your team sync
            </span>
            <h1 className="font-bold text-center text-primary">
              Find the simpler and faster <br /> path to Lead up your team
            </h1>
            <div className=" text-primary flex flex-col items-center">
              <p className=" text-lg m-0 text-center">
                All you have been looking for to async your delivery list in the
                same place.
              </p>
              <p className=" text-center text-lg">
                Gather your team in less than
                <span className="font-bold"> 5 minutes</span>
              </p>
              <NavLink className="btn">Get started now</NavLink>
            </div>
          </div>
        </section>
        <section className="container-main mt-20 mb-[-100px]">
          <div className=" grid grid-cols-12">
            <div className=" bg-surface flex col-span-10 col-start-2 py-2 px-4 rounded-custom">
              <img src={WorkSpaceImage} alt="" />
            </div>
          </div>
        </section>
        <section className=" bg-primary  pb-20 pt-[200px] text-white mb-10">
          <div className="container-main">
            <h2 id="services" className=" text-center mb-10">
              Services
            </h2>
            <div className=" grid grid-cols-1 md:grid-cols-2 px-[15px] gap-10">
              <div>
                <h3 className="flex flex-col font-bold">
                  Make your business grow
                </h3>
                <p>
                  Dashboard platform that was created with the aim of making it
                  easier for business people to manage companies, employees and
                  deliveries
                </p>
              </div>
              <div className=" md:flex flex-col">
                <div>
                  <h3 className="flex flex-col font-bold">
                    <span>Tracking system</span>
                  </h3>
                  <p>
                    Keep track of your goal at the same time you plan,
                    collaborate and publish your deliveries with your team
                  </p>
                </div>
                <div>
                  <h3 className=" font-bold">
                    <span>Manage data</span>
                  </h3>
                  <p>
                    Create, update and delete your database on your team needs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="contact"
          className=" container-main mt-[5rem] text-primary"
        >
          <div className="px-[15px]">
            <h2 className="text-center">Contact</h2>
            <div className=" grid-cols-1">
              <img
                src={ContactImage}
                alt=" Image of Diego Auza, Leadup founder"
                className=" rounded-full"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default LandPage;
