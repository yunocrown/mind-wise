import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SelfAssessment.css";
const SelfAssessment = () => {
  const navigate = useNavigate();

  const onGroupContainer11Click = useCallback(() => {
    navigate("/our-services");
  }, [navigate]);

  const onGetInvolvedTextClick = useCallback(() => {
    navigate("/get-involved");
  }, [navigate]);

  const onGroupContainer13Click = useCallback(() => {
    navigate("/self-assessment");
  }, [navigate]);

  const onAboutUsTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onHomepageTextClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  return (
    <div className="self-assessment4">
      <div className="rectangle-parent32">
        <div className="group-child67" />
        <div className="services-parent2">
          <div className="services4">Services</div>
          <div className="mentoring-parent2">
            <div className="mentoring5">Mentoring</div>
            <div className="counselling5">Counselling</div>
            <div className="online-classes5">Online Classes</div>
            <div className="webinar4">Webinar</div>
            <div className="phycological-tests4">Phycological Tests</div>
          </div>
        </div>
        <div className="company-tagline-with-logo-and-wrapper2">
          <div className="company-tagline-with4">{`[ company tagline with logo and name ] `}</div>
        </div>
        <div className="group-parent31">
          <div className="our-story-parent2">
            <div className="our-story4">Our Story</div>
            <div className="mentor-partners4">Mentor Partners</div>
            <div className="psychologist-partners4">Psychologist Partners</div>
            <div className="advisor-partners4">Advisor Partners</div>
            <div className="help4">Help</div>
          </div>
          <div className="company4">Company</div>
        </div>
        <div className="group-parent32">
          <div className="mentor-parent2">
            <div className="mentor5">Mentor</div>
            <div className="advisor5">Advisor</div>
            <div className="psychologist5">Psychologist</div>
          </div>
          <div className="join-us-as4">Join Us As</div>
        </div>
        <div className="group-parent33">
          <div className="our-whole-team-is-dedicated-to-wrapper2">
            <div className="company-tagline-with4">
              Our Whole Team Is Dedicated To Help Each And Every Individual To
              Live A Happy Life.
            </div>
          </div>
          <div className="about-our-mission4">About Our Mission</div>
        </div>
        <img className="group-child68" alt="" src="/group-451.svg" />
      </div>
      <div className="image-8-parent">
        <img className="image-8-icon" alt="" src="/image-8@2x.png" />
        <div className="group-wrapper8">
          <div className="group-parent34">
            <div className="rectangle-parent33">
              <div className="group-child69" />
              <div className="donate4">Donate</div>
            </div>
            <div
              className="our-services-parent3"
              onClick={onGroupContainer11Click}
            >
              <div className="our-services6">Our Services</div>
              <img className="vector-icon25" alt="" src="/vector21.svg" />
            </div>
            <div className="get-involved-parent2">
              <div className="get-involved5" onClick={onGetInvolvedTextClick}>
                Get Involved
              </div>
              <img className="vector-icon26" alt="" src="/vector22.svg" />
            </div>
            <div
              className="self-assessment-parent2"
              onClick={onGroupContainer13Click}
            >
              <div className="self-assessment5">Self Assessment</div>
              <img className="vector-icon27" alt="" src="/vector23.svg" />
            </div>
            <div className="about-us-parent2">
              <div className="about-us7" onClick={onAboutUsTextClick}>
                About Us
              </div>
              <img className="vector-icon28" alt="" src="/vector24.svg" />
            </div>
            <div className="homepage-parent2">
              <div className="homepage4" onClick={onHomepageTextClick}>
                Homepage
              </div>
              <img className="vector-icon29" alt="" src="/vector25.svg" />
            </div>
            <div className="group-child70" />
          </div>
        </div>
        <div className="choose-self-assessment-parent">
          <div className="choose-self-">Choose Self - Assessment</div>
          <div className="self-assessment-tests-are">
            Self-assessment tests are tools designed to help individuals
            identify potential mental health issues or symptoms. These tests can
            be a helpful first step in seeking support and treatment for mental
            health concerns. Self-assessment tests are typically designed to be
            completed independently, and they can be accessed online or through
            mental health providers.
          </div>
        </div>
        <div className="rectangle-parent34">
          <div className="group-child71" />
          <img className="image-10-icon" alt="" src="/image-10@2x.png" />
          <div className="group-child72" />
          <div className="group-child72" />
          <div className="beck-depression-inventory">
            Beck Depression Inventory (BDI-II)
          </div>
        </div>
        <div className="rectangle-parent35">
          <div className="group-child71" />
          <img className="image-10-icon" alt="" src="/image-11@2x.png" />
          <div className="group-child75" />
          <div className="group-child75" />
          <div className="the-young-mania">
            The Young Mania Rating Scale (YMRS)
          </div>
        </div>
        <div className="rectangle-parent36">
          <div className="group-child71" />
          <img className="image-10-icon" alt="" src="/image-12@2x.png" />
          <div className="group-child72" />
          <div className="group-child72" />
          <div className="the-mood-disorder">
            The Mood Disorder Questionnaire (MDQ)
          </div>
        </div>
        <div className="rectangle-parent37">
          <div className="group-child71" />
          <img className="image-10-icon" alt="" src="/image-13@2x.png" />
          <div className="group-child72" />
          <div className="group-child72" />
          <div className="generalized-anxiety-disorder">
            Generalized Anxiety Disorder 7-item (GAD-7) scale
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelfAssessment;
