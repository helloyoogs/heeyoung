/*eslint-disable*/
import React, {useRef, useState} from 'react';
import './MainComponent.css';
import popupClose from '../img/btn-folder-close.png';
import velog from '../img/velog_logo_icon.png';
import github from '../img/github_icon_white.png';
import tving from '../img/tving.png';
import newjeans from '../img/newjeans.png';
import heeyoung from '../img/heeyoung.png';
import the_shilla from '../img/the_shilla.png';
import chanel from '../img/chanel.png';
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
                    <a href={"https://github.com/helloyoogs?tab=repositories"} target={"_blank"}> <img src={velog}
                                                                                                       alt={"velog_icon"}/></a>
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
                    <div className={'popup_content_wrap'}>
                        <div className={'popup_content_box'}>
                            <p className={'popup_content_title'}></p>
                            <p className={'popup_content_text'}></p>
                            <div className={'popup_content_img'}>

                            </div>
                        </div>
                    </div>
                </div>
                <div className={'folder_popup'} style={{display: isOpen === 2 ? "block" : "none"}}>
                    <div className={'popup_header'}>
                        <div className={'popup_close'} role={'button'} onClick={handleShowPopup(null)}></div>
                        <p>PROJECT</p>
                    </div>
                    <div className={'popup_content_wrap'}>
                        {/* 소개사이트 */}
                        <div className={'popup_content_box'}>
                            <div className={'popup_content_title_box'}>
                                <p className={'popup_content_title'}>
                                    [ 토이 프로젝트 ]
                                </p>
                                <p className={'popup_content_title'}>
                                    육희영 소개 페이지
                                </p></div>
                            <div className={'popup_content_text_box'}>
                                <p className={'popup_content_text'}>
                                    제작기간 : 2023.05.01 ~ 2023.05.10
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
                                       href="https://helloyoogs.github.io/newjeans/#/"> https://helloyoogs.github.io/newjeans/#/</a>
                                </p>
                                <p className={'popup_content_text'}>
                                    Github : <a target="_blink"
                                                href="https://github.com/helloyoogs/heeyoung"> https://github.com/helloyoogs/heeyoung</a>
                                </p>
                            </div>
                            <div className={'popup_content_img'}>
                                <img src={heeyoung} alt={'heeyoung'}/>
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
                                </p></div>
                            <div className={'popup_content_text_box'}>
                                <p className={'popup_content_text'}>
                                    넷플릭스,티빙같은 구독 플랫폼 웹 사이트 제작
                                </p>
                            </div>
                            <div className={'popup_content_text_box'}>
                                <p className={'popup_content_text'}>
                                    제작기간 : 2023.04.01 ~ 2023.05.01
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
                                <img src={tving} alt={'tving'}/>
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
                                </p></div>
                            <div className={'popup_content_text_box'}>
                                <p className={'popup_content_text'}>
                                    제작기간 : 2022.07.01 ~ 2022.08.01
                                </p>
                            </div>
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
                                <img src={newjeans} alt={'newjeans'}/>
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
                                </p></div>
                            <div className={'popup_content_text_box'}>
                                <p className={'popup_content_text'}>
                                    신라 호텔, 아고다같은 호텔 예약 웹 사이트 제작
                                </p>
                            </div>
                            <div className={'popup_content_text_box'}>
                                <p className={'popup_content_text'}>
                                    제작기간 : 2022.04.05 ~ 2022.04.20
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
                                <img src={the_shilla} alt={'the_shilla'}/>
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
                                </p></div>
                            <div className={'popup_content_text_box'}>
                                <p className={'popup_content_text'}>
                                    샤넬, 버버리같은 쇼핑몰 사이트 웹 사이트 제작
                                </p>
                            </div>
                            <div className={'popup_content_text_box'}>
                                <p className={'popup_content_text'}>
                                    제작기간 : 2022.03.20 ~ 2022.04.05
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
                                <img src={chanel} alt={'chanel'}/>
                            </div>
                        </div>
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
