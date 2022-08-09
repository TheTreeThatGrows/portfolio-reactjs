import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carouselOffsetStyle, setCarouselOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubcsription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /**Bullet points for different subjects
   * Insert here to add more subjects in the future
   */
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  /**Bullet points for different programming skills
   * Insert here to add more skills in the future
   */
  const programmingSkillsDetails = [
    { skill: "HTML", ratingPercentage: 70 },
    { skill: "CSS", ratingPercentage: 70 },
    { skill: "JavaScript", ratingPercentage: 70 },
    { skill: "React JS", ratingPercentage: 50 },
    { skill: "Java", ratingPercentage: 70 },
    { skill: "C++", ratingPercentage: 40 },
    { skill: "C#", ratingPercentage: 40 },
  ];

  /**Bullet points for finished projects
   * Insert finished future projects here
   */
  const projectDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "A Personal Portfolio website to showcase all my details and projects at one place.",
      subHeading: "Technologies Used: React JS, Bootsrap",
    },
    {
      title: "Pacman Super",
      duration: { fromDate: "2018", toDate: "2018" },
      description:
        "Game development of the game Pacman Super, which was an assignment for the semester of Spring 2018.",
      subHeading:
        "Technologies Used: Java, JavaFXGL (Game Library by Almas Baimagambetov)",
    },
  ];

  /**Data regarding education path
   * Insert here to add education
   */
  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Oslo Metropolitan University"}
        subHeading={"BACHELOR DEGREE IN INFORMATION TECHNOLOGY"}
        fromDate={"2016"}
        toDate={"2020"}
      />
      <ResumeHeading
        heading={"Kuben High School"}
        subHeading={"Science, Mathematics Level R1 + R2, Physics Level 1 + 2"}
        fromDate={"2013"}
        toDate={"2016"}
      />
      <ResumeHeading
        heading={"Tiurleiken School & Bjøråsen School"}
        subHeading={"Primary School"}
        fromDate={"2003"}
        toDate={"2013"}
      />
    </div>,

    /**Data regarding work experience
     * Insert new work experience here
     * Beware of max capacity!
     */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"MCDonalds, Nygårdskrysset — Part timer"}
          subHeading={"Part-timer at McDonlads"}
          fromDate={"2021"}
          toDate={"present"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Currently working as an employee in a fast and hectic work
            environment with huge focus on amazing customer service.
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Mainly focusing on taking both the customers orders and payment at
            the Drive Thru.
          </span>
          <br />
          <span className="resume-description-text">
            - Multitasking and supporting colleagues while handling customer
            services at Drive Thru.
          </span>
          <br />
          <span className="resume-description-text">
            - Efficient in every station including the Lobby, Front desk, Drive
            Thru 1 and 2, Backroom and the Kitchen.
          </span>
        </div>
      </div>
    </div>,

    /**Data regarding work experience
     * Insert new work experience here
     */
    <div
      className="resume-screen-container programming-skills-container"
      key={"programming-skills"}
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /**Data regarding Projects
     * Insert new projects here
     */
    <div className="resume-screen-container" key="projects">
      {projectDetails.map((projectDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectDetails.title}
          subHeading={projectDetails.subHeading}
          description={projectDetails.description}
          fromDate={projectDetails.duration.fromDate}
          toDate={projectDetails.duration.toDate}
        />
      ))}
    </div>,

    /**Data regarding interests
     * Insert new interests here
     */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Aviation"
        description="Apart from being a tech enthusiast and a programmer, I also have a huge interest in Aviation"
      />
      <ResumeHeading
        heading="Archery"
        description="Archery is something I do as a hobby during my spare time."
      />
      <ResumeHeading
        heading="Hacking"
        description="Another hobby of mine is doing shady stuff in Kali Linux... ethically speaking of course..."
      />
    </div>,
  ];

  const handleCarousel = (index) => {
    let offsetHeight = 360;

    let newCarouselOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarouselOffsetStyle(newCarouselOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousel(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="oops.. no internet connection"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carouselOffsetStyle.style}
        className="resume-details-carousel"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };
  return (
    <div className="resume-container screen-container fade-in" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
}
