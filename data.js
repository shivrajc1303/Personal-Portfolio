/* All content lives here. Empty strings are hidden by the UI. */
window.PORTFOLIO = {
  siteUrl: "", // set to your real domain, then add a canonical <link> in index.html
  email: "chorageshivraj@gmail.com",
  phone: "+91 9834243018",
  links: {
    github: "https://github.com/shivrajc1303",
    linkedin: "https://www.linkedin.com/in/shivraj-chorage-36208723a",
    certs: "https://drive.google.com/drive/folders/1VgDpxdQc7tW_BJhfFiiNppT_9-aFTeKb",
    resume: "" // add a real PDF path (e.g. "assets/resume.pdf") to show a Resume button
  },
  spoken: "English, Hindi, Marathi",
  // levels: c = Comfortable, f = Familiar, b = Beginner
  skills: [
    { cat: "Languages", items: [["Python", "c"], ["C++", "c"], ["C", "c"], ["Java", "c"]] },
    { cat: "Machine learning", items: [["ML algorithms", "f"], ["Neural network fundamentals", "f"]] },
    { cat: "Cloud", items: [["AWS", "f"], ["Google Cloud Platform", "f"], ["Kubernetes", "f"]] },
    { cat: "Databases", items: [["DBMS", "b"]] },
    { cat: "Practice", items: [["Software development", "c"], ["Debugging", "c"], ["Problem solving", "c"], ["Project research", "c"]] }
  ],
  projects: [
    { title: "Smart Expense & Finance Management System", category: "Software project", status: "Details coming soon",
      shortDescription: "A system for tracking and managing personal expenses and finances.",
      technologies: ["Python", "FastAPI", "PostgreSQL / MySQL", "HTML", "CSS", "JavaScript"],
      problem: "", solution: "", features: [], architecture: "", challenges: "", lessonsLearned: "", githubUrl: "", liveUrl: "" },
    { title: "Smart Placement Preparation Platform", category: "Software project", status: "Details coming soon",
      shortDescription: "A platform to help students prepare for placements.",
      technologies: ["Python"],
      problem: "", solution: "", features: [], architecture: "", challenges: "", lessonsLearned: "", githubUrl: "", liveUrl: "" }
  ],
  internship: { role: "Python Programming and Artificial Intelligence Intern", org: "Domain Technologies, Kolhapur, Maharashtra", date: "May 2023 – Jul 2023",
    points: ["Learned the fundamentals of artificial intelligence and the basics of neural networks.", "Trained in Python programming as part of the internship domain."] },
  certs: [
    { title: "MS-CIT", meta: "September 2021" },
    { title: "KLiC Certificate Course in Programming", meta: "March 2022" }
  ],
  education: [
    { inst: "JSPM University, Pune", prog: "B.Tech, Artificial Intelligence and Machine Learning", date: "2024 – 2027 (expected)", note: "Ongoing. CGPA 8.00 up to third year (TE)." },
    { inst: "KBP Polytechnic, Satara", prog: "Diploma", date: "2022 – 2024", note: "Final semester: 81.88%",
      record: [["Semester 1", "82.57%"], ["Semester 2", "73.38%"], ["Semester 3", "66.13%"], ["Semester 4", "74.00%"], ["Semester 5", "80.33%"], ["Semester 6", "81.88%"]] },
    { inst: "Abhinav Madhyamik Vidyalaya, Satara", prog: "Class 10", date: "2020 – 2022", note: "78.20%" }
  ],
  achievements: [
    { kind: "Sports", title: "Boxing: silver medal, 6th Sub-Junior Maharashtra State Boxing Championship", date: "2019" },
    { kind: "Sports", title: "Boxing: silver medal, district-level school sports competition", date: "2018 – 2019" },
    { kind: "Creative", title: "Drawing: Elementary grade B and Intermediate grade C, Government of Maharashtra examinations", date: "2018, 2019" }
  ]
};
