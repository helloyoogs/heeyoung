/*eslint-disable*/
import React, {useState} from 'react';
import './MainComponent.css';
import velog from '../img/velog_logo_icon.png';
import github from '../img/github_icon_white.png';
import ProjectComponent from './ProjectComponent';
import CareerComponent from './CareerComponent';
import i18n from "i18next";

type LangCode = "ko" | "ja";

const MainComponent = () => {
    const [isOpen, setIsOpen]: any = useState(null);
    const handleShowPopup = (openNumber: any) => () => {
        return setIsOpen(openNumber);
    }
    const changeLanguage = (lang:LangCode) => {
        i18n.changeLanguage(lang);
    };
    return (
        <div className="main_component">
            <video muted autoPlay loop className={'bg_video pc'}>
                <source src={process.env.PUBLIC_URL + "/video/nj_bg2023_24fps.mp4"} type="video/mp4"/>
            </video>
            <video muted autoPlay loop className={'bg_video mobile'}>
                <source src={process.env.PUBLIC_URL + "/video/nj_bg2023_24fps_mobile.mp4"} type="video/mp4"/>
            </video>
            <div className={'main_wrap_box'}>
                <div className={'site_title_container'}>
                    <div className={'site_title_box'}>
                        <p className={'site_title'}>HEE YOUNG</p>
                        <a href={"https://github.com/helloyoogs?tab=repositories"} target={"_blank"}><img
                            src={github}
                            alt={"github_icon"}/></a>
                        <a href={"https://velog.io/@helloyoogs/series/%ED%9A%8C%EA%B3%A0%EB%A1%9D"} target={"_blank"}>
                            <img
                                src={velog}
                                alt={"velog_icon"}/></a>
                    </div>
                    <div className={"site_title_box"}>
                        {i18n.language === "ja"?
                        <button
                            className={"lang_select"}
                            onClick={() => changeLanguage("ko")}
                        >
                            KR
                        </button>
                        :
                        <button
                            className={"lang_select"}
                            onClick={() => changeLanguage("ja")}
                        >
                            JP
                        </button>
                        }
                    </div>
                </div>
                <div className={'folder_wrap'}>
                    <div className={'folder'} onClick={handleShowPopup(2)}>
                        <div className={'folder_img'}></div>
                        <p>PROJECT</p> {/* 프로젝트 */}
                    </div>
                    <div className={'folder'} onClick={handleShowPopup(3)}>
                        <div className={'folder_img'}></div>
                        <p>CAREER</p>  {/* 경력 */}
                    </div>
                </div>

                {/* PROJECT */}
                <ProjectComponent isOpen={isOpen} setIsOpen={setIsOpen}/>
                {/* CAREER */}
                <CareerComponent isOpen={isOpen} setIsOpen={setIsOpen}/>
            </div>
        </div>
    )
        ;
}

export default MainComponent;
