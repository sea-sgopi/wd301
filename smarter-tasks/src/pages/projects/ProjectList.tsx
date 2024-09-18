import React, { useEffect, useReducer } from 'react';
import { API_ENDPOINT } from '../../config/constants';

interface Project {
  id: number;
  name: string;
}

interface State {
  projects: Project[];
  isLoading: boolean;
}

type Action =
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_PROJECTS'; payload: Project[] };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'SET_PROJECTS':
      return { ...state, projects: action.payload };
    default:
      return state;
  }
};

const ProjectList: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, {
    projects: [],
    isLoading: false,
  });

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const token = localStorage.getItem('authToken') ?? '';

    try {
      dispatch({ type: 'SET_LOADING', payload: true });

      const response = await fetch(`${API_ENDPOINT}/projects`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      dispatch({ type: 'SET_PROJECTS', payload: data });
      dispatch({ type: 'SET_LOADING', payload: false });
    } catch (error) {
      console.error('Error fetching projects:', error);
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  return (
    <div>
      <h2>Project List</h2>
      {state.isLoading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {state.projects.map((project) => (
            <li key={project.id}>{project.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProjectList;
