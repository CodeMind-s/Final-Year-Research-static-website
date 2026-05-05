export type MilestoneStatus = "Completed" | "In Progress" | "Upcoming";

export interface Milestone {
  title: string;
  date: string;
  status: MilestoneStatus;
  marks?: string;
  description?: string;
}

export const milestones: Milestone[] = [
  {
    title: "Brainstorming Workshop",
    date: "25 March 2025",
    status: "Completed",
    marks: "—",
    description: "Initial ideation and topic exploration session.",
  },
  {
    title: "Group Registration",
    date: "26 May 2025",
    status: "Completed",
    marks: "—",
    description: "Formal registration of the four-member research group.",
  },
  {
    title: "Topic Assessment Form (TAF)",
    date: "26 May 2025",
    status: "Completed",
    marks: "—",
    description: "Topic submission and supervisor allocation.",
  },
  {
    title: "Project Charter",
    date: "23 July 2025",
    status: "Completed",
    marks: "2%",
    description:
      "Foundational scope document covering objectives, deliverables and risks.",
  },
  {
    title: "Proposal Reports (Draft)",
    date: "15 August 2025",
    status: "Completed",
    marks: "—",
    description: "Draft individual proposal reports for supervisor review.",
  },
  {
    title: "Proposal Presentation",
    date: "8–12 September 2025",
    status: "Completed",
    marks: "12%",
    description: "Group + individual proposal defence to the panel.",
  },
  {
    title: "Proposal Reports (Final)",
    date: "19 September 2025",
    status: "Completed",
    marks: "6%",
    description: "Final individual proposal reports submission.",
  },
  {
    title: "Progress Presentation I",
    date: "15–19 December 2025",
    status: "Completed",
    marks: "10%",
    description: "First progress demonstration of working components.",
  },
  {
    title: "Check List I",
    date: "15–19 December 2025",
    status: "Completed",
    marks: "5%",
    description: "Submission of supporting documents and design artefacts.",
  },
  {
    title: "Research Paper",
    date: "March 2026",
    status: "Completed",
    marks: "10%",
    description:
      "Conference paper written, submitted and accepted at ICHORA 2026.",
  },
  {
    title: "Progress Presentation II",
    date: "March 2026",
    status: "Completed",
    marks: "18%",
    description: "Second progress review of the integrated platform.",
  },
  {
    title: "Check List II",
    date: "March 2026",
    status: "Completed",
    marks: "5%",
    description:
      "Maturity reports, deployment, performance and commercialization.",
  },
  {
    title: "Final Reports",
    date: "April 2026",
    status: "Completed",
    marks: "19%",
    description: "Final group + individual reports for the full BrineX system.",
  },
  {
    title: "RP Acceptance Notification",
    date: "May 2026",
    status: "In Progress",
    marks: "—",
    description: "Awaiting final ICHORA acceptance confirmation.",
  },
  {
    title: "Final Presentation & VIVA",
    date: "June 2026",
    status: "Completed",
    marks: "20%",
    description: "Final defence and viva voce examination.",
  },
  {
    title: "Project Website",
    date: "June 2026",
    status: "Completed",
    marks: "2%",
    description: "Public-facing project website (this website).",
  },
  {
    title: "Research Logbook",
    date: "June 2026",
    status: "In Progress",
    marks: "3%",
    description: "Personal logbook of research activities.",
  },
];
