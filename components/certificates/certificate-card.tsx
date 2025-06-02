"use client";
import Image from "next/image";
import { useState } from "react";

import { Icons } from "@/components/common/icons";
import { certificatesInterface } from "@/config/certificate";

interface ContributionCardProps {
  certificates: certificatesInterface[];
}

export default function ContributionCard({
  certificates,
}: ContributionCardProps) {
  const [openImg, setOpenImg] = useState<string | null>(null);

  return (
    <>
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3 static">
        {certificates.map((certificate, id) => (
          <div
            key={id}
            className="relative rounded-lg border bg-background p-2 hover:bg-accent hover:text-accent-foreground cursor-pointer"
            onClick={() =>
              setOpenImg(certificate.img || "/default-certificate.png")
            }
          >
            <Icons.externalLink
              size={35}
              className="absolute bottom-3 right-3 border bg-background rounded-full p-2 cursor-pointer text-muted-foreground "
            />
            <div className="flex flex-col justify-between rounded-md p-6 min-h-[170px]">
              <div className="flex flex-row justify-between">
                <h3 className="font-bold flex space-x-2 items-center">
                  <Icons.gitRepoIcon size={20} />
                  <span>{certificate.repo}</span>
                </h3>
                {/* <Icons.gitBranch size={20} /> */}
              </div>
              <div className="space-y-4">
                <Image
                  src={certificate.img || "/default-certificate.png"}
                  height={100}
                  width={180}
                  sizes="100vw"
                  alt={`${certificate.repo} Logo`}
                  className="mt-4 object-cover bg-primary rounded-md mb-0 h-auto md:mb-2 w-full max-w-[20rem] border-4 border-primary pt-4"
                />
                <p className="text-sm text-muted-foreground">
                  {certificate.contibutionDescription}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {openImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
          onClick={() => setOpenImg(null)}
        >
          {/* <button
            className="absolute top-2 right-2 text-xl font-bold"
            onClick={() => setOpenImg(null)}
          >
            ×
          </button> */}
          <div
            className="bg-white rounded-lg p-4 max-w-2xl w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={openImg}
              alt="Certificate"
              width={900}
              height={600}
              className="w-full h-auto rounded"
            />
          </div>
        </div>
      )}
    </>
  );
}
