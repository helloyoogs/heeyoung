import {CareerItem, EducationItem, ToyProject} from "./type";
import {useTranslation} from "react-i18next";

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

export const TOY_PROJECTS: ToyProject[] = [
    {
        title: "일본어 능력 시험 문제은행 사이트",
        period: "2024.04.01 ~ 2024.04.20",
        techFront: "React, TypeScript, Next.js",
        techBack: "MongoDB",
        site: "https://jlptn1.vercel.app/",
        github: "https://github.com/helloyoogs/jlptn1",
        features: [
            "구글 로그인, 구글 로그아웃, 구글 회원가입",
            "응시하기, 문제 제출 하기, 문제 임시 저장하기, 푼 문제 수정하기",
            "시험 결과 확인하기, 문제 다시풀기, 틀린 문제 풀기"
        ],
        imageSrc: "/heeyoung/static/media/jlpt.9267dc4fb4aa225fad3a.png",
        imageAlt: "jlpt"
    },
    {
        title: "육희영 소개 페이지",
        period: "2023.05.01 ~ 2023.05.09",
        techFront: "React, TypeScript",
        site: "https://helloyoogs.github.io/heeyoung/",
        github: "https://github.com/helloyoogs/heeyoung",
        imageSrc: "/heeyoung/static/media/heeyoung.7161e023142dc9a96411.png",
        imageAlt: "heeyoung"
    },
    {
        title: "구독 서비스 플랫폼",
        period: "2023.04.01 ~ 2023.05.01",
        subtitle: "넷플릭스,티빙같은 구독 플랫폼 웹 사이트 제작",
        techFront: "React, TypeScript",
        techBack:
            "Spring Boot, Java, JPA, Spring Security, JWT, RESTful API",
        techEtc: "Redis",
        video: "https://youtu.be/pCAG_vlBPzI",
        githubFront: "https://github.com/helloyoogs/tving_front",
        githubBack: "https://github.com/helloyoogs/tving_back",
        features: [
            "로그인, 로그아웃, 회원가입",
            "구독 상품 결제, 업그레이드, 다운그레이드",
            "구독 및 정기 결제 취소 및 재시작",
            "구독 상품 및 다음 달 구독 상품 조회",
            "이용 내역 조회",
            "찜기능, 찜한 내역 조회"
        ],
        imageSrc: "/heeyoung/static/media/tving.d472f5f53bc59ad31084.png",
        imageAlt: "tving"
    },
    {
        title: "가수 뉴진스 소개 페이지",
        period: "2022.07.01 ~ 2022.08.01",
        techFront: "Vue",
        site: "https://helloyoogs.github.io/newjeans/#/",
        github: "https://github.com/helloyoogs/newjeans",
        imageSrc: "/heeyoung/static/media/newjeans.1c0de5f588ef3d4c2593.png",
        imageAlt: "newjeans"
    },
    {
        title: "호텔 예약 사이트",
        period: "2022.04.05 ~ 2022.04.20",
        subtitle: "신라 호텔, 아고다같은 호텔 예약 웹 사이트 제작",
        techFront: "HTML, CSS, JavaScript",
        techBack:
            "Spring Boot, Java, MyBatis, RESTful API, JSP",
        ppt: "/etc/hotel_reservation.pptx",
        github: "https://github.com/helloyoogs/shilla_all",
        imageSrc: "/heeyoung/static/media/the_shilla.1804124324ae7f6e8bb1.png",
        imageAlt: "the_shilla"
    },
    {
        title: "샤넬 쇼핑몰 사이트",
        period: "2022.03.20 ~ 2022.04.05",
        subtitle: "샤넬, 버버리같은 쇼핑몰 사이트 웹 사이트 제작",
        techFront: "HTML, CSS, JavaScript, jQuery, Ajax",
        techBack: "Java, MyBatis, JSP",
        ppt: "/etc/shopping_mall.pptx",
        github: "https://github.com/helloyoogs/chanel",
        imageSrc: "/heeyoung/static/media/chanel.98835d062975366dfbb6.png",
        imageAlt: "chanel"
    }
];