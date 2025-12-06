import { ToyProject } from "../constants/type";
import {useTranslation} from "react-i18next";

interface ToyProjectCardProps {
    project: ToyProject;
}

const ToyProjectCard = ({ project }: ToyProjectCardProps) => {
    const {
        title,
        period,
        subtitle,
        techFront,
        techBack,
        techEtc,
        site,
        github,
        githubFront,
        githubBack,
        video,
        ppt,
        features,
        imageSrc,
        imageAlt,
    } = project;
    const { t } = useTranslation();
    const hasTech = techFront || techBack || techEtc;
    const hasLinks = site || github || githubFront || githubBack || video || ppt;

    return (
        <div className="popup_content_box">
            <div className="popup_content_title_box">
                <p className="popup_content_title">[ {t("toy")} ]</p>
                <p className="popup_content_title">{t(title)}</p>
                <p className="popup_content_title">{period}</p>
            </div>

            {subtitle && (
                <div className="popup_content_text_box">
                    <p className="popup_content_text">{t(subtitle)}</p>
                </div>
            )}

            {hasTech && (
                <div className="popup_content_text_box">
                    <p className="popup_content_text">{t("tech.stack")} :</p>
                    {techFront && <p className="popup_content_text">- FRONT : {techFront}</p>}
                    {techBack && <p className="popup_content_text">- BACK : {techBack}</p>}
                    {techEtc && <p className="popup_content_text">- ETC : {techEtc}</p>}
                </div>
            )}

            {hasLinks && (
                <div className="popup_content_text_box">
                    {site && (
                        <p className="popup_content_text">
                            {t("site")} :
                            <a href={site} target="_blank" rel="noreferrer"> {site}</a>
                        </p>
                    )}

                    {github && (
                        <p className="popup_content_text">
                            Github :
                            <a href={github} target="_blank" rel="noreferrer"> {github}</a>
                        </p>
                    )}

                    {githubFront && (
                        <p className="popup_content_text">
                            Github (FRONT) :
                            <a href={githubFront} target="_blank" rel="noreferrer"> {githubFront}</a>
                        </p>
                    )}

                    {githubBack && (
                        <p className="popup_content_text">
                            Github (BACK) :
                            <a href={githubBack} target="_blank" rel="noreferrer"> {githubBack}</a>
                        </p>
                    )}

                    {video && (
                        <p className="popup_content_text">
                            {t("video")} :
                            <a href={video} target="_blank" rel="noreferrer"> {video}</a>
                        </p>
                    )}

                    {ppt && (
                        <p className="popup_content_text">
                            {t("ppt")} :
                            <a href={ppt} download> {ppt.split("/").pop()}</a>
                        </p>
                    )}
                </div>
            )}

            {features && features.length > 0 && (
                <div className="popup_content_text_box">
                    <p className="popup_content_text">{t("features")} :</p>
                    {features.map((f, idx) => (
                        <p key={idx} className="popup_content_text">- {t(f)}</p>
                    ))}
                </div>
            )}

            <div className="popup_content_img">
                <img src={imageSrc} alt={imageAlt} />
            </div>
        </div>
    );
};

export default ToyProjectCard;
