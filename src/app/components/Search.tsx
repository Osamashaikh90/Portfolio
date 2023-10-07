import React, { useState } from "react";
interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}
const Search:React.FC<SearchBarProps>  = ({onSearch}) => {
    const [searchTerm, setSearchTerm] = useState<string>('');
   // const handleChange = () => { }
    const handleSearch = () => {
    onSearch(searchTerm.trim().toLowerCase());
  };

  
  return (
     <>
        <div>
           <input 
           type="search" 
           name="projects" 
           id="" 
           className='bg-inherit border border-[#363a40] w-[55%] py-[6px] text-sm h-[34px] px-[10px] text-[#7d8590] rounded-md focus:ring-blue-600 outline-blue-600' 
              placeholder='Find a project..'
             value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleSearch}
           />
        </div>
      </>
  )
}

export default Search

