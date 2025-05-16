import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import ParticlesComponent from "../components/Particle.tsx";
// import { Lightbulb, Laptop, Cog, HelpCircle } from "lucide-react";

const Home: React.FC = () => {
  const paragraph1Ref = useRef<HTMLParagraphElement>(null);
  const button1Ref = useRef<HTMLAnchorElement>(null);
  const [paragraph1SlidUp, setParagraph1SlidUp] = useState(false);
  const [button1SlidUp, setButton1SlidUp] = useState(false);

  const paragraph2Ref = useRef<HTMLParagraphElement>(null);
  const button2Ref = useRef<HTMLAnchorElement>(null);
  const [paragraph2SlidUp, setParagraph2SlidUp] = useState(false);
  const [button2SlidUp, setButton2SlidUp] = useState(false);

  // Create the ref objects directly in the component
  const subpartRef1 = useRef<HTMLParagraphElement>(null);
  const subpartRef2 = useRef<HTMLParagraphElement>(null);
  const subpartRef3 = useRef<HTMLParagraphElement>(null);

  // Memoize the subpartRefs array using the ref objects
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

  const cleanupObserver = useCallback(
    (observer: IntersectionObserver) => {
      if (paragraph1Ref.current && observer) {
        observer.unobserve(paragraph1Ref.current);
      }
      if (button1Ref.current && observer) {
        observer.unobserve(button1Ref.current);
      }
      if (paragraph2Ref.current && observer) {
        observer.unobserve(paragraph2Ref.current);
      }
      if (button2Ref.current && observer) {
        observer.unobserve(button2Ref.current);
      }
      subpartRefs.forEach((ref) => {
        // Iterate directly over the array of RefObjects
        if (ref.current && observer) {
          observer.unobserve(ref.current);
        }
      });
      if (strategyRef.current && observer)
        observer.unobserve(strategyRef.current);
      if (designRef.current && observer) observer.unobserve(designRef.current);
      if (developmentRef.current && observer)
        observer.unobserve(developmentRef.current);
      if (helpSupportRef.current && observer)
        observer.unobserve(helpSupportRef.current);
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
              setButton1SlidUp(true);
            } else if (entry.target === paragraph2Ref.current) {
              setParagraph2SlidUp(true);
            } else if (entry.target === button2Ref.current) {
              setButton2SlidUp(true);
            } else if (
              subpartRefs.some((ref) => entry.target === ref.current)
            ) {
              subpartRefs.forEach((ref, index) => {
                // Iterate directly over the array of RefObjects
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
            }
          }
        });
      },
      {
        threshold: 0.1,
      },
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
  ]);

  return (
    <>
      <section className="home-section">
        <ParticlesComponent id="tsparticles" className="absolute inset-0" />
        <div className="home-content">
          <div className="home-heading">
            Smart, Scalable, and Stunning Software Solutions.
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
        <Link
          ref={button1Ref}
          to="/contact"
          className={`home-button ${button1SlidUp ? "slide-up" : ""}`}
        >
          Get in touch
        </Link>
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

      <div className="text-section">
        <p
          ref={paragraph2Ref}
          className={`home-paragraph ${paragraph2SlidUp ? "slide-up" : ""}`}
        >
          <p
            ref={subpartRef2}
            className={`subpart2 ${subpartSlidUp[1] ? "slide-up" : ""}`}
          >
            AI Solutions Tailored for Your Success
          </p>
          <p
            ref={subpartRef3}
            className={`subpart3 ${subpartSlidUp[2] ? "slide-up" : ""}`}
          >
            We deliver cutting-edge AI solutions to help your business thrive in
            a competitive landscape. Let us empower you with intelligent tools
            and insights.
          </p>
        </p>
      </div>

      <section className="services-section">
        <div
          ref={strategyRef}
          className={`service-card ${servicesSlidUp.strategy ? "slide-up" : ""}`}
        >
          <span className="headi">Smarter Decision-Making</span>
          <p className="para">
            We provide AI tools that analyze data and deliver actionable
            insights, helping you make faster, smarter decisions.
          </p>
        </div>
        <div
          ref={designRef}
          className={`service-card ${servicesSlidUp.design ? "slide-up" : ""}`}
        >
          <span className="headi">Personalized Experiences</span>
          <p className="para">
            Our AI solutions create tailored customer interactions, enhancing
            engagement and building loyalty.
          </p>
        </div>
        <div
          ref={developmentRef}
          className={`service-card ${servicesSlidUp.development ? "slide-up" : ""}`}
        >
          <span className="headi">24/7 Customer Support</span>
          <p className="para">
            We implement AI-powered chatbots and virtual assistants to provide
            instant, round-the-clock support for your customers.
          </p>
        </div>
        <div
          ref={helpSupportRef}
          className={`service-card ${servicesSlidUp.helpSupport ? "slide-up" : ""}`}
        >
          <span className="headi">Predictive Analysis</span>
          <p className="para">
            Our AI solutions predict trends and customer behavior, helping you
            stay ahead of the competition.
          </p>
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
            OUR EXPERTISE
          </p>
          <p
            ref={subpartRef2}
            className={`subpart2 ${subpartSlidUp[1] ? "slide-up" : ""}`}
          >
            Tech Solutions We Deliver
          </p>
          <p
            ref={subpartRef3}
            className={`subpart3 ${subpartSlidUp[2] ? "slide-up" : ""}`}
          >
            We provide cutting-edge technology consulting services to help your
            business innovate, optimize, and grow. Here’s how we can add value
            to your organization.
          </p>
        </p>
      </div>

      <section className="services-section">
        <div
          ref={strategyRef}
          className={`service-card ${servicesSlidUp.strategy ? "slide-up" : ""}`}
        >
          <span className="headi">Digital Transformation</span>
          <p className="para">
            We help businesses embrace digital technologies to streamline
            operations, improve customer experiences, and stay competitive in a
            rapidly evolving market.
          </p>
        </div>
        <div
          ref={designRef}
          className={`service-card ${servicesSlidUp.design ? "slide-up" : ""}`}
        >
          <span className="headi">Cloud Solutions </span>
          <p className="para">
            We design and implement cloud-based solutions to enhance
            scalability, flexibility, and cost-efficiency for your business.
          </p>
        </div>
        <div
          ref={developmentRef}
          className={`service-card ${servicesSlidUp.development ? "slide-up" : ""}`}
        >
          <span className="headi">AI & Machine Learning</span>
          <p className="para">
            We develop AI-driven solutions to automate processes, predict
            trends, and deliver personalized customer experiences.
          </p>
        </div>
        <div
          ref={helpSupportRef}
          className={`service-card ${servicesSlidUp.helpSupport ? "slide-up" : ""}`}
        >
          <span className="headi">Cyber security</span>
          <p className="para">
            We protect your business from cyber threats with robust security
            strategies, tools, and best practices.
          </p>
        </div>
      </section>

      <section className="services-section">
        <div
          ref={strategyRef}
          className={`service-card ${servicesSlidUp.strategy ? "slide-up" : ""}`}
        >
          <span className="headi">Software Development</span>
          <p className="para">
            We build custom software solutions tailored to your business needs,
            ensuring scalability, performance, and user satisfaction.
          </p>
        </div>
        <div
          ref={designRef}
          className={`service-card ${servicesSlidUp.design ? "slide-up" : ""}`}
        >
          <span className="headi">Data Analytics & Insights</span>
          <p className="para">
            We help you harness the power of data to make informed decisions,
            identify trends, and uncover new opportunities.
          </p>
        </div>
        <div
          ref={developmentRef}
          className={`service-card ${servicesSlidUp.development ? "slide-up" : ""}`}
        >
          <span className="headi">IT Infrastructure Management</span>
          <p className="para">
            We optimize and manage your IT infrastructure to ensure reliability,
            scalability, and cost-efficiency.
          </p>
        </div>
        <div
          ref={helpSupportRef}
          className={`service-card ${servicesSlidUp.helpSupport ? "slide-up" : ""}`}
        >
          <span className="headi">IoT Solutions</span>
          <p className="para">
            We design and implement IoT solutions to connect devices, collect
            data, and drive smarter decision-making.
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
