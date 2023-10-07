export interface ProjectDataTypes  {
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
"id":1,
"name": "QuickClick",
"image": "/images/QuickClick.png",
"description": "A dynamic E-Commerce platform designed to provide users with an efficient and enjoyable online shopping experience.",
"tags": ["reactjs", "nodejs", "mongodb", "styled-components", "expressjs","react-ecommerce"],
"source_code": "https://github.com/Osamashaikh90/QuickClick",
"live_link": "quick-click.vercel.app",
"language":"JavaScript",
"visibility":"Public"

},
{
"id":2,
"name":"Freelanster",
"image": "/images/Freelanster.png",
"description": "A platform Where Jobs Meet Talent: Connecting Job Seekers and Employers, Making Job Hunting and Hiring Effortless.",
  "tags": ["nodejs","javascript","mongodb","styled-components","reactjs","expressjs","mui"],
"source_code": "https://github.com/Bhanu1776/Freelansters",
"live_link": "https://freelansters-git-master-bhanu1776.vercel.app/",
"language":"JavaScript",
"visibility":"Public"
},
{
"id":3,
"name":"DevDiaries",
 "image": "/images/DevDiaries.png",
    "description": "DevDiaries is a personal blog website that aims to share my thoughts, experiences through modern web dev practices",
    "tags": ["nextjs", "TypeScript", "tailwind", "gray-matter", "blogs"],
    "source_code": "https://github.com/Osamashaikh90/DevDiaries",
"live_link": "https://dev-diaries-kappa.vercel.app/",
"language":"TypeScript",
"visibility":"Public"
},
{
"id":4,
"name":"Task-tracker",
 "image": "/images/TaskTracker.png",
    "description": "TaskTrackr is a todo-list app using NextJs with TS and Employed PostgreSQL as the database solution.",
    "tags": ["nodejs"," typescript", "nextjs" ,"postgresql", "expressjs"," tailwindcss","to-do"],
    "source_code": "https://github.com/Osamashaikh90/tasktrackr",
"live_link": "https://tasktrackr-indol.vercel.app/",
"language":"TypeScript",
"visibility":"Public"
},
// {
// "id":5,
// "name":"Portfolio",
//  "image": "/images/Profile.png",
//     "description": "A platform for web developers to showcase their projects",
//     "tags": ["next", "node", "mongodb", "tailwind", "react-query"],
//     "source_code": "https://github.com/itsnitinr/driwwwle-v2",
// "live_link": "https://driwwwle.com/",
// "language":"TypeScript ",
// "visibility":"Public"
// },
{
"id":5,
"name":"Blood-bank Management",
 "image": "/images/BloodBank.png",
    "description": "A Desktop application for bloodbank using Swing,Awt and MySql database",
    "tags": ["github", "java","mySql", 'swing', "awt","java-project","swing-gui"],
    "source_code": "https://github.com/Osamashaikh90/Blood-bank_Management_Sysytem",
"live_link": "https://github.com/Osamashaikh90/Blood-bank_Management_Sysytem",
"language":"Java",
"visibility":"Private"
}
]

