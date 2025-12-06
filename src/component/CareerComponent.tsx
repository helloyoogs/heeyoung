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
                            <p className="popup_content_title">[ {t(c.company)} ]</p>
                            <p className="popup_content_title">{c.period}</p>
                        </div>

                        {c.projects.map((p, idx) => (
                            <div key={idx} className="popup_content_text_box">
                                <p className="popup_content_text">
                                    {idx + 1}. {t(p.title)}
                                    ({t(p.period)})
                                </p>
                                <p className="popup_content_text">
                                    - {t("tech.stack")} : {p.tech.join(", ")}
                                </p>
                                <p className="popup_content_text">- {t(p.role)}</p>
                                {p.site && (
                                    <p className="popup_content_text">
                                        - {t("site")} :{" "}
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
                    <p className="popup_content_title">[ {t('education.title')} ]</p>
                </div>
                {EDUCATIONS.map((edu, i) => (
                    <div key={i} className="popup_content_text_box">
                        <p className="popup_content_text">
                            {t(edu.school)} ({edu.period})
                        </p>
                        <p className="popup_content_text">- {t(edu.course)}</p>
                    </div>
                ))}
            </div>
        )
    }
    const RenderLicense = () => {
        return (
            <div className="popup_content_box">
                <div className="popup_content_title_box">
                    <p className="popup_content_title">[ {t('license.title')} ]</p>
                </div>

                <div className="popup_content_text_box">
                    {LICENSES.map((license, i) => (
                        <p key={i} className="popup_content_text">
                            - {t(license)}
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
