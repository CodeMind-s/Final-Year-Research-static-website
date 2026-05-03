export interface TeamMember {
  name: string;
  studentId: string;
  role: string;
  email: string;
  initials: string;
  image: string;
}

export interface Supervisor {
  name: string;
  title: string;
  department: string;
  email: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Ansar T D",
    studentId: "IT22893734",
    role: "Compass - Market Intelligence",
    email: "it22893734@my.sliit.lk",
    initials: "AT",
    image: "/images/thimesha.jpeg",
  },
  {
    name: "Sirimanna RDIB",
    studentId: "IT22308016",
    role: "Crystal - Crystallization Forecasting",
    email: "it22308016@my.sliit.lk",
    initials: "SR",
    image: "/images/indu.jpeg",
  },
  {
    name: "Arshaq MJM",
    studentId: "IT22346322",
    role: "Vision - Quality Control",
    email: "it22346322@my.sliit.lk",
    initials: "AM",
    image: "/images/arsh.jpeg",
  },
  {
    name: "Perumbuli PGRMD",
    studentId: "IT22354310",
    role: "Valor - Federated Waste Valorization",
    email: "it22354310@my.sliit.lk",
    initials: "PP",
    image: "/images/randini.jpeg",
  },
];

export const supervisors: Supervisor[] = [
  {
    name: "Dr. Bhagya Nathali Silva",
    title: "Supervisor",
    department: "Assistant Professor, Dept. of Information Technology, SLIIT",
    email: "nathali.s@sliit.lk",
  },
  {
    name: "Mrs. Thilini Jayalath",
    title: "Co-Supervisor",
    department: "Assistant Lecturer, Dept. of Software Engineering, SLIIT",
    email: "thilini.j@sliit.lk",
  },
];
