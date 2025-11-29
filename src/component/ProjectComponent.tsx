import {TOY_PROJECTS} from "../constants/common";
import ToyProjectCard from "./ToyProjectCard";


interface ProjectComponentProps {
    isOpen: number;
    setIsOpen: (value: number | null) => void;
}

const ProjectComponent = ({ isOpen, setIsOpen }: ProjectComponentProps) => {
    return (
        <div className="folder_popup" style={{ display: isOpen === 2 ? "block" : "none" }}>
            <div className="popup_header">
                <div className="popup_close" role="button" onClick={() => setIsOpen(null)}></div>
                <p>PROJECT</p>
            </div>

            <div className="popup_content_wrap">
                {TOY_PROJECTS.map((project) => (
                    <ToyProjectCard key={project.title} project={project} />
                ))}
            </div>
        </div>
    );
};

export default ProjectComponent;
