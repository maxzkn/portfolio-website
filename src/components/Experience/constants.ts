import workIcon from "images/work.svg";
import educationIcon from "images/education.svg";

export const workExperienceItems: ExperienceItemProps[] = [
    {
      icon: workIcon,
      altText: "work-icon",
      classNames: "md:flex-row",
      title: "Software Engineer",
      institution: "Revel Systems",
      dates: "2022 - 2024",
      description:
        "As part of a Scrum team, I worked on multiple greenfield \
        projects, participating in every phase. My responsibilities \
        included developing the infrastructure, designing the \
        architecture and code, selecting appropriate technologies and \
        implementing the solution.",
    },
    {
      icon: workIcon,
      altText: "work-icon",
      classNames: "md:flex-row-reverse",
      title: "Junior Full-Stack Software Engineer",
      institution: "Revel Systems",
      dates: "2021 - 2022",
      description:
        "Contributed to developing an Online Ordering web application. \
        Took initiative to build a new careers web page for the Company.",
    },
    {
      icon: workIcon,
      altText: "work-icon",
      classNames: "md:flex-row",
      title: "Surveillance Services Engineer",
      institution: "SE Oro Navigacija",
      dates: "2018 - 2021",
      description:
        "Ensured smooth performance of radar equipment. Performed \
        monitoring and technical maintenance of radar control and monitoring systems.",
    },
    {
      icon: workIcon,
      altText: "work-icon",
      classNames: "md:flex-row-reverse",
      title: "Communications Engineer",
      institution: "SE Oro Navigacija",
      dates: "2017 - 2018",
      description:
        "Ensured smooth communication between air controllers and pilots.",
    },
  ];
  
  export const educationItems: ExperienceItemProps[] = [
    {
      icon: educationIcon,
      altText: "education-icon",
      classNames: "md:flex-row",
      title: "Master's degree",
      institution: "Vilnius Gediminas Technical University",
      dates: "2017 - 2019",
      description: "Information and Informational Technologies Security",
    },
    {
      icon: educationIcon,
      altText: "education-icon",
      classNames: "md:flex-row-reverse",
      title: "Bachelor's degree",
      institution: "Vilnius Gediminas Technical University",
      dates: "2013 - 2017",
      description: "Informatics Engineering",
    },
  ];