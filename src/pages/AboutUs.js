import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./AboutUs.css";
const AboutUs = () => {
  const navigate = useNavigate();

  const onGroupContainer2Click = useCallback(() => {
    navigate("/our-services");
  }, [navigate]);

  const onGetInvolvedTextClick = useCallback(() => {
    navigate("/get-involved");
  }, [navigate]);

  const onGroupContainer4Click = useCallback(() => {
    navigate("/self-assessment");
  }, [navigate]);

  const onAboutUsTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onHomepageTextClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  return (
    <div className="about-us">
      <div className="image-15-parent">
        <img className="image-15-icon" alt="" src="/image-15@2x.png" />
        <div className="group-child" />
        <div className="group-item" />
        <div className="group-inner" />
        <div className="rectangle-div" />
        <div className="group-child1" />
        <div className="group-child2" />
      </div>
      <div className="group-parent">
        <div className="group-wrapper">
          <div className="group-wrapper">
            <div className="group-wrapper">
              <div className="rectangle-parent">
                <div className="group-child3" />
                <div className="donate">Donate</div>
              </div>
              <div
                className="our-services-parent"
                onClick={onGroupContainer2Click}
              >
                <div className="our-services">Our Services</div>
                <img className="vector-icon" alt="" src="/vector.svg" />
              </div>
              <div className="get-involved-parent">
                <div className="get-involved" onClick={onGetInvolvedTextClick}>
                  Get Involved
                </div>
                <img className="vector-icon1" alt="" src="/vector1.svg" />
              </div>
              <div
                className="self-assessment-parent"
                onClick={onGroupContainer4Click}
              >
                <div className="self-assessment">Self Assessment</div>
                <img className="vector-icon2" alt="" src="/vector2.svg" />
              </div>
              <div className="about-us-parent">
                <div className="about-us1" onClick={onAboutUsTextClick}>
                  About Us
                </div>
                <img className="vector-icon3" alt="" src="/vector3.svg" />
              </div>
              <div className="homepage-parent">
                <div className="homepage" onClick={onHomepageTextClick}>
                  Homepage
                </div>
                <img className="vector-icon4" alt="" src="/vector4.svg" />
              </div>
              <div className="line-div" />
            </div>
          </div>
        </div>
        <div className="about-us-wrapper">
          <div className="about-us2">About Us</div>
        </div>
      </div>
      <div className="our-vision-our-vision-is-to-cr-parent">
        <div className="our-vision-our-container">
          <p className="our-vision">Our Vision</p>
          <p className="blank-line">&nbsp;</p>
          <p className="blank-line">
            Our vision is to create a world where mental health is a top
            priority and everyone has access to high-quality care and support.
          </p>
        </div>
        <div className="group-child4" />
      </div>
      <div className="our-mission-our-mission-is-to-parent">
        <div className="our-mission-our-container">
          <p className="our-vision">Our Mission</p>
          <p className="blank-line">&nbsp;</p>
          <p className="blank-line">
            Our mission is to provide comprehensive support and resources to
            individuals seeking to improve their mental health and well-being.
            We are committed to creating a safe and inclusive space where
            individuals can access depression detection tests, mental health
            resources, professional support, and community support. We believe
            in the power of mental health professionals and community support to
            improve mental health care and support. We strive to make mental
            health care and support accessible, compassionate, and
            non-judgmental for everyone.
          </p>
        </div>
        <div className="group-child5" />
      </div>
      <div className="our-goal-our-goal-is-to-empowe-parent">
        <div className="our-mission-our-container">
          <p className="our-vision">Our Goal</p>
          <p className="blank-line">&nbsp;</p>
          <p className="blank-line">
            Our goal is to empower individuals to take charge of their mental
            health and well-being by providing them with comprehensive support
            and resources. We aim to reduce the stigma surrounding mental health
            and make it easier for individuals to seek the care and support they
            need. We also strive to improve the quality of mental health care
            and support by working with mental health professionals and
            developing evidence-based resources and tools. Ultimately, our goal
            is to create a world where mental health is a priority and everyone
            has access to the care and support they need to lead healthy and
            fulfilling lives.
          </p>
        </div>
        <div className="group-child6" />
      </div>
      <div className="about-us-our-website-is-design-parent">
        <div className="about-us-our-container">
          <p className="our-vision">About Us</p>
          <p className="blank-line">&nbsp;</p>
          <p className="blank-line">
            Our website is designed to provide a safe and inclusive space for
            individuals to connect with mental health professionals, access
            resources and tools, and find community support. We offer a range of
            services, including depression detection tests, mental health
            resources, professional support, and access to a supportive
            community.
          </p>
          <p className="blank-line">
            Our team is made up of mental health professionals with diverse
            backgrounds and expertise, all dedicated to improving mental health
            care and support. We understand that seeking help for mental health
            concerns can be challenging, and we are committed to providing a
            compassionate and non-judgmental approach to care.
          </p>
          <p className="blank-line">
            At our mental health and depression detection website, we believe in
            the power of community and support. We strive to create a safe and
            inclusive space where individuals can connect with others who share
            similar experiences and challenges. We believe that by working
            together, we can create a world where mental health is a priority
            and everyone has access to the care and support they need.
          </p>
          <p className="blank-line">
            Thank you for visiting our website. We invite you to explore our
            services and resources and join us in our mission to improve mental
            health care and support.
          </p>
        </div>
        <div className="group-child6" />
      </div>
      <div className="rectangle-group">
        <div className="group-child8" />
        <div className="services-parent">
          <div className="services">Services</div>
          <div className="mentoring-parent">
            <div className="mentoring">Mentoring</div>
            <div className="counselling">Counselling</div>
            <div className="online-classes">Online Classes</div>
            <div className="webinar">Webinar</div>
            <div className="phycological-tests">Phycological Tests</div>
          </div>
        </div>
        <div className="company-tagline-with-logo-and-wrapper">
          <div className="company-tagline-with">{`[ company tagline with logo and name ] `}</div>
        </div>
        <div className="group-parent1">
          <div className="our-story-parent">
            <div className="our-story">Our Story</div>
            <div className="mentor-partners">Mentor Partners</div>
            <div className="psychologist-partners">Psychologist Partners</div>
            <div className="advisor-partners">Advisor Partners</div>
            <div className="help">Help</div>
          </div>
          <div className="company">Company</div>
        </div>
        <div className="group-parent2">
          <div className="mentor-parent">
            <div className="mentor">Mentor</div>
            <div className="advisor">Advisor</div>
            <div className="psychologist">Psychologist</div>
          </div>
          <div className="join-us-as">Join Us As</div>
        </div>
        <div className="group-parent3">
          <div className="our-whole-team-is-dedicated-to-wrapper">
            <div className="company-tagline-with">
              Our Whole Team Is Dedicated To Help Each And Every Individual To
              Live A Happy Life.
            </div>
          </div>
          <div className="about-our-mission">About Our Mission</div>
        </div>
        <img className="group-icon" alt="" src="/group-45.svg" />
      </div>
    </div>
  );
};

export default AboutUs;
