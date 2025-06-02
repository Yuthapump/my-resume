export interface certificatesInterface {
  repo: string;
  img?: any;
  contibutionDescription: string;
  repoOwner: string;
  link: string;
}

export const certificatesUnsorted: certificatesInterface[] = [
  {
    repo: "Crossplateform Flutter",
    img: "/certificate/certificate-flutter.png",
    contibutionDescription:
      "Completed the full course on Flutter for cross-platform development, covering both Android and iOS platforms.",
    repoOwner: "Microsoft",
    link: "https://drive.google.com/file/d/1wTSsBu0tXvjiUcMM5eTbvNSWaDvP5Scu/view?usp=drive_link",
  },
  {
    repo: "Crossplateform React",
    img: "/certificate/certificate-react.png",
    contibutionDescription:
      "Completed the full course on React for cross-platform development, covering both Android and iOS platforms.",
    repoOwner: "Creative Commons",
    link: "https://drive.google.com/file/d/1iE7sLBLk6muNIPz2BVW6sLK1xlGSlnHv/view?usp=drive_link",
  },
];

export const featuredCertificates: certificatesInterface[] =
  certificatesUnsorted.slice(0, 3);
