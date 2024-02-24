import {
  Home,
  Practice,
  QuestionAnswer,
  ReactFeatures,
  ReactLibrary,
  Techniques,
} from "@/components";

export const navItems = [
  {
    name: "Home Page",
    href: "/",
    element: <Home />,
  },
  {
    name: "React Feature",
    href: "/react-feature",
    element: <ReactFeatures />,
  },
  {
    name: "React Library",
    href: "/react-library",
    element: <ReactLibrary />,
  },
  {
    name: "Techniques",
    href: "/techniques",
    element: <Techniques />,
  },
  {
    name: "Q&A",
    href: "/question-answer",
    element: <QuestionAnswer />,
  },
  {
    name: "Practice",
    href: "/practice",
    element: <Practice />,
  },
];
