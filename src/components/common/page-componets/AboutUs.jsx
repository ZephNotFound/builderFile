import { BiCreditCard, BiGlobe, BiHomeAlt } from "react-icons/bi";

const AboutUs = () => {
  return (
    <div className="pt-16 pb-20">
      <div className="flex flex-wrap gap-24">
        <div className="relative flex-1 basis-[18rem]">
          <img
            src="/images/plan1.png"
            alt=""
            className="object-cover w-full h-full rounded-lg"
          />
          <img
            src="/images/frontelevation.jpg"
            alt=""
            className="absolute object-cover w-48 h-64 border-4 border-white rounded-lg sm:w-72 sm:h-80 dark:border-dark -bottom-20 -right-2 md:-right-20"
          />
        </div>
        <div className="relative flex-1 basis-[22rem]">
          <h1 className="sub-heading">about us</h1>
          <h1 className="heading">we decorate your home environment</h1>
          <p className="mt-3">
            Welcome to BuilderFile, your all-in-one destination for envisioning
            and realizing your dream home. <br />
            At BuilderFile, we seamlessly blend state-of-the-art technology with
            construction expertise, offering
            <br /> meticulously crafted plans, detailed blueprints, and
            immersive 3D models. Our commitment goes beyond
            <br /> design as we guide you through the entire construction
            process, ensuring a seamless journey from
            <br /> concept to completion. With BuilderFile, your vision comes to
            life with precision and passion, <br />
            transforming your dream into a tangible, beautifully constructed
            reality.
          </p>
          <div className="mt-4">
            <div className="flex-align-center gap-x-2">
              <div className="icon-box text-primary !bg-primary/20">
                <BiHomeAlt />
              </div>
              <div>
                <h1 className="font-semibold capitalize">
                  the perfect residency
                </h1>
                <p>
                  A well planned, comfortable, beautifully crafted reality
                  called Home.
                </p>
              </div>
            </div>

            <div className="mt-3 flex-align-center gap-x-2">
              <div className="icon-box text-primary !bg-primary/20">
                <BiGlobe />
              </div>
              <div>
                <h1 className="font-semibold capitalize">
                  global architect experts
                </h1>
                <p>
                  Our Architects meticulously craft plans based on your
                  requirements.
                </p>
              </div>
            </div>

            <div className="mt-3 flex-align-center gap-x-2">
              <div className="icon-box text-primary !bg-primary/20">
                <BiCreditCard />
              </div>
              <div>
                <h1 className="font-semibold capitalize">
                  total payment transparency
                </h1>
                <p>Totally free doing it in my free time.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
