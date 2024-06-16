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
                            [ 자기소개서 ]
                        </p>
                        <p className={'popup_content_title'}>
                            정직하고 성실하며 겸손한 인재 육희영입니다.
                        </p>
                    </div>
                    <div className={'popup_content_text_box'}>
                        <p className={'popup_intro_box'}>
                            - 성공 경험<br />
                            8개월 정도 퍼블리셔로 근무하다가
                            학원에서 백엔드 개발자 수업을 전문적으로 받았지만 프론트엔드는 독학으로 공부한 것밖에 없어서
                            회사 초기 입사 시 프론트 엔드 업무가 처음 주어졌을 때는 어려웠습니다.
                            하지만 지금은 단독으로 토이 프로젝트를 react,vue,typescript 등으로 계속 만들어도 보고 회사의 선임분들에게도 적극적으로 물어보고
                            배우며 여러 프론트엔드 개발을 쌓으며 익숙해지게 되었고 지금은 회사에서 혼자서 LG의 여러 LATS 계열 프로젝트 프론트 개발을 혼자 맡을 만큼 성장하였습니다.
                        </p>
                        <p className={'popup_intro_box'}>
                            - 장단점 및 특기<br />
                            성격의 장점은 온화하고 평화로운 성격이라 사람들과 원만하게 지내고 정직, 성실, 겸손, 배우고자 하는 열정입니다.
                            그렇기에 어느 직장에서도 이쁨을 받아서 어느 곳에서도 항상 퇴사 이야기를 꺼낼 때 정말 감사하게도 붙잡았습니다.
                            또 본인이 맡은 일은 주인 의식을 가지고 일하기 때문에 보통은 작업 속도가 빨라 빨리 제출하지만, 업무량에 비해
                            기간이 짧아 기간 내에 제출이 힘든 경우도 야근해서라도 항상 클라이언트가 원하는 일정 내에 작업한 코드를 제출하였습니다.
                            저의 유일한 단점은 과민성 대장 증후군으로 차와 버스만 못 타는데 현재 다니고 있는 직장에서 감사하게도
                            그런 부분의 편의를 봐주셔서 회식 등 여러 가지가 있어도 지하철, 기차로 이동할 수 있거나 걸어서 갈 수 있는 거리로
                            항상 준비해 주셨습니다. 저의 단점을 고치고 싶어서 현재 당장은 거의 매일 40분 이상 유산소 운동을 하고 건강 식단을 섭취합니다.
                            그리고 운전 면허증은 있으니, 나중에 차량 연수를 받아서 본인이 차량 운전을 해서 극복하고 싶다고 생각하고 있습니다.
                            저의 특기는 일본어를 잘하는 것입니다. 일본어를 들어도 무슨 말인지 다 알 수 있어서 일본 라디오나 예능
                            등을 자막 없이 듣거나 보고 일본어 소설책도 원서 그대로 읽습니다. 매주 일본어 회화 수업을 30분 듣기 때문에 일본어 회화는
                            일상 회화 정도는 문제없이 가능합니다. 자기 계발을 좋아해서 일본어를 현지인만큼 할 수 있으면 다음에는 중국어와 영어를 습득할 예정입니다.

                        </p>
                        <p className={'popup_intro_box'}>
                            - 직무를 위한 준비<br />
                            직무를 위해 회사에서 프로젝트 작업하는 것 외에도 OTT 플랫폼 구독 서비스,
                            문제은행 사이트 등 여러 토이 프로젝트로 프론트 엔드와 백엔드 둘 다 꾸준히 공부하고 있습니다.
                            백엔드는 CRUD는 기본이고 카카오 API를 이용한 결제 영역 구글 API를 이용한 로그인 vercel 배포와
                            호스팅 사이트를 이용한 배포 등 여러 형태의 배포도 독학하였습니다.
                        </p>
                        <p className={'popup_intro_box'}>
                            - 지원 동기 및 입사 후 포부<br />
                            「천재는 노력하는 자를 이길 수 없고 노력하는 자는 즐기는 자를 이길 수 없다.」라는 말이 있습니다.
                            저는 천재는 아니지만 끊임없이 노력하고 일을 할 때 RPG게임의 퀘스트를 깨가듯이 즐겁게 합니다.
                            다른 사람들과 다르게 패션디자인과, 호텔리어, 웹 퍼블리셔로 여러 직업을 전전해 와서 개발자가 되었기에 다른 사람들에 비해 늦게 시작했지만
                            그렇게 여러 경험을 했기에 이 직업이 저에게 얼마나 적성에 맞고 소중한 직업인지 압니다. 여러 다양한 일을 겪었기에
                            그 누구보다 간절하고 누구보다 열심히 일하고 성실히 임할 자신이 있습니다.
                            입사시켜 주신다면 지박령처럼 회사에 오래 열심히 잘 일할 자신이 있습니다.
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
