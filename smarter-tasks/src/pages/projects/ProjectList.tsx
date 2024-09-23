import React, { Suspense } from "react";
const ProjectListItems = React.lazy(()=> import('./ProjectListItems'))
import NewProject from "./NewProject";
import ErrorBoundary from "../../components/ErrorBoundary";

const ProjectList = () => {
  return (
    <>
      <div className=" py-4">
      <ErrorBoundary>
        <Suspense fallback={<div className="suspense-loading">Loading...</div>}>
          <div className="grid grid-cols-3 gap-4">
          <ProjectListItems />
          </div>
        </Suspense>
      </ErrorBoundary>
      </div>
     
    </>
  );
};


export default ProjectList;