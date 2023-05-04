import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./GetInvolved.css";
const GetInvolved = () => {
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
    <div className="get-involved1">
      <div className="get-involved-child" />
      <div className="group-parent4">
        <div className="image-14-parent">
          <img className="image-14-icon" alt="" src="/image-14@2x.png" />
          <div className="group-child9" />
          <div className="group-child10" />
          <div className="group-child11" />
          <div className="group-child12" />
          <div className="group-child13" />
        </div>
        <div className="group-frame">
          <div className="group-wrapper1">
            <div className="group-wrapper1">
              <div className="rectangle-container">
                <div className="group-child14" />
                <div className="donate1">Donate</div>
              </div>
              <div
                className="our-services-group"
                onClick={onGroupContainer2Click}
              >
                <div className="our-services1">Our Services</div>
                <img className="vector-icon5" alt="" src="/vector5.svg" />
              </div>
              <div className="get-involved-group">
                <div className="get-involved2" onClick={onGetInvolvedTextClick}>
                  Get Involved
                </div>
                <img className="vector-icon6" alt="" src="/vector6.svg" />
              </div>
              <div
                className="self-assessment-group"
                onClick={onGroupContainer4Click}
              >
                <div className="self-assessment1">Self Assessment</div>
                <img className="vector-icon7" alt="" src="/vector7.svg" />
              </div>
              <div className="about-us-group">
                <div className="about-us4" onClick={onAboutUsTextClick}>
                  About Us
                </div>
                <img className="vector-icon8" alt="" src="/vector8.svg" />
              </div>
              <div className="homepage-group">
                <div className="homepage1" onClick={onHomepageTextClick}>
                  Homepage
                </div>
                <img className="vector-icon9" alt="" src="/vector9.svg" />
              </div>
              <div className="group-child15" />
            </div>
          </div>
        </div>
        <div className="rectangle-parent1">
          <div className="group-child16" />
          <div className="services-group">
            <div className="services1">Services</div>
            <div className="mentoring-group">
              <div className="mentoring1">Mentoring</div>
              <div className="counselling1">Counselling</div>
              <div className="online-classes1">Online Classes</div>
              <div className="webinar1">Webinar</div>
              <div className="phycological-tests1">Phycological Tests</div>
            </div>
          </div>
          <div className="company-tagline-with-logo-and-container">
            <div className="company-tagline-with1">{`[ company tagline with logo and name ] `}</div>
          </div>
          <div className="group-parent6">
            <div className="our-story-group">
              <div className="our-story1">Our Story</div>
              <div className="mentor-partners1">Mentor Partners</div>
              <div className="psychologist-partners1">
                Psychologist Partners
              </div>
              <div className="advisor-partners1">Advisor Partners</div>
              <div className="help1">Help</div>
            </div>
            <div className="company1">Company</div>
          </div>
          <div className="group-parent7">
            <div className="mentor-group">
              <div className="mentor1">Mentor</div>
              <div className="advisor1">Advisor</div>
              <div className="psychologist1">Psychologist</div>
            </div>
            <div className="join-us-as1">Join Us As</div>
          </div>
          <div className="group-parent8">
            <div className="our-whole-team-is-dedicated-to-container">
              <div className="company-tagline-with1">
                Our Whole Team Is Dedicated To Help Each And Every Individual To
                Live A Happy Life.
              </div>
            </div>
            <div className="about-our-mission1">About Our Mission</div>
          </div>
          <img className="group-child17" alt="" src="/group-45.svg" />
        </div>
        <div className="get-involved-with-us-wrapper">
          <div className="get-involved-with">Get Involved With Us</div>
        </div>
        <div className="group-parent9">
          <div className="as-a-mentor-you-will-have-the-wrapper">
            <div className="as-a-mentor">
              As a mentor, you will have the opportunity to guide and support
              individuals who are looking for advice and guidance on their
              mental health journey. Your expertise and experience will help our
              clients navigate challenges, identify potential solutions, and
              make informed decisions about their mental health care.
            </div>
          </div>
          <div className="group-wrapper2">
            <div className="group-parent10">
              <div className="rectangle-parent2">
                <div className="group-child18" />
                <div className="rectangle-parent3">
                  <div className="group-child19" />
                  <div className="join-today">JOIN TODAY</div>
                </div>
                <img className="support-icon" alt="" src="/support@2x.png" />
                <div className="mentor2">Mentor</div>
              </div>
              <img className="group-child20" alt="" src="/group-68.svg" />
            </div>
          </div>
        </div>
        <div className="group-parent11">
          <div className="as-an-advisor-you-will-work-w-wrapper">
            <div className="as-an-advisor">
              As an advisor, you will work with our team to develop and curate
              mental health resources that are accessible, relevant, and
              evidence-based. Your input will help us create a comprehensive
              range of resources and tools that support individuals in improving
              their mental health and well-being.
            </div>
          </div>
          <div className="group-parent12">
            <div className="rectangle-parent4">
              <div className="group-child18" />
              <div className="rectangle-parent5">
                <div className="group-child19" />
                <div className="join-today">JOIN TODAY</div>
              </div>
              <div className="advisor2">Advisor</div>
              <img className="support-icon1" alt="" src="/support@2x.png" />
            </div>
            <img className="group-child23" alt="" src="/group-70.svg" />
          </div>
        </div>
        <div className="group-parent13">
          <div className="as-a-psychologist-you-will-wo-wrapper">
            <div className="as-a-psychologist-container">
              <p className="as-a-psychologist">
                As a psychologist, you will work with our team to provide
                ongoing support and treatment to individuals seeking
                professional mental health services. You will have the
                opportunity to connect with individuals, assess their mental
                health concerns, and develop personalized treatment plans that
                meet their unique needs.
              </p>
            </div>
          </div>
          <div className="group-parent14">
            <div className="rectangle-parent4">
              <div className="group-child18" />
              <div className="rectangle-parent5">
                <div className="group-child19" />
                <div className="join-today">JOIN TODAY</div>
              </div>
              <img className="support-icon1" alt="" src="/support@2x.png" />
              <div className="psychologist2">Psychologist</div>
            </div>
            <img className="group-child23" alt="" src="/group-70.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;
