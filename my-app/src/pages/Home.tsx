import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import ParticlesComponent from "../components/Particle.tsx";

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
    const subpartRefs = useMemo(() => [
        subpartRef1,
        subpartRef2,
        subpartRef3,
    ], [subpartRef1, subpartRef2, subpartRef3]);

  const [subpartSlidUp, setSubpartSlidUp] = useState([false, false, false]);

  const cleanupObserver = useCallback((observer: IntersectionObserver) => {
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
    subpartRefs.forEach((ref) => { // Iterate directly over the array of RefObjects
      if (ref.current && observer) {
        observer.unobserve(ref.current);
      }
    });
  }, [paragraph1Ref, button1Ref, paragraph2Ref, button2Ref, subpartRefs]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === paragraph1Ref.current) {
              setParagraph1SlidUp(true);
            } else if (entry.target === button1Ref.current) {
              setButton1SlidUp(true);
            }
              else if (entry.target === paragraph2Ref.current) {
              setParagraph2SlidUp(true);
            } else if (entry.target === button2Ref.current) {
              setButton2SlidUp(true);
            }
            else {
              subpartRefs.forEach((ref, index) => { // Iterate directly over the array of RefObjects
                if (entry.target === ref.current) {
                  const newSubpartSlidUp = [...subpartSlidUp];
                  newSubpartSlidUp[index] = true;
                  setSubpartSlidUp(newSubpartSlidUp);
                }
              });
            }
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (paragraph1Ref.current) {
      observer.observe(paragraph1Ref.current);
    }
    if (button1Ref.current) {
      observer.observe(button1Ref.current);
    }
      if (paragraph2Ref.current) {
      observer.observe(paragraph2Ref.current);
    }
    if (button2Ref.current) {
      observer.observe(button2Ref.current);
    }
    subpartRefs.forEach((ref) => { // Iterate directly over the array of RefObjects
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      cleanupObserver(observer);
    };
  }, [cleanupObserver, subpartRefs, subpartSlidUp]);

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
        <p ref={paragraph1Ref} className={`home-paragraph ${paragraph1SlidUp ? 'slide-up' : ''}`}>
          <span className="span1"> UI/UX, Backend, Web designers </span> with more than 5 years of experience in
          designing, developing and deploying web applications, websites and mobile apps.
        </p>
        <Link ref={button1Ref} to="/contact" className={`home-button ${button1SlidUp ? 'slide-up' : ''}`}>
          Get in touch
        </Link>
      </div>

      <div className="text-section">
        <p ref={paragraph2Ref} className={`home-paragraph ${paragraph2SlidUp ? 'slide-up' : ''}`}>
          <p ref={subpartRef1} className={`subpart1 ${subpartSlidUp[0] ? 'slide-up' : ''}`}>WHAT WE OFFER</p>
          <p ref={subpartRef2} className={`subpart2 ${subpartSlidUp[1] ? 'slide-up' : ''}`}>Web & Mobile App Design, Bring Your Ideas to Life</p>
          <p ref={subpartRef3} className={`subpart3 ${subpartSlidUp[2] ? 'slide-up' : ''}`}>At Ascendons, we specialize in transforming your ideas into innovative digital solutions. Whether you need a stunning website, a high-performance mobile app, or a custom software solution, we’ve got you covered. From startups to established enterprises, we work on everything where tech is needed.</p>
        </p>
        <Link ref={button2Ref} to="/contact" className={`home-button ${button2SlidUp ? 'slide-up' : ''}`}>
          Get Started Today
        </Link>
      </div>
    </>
  );
};

export default Home;