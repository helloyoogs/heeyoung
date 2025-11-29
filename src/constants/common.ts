import {CareerItem, EducationItem} from "./type";

export const CAREERS: CareerItem[] = [
    {
        company: "오큐브㈜ (AI개발팀 사원)",
        period: "2022.09 - 재직중",
        projects: [
            {
                title: "LG LATS ThermaV",
                tech: ["HTML", "CSS", "JavaScript"],
                role: "퍼블리싱 및 유지보수"
            },
            {
                title: "LG thinkQ App Petcare",
                period: "2022.12~2023.03",
                tech: ["React", "TypeScript"],
                role: "Frontend 개발"
            },
            {
                title: "LG LATS Energy Lab",
                tech: ["HTML", "CSS", "JavaScript"],
                role: "유지보수"
            },
            {
                title: "LG LATS LCC WEB",
                tech: ["HTML", "CSS", "JavaScript"],
                role: "퍼블리싱 및 유지보수"
            },
            {
                title: "LG LATS CFD REQUEST",
                tech: ["HTML", "CSS", "JavaScript"],
                role: "퍼블리싱 및 유지보수"
            },
            {
                title: "LG Lats Vent",
                tech: ["React", "TypeScript", "Tailwind"],
                role: "Frontend 개발 및 유지보수"
            },
            {
                title: "LG Lats RRC",
                tech: ["React", "TypeScript", "Tailwind"],
                role: "Frontend 개발 및 유지보수"
            },
            {
                title: "LG Lats Noise Simulator",
                tech: ["React", "TypeScript", "Tailwind"],
                role: "Frontend 개발 및 유지보수"
            },
            {
                title: "LG Lats Load Web",
                tech: ["React", "TypeScript", "Tailwind"],
                role: "Frontend 개발 및 유지보수"
            }
        ]
    },
    {
        company: "나스(NAS)간호학원 (퍼블리셔)",
        period: "2021.09 ~ 2022.01",
        projects: [
            {
                title: "나스간호학원",
                period: "2021.11~2021.11",
                tech: ["HTML", "CSS", "JavaScript"],
                role: "퍼블리싱",
                site: "https://nasnurse.com/"
            },
            {
                title: "나스평생교육원",
                period: "2021.12~2022.12",
                tech: ["HTML", "CSS", "JavaScript"],
                role: "퍼블리싱",
                site: "http://www.naslle.com/"
            }
        ]
    },
    {
        company: "㈜조이컴퍼니 (퍼블리셔)",
        period: "2021.06 ~ 2021.08",
        projects: [
            {
                title: "다소곳 농수산물 사이트",
                period: "2021.06~2021.07",
                tech: ["HTML", "CSS", "JavaScript"],
                role: "퍼블리싱"
            },
            {
                title: "브레이브마켓",
                period: "2021.07~2021.08",
                tech: ["HTML", "CSS", "JavaScript"],
                role: "퍼블리싱",
                site: "https://bravemarket.co.kr/"
            }
        ]
    }
];

export const EDUCATIONS: EducationItem[] = [
    {
        school: "코리아IT아카데미",
        period: "2021.08 ~ 2022.04",
        course: "백엔드 개발자 양성 과정 수료"
    },
    {
        school: "그린컴퓨터디자인학원",
        period: "2020.03 ~ 2020.07",
        course: "웹 퍼블리셔 국비 과정 수료"
    },
    {
        school: "중부대학교",
        period: "2012.03 ~ 2017.07",
        course: "패션디자인과 졸업"
    }
];

export const LICENSES: string[] = [
    "일본어능력시험(JLPT)2급",
    "컴퓨터활용능력2급",
    "웹디자인기능사",
    "컴퓨터그래픽스운용기능사"
];
