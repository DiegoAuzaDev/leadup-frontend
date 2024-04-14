import Header from "../../components/header";
import Footer from "../../components/footer";
import { NavLink } from "react-router-dom";
import WorkSpaceImage from '../../assets/placeHolderImage.png'

function LandPage() {
  return (
    <>
      <Header />
      <main className="mt-[200px]">
        <section className=" container-main mb-5">
          <div className="flex flex-col items-center">
            <span className=" text-primary-light font-bold text-lg">
              Get your team async
            </span>
            <h1 className=" flex flex-col font-bold">
              <span className=" text-center">The simpler and faster</span>
              <span className=" text-center">path to Lead up your team</span>
            </h1>
            <div className=" text-primary flex flex-col items-center">
              <p className=" text-lg m-0">
                All you have been looking for async your delivery list in the
                same place
              </p>
              <p className="  text-lg">
                gather your team an goals in less than
                <span className="font-bold"> 5 minutes</span>
              </p>
              <NavLink className="btn">Get sarted now</NavLink>
            </div>
          </div>
        </section>
        <section className="container-main mt-10">
          <div className=" grid grid-cols-12">
            <div className=" bg-surface col-span-10 col-start-2 py-2 px-4 rounded-border">
              <img src={WorkSpaceImage} alt="" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default LandPage;
