import {
  SiExpress,
  SiSocketdotio,
  SiPrisma,
  SiNextdotjs,
  SiFlask,
} from "react-icons/si";
import {
  FramerMotionIcon,
  ReactRouterDomIcon,
  VitePwaIcon,
} from "@/components/icons";
import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";

// Languages
import Go from "@/public/icons/go.svg";
import Rust from "@/public/icons/rust.svg";
import Cplus from "@/public/icons/c-plusplus.svg";
import VuejsSvg from "@/public/icons/vuejs.svg";
import AngularSvg from "@/public/icons/angular.svg";
import TypescriptSvg from "@/public/icons/typescript.svg";
import PythonSvg from "@/public/icons/python.svg";
import QemuSvg from "@/public/icons/qemu.svg";

// Libraries
import ReactjsSvg from "@/public/icons/reactjs.svg";
import SolidjsSvg from "@/public/icons/solidjs.svg";
import ReduxSvg from "@/public/icons/redux.svg";
import PodmanSvg from "@/public/icons/podman.svg";
import NomadSvg from "@/public/icons/nomad.svg";
import KubernetesSvg from "@/public/icons/kubernetes.svg";

// Backend
import NodejsSvg from "@/public/icons/nodejs.svg";

// Database and ORMS
import MongoDBSvg from "@/public/icons/mongodb.svg";
import PostgressSvg from "@/public/icons/postgresql.svg";

// Tools and Tech
import GitSvg from "@/public/icons/git.svg";
import DockerSvg from "@/public/icons/docker.svg";
import AwsSvg from "@/public/icons/aws.svg";
import PostmanSvg from "@/public/icons/postman.svg";

export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Backend Languages",
    skills: [
      {
        name: "Go",
        icon: Go,
      },
      {
        name: "Rust",
        icon: Rust,
      },
      {
        name: "C/C++",
        icon: Cplus,
      },
      // {
      //   name: "Javascript",
      //   icon: JavascriptSvg,
      // },
      {
        name: "Typescript",
        icon: TypescriptSvg,
      },
      {
        name: "Python",
        icon: PythonSvg,
      },
    ],
  },
  {
    sectionName: "Frontend Libraries and Frameworks",
    skills: [
      {
        name: "Reactjs",
        icon: ReactjsSvg,
      },
      {
        name: "Vuejs",
        icon: VuejsSvg,
      },
      {
        name: "Angular",
        icon: SiNextdotjs,
      },
      // {
      //   name: "Solidjs",
      //   icon: SolidjsSvg,
      // },
      // {
      //   name: "React Router Dom",
      //   icon: ReactRouterDomIcon,
      // },
      // {
      //   name: "Redux",
      //   icon: ReduxSvg,
      // },
      // {
      //   name: "Tailwindcss",
      //   icon: TailwindcssSvg,
      // },
      // {
      //   name: "MUI",
      //   icon: MuiSvg,
      // },
      // {
      //   name: "Framer motion",
      //   icon: FramerMotionIcon,
      // },
      // {
      //   name: "Vite",
      //   icon: ViteSvg,
      // },
      // {
      //   name: "Vite PWA",
      //   icon: VitePwaIcon,
      // },
    ],
  },
  {
    sectionName: "Infrastructure & Cloud Computing",
    skills: [
      {
        name: "KVM/QEMU",
        icon: QemuSvg,
      },
      {
        name: "Kubernetes",
        icon: KubernetesSvg,
      },
      {
        name: "Nomad",
        icon: NomadSvg,
      },
      {
        name: "Podman",
        icon: PodmanSvg,
      },
      {
        name: "Docker",
        icon: DockerSvg,
      },
    ],
  },
  // {
  //   sectionName: "Databases and ORMs",
  //   skills: [
  //     {
  //       name: "MongoDB",
  //       icon: MongoDBSvg,
  //     },
  //     {
  //       name: "Postgress",
  //       icon: PostgressSvg,
  //     },
  //     {
  //       name: "Prisma",
  //       icon: SiPrisma,
  //     },
  //   ],
  // },
  // {
  //   sectionName: "Tools and Technologies",
  //   skills: [
  //     {
  //       name: "Git",
  //       icon: GitSvg,
  //     },
      
  //     {
  //       name: "AWS",
  //       icon: AwsSvg,
  //     },
  //     {
  //       name: "Postman",
  //       icon: PostmanSvg,
  //     },
  //   ],
  // },
];
