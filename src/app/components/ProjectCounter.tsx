// components/ProjectCounter.tsx
import { useEffect, useState } from 'react';
import { projectData } from '../utils/projectData';
import Loading from './Loading';

function ProjectCounter() {
  const [projectCount, setProjectCount] = useState<number | null>(null);

  useEffect(() => {
    setProjectCount(projectData.length);
  }, []);
  // console.log(projectCount);
  return (
    <div>
      {projectCount !== null ? projectCount : <Loading />}
    </div>
  );
}

export default ProjectCounter;
