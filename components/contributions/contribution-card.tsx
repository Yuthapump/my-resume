import Image from "next/image";
import Link from "next/link";

import NaresuanImage from "@/assets/images/nu-en-logo.webp";
import { Icons } from "@/components/common/icons";
import { contributionsInterface } from "@/config/contributions";

interface ContributionCardProps {
  contributions: contributionsInterface[];
}

export default function ContributionCard({
  contributions,
}: ContributionCardProps) {
  return (
    <div className="mx-auto justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3 static">
      {contributions.map((contribution, id) => (
        <Link
          href={contribution.link}
          target="_blank"
          key={id}
          className="flex justify-center"
        >
          <div className="relative rounded-lg border bg-background p-2 hover:bg-accent hover:text-accent-foreground flex flex-col items-center">
            <Icons.externalLink
              size={35}
              className="absolute bottom-3 right-3 border bg-background rounded-full p-2 cursor-pointer text-muted-foreground "
            />
            <div className="flex h-[170px] flex-col justify-between rounded-md p-6 sm:h-[170px] items-center">
              <div className="flex flex-row justify-between w-full">
                <h3 className="font-bold flex space-x-2 items-center">
                  {/* <Icons.educationicon size={20}/> */}
                  <span>{contribution.repo}</span>
                </h3>
                <Icons.gitBranch size={20} />
              </div>
              <div className="mt-3 flex flex-row items-center space-x-4">
                <Image
                  src={NaresuanImage}
                  height={100}
                  width={100}
                  sizes="100vw"
                  alt="Naresuan University Logo"
                  className=" aspect-square object-cover bg-primary rounded-full mb-0 h-auto md:mb-2 w-[20%] max-w-[16rem] border-8 border-primary"
                />
                <p className="text-sm text-muted-foreground">
                  {contribution.contibutionDescription}
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
