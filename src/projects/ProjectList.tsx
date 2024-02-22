import { useState } from 'react';
import { Project } from './Project';
import ProjectCard from './ProjectCard';
import ProjectForm from './ProjectForm';

interface ProjectsListProps {
  projects: Project[];
  onSave: (project: Project) => void;
}

function ProjectList({ projects, onSave }: ProjectsListProps) {
  const [projectBeingEdited, setProjectsBeingEdited] = useState({});

  const handleEdit = (project: Project) => {
    setProjectsBeingEdited(project);
  };

  const cancelEditing = () => {
    setProjectsBeingEdited({});
  };

  return (
    <div className="row">
      {projects.map((project) => (
        <div key={project.id} className="cols-sm">
          {project === projectBeingEdited ? (
            <ProjectForm
              project={project}
              onSave={onSave}
              onCancel={cancelEditing}
            />
          ) : (
            <ProjectCard project={project} onEdit={handleEdit} />
          )}
        </div>
      ))}
    </div>
  );
}

export default ProjectList