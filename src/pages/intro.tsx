import * as React from "react";

//components
import SEO from "../components/SEO"
import Header from '../components/header'

//style
import "../styles/intro.sass"

const Intro: React.FC = () => {
    return (
        <main>
            <SEO title="Dev log | 소개" />
            <Header path={location.pathname} />
            <div className="moveto">
                <div><a href="#hi">📑 intro</a></div>
                <div><a href="#skill">🏹 Skill + Tool</a></div>
                <div><a href="#side">🎁 Side Project</a></div>
                <div><a href="#prize">🏆 Prize + Award</a></div>
            </div>
            <div className="middle">
                <h2 id="hi">Hello, min050410</h2>
                <h3 id="gray">안녕하세요. <u>김영민(YoungMin)</u>입니다.</h3>
                <div className="intro">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGgs7zmA2X55TVRum7fe9_03F2Y5hWmNjX4Q&usqp=CAU"></img>
                    <div className="intro_test">
                        <h3 id="gray">여러 데이터를 다뤄보고 싶은 <u>Backend 개발자</u> 입니다.</h3>
                        <h3 id="gray">단순히 <u>아는 것</u>보다,</h3>
                        <h3 id="gray"><u>이해</u>하고 넘어가는 것을 좋아합니다. </h3>
                    </div>
                </div>
                <div className="section_union">
                    <section className="section">
                        <span>💼 현재 직장 없음</span>
                        <span>🍀 position | Backend programer</span>
                        <span>📆 Date | 2023 ~</span>
                    </section>
                    <section className="section">
                        <span>🏫 BSSM 재학중</span>
                        <span>💻 major | SW development</span>
                    </section>
                </div>
                <h4 className="under" id="skill">🏹 Skill + Tool</h4>
                <div className="over">
                    <div className="skill">
                        <div className="card">
                            <div className="card_up">
                                <div className="tagr">
                                    Languages
                                </div>
                                <div className="count">11</div>
                            </div>
                            <div className="values">
                                C, C++
                            </div>
                            <div className="values">
                                JS
                            </div>
                            <div className="values">
                                python
                            </div>
                            <div className="values">
                                HTML5
                            </div>
                            <div className="values">
                                CSS3
                            </div>
                            <div className="values">
                                TS
                            </div>
                            <div className="values">
                                jquery
                            </div>
                            <div className="values">
                                Sass
                            </div>
                            <div className="values">
                                Java
                            </div>
                            <div className="values">
                                Lua
                            </div>
                            <div className="values">
                                SQL
                            </div>
                        </div>
                        <div className="card">
                            <div className="card_up">
                                <div className="tagy">
                                    Frameworks
                                </div>
                                <div className="count">7</div>
                            </div>
                            <div className="values">
                            React
                            </div>
                            <div className="values">
                            Flask 
                            </div>
                            <div className="values">
                            gatsby.js
                            </div>
                            <div className="values">
                            sqlchemy 
                            </div>
                            <div className="values">
                            Node.js 
                            </div>
                            <div className="values">
                            Express.js 
                            </div>
                            <div className="values">
                            Android studio
                            </div>
                        </div>
                        <div className="card">
                        <div className="card_up">
                                <div className="tago">
                                    Certificate
                                </div>
                                <div className="count">2</div>
                            </div>
                            <div className="values">
                                Microsoft Excel
                            </div>
                            <div className="values">
                                Microsoft Azure
                            </div>
                        </div>
                        <div className="card">
                        <div className="card_up">
                                <div className="tagg">
                                    etc
                                </div>
                                <div className="count">3</div>
                            </div>
                            <div className="values">
                            Linux 
                            </div>
                            <div className="values">
                            Ajax
                            </div>
                            <div className="values">
                            Autodesk
                            </div>
                        </div>
                    </div>
                </div>
                <h4 className="under" id="side">🎁 Side Project ( + Product Release )</h4>
                <div className="side">
                    <div className="card">

                    </div>
                    <div className="card">

                    </div>
                    <div className="card">

                    </div>
                    <div className="card">

                    </div>
                </div> 
                <h4 className="under" id="prize">🏆 Prize + Award</h4>
                <div className="prize">
                    <div className="card">
                        <div className="card_title">🥈 학생을 도와주는 혼공앱</div>
                        <div className="time">2021.11</div>
                        <div className="desc">KAIST 제 6회 전국 고등 소프트웨어 경진대회</div>
                        <div className="tagg">은상</div>
                    </div>
                    <div className="card">
                        <div className="card_title">⌨️ Human for AI</div>
                        <div className="time">2021.11</div>
                        <div className="desc">2021 SW마이스터고 연합해커톤</div>
                        <div className="tagy">인기상</div>
                    </div>
                    <div className="card">
                        <div className="card_title">🐾 What is Neuralink</div>
                        <div className="time">2021.11</div>
                        <div className="desc">영어 말하기 대회</div>
                        <div className="tagb">결승 진출</div>
                    </div>
                    <div className="card">
                        <div className="card_title">💬 국어 우리말 대회</div>
                        <div className="time">2021.10</div>
                        <div className="desc">국어 우리말 대회</div>
                        <div className="tago">최우수상</div>
                    </div>
                    <div className="card">
                        <div className="card_title">🌠 Dream</div>
                        <div className="time">2021.7</div>
                        <div className="desc">교내 해커톤 대회</div>
                        <div className="tago">최우수상</div>
                    </div>
                    <div className="card">
                        <div className="card_title">✏️ 내신 성적 우수</div>
                        <div className="time">2021.7</div>
                        <div className="desc">교과 우수상 수상</div>
                        <div className="tagr">교과 우수상</div>
                    </div>
                </div>
                <footer>
                    <div className="footer_wrap">
                        <a href="https://hits.seeyoufarm.com">
                            <img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fdevlog%2Fintro&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false" />
                        </a>
                        <div className="date">last Update. 220110</div>
                    </div>
                </footer>
            </div>
        </main>
    )
}

export default Intro