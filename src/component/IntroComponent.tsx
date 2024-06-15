/*eslint-disable*/
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareJs } from "@fortawesome/free-brands-svg-icons";
import { faJava } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faVuejs } from "@fortawesome/free-brands-svg-icons";
import { faGitAlt } from "@fortawesome/free-brands-svg-icons";
import heeyoung_profile_img from '../img/heeyoung_profile_img.jpg';

interface IntroComponentProps {
    isOpen: number
    setIsOpen: React.Dispatch<boolean>
}

const IntroComponent = ({ isOpen, setIsOpen }: IntroComponentProps) => {
    const handleShowPopup = (openNumber: any) => () => {
        return setIsOpen(openNumber);
    }
    const languages = [
        { name: 'Java', icon: faJava },
        { name: 'Redis', icon: null },
        { name: 'Spring', icon: null },
        { name: 'Oracle', icon: null },
        { name: 'Mysql', icon: null },
        { name: 'Mariadb', icon: null },
        { name: 'Javascript', icon: faSquareJs },
        { name: 'React', icon: faReact },
        { name: 'Vue', icon: faVuejs },
        { name: 'Typescript', icon: null },
        { name: 'Tailwind', icon: null },
        { name: 'Git', icon: faGitAlt }
    ];
    return (
        <div className={'folder_popup'} style={{ display: isOpen === 1 ? "block" : "none" }}>
            <div className={'popup_header'}>
                <div className={'popup_close'} role={'button'} onClick={handleShowPopup(null)}></div>
                <p>INTRO</p>
            </div>
            <div className={'popup_content_wrap'}>
                {/* 육희영  사용하는 언어 */}
                <div className={'popup_content_box'}>
                    <div className={'popup_content_title_box'}>
                        <p className={'popup_content_title'}>
                            [ Skills and Languages ]
                        </p></div>
                    <div className={'popup_content_text_box'}>
                        <div className={'Language_wrap_box'}>
                            {languages.map((language, index) => (
                                <div className={'Language_box'} key={index}>
                                    {language.icon && <FontAwesomeIcon icon={language.icon} />}
                                    <p className={'Language_title'}>{language.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* 육희영 소개 */}
                <div className={'popup_content_box'}>
                    <div className={'popup_content_title_box'}>
                        <p className={'popup_content_title'}>
                            [ 육희영 소개 ]
                        </p></div>
                    <div className={'popup_content_text_box'}>
                        <p className={'popup_content_text'}>
                            - 프론트엔드는 그동안 퍼블리싱과 프론트엔드 경험으로 다져져 자신있습니다.
                        </p>
                        <p className={'popup_content_text'}>
                            - 백엔드는 업무경험은 없으나 여러 프로젝트를 제작해왔기에 잘해낼 자신이 있습니다.
                        </p>
                    </div>
                    <div className={'popup_content_img'}>
                        <img src={heeyoung_profile_img} alt={'heeyoung_profile_img'} />
                    </div>
                </div>
            </div>
        </div>
    )
        ;
}

export default IntroComponent;
