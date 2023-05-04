/*eslint-disable*/
import React, {useRef, useState} from 'react';
import './MainComponent.css';
import popupClose from '../img/btn-folder-close.png';
import velog from '../img/velog_logo_icon.png';
import github from '../img/github_icon_white.png';


const MainComponent = () => {
    const [isOpen, setIsOpen]: any = useState(null);
    const handleShowPopup = (openNumber: any) => () => {
        return setIsOpen(openNumber);
    }
    return (
        <div className="main_component">
            <video muted autoPlay loop className={'bg_video'}>
                <source src="/video/nj_bg2023_24fps.mp4" type="video/mp4"/>
            </video>
            <div className={'main_wrap_box'}>
                <div className={'site_title_box'}>
                    <p className={'site_title'}>HEE YOUNG</p>
                    <a href={"https://velog.io/@helloyoogs/series/%ED%9A%8C%EA%B3%A0%EB%A1%9D"} target={"_blank"}><img
                        src={github}
                        alt={"github_icon"}/></a>
                    <a href={"https://github.com/helloyoogs?tab=repositories"} target={"_blank"}> <img src={velog} alt={"velog_icon"}/></a>
                </div>


                <div className={'folder_wrap'}>
                    <div className={'folder'} onClick={handleShowPopup(1)}>
                        <div className={'folder_img'}></div>
                        <p>INTRO</p> {/* 소개 */}
                    </div>
                    <div className={'folder'} onClick={handleShowPopup(2)}>
                        <div className={'folder_img'}></div>
                        <p>PROJECT</p> {/* 프로젝트 */}
                    </div>
                    <div className={'folder'} onClick={handleShowPopup(3)}>
                        <div className={'folder_img'}></div>
                        <p>CAREER</p>  {/* 경력 */}
                    </div>
                </div>
                <div className={'folder_popup'} style={{display: isOpen === 1 ? "block" : "none"}}>
                    <div className={'popup_header'}>
                        <div className={'popup_close'} role={'button'} onClick={handleShowPopup(null)}></div>
                        <p>INTRO</p>
                    </div>
                </div>
                <div className={'folder_popup'} style={{display: isOpen === 2 ? "block" : "none"}}>
                    <div className={'popup_header'}>
                        <div className={'popup_close'} role={'button'} onClick={handleShowPopup(null)}></div>
                        <p>PROJECT</p>
                    </div>
                </div>
                <div className={'folder_popup'} style={{display: isOpen === 3 ? "block" : "none"}}>
                    <div className={'popup_header'}>
                        <div className={'popup_close'} role={'button'} onClick={handleShowPopup(null)}></div>

                        <p>CAREER</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainComponent;
