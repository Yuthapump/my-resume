import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import CerfiticateCard from "@/components/certificates/certificate-card";
import { certificatesUnsorted } from "@/config/certificate";
import { pagesConfig } from "@/config/pages";

export const metadata: Metadata = {
  title: pagesConfig.certificates.metadata.title,
  description: pagesConfig.certificates.metadata.description,
};

export default function ContributonsPage() {
  return (
    <PageContainer
      title={pagesConfig.certificates.title}
      description={pagesConfig.certificates.description}
    >
      <CerfiticateCard
        certificates={certificatesUnsorted}
      />
    </PageContainer>
  );
}
