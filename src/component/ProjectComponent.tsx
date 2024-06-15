/*eslint-disable*/
import React from 'react';
import tving from '../img/tving.png';
import newjeans from '../img/newjeans.png';
import heeyoung from '../img/heeyoung.png';
import the_shilla from '../img/the_shilla.png';
import jlpt from '../img/jlpt.png';
import chanel from '../img/chanel.png';

interface ProjectComponentProps {
    isOpen: number
    setIsOpen: React.Dispatch<boolean>
}

const ProjectComponent = ({ isOpen, setIsOpen }: ProjectComponentProps) => {
    const handleShowPopup = (openNumber: any) => () => {
        return setIsOpen(openNumber);
    }
    return (
        <div className={'folder_popup'} style={{ display: isOpen === 2 ? "block" : "none" }}>
            <div className={'popup_header'}>
                <div className={'popup_close'} role={'button'} onClick={handleShowPopup(null)}></div>
                <p>PROJECT</p>
            </div>
            <div className={'popup_content_wrap'}>
                {/* jlpt 문제 은행 */}
                <div className={'popup_content_box'}>
                    <div className={'popup_content_title_box'}>
                        <p className={'popup_content_title'}>
                            [ 토이 프로젝트 ]
                        </p>
                        <p className={'popup_content_title'}>
                            일본어 능력 시험 문제은행 사이트
                        </p>
                        <p className={'popup_content_title'}>
                            2024.04.01 ~ 2023.04.20
                        </p>
                    </div>
                    <div className={'popup_content_text_box'}>
                        <p className={'popup_content_text'}>
                            기술스택 :
                        </p>
                        <p className={'popup_content_text'}>
                            - FRONT : React, Typescript, Next.js
                        </p>
                        <p className={'popup_content_text'}>
                            - BACK : mongoDB
                        </p>
                    </div>
                    <div className={'popup_content_text_box'}>
                        <p className={'popup_content_text'}>
                            사이트 :
                            <a target="_blink"
                                href="https://jlptn1.vercel.app/"> https://jlptn1.vercel.app/</a>
                        </p>
                        <p className={'popup_content_text'}>
                            Github : <a target="_blink"
                                href="https://github.com/helloyoogs/jlptn1"> https://github.com/helloyoogs/jlptn1</a>
                        </p>
                    </div>
                    <div className={'popup_content_text_box'}>
                        <p className={'popup_content_text'}>
                            구현 기능 :
                        </p>
                        <p className={'popup_content_text'}>
                            - 구글 로그인, 구글 로그아웃, 구글 회원가입
                        </p>
                        <p className={'popup_content_text'}>
                            - 응시하기, 문제 제출 하기, 문제 임시 저장하기, 푼 문제 수정하기
                        </p>
                        <p className={'popup_content_text'}>
                            - 시험 결과 확인하기, 문제 다시풀기, 틀린 문제 풀기
                        </p>
                    </div>
                    <div className={'popup_content_img'}>
                        <img src={jlpt} alt={'jlpt'} />
                    </div>
                </div>
                {/* 소개사이트 */}
                <div className={'popup_content_box'}>
                    <div className={'popup_content_title_box'}>
                        <p className={'popup_content_title'}>
                            [ 토이 프로젝트 ]
                        </p>
                        <p className={'popup_content_title'}>
                            육희영 소개 페이지
                        </p>
                        <p className={'popup_content_title'}>
                            2023.05.01 ~ 2023.05.09
                        </p>
                    </div>
                    <div className={'popup_content_text_box'}>
                        <p className={'popup_content_text'}>
                            기술스택 : React, TypeScript
                        </p>
                    </div>
                    <div className={'popup_content_text_box'}>
                        <p className={'popup_content_text'}>
                            사이트 :
                            <a target="_blink"
                                href="https://helloyoogs.github.io/heeyoung/"> https://helloyoogs.github.io/heeyoung/</a>
                        </p>
                        <p className={'popup_content_text'}>
                            Github : <a target="_blink"
                                href="https://github.com/helloyoogs/heeyoung"> https://github.com/helloyoogs/heeyoung</a>
                        </p>
                    </div>
                    <div className={'popup_content_img'}>
                        <img src={heeyoung} alt={'heeyoung'} />
                    </div>
                </div>
                {/* 티빙 */}
                <div className={'popup_content_box'}>
                    <div className={'popup_content_title_box'}>
                        <p className={'popup_content_title'}>
                            [ 토이 프로젝트 ]
                        </p>
                        <p className={'popup_content_title'}>
                            구독 서비스 플랫폼
                        </p>
                        <p className={'popup_content_title'}>
                            2023.04.01 ~ 2023.05.01
                        </p></div>
                    <div className={'popup_content_text_box'}>
                        <p className={'popup_content_text'}>
                            넷플릭스,티빙같은 구독 플랫폼 웹 사이트 제작
                        </p>
                    </div>
                    <div className={'popup_content_text_box'}>
                        <p className={'popup_content_text'}>
                            기술스택 :
                        </p>
                        <p className={'popup_content_text'}>
                            - FRONT : React, Typescript
                        </p>
                        <p className={'popup_content_text'}>
                            - BACK : Spring Boot, JAVA, Jpa, Spring Security, JWT, RESTful API
                        </p>
                        <p className={'popup_content_text'}>
                            - ETC : Redis
                        </p>
                    </div>
                    <div className={'popup_content_text_box'}>
                        <p className={'popup_content_text'}>
                            구현 기능 :
                        </p>
                        <p className={'popup_content_text'}>
                            - 로그인, 로그아웃, 회원가입
                        </p>
                        <p className={'popup_content_text'}>
                            - 구독 상품 결제, 업그레이드, 다운그레이드
                        </p>
                        <p className={'popup_content_text'}>
                            - 구독 및 정기 결제 취소 및 재시작
                        </p>
                        <p className={'popup_content_text'}>
                            - 구독 상품 및 다음 달 구독 상품 조회
                        </p>
                        <p className={'popup_content_text'}>
                            - 이용 내역 조회
                        </p>
                        <p className={'popup_content_text'}>
                            - 찜기능, 찜한 내역 조회
                        </p>
                    </div>
                    <div className={'popup_content_text_box'}>
                        <p className={'popup_content_text'}>
                            시현 영상 :
                            <a target="_blink"
                                href="https://youtu.be/pCAG_vlBPzI"> https://youtu.be/pCAG_vlBPzI</a>
                        </p>
                        <p className={'popup_content_text'}>
                            Github :
                        </p>
                        <p className={'popup_content_text'}>
                            - FRONT : <a target="_blink"
                                href="https://github.com/helloyoogs/tving_front"> https://github.com/helloyoogs/tving_front</a>
                        </p>
                        <p className={'popup_content_text'}>
                            - BACK : <a target="_blink"
                                href="https://github.com/helloyoogs/tving_back"> https://github.com/helloyoogs/tving_back</a>
                        </p>
                    </div>
                    <div className={'popup_content_img'}>
                        <img src={tving} alt={'tving'} />
                    </div>
                </div>
                {/* 뉴진스 */}
                <div className={'popup_content_box'}>
                    <div className={'popup_content_title_box'}>
                        <p className={'popup_content_title'}>
                            [ 토이 프로젝트 ]
                        </p>
                        <p className={'popup_content_title'}>
                            가수 뉴진스 소개 페이지
                        </p>
                        <p className={'popup_content_title'}>
                            2022.07.01 ~ 2022.08.01
                        </p></div>
                    <div className={'popup_content_text_box'}>
                        <p className={'popup_content_text'}>
                            기술스택 : Vue
                        </p>
                    </div>
                    <div className={'popup_content_text_box'}>
                        <p className={'popup_content_text'}>
                            사이트 :
                            <a target="_blink"
                                href="https://helloyoogs.github.io/newjeans/#/"> https://helloyoogs.github.io/newjeans/#/</a>
                        </p>
                        <p className={'popup_content_text'}>
                            Github : <a target="_blink"
                                href="https://github.com/helloyoogs/newjeans"> https://github.com/helloyoogs/newjeans</a>
                        </p>
                    </div>
                    <div className={'popup_content_img'}>
                        <img src={newjeans} alt={'newjeans'} />
                    </div>
                </div>
                {/* 호텔 예약 사이트 */}
                <div className={'popup_content_box'}>
                    <div className={'popup_content_title_box'}>
                        <p className={'popup_content_title'}>
                            [ 토이 프로젝트 ]
                        </p>
                        <p className={'popup_content_title'}>
                            호텔 예약 사이트
                        </p>
                        <p className={'popup_content_title'}>
                            2022.04.05 ~ 2022.04.20
                        </p></div>
                    <div className={'popup_content_text_box'}>
                        <p className={'popup_content_text'}>
                            신라 호텔, 아고다같은 호텔 예약 웹 사이트 제작
                        </p>
                    </div>
                    <div className={'popup_content_text_box'}>
                        <p className={'popup_content_text'}>
                            기술스택 :
                        </p>
                        <p className={'popup_content_text'}>
                            - FRONT : Html, Css, Javascript
                        </p>
                        <p className={'popup_content_text'}>
                            - BACK : Spring Boot, JAVA, MyBatis, RESTful API, Jsp
                        </p>
                    </div>
                    <div className={'popup_content_text_box'}>
                        <p className={'popup_content_text'}>
                            설명 PPT :
                            <a href="/etc/hotel_reservation.pptx" download> hotel_reservation.pptx</a>
                        </p>
                        <p className={'popup_content_text'}>
                            Github : <a target="_blink"
                                href="https://github.com/helloyoogs/shilla_all"> https://github.com/helloyoogs/shilla_all</a>
                        </p>
                    </div>
                    <div className={'popup_content_img'}>
                        <img src={the_shilla} alt={'the_shilla'} />
                    </div>
                </div>
                {/* 샤넬 쇼핑몰 사이트 */}
                <div className={'popup_content_box'}>
                    <div className={'popup_content_title_box'}>
                        <p className={'popup_content_title'}>
                            [ 토이 프로젝트 ]
                        </p>
                        <p className={'popup_content_title'}>
                            샤넬 쇼핑몰 사이트
                        </p>
                        <p className={'popup_content_title'}>
                            2022.03.20 ~ 2022.04.05
                        </p></div>
                    <div className={'popup_content_text_box'}>
                        <p className={'popup_content_text'}>
                            샤넬, 버버리같은 쇼핑몰 사이트 웹 사이트 제작
                        </p>
                    </div>
                    <div className={'popup_content_text_box'}>
                        <p className={'popup_content_text'}>
                            기술스택 :
                        </p>
                        <p className={'popup_content_text'}>
                            - FRONT : Html, Css, Javascript, Jquery, Ajax
                        </p>
                        <p className={'popup_content_text'}>
                            - BACK : JAVA, MyBatis, Jsp
                        </p>
                    </div>
                    <div className={'popup_content_text_box'}>
                        <p className={'popup_content_text'}>
                            설명 PPT :
                            <a href="/etc/shopping_mall.pptx" download> shopping_mall.pptx</a>
                        </p>
                        <p className={'popup_content_text'}>
                            Github : <a target="_blink"
                                href="https://github.com/helloyoogs/chanel"> https://github.com/helloyoogs/chanel</a>
                        </p>
                    </div>
                    <div className={'popup_content_img'}>
                        <img src={chanel} alt={'chanel'} />
                    </div>
                </div>
            </div>
        </div>
    )
        ;
}

export default ProjectComponent;
