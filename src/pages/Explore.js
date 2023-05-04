import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Explore.css";
const Explore = () => {
  const navigate = useNavigate();

  const onGroupContainer12Click = useCallback(() => {
    navigate("/our-services");
  }, [navigate]);

  const onGetInvolvedTextClick = useCallback(() => {
    navigate("/get-involved");
  }, [navigate]);

  const onGroupContainer14Click = useCallback(() => {
    navigate("/self-assessment");
  }, [navigate]);

  const onAboutUsTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onHomepageTextClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  return (
    <div className="explore">
      <div className="rectangle-parent20">
        <div className="group-child54" />
        <div className="services-parent1">
          <div className="services3">Services</div>
          <div className="mentoring-parent1">
            <div className="mentoring4">Mentoring</div>
            <div className="counselling4">Counselling</div>
            <div className="online-classes4">Online Classes</div>
            <div className="webinar3">Webinar</div>
            <div className="phycological-tests3">Phycological Tests</div>
          </div>
        </div>
        <div className="company-tagline-with-logo-and-wrapper1">
          <div className="company-tagline-with3">{`[ company tagline with logo and name ] `}</div>
        </div>
        <div className="group-parent22">
          <div className="our-story-parent1">
            <div className="our-story3">Our Story</div>
            <div className="mentor-partners3">Mentor Partners</div>
            <div className="psychologist-partners3">Psychologist Partners</div>
            <div className="advisor-partners3">Advisor Partners</div>
            <div className="help3">Help</div>
          </div>
          <div className="company3">Company</div>
        </div>
        <div className="group-parent23">
          <div className="mentor-parent1">
            <div className="mentor4">Mentor</div>
            <div className="advisor4">Advisor</div>
            <div className="psychologist4">Psychologist</div>
          </div>
          <div className="join-us-as3">Join Us As</div>
        </div>
        <div className="group-parent24">
          <div className="our-whole-team-is-dedicated-to-wrapper1">
            <div className="company-tagline-with3">
              Our Whole Team Is Dedicated To Help Each And Every Individual To
              Live A Happy Life.
            </div>
          </div>
          <div className="about-our-mission3">About Our Mission</div>
        </div>
        <img className="group-child55" alt="" src="/group-45.svg" />
      </div>
      <div className="group-parent25">
        <div className="image-7-wrapper">
          <img className="image-7-icon" alt="" src="/image-7@2x.png" />
        </div>
        <div className="group-wrapper5">
          <div className="group-wrapper6">
            <div className="group-wrapper6">
              <div className="group-wrapper6">
                <div className="rectangle-parent21">
                  <div className="group-child56" />
                  <div className="donate3">Donate</div>
                </div>
                <div
                  className="our-services-parent2"
                  onClick={onGroupContainer12Click}
                >
                  <div className="our-services5">Our Services</div>
                  <img className="vector-icon15" alt="" src="/vector15.svg" />
                </div>
                <div className="get-involved-parent1">
                  <div
                    className="get-involved4"
                    onClick={onGetInvolvedTextClick}
                  >
                    Get Involved
                  </div>
                  <img className="vector-icon16" alt="" src="/vector16.svg" />
                </div>
                <div
                  className="self-assessment-parent1"
                  onClick={onGroupContainer14Click}
                >
                  <div className="self-assessment3">Self Assessment</div>
                  <img className="vector-icon17" alt="" src="/vector17.svg" />
                </div>
                <div className="about-us-parent1">
                  <div className="about-us6" onClick={onAboutUsTextClick}>
                    About Us
                  </div>
                  <img className="vector-icon18" alt="" src="/vector18.svg" />
                </div>
                <div className="homepage-parent1">
                  <div className="homepage3" onClick={onHomepageTextClick}>
                    Homepage
                  </div>
                  <img className="vector-icon19" alt="" src="/vector19.svg" />
                </div>
                <div className="group-child57" />
              </div>
            </div>
          </div>
        </div>
        <div className="mental-health-parent">
          <div className="mental-health">Mental Health</div>
          <div className="mental-health-refers">
            Mental health refers to a person's psychological, emotional, and
            social well-being. It encompasses the way a person thinks, feels,
            and behaves, as well as their ability to handle stress and make
            decisions. Good mental health enables people to realize their
            potential, cope with the normal stresses of life, work productively,
            and contribute to their communities. Mental health conditions, such
            as depression, anxiety, bipolar disorder, and schizophrenia, can
            affect a person's thoughts, mood, and behavior, and may require
            professional treatment. It's important to prioritize mental health
            and seek help if you are experiencing symptoms of a mental health
            condition.
          </div>
        </div>
        <div className="group-parent27">
          <div className="depression-parent">
            <div className="depression">Depression</div>
            <div className="depression-is-a">
              Depression is a common mental health disorder characterized by
              persistent feelings of sadness, hopelessness, and loss of interest
              in activities that a person once enjoyed. Symptoms of depression
              can vary from person to person, but may include:
            </div>
            <div className="depression-can-be">
              Depression can be caused by a variety of factors, including
              genetics, life events, and chemical imbalances in the brain.
              Treatment for depression may include therapy, medication,
              lifestyle changes, or a combination of these approaches. It's
              important to seek help if you think you or someone you know may be
              experiencing depression, as early intervention can lead to better
              outcomes.
            </div>
          </div>
          <div className="group-parent28">
            <div className="vector-parent">
              <img className="vector-icon20" alt="" src="/vector20.svg" />
              <div className="persistent-feelings-of">
                Persistent feelings of sadness, anxiety, or emptiness
              </div>
            </div>
            <div className="vector-group">
              <img className="vector-icon21" alt="" src="/vector20.svg" />
              <div className="persistent-feelings-of">
                Loss of interest in hobbies and activities
              </div>
            </div>
            <div className="vector-container">
              <img className="vector-icon22" alt="" src="/vector20.svg" />
              <div className="persistent-feelings-of">
                Feelings of fatigue, low energy, or lethargy
              </div>
            </div>
            <div className="vector-parent1">
              <img className="vector-icon23" alt="" src="/vector20.svg" />
              <div className="persistent-feelings-of">
                Sleep disturbances (insomnia or hypersomnia)
              </div>
            </div>
            <div className="vector-parent2">
              <img className="vector-icon24" alt="" src="/vector20.svg" />
              <div className="persistent-feelings-of">
                Changes in appetite or weight
              </div>
            </div>
          </div>
        </div>
        <div className="group-parent29">
          <div className="i-am-looking-for-support-for-parent">
            <div className="mental-health">I am looking for Support for...</div>
            <div className="good-thinking-supports">
              Good thinking supports, also known as cognitive supports, are
              techniques and strategies that can be used to improve cognitive
              function, promote mental clarity, and reduce negative thinking
              patterns.
            </div>
          </div>
          <div className="rectangle-parent22">
            <img className="rectangle-icon" alt="" src="/rectangle-30@2x.png" />
            <div className="depression-is-one">
              Depression is one of the most common mental health disorders in
              young people, and it can have a significant impact on their
              social, academic, and personal lives. If you suspect that a young
              person in your life is struggling with depression, it's important
              to seek help from a mental health professional.
            </div>
            <div className="continue-reading">Continue Reading</div>
            <div className="young-people">Young People</div>
          </div>
          <div className="rectangle-parent23">
            <img className="group-child58" alt="" src="/rectangle-301@2x.png" />
            <div className="some-faiths-view">
              Some faiths view mental illness as a spiritual issue or a
              punishment for sin, while others see it as a medical condition.
            </div>
            <div className="faiths-beliefs">{`Faiths & Beliefs`}</div>
            <div className="continue-reading1">Continue Reading</div>
          </div>
          <div className="rectangle-parent24">
            <img className="group-child59" alt="" src="/rectangle-302@2x.png" />
            <div className="employees-who-are">
              Employees who are struggling with mental health issues may
              experience difficulty concentrating, low productivity, and
              increased absenteeism.
            </div>
            <div className="continue-reading2">Continue Reading</div>
            <div className="work-place">Work-Place</div>
          </div>
          <div className="rectangle-parent25">
            <img className="group-child58" alt="" src="/rectangle-303@2x.png" />
            <div className="parenting-can-be">
              Parenting can be challenging and stressful, and it's not uncommon
              for parents to experience mental health issues like depression.
            </div>
            <div className="continue-reading1">Continue Reading</div>
            <div className="parents-carers">{`Parents & Carers`}</div>
          </div>
          <div className="rectangle-parent26">
            <div className="group-child61" />
            <div className="read-all">Read All</div>
          </div>
        </div>
        <div className="group-parent30">
          <div className="i-am-looking-for-support-for-parent">
            <div className="mental-health">I want help Regarding...</div>
            <div className="good-thinking-supports">
              Asking for help for mental health and depression can be a
              difficult step, but it's an important one.
            </div>
          </div>
          <div className="rectangle-parent27">
            <img
              className="rectangle-icon"
              alt=""
              src="/rectangle-304@2x.png"
            />
            <div className="depression-is-one">
              Anxiety is a natural response to stress and is a common experience
              for many people. However, when anxiety becomes excessive or
              interferes with daily activities, it can be classified as an
              anxiety disorder.
            </div>
            <div className="continue-reading">Continue Reading</div>
            <div className="anxiety">Anxiety</div>
          </div>
          <div className="rectangle-parent28">
            <img className="group-child58" alt="" src="/rectangle-305@2x.png" />
            <div className="it-is-a">
              It is a non-specific term that is sometimes used to describe a
              period of intense emotional or psychological distress.
            </div>
            <div className="breakdown">Breakdown</div>
            <div className="continue-reading1">Continue Reading</div>
          </div>
          <div className="rectangle-parent29">
            <img className="group-child58" alt="" src="/rectangle-306@2x.png" />
            <div className="anger-is-a">
              Anger is a natural emotion and It can be a normal and healthy
              response to situations that threaten our well-being or boundaries.
            </div>
            <div className="continue-reading1">Continue Reading</div>
            <div className="anger">Anger</div>
          </div>
          <div className="rectangle-parent30">
            <img className="group-child58" alt="" src="/rectangle-307@2x.png" />
            <div className="stress-is-a">
              Stress is a natural response to a perceived threat or challenge.
              It is a normal part of life and can even be helpful in some
              situations.
            </div>
            <div className="continue-reading1">Continue Reading</div>
            <div className="stress">Stress</div>
          </div>
          <div className="rectangle-parent31">
            <div className="group-child61" />
            <div className="read-all">Read All</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
