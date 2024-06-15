/*eslint-disable*/
import React from 'react';


interface CareerComponentProps {
    isOpen: number
    setIsOpen: React.Dispatch<boolean>
}

const CareerComponent = ({ isOpen, setIsOpen }: CareerComponentProps) => {
    const handleShowPopup = (openNumber: any) => () => {
        return setIsOpen(openNumber);
    }
    return (
        <div className={'folder_popup'} style={{ display: isOpen === 3 ? "block" : "none" }}>
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
                            1. LG LATS ThermaV
                        </p>
                        <p className={'popup_content_text'}>
                            - 기술스택 : HTML, CSS, Javascript
                        </p>
                        <p className={'popup_content_text'}>
                            - 퍼블리싱 및 유지보수
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
                            - Frontend 개발
                        </p>
                    </div>
                    <div className={'popup_content_text_box'}>
                        <p className={'popup_content_text'}>
                            3. LG LATS Energy Lab
                        </p>
                        <p className={'popup_content_text'}>
                            - 기술스택 : HTML, CSS, Javascript
                        </p>
                        <p className={'popup_content_text'}>
                            - 유지보수
                        </p>
                    </div>
                    <div className={'popup_content_text_box'}>
                        <p className={'popup_content_text'}>
                            4. LG LATS LCC WEB
                        </p>
                        <p className={'popup_content_text'}>
                            - 기술스택 : HTML, CSS, Javascript
                        </p>
                        <p className={'popup_content_text'}>
                            - 퍼블리싱 및 유지보수
                        </p>
                    </div>
                    <div className={'popup_content_text_box'}>
                        <p className={'popup_content_text'}>
                            5. LG LATS CFD REQUEST
                        </p>
                        <p className={'popup_content_text'}>
                            - 기술스택 : HTML, CSS, Javascript
                        </p>
                        <p className={'popup_content_text'}>
                            - 퍼블리싱 및 유지보수
                        </p>
                    </div>
                    <div className={'popup_content_text_box'}>
                        <p className={'popup_content_text'}>
                            6. LG Lats Vent
                        </p>
                        <p className={'popup_content_text'}>
                            - 기술스택 : React, Typescript, Tailwind
                        </p>
                        <p className={'popup_content_text'}>
                            - Frontend 개발 및 유지보수
                        </p>
                    </div>
                    <div className={'popup_content_text_box'}>
                        <p className={'popup_content_text'}>
                            7. LG Lats RRC
                        </p>
                        <p className={'popup_content_text'}>
                            - 기술스택 : React, Typescript, Tailwind
                        </p>
                        <p className={'popup_content_text'}>
                            - Frontend 개발 및 유지보수
                        </p>
                    </div>
                    <div className={'popup_content_text_box'}>
                        <p className={'popup_content_text'}>
                            8. LG Lats Noise Simulator
                        </p>
                        <p className={'popup_content_text'}>
                            - 기술스택 : React, Typescript, Tailwind
                        </p>
                        <p className={'popup_content_text'}>
                            - Frontend 개발 및 유지보수
                        </p>
                    </div>
                    <div className={'popup_content_text_box'}>
                        <p className={'popup_content_text'}>
                            9. LG Lats Load Web
                        </p>
                        <p className={'popup_content_text'}>
                            - 기술스택 : React, Typescript, Tailwind
                        </p>
                        <p className={'popup_content_text'}>
                            - Frontend 개발 및 유지보수
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
                {/* 학력 */}
                <div className={'popup_content_box'}>
                    <div className={'popup_content_title_box'}>
                        <p className={'popup_content_title'}>
                            [ 학력 ]
                        </p></div>
                    <div className={'popup_content_text_box'}>
                        <p className={'popup_content_text'}>
                            코리아IT아카데미 (2021.08 ~ 2022.04)
                        </p>
                        <p className={'popup_content_text'}>
                            - 백엔드 개발자 양성 과정 수료
                        </p>
                    </div>
                    <div className={'popup_content_text_box'}>
                        <p className={'popup_content_text'}>
                            그린컴퓨터디자인학원 (2020.03 ~ 2020.07)
                        </p>
                        <p className={'popup_content_text'}>
                            - 웹 퍼블리셔 국비 과정 수료
                        </p>
                    </div>
                    <div className={'popup_content_text_box'}>
                        <p className={'popup_content_text'}>
                            중부대학교  (2012.03 ~ 2017.07)
                        </p>
                        <p className={'popup_content_text'}>
                            - 패션디자인과 졸업
                        </p>
                    </div>
                </div>
                {/* 자격증 */}
                <div className={'popup_content_box'}>
                    <div className={'popup_content_title_box'}>
                        <p className={'popup_content_title'}>
                            [ 자격증 ]
                        </p></div>
                    <div className={'popup_content_text_box'}>
                        <p className={'popup_content_text'}>
                            - 일본어능력시험(JLPT)2급
                        </p>
                        <p className={'popup_content_text'}>
                            - 컴퓨터활용능력2급
                        </p>
                        <p className={'popup_content_text'}>
                            - 웹디자인기능사
                        </p>
                        <p className={'popup_content_text'}>
                            - 컴퓨터그래픽스운용기능사
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
        ;
}

export default CareerComponent;
