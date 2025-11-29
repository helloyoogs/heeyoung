/*eslint-disable*/
import React from 'react';
import {useTranslation} from "react-i18next";
import {CAREERS, EDUCATIONS, LICENSES} from "../constants/common";

interface CareerComponentProps {
    isOpen: number
    setIsOpen: React.Dispatch<boolean>
}

const CareerComponent = ({ isOpen, setIsOpen }: CareerComponentProps) => {
    const { t } = useTranslation();
    const handleShowPopup = (openNumber: any) => () => {
        return setIsOpen(openNumber);
    }

    const RenderCareer = () => {
        return(
            <>
            {CAREERS.map((c, i) => (
                    <div key={i} className="popup_content_box">
                        <div className="popup_content_title_box">
                            <p className="popup_content_title">[ {c.company} ]</p>
                            <p className="popup_content_title">{c.period}</p>
                        </div>

                        {c.projects.map((p, idx) => (
                            <div key={idx} className="popup_content_text_box">
                                <p className="popup_content_text">
                                    {idx + 1}. {p.title}
                                    {p.period ? ` (${p.period})` : ""}
                                </p>
                                <p className="popup_content_text">
                                    - 기술스택 : {p.tech.join(", ")}
                                </p>
                                <p className="popup_content_text">- {p.role}</p>
                                {p.site && (
                                    <p className="popup_content_text">
                                        - 사이트 :{" "}
                                        <a href={p.site} target="_blank" rel="noreferrer">
                                            {p.site}
                                        </a>
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                ))}
            </>
        )
    }
    const RenderEducation = () => {
        return (
            <div className="popup_content_box">
                <div className="popup_content_title_box">
                    <p className="popup_content_title">[ 학력 및 교육 수료 과정 ]</p>
                </div>
                {EDUCATIONS.map((edu, i) => (
                    <div key={i} className="popup_content_text_box">
                        <p className="popup_content_text">
                            {edu.school} ({edu.period})
                        </p>
                        <p className="popup_content_text">- {edu.course}</p>
                    </div>
                ))}
            </div>
        )
    }
    const RenderLicense = () => {
        return (
            <div className="popup_content_box">
                <div className="popup_content_title_box">
                    <p className="popup_content_title">[ 자격증 ]</p>
                </div>

                <div className="popup_content_text_box">
                    {LICENSES.map((license, i) => (
                        <p key={i} className="popup_content_text">
                            - {license}
                        </p>
                    ))}
                </div>
            </div>
        )
    }
    return (
        <div className={'folder_popup'} style={{display: isOpen === 3 ? "block" : "none"}}>
            <div className={'popup_header'}>
                <div className={'popup_close'} role={'button'} onClick={handleShowPopup(null)}></div>
                <p>CAREER</p>
            </div>
            <div className="popup_content_wrap">
                {RenderCareer()}
                {RenderEducation()}
                {RenderLicense()}
            </div>
        </div>
    )
        ;
}

export default CareerComponent;
