export interface ProjectItem {
    title: string;
    tech: string[];
    role: string;
    period?: string;
    site?: string;
}

export interface CareerItem {
    company: string;
    period: string;
    projects: ProjectItem[];
}

export interface EducationItem {
    school: string;
    period: string;
    course: string;
}
