import React from "react";
import "./Home.css";
import backbann from "./image/Vector.png";
import img from "./image/home-img.png";
import comp from "./image/comp.png";
import brush from "./image/brush.png";
import diamond from "./image/diamond.png";
import stars from "./image/stars.png";
import Carousel from "../About/carousel";
import { useState, useRef, useEffect } from "react";

function Home() {
  const ref = useRef(null);
  const midref = useRef(null)
  const [isleftVisible, setisleftVisible] = useState(false);
  const [isrightVisible, setisrightVisible] = useState(false);
  const [ismidVisible, setismidVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setisleftVisible(true);
          setisrightVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setismidVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (midref.current) {
      observer.observe(midref.current);
    }
    return () => {
      if (midref.current) {
      observer.unobserve(midref.current);
    }
    };
  }, []);

  return (
    <>
      <div className="home">
        <div className="home-banner">
          <img src={backbann} alt="" />
          <div className="home-cont">
            <div className="main-img">
              <img src={img} alt="" />
            </div>
            <div className="name-text">
              <div className="hi">
                <p className="hlo">Hi,</p>
                <p className="im">i'm</p>
              </div>
              <div className="name">
                <p className="fname">Harsh</p>
                <p className="lname">Khokhar</p>
              </div>
              <div className="designer">Web Designer</div>
              <p className="home-info">
                I am a hardworking and confident web designer, willing to help
                you for your projects.
              </p>
            </div>
          </div>
        </div>
        <div className="home-section1">
          <aside ref={ref} className={`side-section ${isleftVisible ? "leftshow" : ""}`}>
            <div className="line-dots">
              <div className="home-line1"></div>
              <div className="home-dot1"></div>
              <div className="home-line1"></div>
              <div className="home-dot1"></div>
              <div className="home-line1"></div>
            </div>
            <div className="side-section-data">
              <div className="side-section-line">
                <div className="side-section-img">
                  <img src={comp} alt="" />
                </div>
                <div className="side-section-text">Website Development</div>
              </div>
              <div className="side-section-line">
                <div className="side-section-img">
                  <img src={brush} alt="" />
                </div>
                <div className="side-section-text">Web Designing</div>
              </div>
              <div className="side-section-line">
                <div className="side-section-img">
                  <img src={diamond} alt="" />
                </div>
                <div className="side-section-text">Logo Designing</div>
              </div>
            </div>
          </aside>
          <div ref={ref} className={`right-side ${isrightVisible ? "rightshow" : ""}`}>
            <div className="right-side-heading">
              <div className="right-side-heading1">BETTER DESIGN,</div>
              <div className="right-side-heading1">BETTER EXPERIENCE</div>
            </div>
            <div className="right-side-para">
              I believe great websites are a blend of smart design and smooth
              functionality. I'm always up for creating digital experiences that
              look amazing and work even better.
            </div>
          </div>
        </div>
        <div ref={midref} className={`home-section2 ${ismidVisible ? "homeshow" : ""}`}>
          <div className="sec2-head">
            <div className="sec2-head-img">
              <img src={stars} alt="stars" />
            </div>
            <div className="sec2-head-text">WHAT I BRING</div>
          </div>
          <div className="sec2-box">
            <div className="sec2-li-dots">
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div className="sec2-li">
              <ul>
                <li>
                  <div className="sec-li">
                    A strong foundation in HTML, CSS, JavaScript, and React.
                  </div>
                </li>
                <li>
                  <div className="sec-li">
                    A creative eye for UI/UX design using tools like Figma &
                    Canva.
                  </div>
                </li>
                <li>
                  <div className="sec-li">
                    A willingness to learn fast and adapt quickly.
                  </div>
                </li>
                <li>
                  <div className="sec-li">
                    A team player with a collaborative mindset.
                  </div>
                </li>
                <li>
                  <div className="sec-li">
                    Eagerness to work on real-world projects and grow
                    professionally.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="project-section">
          <div className="project-section-title">
            <p>Projects</p>
          </div>
          <Carousel />
        </div>
      </div>
    </>
  );
}

export default Home;
