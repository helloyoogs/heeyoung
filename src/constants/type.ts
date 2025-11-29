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

// src/constants/type.ts

export interface ToyProject {
    title: string;
    period: string;
    subtitle?: string;
    techFront?: string;
    techBack?: string;
    techEtc?: string;
    site?: string;
    github?: string;
    githubFront?: string
    githubBack?: string;
    video?: string;
    ppt?: string;
    features?: string[];
    imageSrc: string;
    imageAlt: string;
}
