import React, { useEffect, useState } from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { SiHtml5, SiCss3, SiJavascript, SiPhp, SiReact, SiRedux, SiNodedotjs, SiGithub  } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { ImMobile } from "react-icons/im";
import { MdOutlineEmail } from "react-icons/md";

const Main = () => {
    const location = useSelector((state)=>state.location);
    const dispatch = useDispatch();
    
    useEffect(()=>{
        const mainDom = document.querySelector('#main');
        const pageUp = ()=>{dispatch({type: 'PAGEUP'})}
        const pageDown = ()=>{dispatch({type: 'PAGEDOWN'})}
        let timer;
        console.log(window.innerWidth)

        const wheelHandler = (e)=>{
            e.preventDefault();
            if(!timer){
                timer = setTimeout(() => {
                    timer = null;
                    if(e.deltaY>0){
                        if(location>-300){
                            pageUp();
                        }
                    }else if(e.deltaY<0){
                        if(location<0){
                            pageDown();
                        }
                    }
                }, 200);
            }
        };
        if(window.innerHeight>768){
            mainDom.addEventListener('wheel', wheelHandler);
        }
        return ()=>{
            mainDom.removeEventListener('wheel', wheelHandler);
        }
    })
  return (
    <div id='main' style={{top:`${location}vh`}}>
        <div id='introduction'>
            <div className='inner'>
                <h2>INTRODUCTION</h2>
                <div id='introductionWrap'>
                    <div id='introductionLeft'>
                            <img src='https://rlaqja9199.github.io/profile99/images/beom.jpg' alt='범9199의 이미지' />
                        <div>
                            <h3>Beom9199</h3>
                            <p>사용자의 즐거움을 추구하는</p>
                            <p><span> 프론트엔드 개발자 김범</span>입니다. </p>
                        </div>
                    </div>
                    <div id='introductionRight'>
                        <h3>긍정의 에너지로 끝없이 도전하는 김범입니다.</h3>
                        {/* <p>
                            요식업계에서 오랜 시간 일을 해왔지만 반복된 작업으로 제자리에 머물러 있는 기분이었습니다.
                            더 늦기전에 전문성을 가지고 발전할 수 있는 일을 찾아 공부해보자는 생각으로 고민하던 중
                            어릴적부터 가지고 있던 개발자의 꿈을 국비 지원 사업을 통해 도전할 수 있었습니다.
                            적지 않은 나이임에도 이직을 결심할 수 있었던 것은 매사를 긍정적인 가능성을 바라보는 힘과
                            꼭 하고 싶었던 일이기에 시작이 어려울 뿐 과정은 힘들어도 이겨낼 수 있다는 믿음이 있었기에
                            적지않은 나이임에도 개발자에 도전 할 수 있었습니다.<br/><br/>

                            요식업과 영업직에서 풍부한 사회 경험으로 고되고 어려운 일에도 
                            즐거운 마음으로 일하는 법과 사람들과 화합하는 법을 배웠습니다.
                            이 경험을 통해 어떠한 일이라도 '나는 잘 해낼 수 있다'라는 믿음을 가지고 있습니다.<br/><br/>
                            
                            개발이 일이 저의 99%가 되도록 노력하는 주니어 개발자가 되겠습니다.
                        </p> */}
                        <p>
                        진로를 고민할 학창 시절, 어릴 적부터 컴퓨터를 좋아한 저는 컴퓨터공학과로 진학하기를 희망했습니다. 하지만 준비가 부족하여 원하는 대학에 진학할 수 없었고 아버지의 추천으로 건축학을 전공하게 되었습니다. 전혀 새로운 분야였지만 건축, 토목, 실내 디자인 등 다양한 수업을 들으며 흥미를 느꼈고 '지금 내가 할 수 있는 것'에 집중하며 누구보다 성실히 대학 생활을 하였습니다. 그러나 휴학 후 군 복무를 하던 중 아버지가 뇌졸중으로 쓰러져 몸을 가누질 못하고 응급실에 입원하셨다는 청천벽력 같은 소식을 듣게 되었습니다. 그렇게 가계에 도움을 주어야 하는 상황을 맞이한 저는 아쉬움을 뒤로한 채 학업을 포기하고 사회생활을 시작하게 되었습니다.<br/><br/>

첫 직장으로 요식업을 접하게 된 이후 오랜 기간동안 요식업계에서 종사하였습니다. 매일 긴 시간 동안 불 앞에서 요리하고 재료 준비를 하며 오픈 준비와 마감을 해야 하는 일이었기에 체력적으로는 어떤 일을 하던 자신 있습니다. 근무 강도가 강한 일이었음에도 즐거운 마음으로 일하는 비결을 터득할 수 있어 항상 즐겁게 일을 했습니다. 또한, 영업 직종에서 근무하며 다양한 경험을 통해 다양한 사람들과 상황을 직면하고 문제를 해결하며 발전해 나갈 수 있었기에 저에겐 굉장히 좋은 공부가 되었다고 생각합니다.<br/><br/>

짧은 기간 동안 했던 일들까지 많은 일을 해보았지만, 꾸준히 전문성을 가지고 발전하고 싶은 욕심이 생기는 나의 자리를 찾았다는 생각은 들지 않았습니다. 그래서 더 늦기 전에 내게 맞는 것을 찾아 공부해보자는 생각에 여러 가지를 고민해보던 중 학창 시절 다음 카페 활동으로 HTML을 사용하여 글을 쓰던 일, 컴퓨터로 하는 음악 작업과 게임 속에서 무언가 개발해내며 즐거웠던 기억을 떠올리며 개발자의 꿈에 도전하게 되었습니다. 그 중 사용자의 편의성을 추구하고 눈에 보이는 결과물을 만들어낼 수 있는 프론트엔드를 선하게 되었습니다.<br/><br/>

그린컴퓨터아카데미에서 [스마트 웹&콘텐츠개발] PWA제작 프론트엔드 개발 디지털 인재 양성과정을 수료하며 HTML, CSS, SCSS, Javascript, mySQL, Github, Node.js, React, Redux 등 배우면 배울수록 어렵지만 깊게 파고들고 공부할수록 기술스텍이 쌓여간다는 사실이 굉장히 기분 좋고 즐거운 일이었습니다. 또한 프론트엔드를 배우며 집을 짓는 것처럼 각각의 언어들을 재료 삼아 하나씩 차곡차곡 쌓아올려 그 결과물을 보는 것이 저에겐 매우 큰 즐거움이었습니다. 그리하여 단순히 배움으로 끝나는 것이 아니라 이 기술들을 활용하여 경력을 쌓고 나아가 여러가지 프로젝트들을 주축으로 이끌 수 있는 인재가 되고 싶어 입사를 지원하게 되었습니다.<br/><br/>

개발자는 평생 공부를 해야 한다는 것을 알고 시작하였기에 아직은 발돋움을 하는 단계이지만 개인 역량 개발을 소홀히 하지 않고 차근차근 채워 나갈 것입니다. 앞으로 새로운 직장에서 경력을 쌓아가면서 여러 어려움과 문제들을 만나겠지만, 이 또한 모두 극복하고 해결할 수 있는 일들이라고 생각합니다. 모든 것들에는 배울 점이 있다고 생각하기에 항상 긍정적이고 단단한 마음으로 저와 제가 일하는 회사가 성장할 수 있도록 노력하겠습니다.<br/><br/>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div id='portfolio'>
            <h2>PORTFOLIO</h2>
            <ul>
                <li>
                    <h3>BARON 테일러샵</h3>
                    <img src='https://rlaqja9199.github.io/profile99/images/baron1.png' alt='바론 홈페이지 사진' />
                    <p className='language'>사용 언어: <span>React</span><span>Node.js</span><span>Css</span><span>MySQL</span> </p>
                    <p>설명: 기존의 테일러샵 홈페이지들의 촌스러운 디자인을 동적이고 고급스럽게 디자인 하였습니다. </p>
                    <p>작업 인원: 1명</p>
                    <p>관리자 계정: admin/1234</p>
                    <div className='linkUrl' onClick={()=>window.open('https://tailorshop-9t22.vercel.app/', '_blank')}>바로가기</div>
                </li>
                <li>
                    <h3>REHOME 가구</h3>
                    <img src='https://rlaqja9199.github.io/profile99/images/rehome.png' alt='리홈 홈페이지 사진' />
                    <p className='language'>사용 언어: <span>PHP</span><span>JavaScript</span><span>Css</span><span>MySQL</span> </p>
                    <p>설명: 보기쉽고 직관적인 디자인의 가구샵 홈페이지를 디자인 하였습니다. </p>
                    <p>작업인원: 2명</p>
                    <p>관리자계정: admin/1111</p>
                    <div className='linkUrl' onClick={()=>window.open('http://cathkid.dothome.co.kr/ReHome/index.php', '_blank')}>바로가기</div>
                </li>
                <li>
                    <h3>W WEDDING 드레스샵</h3>
                    <img src='https://rlaqja9199.github.io/profile99/images/wwedding.png' alt='w웨딩 홈페이지 사진' />
                    <p className='language'>사용 언어: <span>React</span><span>Node.js</span><span>Css</span><span>MySQL</span> </p>
                    <p>설명: 외국사이트들의 디자인을 참고하여 드레스샵 홈페이지를 디자인 하였습니다. </p>
                    <p>작업 인원: 2명</p>
                    <p>관리자 계정: admin/admin1234</p>
                    <div className='linkUrl' onClick={()=>window.open('https://dress-shop-client-lvwb.vercel.app/', '_blank')}>바로가기</div>
                </li>
                <li>
                    <h3>썸네일메이커</h3>
                    <img src='https://rlaqja9199.github.io/profile99/images/thumbnailmaker.png' alt='썸네일메이커 홈페이지 사진' />
                    <p className='language'>사용 언어: <span>React</span><span>Css</span></p>
                    <p>설명: 다른 개발자의 썸네일메이커를 리액트를 사용하여 클론코딩 하였습니다. </p>
                    <p>작업 인원: 1명</p>
                    <p></p>
                    <p></p>
                    <div className='linkUrl' onClick={()=>window.open('https://rlaqja9199.github.io/thumbnail-maker/', '_blank')}>바로가기</div>
                </li>
            </ul>
        </div>
        <div id='skills'>
            <div className='inner'>
                <h2>SKILLS</h2>
                <ul id='skillsList'>
                    <li>
                        <SiHtml5 style={{color: '#e44d26'}} />
                        <h3>HTML</h3>
                        <p>웹표준을 준수한 마크업 가능</p>
                    </li>
                    <li>
                        <SiCss3 style={{color: '#264de4'}} />
                        <h3>CSS</h3>
                        <p>CSS를 활용한 웹페이지 스타일링 가능</p>
                    </li>
                    <li>
                        <SiJavascript style={{color: '#f7df1e'}} />
                        <h3>JavaScript</h3>
                        <p>JS를 활용한 동적인 웹사이트 제작가능</p>
                    </li>
                    <li>
                        <SiReact style={{color: '#61dafb'}} />
                        <h3>React</h3>
                        <p>리액트를 활용한 웹앱 제작가능</p>
                    </li>
                    <li>
                        <SiRedux style={{color: '#7248b6'}} />
                        <h3>Redux</h3>
                        <p>리덕스를 활용하여 상태관리 가능</p>
                    </li>
                    <li>
                        <GrMysql style={{color: '#005c85'}} />
                        <h3>MySQL</h3>
                        <p>DB를 활용하는 간단한 쿼리문 작성 가능</p>
                    </li>
                    <li>
                        <SiPhp style={{color: '#777bb3'}} />
                        <h3>Php</h3>
                        <p>php를 활용한 홈페이지 제작 가능</p>
                    </li>
                    <li>
                        <SiNodedotjs style={{color: '#68a063'}} />
                        <h3>Node.js</h3>
                        <p>간단한 로컬서버 제작 가능</p>
                    </li>
                    <li>
                        <SiGithub />
                        <h3>Github</h3>
                        <p>팀 및 개인프로젝트 깃허브 활용가능</p>
                    </li>
                </ul>
            </div>

        </div>
        <div id='contact'>
            <h2>CONTACT</h2>
            <ul>
                <li>
                    <div style={{fontSize:'50px'}}>
                        <ImMobile />
                    </div>
                    <h4>Mobile</h4>
                    <p>010-2428-5429</p>
                </li>
                <li>
                    <div style={{fontSize:'50px'}}>
                        <MdOutlineEmail />
                    </div>
                    <h4>E-Mail</h4>
                    <p>rlaqja9199@naver.com</p>
                </li>
                <li  onClick={()=>window.open('https://velog.io/@rlaqja9199', '_blank')}>
                    <div><img src='https://rlaqja9199.github.io/profile99/images/velog.png' alt='벨로그로고' style={{width:'100%', borderRadius:'8px'}} /></div>
                    <h4>Velog</h4>
                    <p>https://velog.io/@rlaqja9199</p>
                </li>
                <li  onClick={()=>window.open('https://github.com/rlaqja9199', '_blank')}>
                    <div style={{fontSize:'50px'}}><SiGithub /></div>
                    <h4>Github</h4>
                    <p>https://github.com/rlaqja9199</p>
                </li>
            </ul>
            <address>code by Beom9199</address>
        </div>
    </div>
  )
}

export default Main