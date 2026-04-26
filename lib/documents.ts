export type DocType = "Group" | "Individual" | "Technical" | "Publication";

export interface Document {
  title: string;
  type: DocType;
  filename: string;
}

export const documents: Document[] = [
  { title: "Proposal Document", type: "Group", filename: "Proposal_Document.pdf" },
  { title: "Project Charter", type: "Group", filename: "Project_Charter.pdf" },
  { title: "Check List I", type: "Group", filename: "CheckList_I.pdf" },
  { title: "Final Report — BrineX System", type: "Group", filename: "Final_Report_BrineX.pdf" },
  { title: "Individual Report — Ansar T D (IT22893734)", type: "Individual", filename: "IT22893734.pdf" },
  { title: "Individual Report — Sirimanna RDIB (IT22308016)", type: "Individual", filename: "IT22308016.pdf" },
  { title: "Individual Report — Arshaq MJM (IT22346322)", type: "Individual", filename: "IT22346322.pdf" },
  { title: "Individual Report — Perumbuli PGRMD (IT22354310)", type: "Individual", filename: "IT22354310.pdf" },
  { title: "Deployment Report", type: "Technical", filename: "Deployment_Report.pdf" },
  { title: "Research Maturity Report", type: "Technical", filename: "Research_Maturity_Report.pdf" },
  { title: "System Maturity Report", type: "Technical", filename: "System_Maturity_Report.pdf" },
  { title: "Commercialization Plan", type: "Technical", filename: "Commercialization.pdf" },
  { title: "Performance Test Report", type: "Technical", filename: "Brinex_Performance_Test_Report.pdf" },
  { title: "Research Paper (ICHORA 2026)", type: "Publication", filename: "From_Pond_to_Market.pdf" },
];
