import React, { useEffect, Suspense } from "react";
import { Link, useParams } from "react-router-dom";

import { useProjectsState } from "../../context/projects/context";
import { useTasksState, useTasksDispatch } from "../../context/task/context";
import ErrorBoundary from "../../components/ErrorBoundary";
const DragDropList = React.lazy(() => import("./DragDropList"));
import { refreshTasks } from "../../context/task/actions";

const ProjectDetails = () => {
    
  const projectState = useProjectsState();
  const taskDispatch = useTasksDispatch();
  const { projectID } = useParams();
  const tasksState = useTasksState();

  useEffect(() => {
    if (projectID) refreshTasks(taskDispatch, projectID);
  }, [projectID, taskDispatch]);
  
  const selectedProject = projectState?.projects.filter(
    (project) => `${project.id}` === projectID
  )?.[0];

  if (!selectedProject) {
    return <>No such Project!</>;
  }

  if (tasksState.isLoading) {
    return <>Loading...</>;
  }

  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-2xl font-medium tracking-tight text-slate-700">
          {selectedProject.name}
        </h2>
        <Link to={`tasks/new`}>
          <button
            id="newTaskBtn"
            className="rounded-md bg-blue-600 px-4 py-2 m-2 text-sm font-medium text-white hover:bg-opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            New Task
          </button>
        </Link>
        <ErrorBoundary>
          <Suspense fallback={<div className="suspense-loading">Loading tasks...</div>}>
            <DragDropList data={tasksState.projectData} />
          </Suspense>
        </ErrorBoundary>
      </div>
    </>
  );
};

export default ProjectDetails;