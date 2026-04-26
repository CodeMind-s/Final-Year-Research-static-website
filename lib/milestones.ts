export type MilestoneStatus = "Completed" | "In Progress" | "Upcoming";

export interface Milestone {
  title: string;
  date: string;
  status: MilestoneStatus;
}

export const milestones: Milestone[] = [
  { title: "Brainstorming Workshop", date: "25 March 2025", status: "Completed" },
  { title: "Group Registration", date: "26 May 2025", status: "Completed" },
  { title: "Topic Assessment Form (TAF)", date: "26 May 2025", status: "Completed" },
  { title: "Project Charter", date: "23 July 2025", status: "Completed" },
  { title: "Proposal Reports (Draft)", date: "15 August 2025", status: "Completed" },
  { title: "Proposal Presentation", date: "8–12 September 2025", status: "Completed" },
  { title: "Proposal Reports (Final)", date: "19 September 2025", status: "Completed" },
  { title: "Progress Presentation I", date: "15–19 December 2025", status: "Completed" },
  { title: "Check List I", date: "15–19 December 2025", status: "Completed" },
  { title: "Research Paper", date: "March 2026", status: "Completed" },
  { title: "Final Reports", date: "April 2026", status: "Completed" },
  { title: "Progress Presentation II", date: "March 2026", status: "Completed" },
  { title: "Check List II", date: "March 2026", status: "Completed" },
  { title: "RP Acceptance Notification", date: "May 2026", status: "In Progress" },
  { title: "Final Presentation & VIVA", date: "June 2026", status: "Upcoming" },
  { title: "Project Website", date: "June 2026", status: "Upcoming" },
  { title: "Research Logbook", date: "June 2026", status: "Upcoming" },
];
