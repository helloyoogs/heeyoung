/*eslint-disable*/
import React, {useRef, useState} from 'react';
import './MainComponent.css';
import velog from '../img/velog_logo_icon.png';
import github from '../img/github_icon_white.png';
import tving from '../img/tving.png';
import newjeans from '../img/newjeans.png';
import heeyoung from '../img/heeyoung.png';
import the_shilla from '../img/the_shilla.png';
import chanel from '../img/chanel.png';
import heeyoung_profile_img from '../img/heeyoung_profile_img.jpg';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSquareJs} from "@fortawesome/free-brands-svg-icons";
import {faJava} from "@fortawesome/free-brands-svg-icons";
import {faReact} from "@fortawesome/free-brands-svg-icons";
import {faVuejs} from "@fortawesome/free-brands-svg-icons";
import {faGitAlt} from "@fortawesome/free-brands-svg-icons";


const MainComponent = () => {
    const [isOpen, setIsOpen]: any = useState(null);
    const handleShowPopup = (openNumber: any) => () => {
        return setIsOpen(openNumber);
    }
    return (
        <div className="main_component">
            <video muted autoPlay loop className={'bg_video'}>
                <source src={process.env.PUBLIC_URL+"/video/nj_bg2023_24fps.mp4"} type="video/mp4" />
            </video>
            <div className={'main_wrap_box'}>
                <div className={'site_title_box'}>
                    <p className={'site_title'}>HEE YOUNG</p>
                    <a href={"https://github.com/helloyoogs?tab=repositories"} target={"_blank"}><img
                        src={github}
                        alt={"github_icon"}/></a>
                    <a href={"https://velog.io/@helloyoogs/series/%ED%9A%8C%EA%B3%A0%EB%A1%9D"} target={"_blank"}> <img
                        src={velog}
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
                {/* INTRO */}
                <div className={'folder_popup'} style={{display: isOpen === 1 ? "block" : "none"}}>
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
                                    <div className={'Language_box'}>
                                        <FontAwesomeIcon icon={faJava}/>
                                        <p className={'Language_title'}>Java</p>
                                    </div>
                                    <div className={'Language_box'}>
                                        <p className={'Language_title'}>Redis</p>
                                    </div>
                                    <div className={'Language_box'}>
                                        <p className={'Language_title'}>Spring</p>
                                    </div>
                                    <div className={'Language_box'}>
                                        <p className={'Language_title'}>Oracle</p>
                                    </div>
                                    <div className={'Language_box'}>
                                        <p className={'Language_title'}>Mysql</p>
                                    </div>
                                    <div className={'Language_box'}>
                                        <p className={'Language_title'}>Mariadb</p>
                                    </div>
                                    <div className={'Language_box'}>
                                        <FontAwesomeIcon icon={faSquareJs}/>
                                        <p className={'Language_title'}>Javascript</p>
                                    </div>
                                    <div className={'Language_box'}>
                                        <FontAwesomeIcon icon={faReact}/>
                                        <p className={'Language_title'}>React</p>
                                    </div>
                                    <div className={'Language_box'}>
                                        <FontAwesomeIcon icon={faVuejs}/>
                                        <p className={'Language_title'}>Vue</p>
                                    </div>
                                    <div className={'Language_box'}>
                                        <p className={'Language_title'}>Typescript</p>
                                    </div>
                                    <div className={'Language_box'}>
                                        <FontAwesomeIcon icon={faGitAlt}/>
                                        <p className={'Language_title'}>Git</p>
                                    </div>
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
                                <p className={'popup_content_text'}>
                                    - 프론트엔드를 더 잘하지만 백엔드 개발자로 발돋움하고 싶습니다.
                                </p>
                            </div>
                            <div className={'popup_content_img'}>
                                <img src={heeyoung_profile_img} alt={'heeyoung_profile_img'}/>
                            </div>
                        </div>
                    </div>
                </div>
                {/* PROJECT */}
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
                                <img src={chanel} alt={'chanel'}/>
                            </div>
                        </div>
                    </div>
                </div>
                {/* CAREER */}
                <div className={'folder_popup'} style={{display: isOpen === 3 ? "block" : "none"}}>
                    <div className={'popup_header'}>
                        <div className={'popup_close'} role={'button'} onClick={handleShowPopup(null)}></div>
                        <p>CAREER</p>
                    </div>
                    <div className={'popup_content_wrap'}>
                        {/* 오큐브 */}
                        <div className={'popup_content_box'}>
                            <div className={'popup_content_title_box'}>
                                <p className={'popup_content_title'}>
                                    [ 오큐브㈜ (AI개발팀 사원) ]
                                </p>
                                <p className={'popup_content_title'}>
                                    2022.09 - 재직중
                                </p></div>
                            <div className={'popup_content_text_box'}>
                                <p className={'popup_content_text'}>
                                    1. LG LATS_HAVC (2022.10~2022.11)
                                </p>
                                <p className={'popup_content_text'}>
                                    - 기술스택 : HTML, CSS, Javascript
                                </p>
                                <p className={'popup_content_text'}>
                                    - 퍼블리싱
                                </p>
                            </div>
                            <div className={'popup_content_text_box'}>
                                <p className={'popup_content_text'}>
                                    2. LG thinkQ App Petcare (2022.12~2023.03)
                                </p>
                                <p className={'popup_content_text'}>
                                    - 기술스택 : React, Typescript
                                </p>
                                <p className={'popup_content_text'}>
                                    - Petcare 웹앱 프론트 엔드 구축
                                </p>
                            </div>
                            <div className={'popup_content_text_box'}>
                                <p className={'popup_content_text'}>
                                    3. LG energy lab 사이트 유지보수 퍼블리싱 (2023.04~2023.04)
                                </p>
                                <p className={'popup_content_text'}>
                                    - 기술스택 : HTML, CSS, Javascript
                                </p>
                                <p className={'popup_content_text'}>
                                    - 퍼블리싱
                                </p>
                            </div>
                        </div>
                        {/* 나스간호학원 */}
                        <div className={'popup_content_box'}>
                            <div className={'popup_content_title_box'}>
                                <p className={'popup_content_title'}>
                                    [ 나스(NAS)간호학원 (퍼블리셔) ]
                                </p>
                                <p className={'popup_content_title'}>
                                    2021.09 ~ 2022.01
                                </p></div>
                            <div className={'popup_content_text_box'}>
                                <p className={'popup_content_text'}>
                                    1. 나스간호학원 (2021.11~2021.11)
                                </p>
                                <p className={'popup_content_text'}>
                                    - 기술스택 : HTML, CSS, Javascript
                                </p>
                                <p className={'popup_content_text'}>
                                    - 퍼블리싱
                                </p>
                                <p className={'popup_content_text'}>
                                    - 사이트 : <a target="_blink"
                                               href="https://nasnurse.com/"> https://nasnurse.com/</a>
                                </p>
                            </div>
                            <div className={'popup_content_text_box'}>
                                <p className={'popup_content_text'}>
                                    2. 나스평생교육원 (2021.12~2022.12)
                                </p>
                                <p className={'popup_content_text'}>
                                    - 기술스택 : HTML, CSS, Javascript
                                </p>
                                <p className={'popup_content_text'}>
                                    - 퍼블리싱
                                </p>
                                <p className={'popup_content_text'}>
                                    - 사이트 : <a target="_blink"
                                               href="http://www.naslle.com/"> http://www.naslle.com/</a>
                                </p>
                            </div>
                        </div>
                        {/* ㈜조이컴퍼니 */}
                        <div className={'popup_content_box'}>
                            <div className={'popup_content_title_box'}>
                                <p className={'popup_content_title'}>
                                    [ ㈜조이컴퍼니 - 퍼블리셔 ]
                                </p>
                                <p className={'popup_content_title'}>
                                    2021.06 ~ 2021.08
                                </p></div>
                            <div className={'popup_content_text_box'}>
                                <p className={'popup_content_text'}>
                                    1. 다소곳 농수산물 사이트 (021.06~2021.07)
                                </p>
                                <p className={'popup_content_text'}>
                                    - 기술스택 : HTML, CSS, Javascript
                                </p>
                                <p className={'popup_content_text'}>
                                    - 퍼블리싱
                                </p>
                            </div>
                            <div className={'popup_content_text_box'}>
                                <p className={'popup_content_text'}>
                                    2. 브레이브마켓 (2021.07~2021.08)
                                </p>
                                <p className={'popup_content_text'}>
                                    - 기술스택 : HTML, CSS, Javascript
                                </p>
                                <p className={'popup_content_text'}>
                                    - 퍼블리싱
                                </p>
                                <p className={'popup_content_text'}>
                                    - 사이트 : <a target="_blink"
                                                                      href="https://bravemarket.co.kr/"> https://bravemarket.co.kr/</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
        ;
}

export default MainComponent;
