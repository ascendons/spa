import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import { Link } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "./Home.css";
import JParticlesEffect from "../components/JParticlesEffect";

const Home: React.FC = () => {
  const [text] = useTypewriter({
    words: ["Smart, Scalable, and Stunning Software Solutions."],
    loop: true,
    typeSpeed: 150, //speed of typing
    deleteSpeed: 100, //speed of deleting
    delaySpeed: 5000,
  });

  const paragraph1Ref = useRef<HTMLParagraphElement>(null);
  const button1Ref = useRef<HTMLAnchorElement>(null);
  const [paragraph1SlidUp, setParagraph1SlidUp] = useState(false);
  // const [button1SlidUp, setButton1SlidUp] = useState(false);

  const paragraph2Ref = useRef<HTMLParagraphElement>(null);
  const button2Ref = useRef<HTMLAnchorElement>(null);
  const [paragraph2SlidUp, setParagraph2SlidUp] = useState(false);
  const [button2SlidUp, setButton2SlidUp] = useState(false);

  const subpartRef1 = useRef<HTMLParagraphElement>(null);
  const subpartRef2 = useRef<HTMLParagraphElement>(null);
  const subpartRef3 = useRef<HTMLParagraphElement>(null);

  const subpartRefs = useMemo(
    () => [subpartRef1, subpartRef2, subpartRef3],
    [subpartRef1, subpartRef2, subpartRef3],
  );

  const [subpartSlidUp, setSubpartSlidUp] = useState([false, false, false]);

  const strategyRef = useRef<HTMLDivElement>(null);
  const designRef = useRef<HTMLDivElement>(null);
  const developmentRef = useRef<HTMLDivElement>(null);
  const helpSupportRef = useRef<HTMLDivElement>(null);

  const [servicesSlidUp, setServicesSlidUp] = useState({
    strategy: false,
    design: false,
    development: false,
    helpSupport: false,
  });

  // Refs for the new section
  const journeySectionRef = useRef<HTMLDivElement>(null);
  const statCard1Ref = useRef<HTMLDivElement>(null);
  const statCard2Ref = useRef<HTMLDivElement>(null);
  const statCard3Ref = useRef<HTMLDivElement>(null);
  const joinButtonRef = useRef<HTMLAnchorElement>(null);

  const [journeySectionVisible, setJourneySectionVisible] = useState(false);
  const [statCard1SlidUp, setStatCard1SlidUp] = useState(false);
  const [statCard2SlidUp, setStatCard2SlidUp] = useState(false);
  const [statCard3SlidUp, setStatCard3SlidUp] = useState(false);
  const [joinButtonSlidUp, setJoinButtonSlidUp] = useState(false);

  const cleanupObserver = useCallback(
    (observer: IntersectionObserver) => {
      if (paragraph1Ref.current && observer) observer.unobserve(paragraph1Ref.current);
      if (button1Ref.current && observer) observer.unobserve(button1Ref.current);
      if (paragraph2Ref.current && observer) observer.unobserve(paragraph2Ref.current);
      if (button2Ref.current && observer) observer.unobserve(button2Ref.current);

      subpartRefs.forEach((ref) => {
        if (ref.current && observer) observer.unobserve(ref.current);
      });

      if (strategyRef.current && observer) observer.unobserve(strategyRef.current);
      if (designRef.current && observer) observer.unobserve(designRef.current);
      if (developmentRef.current && observer) observer.unobserve(developmentRef.current);
      if (helpSupportRef.current && observer) observer.unobserve(helpSupportRef.current);

      // Clean up for new section
      if (journeySectionRef.current && observer) observer.unobserve(journeySectionRef.current);
      if (statCard1Ref.current && observer) observer.unobserve(statCard1Ref.current);
      if (statCard2Ref.current && observer) observer.unobserve(statCard2Ref.current);
      if (statCard3Ref.current && observer) observer.unobserve(statCard3Ref.current);
      if (joinButtonRef.current && observer) observer.unobserve(joinButtonRef.current);
    },
    [
      paragraph1Ref,
      button1Ref,
      paragraph2Ref,
      button2Ref,
      subpartRefs,
      strategyRef,
      designRef,
      developmentRef,
      helpSupportRef,
      journeySectionRef,
      statCard1Ref,
      statCard2Ref,
      statCard3Ref,
      joinButtonRef,
    ],
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === paragraph1Ref.current) {
              setParagraph1SlidUp(true);
            } else if (entry.target === button1Ref.current) {
              // setButton1SlidUp(true);
            } else if (entry.target === paragraph2Ref.current) {
              setParagraph2SlidUp(true);
            } else if (entry.target === button2Ref.current) {
              setButton2SlidUp(true);
            } else if (
              subpartRefs.some((ref) => entry.target === ref.current)
            ) {
              subpartRefs.forEach((ref, index) => {
                if (entry.target === ref.current) {
                  const newSubpartSlidUp = [...subpartSlidUp];
                  newSubpartSlidUp[index] = true;
                  setSubpartSlidUp(newSubpartSlidUp);
                }
              });
            } else if (entry.target === strategyRef.current) {
              setServicesSlidUp((prev) => ({ ...prev, strategy: true }));
            } else if (entry.target === designRef.current) {
              setServicesSlidUp((prev) => ({ ...prev, design: true }));
            } else if (entry.target === developmentRef.current) {
              setServicesSlidUp((prev) => ({ ...prev, development: true }));
            } else if (entry.target === helpSupportRef.current) {
              setServicesSlidUp((prev) => ({ ...prev, helpSupport: true }));
            } else if (entry.target === journeySectionRef.current) {
              setJourneySectionVisible(true);
            } else if (entry.target === statCard1Ref.current) {
              setStatCard1SlidUp(true);
            } else if (entry.target === statCard2Ref.current) {
              setStatCard2SlidUp(true);
            } else if (entry.target === statCard3Ref.current) {
              setStatCard3SlidUp(true);
            } else if (entry.target === joinButtonRef.current) {
              setJoinButtonSlidUp(true);
            }
          }
        });
      },
      { threshold: 0.1 },
    );

    if (paragraph1Ref.current) observer.observe(paragraph1Ref.current);
    if (button1Ref.current) observer.observe(button1Ref.current);
    if (paragraph2Ref.current) observer.observe(paragraph2Ref.current);
    if (button2Ref.current) observer.observe(button2Ref.current);
    subpartRefs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });
    if (strategyRef.current) observer.observe(strategyRef.current);
    if (designRef.current) observer.observe(designRef.current);
    if (developmentRef.current) observer.observe(developmentRef.current);
    if (helpSupportRef.current) observer.observe(helpSupportRef.current);

    // Observe new section elements
    if (journeySectionRef.current) observer.observe(journeySectionRef.current);
    if (statCard1Ref.current) observer.observe(statCard1Ref.current);
    if (statCard2Ref.current) observer.observe(statCard2Ref.current);
    if (statCard3Ref.current) observer.observe(statCard3Ref.current);
    if (joinButtonRef.current) observer.observe(joinButtonRef.current);


    return () => {
      cleanupObserver(observer);
    };
  }, [
    cleanupObserver,
    subpartRefs,
    subpartSlidUp,
    strategyRef,
    designRef,
    developmentRef,
    helpSupportRef,
    journeySectionRef,
    statCard1Ref,
    statCard2Ref,
    statCard3Ref,
    joinButtonRef,
  ]);

  return (
    <>
      <section className="home-section">
        {/* <ParticlesComponent id="tsparticles" className="absolute inset-0" /> */}
        <JParticlesEffect />
        <div className="home-content">
          <div className="home-heading">
            {text}
            <Cursor cursorStyle="|" />
          </div>
          <Link to="/contact" className="home-butto">
            Get in touch
          </Link>
        </div>
      </section>

      <div className="text-section">
        <p
          ref={paragraph1Ref}
          className={`home-paragraph ${paragraph1SlidUp ? "slide-up" : ""}`}
        >
          <span className="span1"> UI/UX, Backend, Web designers </span> with
          more than 5 years of experience in designing, developing and deploying
          web applications, websites and mobile apps.
        </p>
        {/* <button>
        <Link
          ref={button1Ref}
          to="/contact"
          className={`home-button ${button1SlidUp ? "slide-up" : ""}`}
        >
          Get in touch
        </Link>
        </button> */}
      </div>

      <div className="text-section">
        <p
          ref={paragraph2Ref}
          className={`home-paragraph ${paragraph2SlidUp ? "slide-up" : ""}`}
        >
          <p
            ref={subpartRef1}
            className={`subpart1 ${subpartSlidUp[0] ? "slide-up" : ""}`}
          >
            WHAT WE OFFER
          </p>
          <p
            ref={subpartRef2}
            className={`subpart2 ${subpartSlidUp[1] ? "slide-up" : ""}`}
          >
            Web & Mobile App Design, Bring Your Ideas to Life
          </p>
          <p
            ref={subpartRef3}
            className={`subpart3 ${subpartSlidUp[2] ? "slide-up" : ""}`}
          >
            At Ascendons, we specialize in transforming your ideas into
            innovative digital solutions. Whether you need a stunning website, a
            high-performance mobile app, or a custom software solution, we’ve
            got you covered. From startups to established enterprises, we work
            on everything where tech is needed.
          </p>
        </p>
        <Link
          ref={button2Ref}
          to="/contact"
          className={`home-button ${button2SlidUp ? "slide-up" : ""}`}
        >
          Get Started Today
        </Link>
      </div>

      <section className="services-section">
        <div
          ref={strategyRef}
          className={`service-card ${servicesSlidUp.strategy ? "slide-up" : ""}`}
        >
          <span className="headi">Strategy</span>
          <p className="para">
            We craft tailored strategies to align with your business goals,
            ensuring your digital solutions drive growth and success. From
            market research to product roadmaps, we’ve got you covered.
          </p>
          <button className="learn-more-button">Learn More</button>
        </div>
        <div
          ref={designRef}
          className={`service-card ${servicesSlidUp.design ? "slide-up" : ""}`}
        >
          <span className="headi">Design</span>
          <p className="para">
            Our design team creates visually stunning, user-friendly interfaces
            that captivate your audience and enhance user experience. We focus
            on aesthetics, usability, and brand consistency.
          </p>
          <button className="learn-more-button">Learn More</button>
        </div>
        <div
          ref={developmentRef}
          className={`service-card ${servicesSlidUp.development ? "slide-up" : ""}`}
        >
          <span className="headi">Development</span>
          <p className="para">
            We build scalable, high-performance applications and websites using
            the latest technologies. From custom software to third-party
            integrations, we deliver solutions that grow with your business.
          </p>
          <button className="learn-more-button">Learn More</button>
        </div>
        <div
          ref={helpSupportRef}
          className={`service-card ${servicesSlidUp.helpSupport ? "slide-up" : ""}`}
        >
          <span className="headi">Help & Support</span>
          <p className="para">
            From deployment to maintenance, we provide end-to-end support to
            ensure your systems run smoothly and efficiently. Our team is always
            here to help with updates, troubleshooting, and scaling.
          </p>
          <button className="learn-more-button">Learn More</button>
        </div>
      </section>

      <section className="emailsection">
        <span className="span2">Join the Ascendons Community</span>
        <p className="para2">
          Subscribe to our newsletter and stay ahead with the latest trends,
          insights, and innovations in technology. Be the first to know about
          our updates, tips, and exclusive offers!
        </p>
        <div className="subscribe-container">
          <input type="email" className="email-input" placeholder="Email" />
          <button className="subscribe-button">Subscribe</button>
        </div>
      </section>

      <div className="text-section">
        <p
          ref={paragraph2Ref}
          className={`home-paragraph ${paragraph2SlidUp ? "slide-up" : ""}`}
        >
          <p
            ref={subpartRef1}
            className={`subpart1 ${subpartSlidUp[0] ? "slide-up" : ""}`}
          >
            WHY CHOOSE US?
          </p>
          <p
            ref={subpartRef2}
            className={`subpart2 ${subpartSlidUp[1] ? "slide-up" : ""}`}
          >
            Automation Solutions for Your Business
          </p>
          <p
            ref={subpartRef3}
            className={`subpart3 ${subpartSlidUp[2] ? "slide-up" : ""}`}
          >
            We deliver cutting-edge automation solutions to help your business
            thrive. Let us streamline your processes and drive efficiency.
          </p>
        </p>
      </div>

      <section className="services-section">
        <div
          ref={strategyRef}
          className={`service-card ${servicesSlidUp.strategy ? "slide-up" : ""}`}
        >
          <span className="headi">Save Money</span>
          <p className="para">
            We help you save money by automating repetitive tasks and reducing
            manual effort. Our solutions optimize processes, cutting down on
            time and labor costs while boosting productivity.
          </p>
        </div>
        <div
          ref={designRef}
          className={`service-card ${servicesSlidUp.design ? "slide-up" : ""}`}
        >
          <span className="headi">Reduce Cycle time</span>
          <p className="para">
            Our automation solutions speed up your processes, allowing you to
            handle more tasks in less time. This increases your capacity without
            the need for additional labor, while faster service keeps your
            customers happy.
          </p>
        </div>
        <div
          ref={developmentRef}
          className={`service-card ${servicesSlidUp.development ? "slide-up" : ""}`}
        >
          <span className="headi">Improve Quality</span>
          <p className="para">
            We help you minimize errors and rework by implementing automated
            quality checks and process improvements. This ensures consistent,
            high-quality results that protect your reputation and customer
            trust.
          </p>
        </div>
        <div
          ref={helpSupportRef}
          className={`service-card ${servicesSlidUp.helpSupport ? "slide-up" : ""}`}
        >
          <span className="headi">Become Competitive</span>
          <p className="para">
            Your competitors are already automating their processes. We help you
            stay ahead by implementing automation solutions that enhance
            efficiency, reduce costs, and improve customer satisfaction.
          </p>
        </div>
      </section>

      {/* New section from the image */}
      <section className={`ascendons-journey-section ${journeySectionVisible ? "visible" : ""}`} ref={journeySectionRef}>
        <h2>Our Journey at ASCENDONS</h2>
        <p>
          At Ascendons, we believe in pushing boundaries and achieving the
          extraordinary. From empowering businesses to delighting customers,
          our journey is defined by innovation, dedication, and results. Here's
          a glimpse of what we've accomplished so far:
        </p>
        <div className="ascendons-stats-container">
          <div className={`ascendons-stat-card ${statCard1SlidUp ? "slide-up" : ""}`} ref={statCard1Ref}>
            <h3>15</h3>
            <strong>Happy Clients Trusting Ascendons</strong>
            <span>
              Our clients are at the heart of everything we do. Their success is
              our greatest achievement.
            </span>
          </div>
          <div className={`ascendons-stat-card ${statCard2SlidUp ? "slide-up" : ""}`} ref={statCard2Ref}>
            <h3>32</h3>
            <strong>Innovative Solutions Delivered</strong>
            <span>
              From cutting-edge technology to creative strategies, we've built
              solutions that inspire growth.
            </span>
          </div>
          <div className={`ascendons-stat-card ${statCard3SlidUp ? "slide-up" : ""}`} ref={statCard3Ref}>
            <h3>60</h3>
            <strong>Moments of Exceptional Support</strong>
            <span>
              Our team is always here, ensuring your experience with Ascendons
              is seamless and rewarding.
            </span>
          </div>
        </div>
        <Link to="/contact" className={`join-journey-button ${joinButtonSlidUp ? "slide-up" : ""}`} ref={joinButtonRef}>
          Join the Ascendons Journey
        </Link>
      </section>
    </>
  );
};

export default Home;