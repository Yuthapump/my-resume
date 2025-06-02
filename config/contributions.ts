export interface contributionsInterface {
  repo: string;
  contibutionDescription: string;
  link: string;
}

export const contributionsUnsorted: contributionsInterface[] = [
  {
    repo: "Naresuan University",
    contibutionDescription: "Bachelor Degree of Computer Engineering",
    link: "https://www.nu.ac.th/",
  },
];

export const featuredContributions: contributionsInterface[] =
  contributionsUnsorted.slice(0, 3);
