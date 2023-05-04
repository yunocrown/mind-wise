import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Homepage.css";
const Homepage = () => {
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

  const onGroupContainer11Click = useCallback(() => {
    navigate("/explore");
  }, [navigate]);

  const onRectangle1Click = useCallback(() => {
    navigate("/explore");
  }, [navigate]);

  const onGroupContainer26Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onRectangle4Click = useCallback(() => {
    navigate("/self-assessment");
  }, [navigate]);

  const onGroupContainer48Click = useCallback(() => {
    navigate("/our-services");
  }, [navigate]);

  return (
    <div className="homepage5">
      <div className="group-parent35">
        <div className="group-wrapper9">
          <div className="group-wrapper9">
            <div className="rectangle-parent38">
              <div className="group-child83" />
              <div className="donate5">Donate</div>
            </div>
            <div
              className="our-services-parent4"
              onClick={onGroupContainer1Click}
            >
              <div className="our-services7">Our Services</div>
              <img className="vector-icon30" alt="" src="/vector26.svg" />
            </div>
            <div className="get-involved-parent3">
              <div className="get-involved6" onClick={onGetInvolvedTextClick}>
                Get Involved
              </div>
              <img className="vector-icon31" alt="" src="/vector26.svg" />
            </div>
            <div
              className="self-assessment-parent3"
              onClick={onGroupContainer3Click}
            >
              <div className="self-assessment6">Self Assessment</div>
              <img className="vector-icon32" alt="" src="/vector27.svg" />
            </div>
            <div className="about-us-parent3">
              <div className="about-us8" onClick={onAboutUsTextClick}>
                About Us
              </div>
              <img className="vector-icon33" alt="" src="/vector28.svg" />
            </div>
            <div className="homepage-parent3">
              <div className="homepage6">Homepage</div>
              <img className="vector-icon34" alt="" src="/vector28.svg" />
            </div>
            <div className="group-child84" />
          </div>
        </div>
        <div className="group-parent37">
          <div className="image-7-container">
            <img className="image-7-icon1" alt="" src="/image-71@2x.png" />
          </div>
          <div className="take-control-of-your-thoughts-wrapper">
            <div className="take-control-of-container">
              <p className="take-control-of">{`Take control of your thoughts and emotions to achieve a happier life. `}</p>
              <p className="take-control-of">&nbsp;</p>
              <p className="take-control-of">
                Cultivate a positive mindset and gain the confidence to pursue
                your dreams. Embracing self-care and practising mindfulness can
                help you feel more empowered. Invest in your mental health and
                watch as your life flourishes before your eyes
              </p>
            </div>
          </div>
          <div className="empower-your-mind-elevate-you-parent">
            <div className="empower-your-mind">
              Empower Your Mind, Elevate Your Life
            </div>
            <div className="group-child85" />
          </div>
          <div className="rectangle-parent39" onClick={onGroupContainer11Click}>
            <div className="group-child86" onClick={onRectangle1Click} />
            <div className="learn-more">Learn More</div>
          </div>
        </div>
      </div>
      <div className="group-parent38">
        <div className="about-us-parent4">
          <div className="about-us9">About Us</div>
          <div className="company-name-is-a-service-com-parent">
            <div className="company-name-is">
              [company name] is a service company engaged in mental health
              consulting
            </div>
            <div className="our-mission-is1">
              Our mission is to provide accessible and reliable resources that
              promote mental wellness, support those struggling with mental
              health concerns, and help reduce stigma surrounding mental
              illness.
            </div>
          </div>
        </div>
        <div className="group-parent39">
          <img className="group-child87" alt="" src="/group-15.svg" />
          <div className="group-wrapper10">
            <div className="rectangle-parent40">
              <div className="group-child88" />
              <div className="vector-parent3">
                <img className="vector-icon35" alt="" src="/vector29.svg" />
                <div className="your-present-circumstances-container">
                  <p className="take-control-of">
                    Your present circumstances don't determine where you can go;
                    they merely determine where you start.
                  </p>
                  <p className="take-control-of">&nbsp;</p>
                  <p className="take-control-of">- Nido Qubein</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="group-parent40">
          <div className="vector-parent4">
            <img className="vector-icon36" alt="" src="/vector30.svg" />
            <div className="depression-detection-test">
              Depression Detection Test
            </div>
          </div>
          <div className="vector-parent5">
            <img className="vector-icon37" alt="" src="/vector30.svg" />
            <div className="depression-detection-test">
              Mental Health Resources
            </div>
          </div>
          <div className="vector-parent6">
            <img className="vector-icon38" alt="" src="/vector30.svg" />
            <div className="depression-detection-test">
              Professional Support
            </div>
          </div>
          <div className="vector-parent7">
            <img className="vector-icon39" alt="" src="/vector30.svg" />
            <div className="depression-detection-test">Community Support</div>
          </div>
          <div className="vector-parent8">
            <img className="vector-icon40" alt="" src="/vector30.svg" />
            <div className="depression-detection-test">Self-Help Tools</div>
          </div>
        </div>
        <div className="rectangle-parent41" onClick={onGroupContainer26Click}>
          <div className="group-child89" />
          <div className="learn-more">Learn More</div>
        </div>
      </div>
      <div className="group-parent41">
        <div className="group-parent42">
          <div className="vector-parent9">
            <img className="vector-icon41" alt="" src="/vector30.svg" />
            <div className="depression-detection-test">
              Beck Depression Inventory (BDI-II)
            </div>
          </div>
          <div className="vector-parent10">
            <img className="vector-icon42" alt="" src="/vector30.svg" />
            <div className="depression-detection-test">
              Patient Health Questionnaire (PHQ-9)
            </div>
          </div>
          <div className="vector-parent11">
            <img className="vector-icon43" alt="" src="/vector30.svg" />
            <div className="depression-detection-test">
              Generalized Anxiety Disorder 7-item (GAD-7) scale
            </div>
          </div>
          <div className="vector-parent12">
            <img className="vector-icon44" alt="" src="/vector30.svg" />
            <div className="depression-detection-test">
              The Mood Disorder Questionnaire (MDQ)
            </div>
          </div>
          <div className="vector-parent13">
            <img className="vector-icon45" alt="" src="/vector30.svg" />
            <div className="depression-detection-test">
              The Young Mania Rating Scale (YMRS)
            </div>
          </div>
        </div>
        <img className="image-8-icon1" alt="" src="/image-81@2x.png" />
        <div className="self-assessment-parent4">
          <div className="self-assessment7">Self Assessment</div>
          <div className="a-collection-of-free-online-te-parent">
            <div className="a-collection-of">
              A Collection of free Online Tests for you, let’s try it now
            </div>
            <div className="this-test-can">
              This Test can measure the level of stress in you. The result of
              this test will greatly help you determine the state of your
              current mental health. Some of the test are listed below:
            </div>
          </div>
        </div>
        <div className="rectangle-parent42">
          <div className="group-child86" onClick={onRectangle4Click} />
          <div className="learn-more">Learn More</div>
        </div>
      </div>
      <div className="group-parent43">
        <div className="image-9-group">
          <img className="image-9-icon1" alt="" src="/image-91@2x.png" />
          <div className="rectangle-parent43">
            <div className="group-child91" />
            <div className="group-child92" />
            <div className="group-child93" />
            <div className="group-child94" />
            <div className="group-child95" />
          </div>
          <div className="rectangle-parent44">
            <div className="group-child96" />
            <div className="group-child97" />
            <div className="group-child98" />
            <div className="group-child99" />
          </div>
        </div>
        <div className="our-services-parent5">
          <div className="our-services8">Our Services</div>
          <div className="not-only-consultation-see-our-parent">
            <div className="not-only-consultation">
              Not Only Consultation, See Our Services That Can Help You
            </div>
            <div className="life-is-full">
              Life is full of things, sometimes it feels as if you are trapped
              in a tight space that barely gives you the freedom to move here
              and there.
            </div>
          </div>
        </div>
        <div className="group-parent44">
          <div className="vector-parent14">
            <img className="vector-icon46" alt="" src="/vector30.svg" />
            <div className="depression-detection-test">Mentoring</div>
          </div>
          <div className="vector-parent15">
            <img className="vector-icon47" alt="" src="/vector30.svg" />
            <div className="depression-detection-test">Counselling</div>
          </div>
          <div className="vector-parent16">
            <img className="vector-icon48" alt="" src="/vector30.svg" />
            <div className="depression-detection-test">Online Classes</div>
          </div>
          <div className="vector-parent17">
            <img className="vector-icon49" alt="" src="/vector30.svg" />
            <div className="depression-detection-test">Webinar</div>
          </div>
        </div>
        <div className="rectangle-parent45" onClick={onGroupContainer48Click}>
          <div className="group-child89" />
          <div className="learn-more">Learn More</div>
        </div>
      </div>
      <div className="to-be-heard-is-to-be-validated-parent">
        <div className="to-be-heard">
          To be heard is to be validated. To be validated is to feel understood.
          To be understood is to know you're not alone.
        </div>
        <img className="vector-icon50" alt="" src="/vector31.svg" />
        <img className="vector-icon51" alt="" src="/vector32.svg" />
      </div>
      <div className="rectangle-parent46">
        <div className="group-child101" />
        <div className="services-parent3">
          <div className="services5">Services</div>
          <div className="mentoring-parent3">
            <div className="mentoring7">Mentoring</div>
            <div className="counselling7">Counselling</div>
            <div className="online-classes7">Online Classes</div>
            <div className="webinar6">Webinar</div>
            <div className="phycological-tests5">Phycological Tests</div>
          </div>
        </div>
        <div className="company-tagline-with-logo-and-wrapper3">
          <div className="company-tagline-with5">{`[ company tagline with logo and name ] `}</div>
        </div>
        <div className="group-parent45">
          <div className="our-story-parent3">
            <div className="our-story5">Our Story</div>
            <div className="mentor-partners5">Mentor Partners</div>
            <div className="psychologist-partners5">Psychologist Partners</div>
            <div className="advisor-partners5">Advisor Partners</div>
            <div className="help5">Help</div>
          </div>
          <div className="company5">Company</div>
        </div>
        <div className="group-parent46">
          <div className="mentor-parent3">
            <div className="mentor6">Mentor</div>
            <div className="advisor6">Advisor</div>
            <div className="psychologist6">Psychologist</div>
          </div>
          <div className="join-us-as5">Join Us As</div>
        </div>
        <div className="group-parent47">
          <div className="our-whole-team-is-dedicated-to-wrapper3">
            <div className="company-tagline-with5">
              Our Whole Team Is Dedicated To Help Each And Every Individual To
              Live A Happy Life.
            </div>
          </div>
          <div className="about-our-mission5">About Our Mission</div>
        </div>
        <img className="group-child102" alt="" src="/group-451.svg" />
      </div>
    </div>
  );
};

export default Homepage;
