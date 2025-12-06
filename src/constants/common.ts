import {CareerItem, EducationItem, ToyProject} from "./type";
import IG_JLPT from "../img/ig_jlpt.png";
import IG_HEEYOUNG from "../img/ig_heeyoung.png";
import IG_TVING from "../img/ig_tving.png";
import IG_NEWJEANS from "../img/ig_newjeans.png";
import IG_THE_SHILLA from "../img/ig_the_shilla.png";
import IG_CHANEL from "../img/ig_chanel.png";

export const CAREERS: CareerItem[] = [
    {
        company: "career.ocube.company",
        period: "2022.09 ~",
        projects: [
            {
                title: "LG LATS",
                period: "career.ocube.lats.period",
                tech: ["HTML", "CSS", "JavaScript", "DataTable", "Next.js", "React", "TypeScript", "Tailwind CSS"],
                role: "career.ocube.lats.role"
            },
            {
                title: "LG thinkQ App Petcare",
                period: "2022.12 ~ 2023.03",
                tech: ["React", "TypeScript"],
                role: "frontend"
            },
            {
                title: "LG Super Sign Cloud",
                period: "2024.07~2025.08",
                tech: ["React", "TypeScript"],
                role: "frontend"
            },
        ]
    },
    {
        company: "career.nas.company",
        period: "2021.09 ~ 2022.01",
        projects: [
            {
                title: "career.nas.nurse",
                period: "2021.11~2021.11",
                tech: ["HTML", "CSS", "JavaScript"],
                role: "publishing",
                site: "https://nasnurse.com/"
            },
            {
                title: "career.nas.education",
                period: "2021.12~2022.12",
                tech: ["HTML", "CSS", "JavaScript"],
                role: "publishing",
                site: "http://www.naslle.com/"
            }
        ]
    },
    {
        company: "career.joy.company",
        period: "2021.06 ~ 2021.08",
        projects: [
            {
                title: "career.joy.dasogot",
                period: "2021.06~2021.07",
                tech: ["HTML", "CSS", "JavaScript"],
                role: "publishing"
            },
            {
                title: "career.joy.brave",
                period: "2021.07~2021.08",
                tech: ["HTML", "CSS", "JavaScript"],
                role: "publishing",
                site: "https://bravemarket.co.kr/"
            }
        ]
    }
];

export const EDUCATIONS: EducationItem[] = [
    {
        school: "education.korea",
        period: "2021.08 ~ 2022.04",
        course: "education.korea.course"
    },
    {
        school: "education.green",
        period: "2020.03 ~ 2020.07",
        course: "education.green.course"
    },
    {
        school: "education.university",
        period: "2012.03 ~ 2017.07",
        course: "education.university.course"
    }
];

export const LICENSES: string[] = [
    "license.jlpt",
    "license.computer",
    "license.design",
    "license.graphics",
];

export const TOY_PROJECTS: ToyProject[] = [
    {
        title: "project.jlpt",
        period: "2024.04.01 ~ 2024.04.20",
        techFront: "React, TypeScript, Next.js",
        techBack: "MongoDB",
        site: "https://jlptn1.vercel.app/",
        github: "https://github.com/helloyoogs/jlptn1",
        features: [
            "project.jlpt.features1",
            "project.jlpt.features2",
            "project.jlpt.features3",
        ],
        imageSrc: IG_JLPT,
        imageAlt: "jlpt"
    },
    {
        title: "project.heeyoung",
        period: "2023.05.01 ~ 2023.05.09",
        techFront: "React, TypeScript",
        site: "https://helloyoogs.github.io/heeyoung/",
        github: "https://github.com/helloyoogs/heeyoung",
        imageSrc: IG_HEEYOUNG,
        imageAlt: "heeyoung"
    },
    {
        title: "project.tving",
        period: "2023.04.01 ~ 2023.05.01",
        subtitle: "project.tving.description",
        techFront: "React, TypeScript",
        techBack:
            "Spring Boot, Java, JPA, Spring Security, JWT, RESTful API",
        techEtc: "Redis",
        video: "https://youtu.be/pCAG_vlBPzI",
        githubFront: "https://github.com/helloyoogs/tving_front",
        githubBack: "https://github.com/helloyoogs/tving_back",
        features: [
            "project.tving.features1",
            "project.tving.features2",
            "project.tving.features3",
            "project.tving.features4",
            "project.tving.features5",
            "project.tving.features6",
        ],
        imageSrc: IG_TVING,
        imageAlt: "tving"
    },
    {
        title: "project.njs",
        period: "2022.07.01 ~ 2022.08.01",
        techFront: "Vue",
        site: "https://helloyoogs.github.io/newjeans/#/",
        github: "https://github.com/helloyoogs/newjeans",
        imageSrc: IG_NEWJEANS,
        imageAlt: "newjeans"
    },
    {
        title: "project.hotel",
        period: "2022.04.05 ~ 2022.04.20",
        subtitle: "project.hotel.description",
        techFront: "HTML, CSS, JavaScript",
        techBack:
            "Spring Boot, Java, MyBatis, RESTful API, JSP",
        ppt: "/etc/hotel_reservation.pptx",
        github: "https://github.com/helloyoogs/shilla_all",
        imageSrc:IG_THE_SHILLA,
        imageAlt: "the shilla"
    },
    {
        title: "project.chanel",
        period: "2022.03.20 ~ 2022.04.05",
        subtitle: "project.chanel.description",
        techFront: "HTML, CSS, JavaScript, jQuery, Ajax",
        techBack: "Java, MyBatis, JSP",
        ppt: "/etc/shopping_mall.pptx",
        github: "https://github.com/helloyoogs/chanel",
        imageSrc: IG_CHANEL,
        imageAlt: "chanel"
    }
];