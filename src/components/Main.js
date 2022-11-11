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
        mainDom.addEventListener('wheel', wheelHandler);
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
                        <img src='/images/beom.jpg' alt='범9199의 이미지' />
                        <h3>Beom9199</h3>
                        <p>사용자의 즐거움을 추구하는</p>
                        <p><span> 프론트엔드 개발자 김범</span>입니다. </p>
                    </div>
                    <div id='introductionRight'>
                        <h3>긍정의 에너지로 끝없이 도전하는 김범입니다.</h3>
                        <p>
                            요식업에서 오랜 시간 일을 해왔지만 적성에 맞지않아 고민하던 중 개인사정으로 일을 그만두고 
                            어릴적부터 막연하게 가지고 있던 개발자의 꿈을 국비지원 사업을 통해 도전할 수 있었습니다.
                            적지않은 나이임에도 새로운 것에 도전할 수 있었던 것은 
                            매사에 낙천적인 사고로 할 수 있다는 믿음이 있었기 때문입니다.<br/><br/>

                            비록 다른 직종이지만 요식업과 영업직 외에 여러 직종에서 풍부한 사회경험으로 힘든 일에도 
                            즐거운 마음으로 일하는 법을 배우고 사람들과 화합하는 법을 배웠습니다.
                            이 배움을 통해 어떠한 일이라도 '나는 잘 해낼 수 있다'라는 믿음을 가지고 있습니다.<br/><br/>
                            
                            남들보다 늦게 시작한 만큼 개발이 저의 99%가 되도록 노력하는 주니어개발자가 되겠습니다.
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
                    <img src='/images/baron1.png' alt='바론 홈페이지 사진' />
                    <p className='language'>사용언어: <span>React</span><span>Node.js</span><span>Css</span><span>MySQL</span> </p>
                    <p>설명: 기존의 테일러샵 홈페이지들의 촌스러운 디자인을 동적이고 고급스럽게 디자인 해보았습니다. </p>
                    <p>작업인원: 1명</p>
                    <p>관리자계정: admin / 1234</p>
                    <div className='linkUrl' onClick={()=>window.open('https://tailorshop-9t22.vercel.app/', '_blank')}>바로가기</div>
                </li>
                <li>
                    <h3>REHOME 가구</h3>
                    <img src='/images/rehome.png' alt='리홈 홈페이지 사진' />
                    <p className='language'>사용언어: <span>PHP</span><span>JavaScript</span><span>Css</span><span>MySQL</span> </p>
                    <p>설명: 보기쉽고 직관적인 디자인의 가구샵 홈페이지를 만들어보았습니다. </p>
                    <p>작업인원: 3명</p>
                    <p>관리자계정: admin / 1111</p>
                    <div className='linkUrl' onClick={()=>window.open('http://cathkid.dothome.co.kr/ReHome/index.php', '_blank')}>바로가기</div>
                </li>
                <li>
                    <h3>W WEDDING 드레스샵</h3>
                    <img src='/images/wwedding.png' alt='w웨딩 홈페이지 사진' />
                    <p className='language'>사용언어: <span>React</span><span>Node.js</span><span>Css</span><span>MySQL</span> </p>
                    <p>설명: 외국사이트들의 디자인을 참고하여 드레스샵 홈페이지를 만들어보았습니다. </p>
                    <p>작업인원: 2명</p>
                    <p>관리자계정: admin / admin1234</p>
                    <div className='linkUrl' onClick={()=>window.open('https://dress-shop-client-lvwb.vercel.app/', '_blank')}>바로가기</div>
                </li>
                <li>
                    <h3>썸네일메이커</h3>
                    <img src='/images/thumbnailmaker.png' alt='썸네일메이커 홈페이지 사진' />
                    <p className='language'>사용언어: <span>React</span><span>Css</span></p>
                    <p>설명: 다른 개발자의 썸네일메이커를 리액트를 사용하여 클론해보았습니다. </p>
                    <p>작업인원: 1명</p>
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
                <li style={{background:'#eaeaea'}}>
                    <div style={{fontSize:'50px'}}>
                        <ImMobile />
                    </div>
                    <h4>Mobile</h4>
                    <p>010-2428-5429</p>
                </li>
                <li style={{background:'#655', color:'#eee'}}>
                    <div style={{fontSize:'50px'}}>
                        <MdOutlineEmail />
                    </div>
                    <h4>E-Mail</h4>
                    <p>rlaqja9199@naver.com</p>
                </li>
                <li  onClick={()=>window.open('https://velog.io/@rlaqja9199', '_blank')} style={{cursor:'pointer', background:'#eaeaea'}}>
                    <div><img src='/images/velog.png' alt='벨로그로고' style={{width:'100%', borderRadius:'8px'}} /></div>
                    <h4>Velog</h4>
                    <p>https://velog.io/@rlaqja9199</p>
                </li>
                <li  onClick={()=>window.open('https://github.com/rlaqja9199', '_blank')} style={{cursor:'pointer', background:'#4f6466', color:'#eee'}}>
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