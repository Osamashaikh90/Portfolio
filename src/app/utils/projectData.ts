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
"image": "/next.svg",
"description": "A platform for web developers to showcase their projects",
"tags": ["next", "node", "mongodb", "tailwind", "react-query"],
"source_code": "https://github.com/itsnitinr/driwwwle-v2",
"live_link": "https://driwwwle.com/",
"language":"JavaScript ",
"visibility":"Public"

},
{
"id":2,
"name":"Freelanster",
"image": "/next.svg",
"description": "A platform for web developers to showcase their projects",
"tags": ["next", "node", "mongodb", "tailwind", "react-query"],
"source_code": "https://github.com/itsnitinr/driwwwle-v2",
"live_link": "https://driwwwle.com/",
"language":"JavaScript",
"visibility":"Public"
},
{
"id":3,
"name":"DevDiaries",
 "image": "/next.svg",
    "description": "A platform for web developers to showcase their projects",
    "tags": ["next", "node", "mongodb", "tailwind", "react-query"],
    "source_code": "https://github.com/Osamashaikh90/DevDiaries",
"live_link": "https://dev-diaries-kappa.vercel.app/",
"language":"TypeScript ",
"visibility":"Public"
},
{
"id":4,
"name":"Task-tracker",
 "image": "/vercel.svg",
    "description": "A platform for web developers to showcase their projects",
    "tags": ["next", "node", "mongodb", "tailwind", "react-query"],
    "source_code": "https://github.com/itsnitinr/driwwwle-v2",
"live_link": "https://driwwwle.com/",
"language":"TypeScript",
"visibility":"Public"
},
{
"id":5,
"name":"Portfolio",
 "image": "/vercel.svg",
    "description": "A platform for web developers to showcase their projects",
    "tags": ["next", "node", "mongodb", "tailwind", "react-query"],
    "source_code": "https://github.com/itsnitinr/driwwwle-v2",
"live_link": "https://driwwwle.com/",
"language":"TypeScript ",
"visibility":"Public"
},
{
"id":6,
"name":"Blood-bank Management",
 "image": "/vercel.svg",
    "description": "A platform for web developers to showcase their projects",
    "tags": ["next", "node", "mongodb", "tailwind", "react-query"],
    "source_code": "https://github.com/itsnitinr/driwwwle-v2",
"live_link": "https://driwwwle.com/",
"language":"Java",
"visibility":"Public"
}
]

