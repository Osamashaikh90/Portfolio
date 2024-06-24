export interface ProjectDataTypes {
  id: number;
  name: string;
  image: string;
  description: string;
  tags: Array<string>;
  source_code: string;
  live_link: string;
  language: string;
  visibility: string;
}
export const projectData: Array<ProjectDataTypes> = [
  {
    "id": 1,
    "name": "QuickClick",
    // "image": "https://res.cloudinary.com/dwohsn29d/image/upload/v1696745243/Portfolio/images/ujcjlcigsicrkegspz4g.png",
    "image": "https://res.cloudinary.com/dwohsn29d/image/upload/v1719259357/Portfolio/images/qpl61mrxafldwrvi759z.png",
    "description": "A dynamic E-Commerce platform designed to provide users with an efficient and enjoyable online shopping experience.",
    "tags": ["reactjs", "nodejs", "mongodb", "styled-components", "expressjs", "react-ecommerce"],
    "source_code": "https://github.com/Osamashaikh90/QuickClick",
    "live_link": "https://quick-click.vercel.app",
    "language": "JavaScript",
    "visibility": "Public"
  },
  {
    "id": 2,
    "name": "Youtube Sync",
    "image": "https://res.cloudinary.com/dwohsn29d/image/upload/v1719253021/Portfolio/images/zoldputceehz64t3onzy.png",
    "description": "A revolutionary YouTube alternative: Explore, search, and View your youtube subscriptions with ease, featuring multilingual support, theme switching, voice search, and advanced state management.",
    "tags": ["reactjs", "Google Api", "reduxjs", "redux-toolkit", "RTK query", "Rapid Api","i18next"],
    "source_code": "https://github.com/Osamashaikh90/Youtube-Sync",
    "live_link": "https://youtube-clone-nu-silk.vercel.app",
    "language": "JavaScript",
    "visibility": "Public"

  },
  {
    "id": 3,
    "name": "Freelanster",
    "image": "https://res.cloudinary.com/dwohsn29d/image/upload/v1696745239/Portfolio/images/b6ebq6uoik04i7dl8l0m.png",
    "description": "A platform Where Jobs Meet Talent: Connecting Job Seekers and Employers, Making Job Hunting and Hiring Effortless.",
    "tags": ["nodejs", "javascript", "mongodb", "styled-components", "reactjs", "expressjs", "mui"],
    "source_code": "https://github.com/Bhanu1776/Freelansters",
    "live_link": "https://freelansters-git-master-bhanu1776.vercel.app/",
    "language": "JavaScript",
    "visibility": "Public"
  },
  {
    "id": 4,
    "name": "DevDiaries",
    "image": "https://res.cloudinary.com/dwohsn29d/image/upload/v1696745239/Portfolio/images/eoyber3scurf7vb7z867.png",
    "description": "DevDiaries is a personal blog website that aims to share my thoughts, experiences through modern web dev practices.",
    "tags": ["nextjs", "typeScript", "tailwind", "gray-matter", "blogs"],
    "source_code": "https://github.com/Osamashaikh90/DevDiaries",
    "live_link": "https://dev-diaries-kappa.vercel.app/",
    "language": "TypeScript",
    "visibility": "Public"
  },
  {
    "id": 5,
    "name": "Course Wallah",
    "image": "https://res.cloudinary.com/dwohsn29d/image/upload/v1718290164/Portfolio/images/qzwult6onryhep2rzbuz.png",
    "description": "Explore an innovative Ed-Tech platform where you can seamlessly add courses to your personalized dashboard, with real-time course likes updation feature.(Internship Assignment)",
    "tags": ["Reactjs", "firebase", "tailwind", "redux-toolkit", "react-icons","vite"],
    "source_code": "https://github.com/Osamashaikh90/alemeno-dashboard",
    "live_link": "https://alemeno-dashboard.vercel.app/",
    "language": "JavaScript",
    "visibility": "Public"
  },
  {
    "id": 6,
    "name": "Task-tracker",
    "image": "https://res.cloudinary.com/dwohsn29d/image/upload/v1696745243/Portfolio/images/nulqesdekh8mr5wf49aw.png",
    "description": "TaskTrackr is a todo-list app using NextJs with TS and Employed PostgreSQL as the database solution.",
    "tags": ["nextjs", "nodejs", " typescript", "postgresql", "expressjs", " tailwindcss", "uid","dotenv"],
    "source_code": "https://github.com/Osamashaikh90/tasktrackr",
    "live_link": "https://tasktrackr-indol.vercel.app/",
    "language": "TypeScript",
    "visibility": "Public"
  },
  {
    "id": 7,
    "name": "Sticky Wall",
    "image": "https://res.cloudinary.com/dwohsn29d/image/upload/v1718302194/Portfolio/images/ra2e3ov8azyzxpvy8jzn.png",
    "description": "Sticky Wall is your ultimate space to create, search, view, edit, and delete to-do lists or notes with current date, keeping you organized and on track effortlessly.(InternShip Assignment)",
    "tags": ["reactjs", "react-toastify", "tailwind", "reduxjs/toolkit","local-storage" ,"notes"],
    "source_code": "https://github.com/Osamashaikh90/StickyWall",
    "live_link": "https://sticky-wall-gilt.vercel.app/",
    "language": "TypeScript",
    "visibility": "Public"
  },
  {
    "id": 8,
    "name": "QuizApp",
    "image": "https://res.cloudinary.com/dwohsn29d/image/upload/v1718300223/Portfolio/images/lyjzbwln6eckirhhqzvs.png",
    "description": "QuizApp is the perfect platform to test your web development skills and refresh your knowledge through engaging quizzes.(Internship Assignment)",
    "tags": ["reactjs", "react-hooks", "tailwind", "web", "quizes"],
    "source_code": "https://github.com/Osamashaikh90/DevDiaries",
    "live_link": "https://quiz-app-rust-psi.vercel.app/",
    "language": "TypeScript",
    "visibility": "Public"
  },
  {
    "id": 9,
    "name": "Blood-bank Management",
    "image": "https://res.cloudinary.com/dwohsn29d/image/upload/v1696745238/Portfolio/images/xe991fjoixuv04tlpndl.png",
    "description": "A Desktop application for bloodbank using Swing,Awt and MySql database",
    "tags": ["github", "java", "mySql", 'swing', "awt", "java-project", "swing-gui"],
    "source_code": "https://github.com/Osamashaikh90/Blood-bank_Management_Sysytem",
    "live_link": "https://github.com/Osamashaikh90/Blood-bank_Management_Sysytem",
    "language": "Java",
    "visibility": "Private"
  }
]

