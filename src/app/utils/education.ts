export interface EducationDataTypes  {
  id: number;
  course_name: string;
  university_name: string;
  address: string;
 date: string;
}

export const educationData: Array<EducationDataTypes> = [
    {
        "id": 1,
        "course_name": "Bachelor Of Engineering",
        "university_name": "Xavier Institute Of Engineering",
   "address": "Mahim,Mumbai",
 "date": "2020-2024"
    },
    
    {
        "id": 2,
        "course_name": "Junior College",
        "university_name": "Mithibai College",
   "address": "Vile parle,Mumbai",
 "date": "2018-2020"
    },{
        "id": 3,
        "course_name": "Schooling",
        "university_name": "M.J.D high school",
        "address": "Santacruz,Mumbai",
        "date": "2008-2018"
    }
    
]