import { MainStackItemProps, SecondaryStackItemProps } from "./types";
import fastapiIcon from "images/fastapi.svg";
import golangIcon from "images/golang.svg";
import djangoIcon from "images/django.svg";
import postgresqlIcon from "images/postgresql.svg";
import tailwindIcon from "images/tailwind.svg";
import gatsbyIcon from "images/gatsby.svg";
import nextjsIcon from "images/nextjs.svg";
import strapiIcon from "images/strapi.svg";
import dbtIcon from "images/dbt.svg";
import graphqlIcon from "images/graphql.svg";
import cubejsIcon from "images/cubejs.svg";
import materialIcon from "images/mui.svg";
import dockerIcon from "images/docker.svg";
import angularIcon from "images/angular.svg";
import firebaseIcon from "images/firebase.svg";

export const mainStackItems: MainStackItemProps[] = [
  {
    title: "Programming languages:",
    technologies: "Python, JavaScript/TypeScript",
  },
  {
    title: "Frameworks:",
    technologies: "React",
  },
  {
    title: "IaC:",
    technologies: "Terraform",
  },
  {
    title: "Cloud providers:",
    technologies: "AWS",
  },
  {
    title: "SCM tools:",
    technologies: "Gitlab, GitHub",
  },
  {
    title: "Software development processes:",
    technologies: "CI/CD, Scrum, testing, pair programming, code review",
  },
  {
    title: "Other:",
    technologies: "HTML, CSS, SQL",
  },
];

export const secondaryStackItems: SecondaryStackItemProps[] = [
  {
    technology: "FastAPI",
    link: "https://fastapi.tiangolo.com/",
    icon: fastapiIcon,
    altText: "fastapi-icon",
    width: 35,
    height: 35,
  },
  {
    technology: "Django",
    link: "https://www.djangoproject.com/",
    icon: djangoIcon,
    altText: "django-icon",
    width: 55,
    height: 55,
  },
  {
    technology: "Material UI",
    link: "https://mui.com",
    icon: materialIcon,
    altText: "material-icon",
    width: 35,
    height: 35,
  },
  {
    technology: "PostgreSQL",
    link: "https://www.postgresql.org/",
    icon: postgresqlIcon,
    altText: "postgresql-icon",
    width: 35,
    height: 35,
  },
  {
    technology: "dbt (data build tool)",
    link: "https://www.getdbt.com/",
    icon: dbtIcon,
    altText: "dbt-icon",
    width: 65,
    height: 65,
  },
  {
    technology: "CubeJS",
    link: "https://cube.dev/",
    icon: cubejsIcon,
    altText: "cubejs-icon",
    width: 35,
    height: 35,
  },
  {
    technology: "Golang",
    link: "https://go.dev/",
    icon: golangIcon,
    altText: "golang-icon",
    width: 60,
    height: 60,
  },
  {
    technology: "Docker",
    link: "https://www.docker.com/",
    icon: dockerIcon,
    altText: "docker-icon",
    width: 80,
    height: 80,
  },
  {
    technology: "GraphQL",
    link: "https://graphql.org/",
    icon: graphqlIcon,
    altText: "graphql-icon",
    width: 35,
    height: 35,
  },
  {
    technology: "Strapi",
    link: "https://strapi.io/",
    icon: strapiIcon,
    altText: "strapi-icon",
    width: 35,
    height: 35,
  },
  {
    technology: "Gatsby",
    link: "https://www.gatsbyjs.com/",
    icon: gatsbyIcon,
    altText: "gatsby-icon",
    width: 30,
    height: 30,
  },
  {
    technology: "NextJS",
    link: "https://nextjs.org/",
    icon: nextjsIcon,
    altText: "nextjs-icon",
    width: 70,
    height: 70,
  },
  {
    technology: "Tailwind CSS",
    link: "https://tailwindcss.com/",
    icon: tailwindIcon,
    altText: "tailwind-icon",
    width: 120,
    height: 120,
  },
  {
    technology: "Angular",
    link: "https://v10.angular.io/",
    icon: angularIcon,
    altText: "angular-icon",
    width: 35,
    height: 35,
  },
  {
    technology: "Firebase",
    link: "https://firebase.google.com/",
    icon: firebaseIcon,
    altText: "firebase-icon",
    width: 90,
    height: 90,
  },
];
