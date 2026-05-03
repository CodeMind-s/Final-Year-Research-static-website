export type DocType = "Group" | "Individual" | "Technical" | "Publication";

export interface SubDocument {
  label: string;
  filename?: string;
  url?: string;
  kind?: "pdf" | "video" | "link";
}

export interface Document {
  title: string;
  type: DocType;
  filename?: string;
  subDocuments?: SubDocument[];
  subDocumentsHeading?: string;
}

export const documents: Document[] = [
  {
    title: "Proposal Document",
    type: "Group",
    subDocumentsHeading: "Individual Proposals",
    subDocuments: [
      {
        label: "Ansar T D (IT22893734)",
        filename: "individual_proposal_report/IT22893734.pdf",
      },
      {
        label: "Sirimanna RDIB (IT22308016)",
        filename: "individual_proposal_report/IT22308016.pdf",
      },
      {
        label: "Arshaq MJM (IT22346322)",
        filename: "individual_proposal_report/IT22346322.pdf",
      },
      {
        label: "Perumbuli PGRMD (IT22354310)",
        filename: "individual_proposal_report/IT22354310.pdf",
      },
    ],
  },
  {
    title: "Checklist",
    type: "Group",
    subDocumentsHeading: "Supporting Documents",
    subDocuments: [
      {
        label: "Design Report",
        filename: "checklist/Design Report.pdf",
        kind: "pdf",
      },
      {
        label: "GitHub Repo",
        filename: "checklist/GitHub Repo.pdf",
        kind: "pdf",
      },
      {
        label: "Deployment Report",
        filename: "checklist/Deployment Report.pdf",
        kind: "pdf",
      },
      {
        label: "Research Maturity Report",
        filename: "checklist/Research Maturity Report.pdf",
        kind: "pdf",
      },
      {
        label: "System Maturity Report",
        filename: "checklist/System Maturity Report.pdf",
        kind: "pdf",
      },
      {
        label: "Performance Test Report",
        filename: "checklist/Brinex_Performance_Test_Report.pdf",
        kind: "pdf",
      },
      {
        label: "Commercialization Plan",
        filename: "checklist/Commercialization.pdf",
        kind: "pdf",
      },
      {
        label: "Demo Video",
        url: "https://mysliit.sharepoint.com/:v:/s/CDAPSubmissionCloud/IQC7GDmdfEJ3Qo2YPijTIGRAAbwEPraY6HEMA7xQsE0heII?e=DG23VH",
        kind: "video",
      },
    ],
  },
  {
    title: "Final Report - BrineX System",
    type: "Group",
    filename: "final_report/25-26J-431.pdf",
    subDocumentsHeading: "Final Reports",
    subDocuments: [
      {
        label: "BrineX System (Group, 25-26J-431)",
        filename: "final_report/25-26J-431.pdf",
        kind: "pdf",
      },
      {
        label: "Ansar T D (IT22893734)",
        filename: "final_report/individual_final_report/IT22893734.pdf",
        kind: "pdf",
      },
      {
        label: "Sirimanna RDIB (IT22308016)",
        filename: "final_report/individual_final_report/IT22308016.pdf",
        kind: "pdf",
      },
      {
        label: "Arshaq MJM (IT22346322)",
        filename: "final_report/individual_final_report/IT22346322.pdf",
        kind: "pdf",
      },
      {
        label: "Perumbuli PGRMD (IT22354310)",
        filename: "final_report/individual_final_report/IT22354310.pdf",
        kind: "pdf",
      },
    ],
  },
  {
    title: "Research Paper (ICHORA 2026)",
    type: "Publication",
    filename: "Research_Paper_ICHORA26.pdf",
  },
];
