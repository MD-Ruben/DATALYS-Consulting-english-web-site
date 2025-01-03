import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About Us",
    path: "/apropos",
    newTab: false,
  },
  {
    id: 3,
    title: "Our Expertise",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Audit",
        path: "/notreexpertise/audit",
        newTab: false,
      },
      {
        id: 42,
        title: "Integration",
        path: "/notreexpertise/integration",
        newTab: false,
      },
      {
        id: 43,
        title: "Training Courses",
        path: "/notreexpertise/formations",
        newTab: false,
      },
    ],
  },
  {
    id: 44,
    title: "Corporate Space",
    path: "/espace-entreprise",
    newTab: true,
  },
  {
    id: 4,
    title: "E-Commerce",
    path: "https://store.datalysconsulting.com/",
    newTab: true,
  },
  {
    id: 5,
    title: "Events",
    path: "/evenements",
    newTab: false,
  },
  {
    id: 6,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
  // {
  //   id: 5,
  //   title: "Pages",
  //   newTab: false,
  //   submenu: [
  //     {
  //       id: 41,
  //       title: "About Page",
  //       path: "/about",
  //       newTab: false,
  //     },
  //     {
  //       id: 42,
  //       title: "Contact Page",
  //       path: "/contact",
  //       newTab: false,
  //     },
  //     {
  //       id: 43,
  //       title: "Blog Grid Page",
  //       path: "/blog",
  //       newTab: false,
  //     },
  //     {
  //       id: 44,
  //       title: "Blog Sidebar Page",
  //       path: "/blog-sidebar",
  //       newTab: false,
  //     },
  //     {
  //       id: 45,
  //       title: "Blog Details Page",
  //       path: "/blog-details",
  //       newTab: false,
  //     },
  //     {
  //       id: 46,
  //       title: "Sign In Page",
  //       path: "/signin",
  //       newTab: false,
  //     },
  //     {
  //       id: 47,
  //       title: "Sign Up Page",
  //       path: "/signup",
  //       newTab: false,
  //     },
  //     {
  //       id: 48,
  //       title: "Error Page",
  //       path: "/error",
  //       newTab: false,
  //     },
  //   ],
  // },
];
export default menuData;
