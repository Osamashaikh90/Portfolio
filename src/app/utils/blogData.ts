export interface BlogDataTypes  {
    id: number;
    title: string;
    date: string;
    description: string;
    tags: Array<string>;
    blog_source: string;
    time: string;

  }
  export const BlogData: Array<BlogDataTypes> = [
  {
  "id":1,
  "title": "Best ways to fix Nodemon error- nodemon.ps1 cannot be loaded because running scripts is disabled on this system.",
  "date": "May 31, 2023",
  "description": "Welcome to my blog, where we dive into the intriguing world of Node.js development and tackle one of the common stumbling blocks many developers encounter: the 'Nodemon Error - nodemon.ps1 cannot be loaded because running scripts is disabled on this system.'",
  "tags": ["reactjs", "nodejs", "mongodb", "styled-components", "expressjs","react-ecommerce"],
  "blog_source": "https://dev.to/osamashaikh90/best-ways-to-fix-nodemon-error-nodemonps1-cannot-be-loaded-because-running-scripts-is-disabled-on-this-system-1kia",
  "time": "3 min read",

  }]