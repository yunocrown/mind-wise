import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./OurServices.css";
const OurServices = () => {
  const navigate = useNavigate();

  const onGroupContainer1Click = useCallback(() => {
    navigate("/our-services");
  }, [navigate]);

  const onGetInvolvedTextClick = useCallback(() => {
    navigate("/get-involved");
  }, [navigate]);

  const onGroupContainer3Click = useCallback(() => {
    navigate("/self-assessment");
  }, [navigate]);

  const onAboutUsTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onHomepageTextClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  return (
    <div className="our-services2">
      <div className="our-services-child" />
      <div className="group-parent15">
        <div className="group-wrapper3">
          <div className="group-wrapper4">
            <div className="group-wrapper4">
              <div className="rectangle-parent8">
                <div className="group-child27" />
                <div className="donate2">Donate</div>
              </div>
              <div
                className="our-services-container"
                onClick={onGroupContainer1Click}
              >
                <div className="our-services3">Our Services</div>
                <img className="vector-icon10" alt="" src="/vector10.svg" />
              </div>
              <div className="get-involved-container">
                <div className="get-involved3" onClick={onGetInvolvedTextClick}>
                  Get Involved
                </div>
                <img className="vector-icon11" alt="" src="/vector11.svg" />
              </div>
              <div
                className="self-assessment-container"
                onClick={onGroupContainer3Click}
              >
                <div className="self-assessment2">Self Assessment</div>
                <img className="vector-icon12" alt="" src="/vector12.svg" />
              </div>
              <div className="about-us-container">
                <div className="about-us5" onClick={onAboutUsTextClick}>
                  About Us
                </div>
                <img className="vector-icon13" alt="" src="/vector13.svg" />
              </div>
              <div className="homepage-container">
                <div className="homepage2" onClick={onHomepageTextClick}>
                  Homepage
                </div>
                <img className="vector-icon14" alt="" src="/vector14.svg" />
              </div>
              <div className="group-child28" />
            </div>
          </div>
        </div>
        <div className="image-9-parent">
          <img className="image-9-icon" alt="" src="/image-9@2x.png" />
          <div className="rectangle-parent9">
            <div className="group-child29" />
            <div className="group-child30" />
            <div className="group-child31" />
            <div className="group-child32" />
            <div className="group-child33" />
          </div>
          <div className="rectangle-parent10">
            <div className="group-child34" />
            <div className="group-child35" />
            <div className="group-child36" />
            <div className="group-child37" />
          </div>
        </div>
        <div className="rectangle-parent11">
          <div className="group-child38" />
          <div className="services-container">
            <div className="services2">Services</div>
            <div className="mentoring-container">
              <div className="mentoring2">Mentoring</div>
              <div className="counselling2">Counselling</div>
              <div className="online-classes2">Online Classes</div>
              <div className="webinar2">Webinar</div>
              <div className="phycological-tests2">Phycological Tests</div>
            </div>
          </div>
          <div className="company-tagline-with-logo-and-frame">
            <div className="company-tagline-with2">{`[ company tagline with logo and name ] `}</div>
          </div>
          <div className="group-parent17">
            <div className="our-story-container">
              <div className="our-story2">Our Story</div>
              <div className="mentor-partners2">Mentor Partners</div>
              <div className="psychologist-partners2">
                Psychologist Partners
              </div>
              <div className="advisor-partners2">Advisor Partners</div>
              <div className="help2">Help</div>
            </div>
            <div className="company2">Company</div>
          </div>
          <div className="group-parent18">
            <div className="mentor-container">
              <div className="mentor3">Mentor</div>
              <div className="advisor3">Advisor</div>
              <div className="psychologist3">Psychologist</div>
            </div>
            <div className="join-us-as2">Join Us As</div>
          </div>
          <div className="group-parent19">
            <div className="our-whole-team-is-dedicated-to-frame">
              <div className="company-tagline-with2">
                Our Whole Team Is Dedicated To Help Each And Every Individual To
                Live A Happy Life.
              </div>
            </div>
            <div className="about-our-mission2">About Our Mission</div>
          </div>
          <img className="group-child39" alt="" src="/group-45.svg" />
        </div>
        <div className="our-services-parent1">
          <div className="our-services4">Our Services</div>
          <div className="at-the-core">
            At the core of our services is a commitment to helping individuals
            improve their mental health and well-being. We believe that everyone
            deserves access to high-quality mental health support and resources,
            and we are dedicated to providing that support in a compassionate,
            non-judgmental, and accessible way.
          </div>
        </div>
        <div className="our-mental-health-services-are-wrapper">
          <div className="our-mental-health">
            Our mental health services are designed to provide comprehensive
            support and resources to individuals seeking to improve their mental
            health and well-being. We offer a range of services that go beyond
            traditional mental health consultancy, including depression
            detection tests, mental health resources, professional support, and
            access to a supportive community.
          </div>
        </div>
        <div className="group-parent20">
          <div className="line-parent">
            <img className="line-icon" alt="" src="/line-3.svg" />
            <div className="rectangle-parent12">
              <div className="group-child40" />
              <div className="rectangle-parent13">
                <div className="group-child41" />
                <div className="explore-more">Explore More</div>
              </div>
              <img className="teacher-icon" alt="" src="/teacher@2x.png" />
              <div className="webinars">Webinars</div>
            </div>
            <img className="group-child42" alt="" src="/group-681.svg" />
          </div>
          <div className="line-group">
            <img className="group-child43" alt="" src="/line-3.svg" />
            <div className="rectangle-parent14">
              <div className="group-child40" />
              <div className="rectangle-parent15">
                <div className="group-child41" />
                <div className="explore-more">Explore More</div>
              </div>
              <img
                className="video-call-icon"
                alt=""
                src="/video-call@2x.png"
              />
              <div className="online-classes3">Online Classes</div>
            </div>
            <img className="group-child46" alt="" src="/group-70.svg" />
          </div>
          <div className="group-parent21">
            <div className="rectangle-parent16">
              <div className="group-child47" />
              <div className="rectangle-parent17">
                <div className="group-child41" />
                <div className="explore-more">Explore More</div>
              </div>
              <img className="talk-icon" alt="" src="/talk@2x.png" />
              <div className="counselling3">Counselling</div>
            </div>
            <img className="group-child49" alt="" src="/group-70.svg" />
          </div>
          <div className="line-container">
            <div className="group-child50" />
            <img className="group-child51" alt="" src="/group-681.svg" />
            <div className="rectangle-parent16">
              <div className="group-child47" />
              <img className="help-icon" alt="" src="/help@2x.png" />
              <div className="mentoring3">Mentoring</div>
              <div className="rectangle-parent19">
                <div className="group-child41" />
                <div className="explore-more">Explore More</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
