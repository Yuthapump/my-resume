import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "Yuthapump",
    icon: Icons.gitHub,
    link: "https://github.com/Yuthapump",
  },
  {
    name: "LinkedIn",
    username: "yuthapum pudpana",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/yuthapum-pudpana-594889307/",
  },
  // {
  //   name: "Twitter",
  //   username: "@namanbarkiya",
  //   icon: Icons.twitter,
  //   link: "https://twitter.com/namanbarkiya",
  // },
  {
    name: "Gmail",
    username: "p.yuthapum",
    icon: Icons.gmail,
    link: "mailto:p.yuthapum@gmail.com",
  },
  {
    name: "Facebook",
    username: "Benz yuthapum",
    icon: Icons.facebook,
    link: "https://www.facebook.com/ytp.benz/",
  },
  {
    name: "Instagram",
    username: "ym_bxnz",
    icon: Icons.instagram,
    link: "https://www.instagram.com/ym_bxnz/",
  },
];
