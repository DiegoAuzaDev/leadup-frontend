
import { NavLink } from "react-router-dom";
import ContactImage from "../../assets/contactImg.webp";
import WorkSpaceImage from "../../assets/placeHolderImage.png";
import IphoneImage from "../../assets/iphoneMockups.webp"
import Excel from "../../assets/excelSVG.svg"
import Net from "../../assets/netSVG.svg"
import Target from "../../assets/targetSVG.svg"
import { useEffect } from "react";
import Header from "../../components/landPage/header";
import Footer from "../../components/landPage/footer";

function LandPage() {
    useEffect(() => {
      document.body.classList.add("bg-white");
      document.body.classList.remove("bg-primary");
    }, []);
  return (
    <>
      <Header isAuth={false} />
      <main id="home" className="pt-[200px] z-0">
        <section className="container-main mb-5">
          <div className="flex flex-col items-center ">
            <span className="text-primary-light font-bold text-lg">
              Get your team sync
            </span>
            <h1 className="font-bold text-center text-primary fadeInBottom">
              Find the simpler and faster <br /> path to leading up your team
            </h1>
            <div className="text-primary flex flex-col items-center">
              <p className="text-lg m-0 text-center fadeInBottom">
                All you have been looking for to async your delivery list in the
                same place.
              </p>
              <p className="text-center text-lg fadeInBottom">
                Gather your team in less than
                <span className="font-bold"> 5 minutes</span>
              </p>
              <NavLink
                className="btn fadeInBottom fadeInLongDelay"
                to={"/auth/signIn"}
              >
                Get started now
              </NavLink>
            </div>
          </div>
        </section>
        <section className="container-main mt-20 mb-[-100px]">
          <div className="grid grid-cols-12">
            <div className="bg-surface flex col-span-10 col-start-2 py-2 px-4 rounded-custom fadeInBottom fadeInLongDelay">
              <img src={WorkSpaceImage} alt="" />
            </div>
          </div>
        </section>
        <section
          className="bg-primary pb-[15rem] pt-[200px] text-white mb-10"
          id="services"
        >
          <div className="container-main">
            <h2 className="text-center pb-10 font-bold">Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 px-[15px] gap-10">
              <div>
                <h3 className="flex flex-col font-bold">
                  Make your business grow
                </h3>
                <p>
                  Dashboard platform that was created with the aim of making it
                  easier for business people to manage companies, employees, and
                  deliveries.
                </p>
              </div>
              <div className="md:flex flex-col">
                <div>
                  <h3 className="flex flex-col font-bold">
                    <span>Tracking system</span>
                  </h3>
                  <p>
                    Keep track of your goal at the same time you plan,
                    collaborate, and publish your deliveries with your team.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold">
                    <span>Manage data</span>
                  </h3>
                  <p>
                    Create, update, and delete your database as your team needs.
                  </p>
                </div>
              </div>
            </div>
            <ul
              className=" grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-[5rem]"
              role="list"
            >
              <li className=" flex flex-col items-center gap-2">
                <div className=" bg-primary-light inline-block px-5 py-5 rounded-full">
                  <img src={Excel} alt="Excel logo" className=" h-[2.5rem]" />
                </div>
                <h4 className=" m-0">Save time and effort</h4>
                <p className=" text-center">
                  We offer an easy way to get your delivery list ready in less
                  time with less effort. With Lead Up you can drag and drop your
                  excel files and we will dynamically distribute the tasks{" "}
                </p>
              </li>
              <li className=" flex flex-col items-center gap-2">
                <div className=" bg-primary-light inline-block px-5 py-5 rounded-full">
                  <img src={Net} alt="Net logo" className=" h-[2.5rem]" />
                </div>
                <h4 className=" m-0">Expand your team</h4>
                <p className=" text-center">
                  With Lead Up you can make grow your team. It do es matter if
                  your team mates know the path because Lead Up is going to be
                  design the best route path base on your needs
                </p>
              </li>
              <li className=" flex flex-col items-center gap-2">
                <div className=" bg-primary-light inline-block px-5 py-5 rounded-full">
                  <img src={Target} alt="Target logo" className=" h-[2.5rem]" />
                </div>
                <h4 className=" m-0">Rich your goals</h4>
                <p className=" text-center">
                  With Lead Up you will be saving time at the same time you are
                  getting closer to rich your final goals.
                </p>
              </li>
            </ul>
          </div>
        </section>
        <div className=" container-main  px-[15px] mt-[-10rem] mb-[10rem]">
          <div className=" flex justify-center">
            <img
              src={IphoneImage}
              className=" max-h-[100vh] mb-[8rem]"
              alt="Lead up mobile application image"
            />
          </div>
          <div className=" flex flex-col items-center">
            <h3 className=" text-center font-bold text-primary-light">
              Get our mobile application
            </h3>
            <p className=" text-center text-[1.602rem] md:text-[2.074rem] lg:text-[2.441rem]">
              Gather your team in the same place and start working together{" "}
            </p>
            <a href="" className=" btn">
              Download now
            </a>
          </div>
        </div>
        <section
          id="contact"
          className="container-main pt-[8rem] text-primary mb-[8rem]"
        >
          <h2 className="text-center font-bold">Contact</h2>
          <div className="px-[15px] grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10">
            <div className="flex justify-center my-10">
              <img
                src={ContactImage}
                alt="Image of Diego Auza, Leadup founder"
                className="rounded-full border-8 border-surface"
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <h3 className="text-[1.602rem] md:text-[2.074rem] lg:text-[2.441rem] font-bold text-center">
                Hello, I am Diego Auza
              </h3>
              <p>
                Let me tell you about LeadUp and how I came up with this
                brilliant idea. LeadUp is a software that every company can make
                use of. It offers an easy way to keep track of your goals and
                your team.
              </p>
              <p>
                If you are a talented software developer and want to help me
                improve this fantastic tool, send me an email and we can
                schedule a meeting.
              </p>
              <a
                href="https://www.linkedin.com/in/diego-auza-a64b1b253/"
                className="btn"
                target="_blank"
              >
                {`Let's connect`}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default LandPage;
