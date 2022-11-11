import React from 'react'
import {useDispatch} from 'react-redux';

const Header = () => {
  const dispatch = useDispatch();
  const innerWidth = window.innerWidth
  return (
    <div id='header'>
        <div id='headerWrap' className='inner'>
            <h1 onClick={()=>{dispatch({type: 'INTRODUCTION'})}}>Beom9199</h1>
            <ul>
                <li onClick={()=>{dispatch({type: 'INTRODUCTION'})}}>{innerWidth>768? 'INTRODUCTION' : '소개'}</li>
                <li onClick={()=>{dispatch({type: 'PORTFOLIO'})}}>{innerWidth>768? 'PORTFOLIO' : '작업'}</li>
                <li onClick={()=>{dispatch({type: 'SKILLS'})}}>{innerWidth>768? 'SKILLS' : '기술'}</li>
                <li onClick={()=>{dispatch({type: 'CONTACT'})}}>{innerWidth>768? 'CONTACT' : '연락처'}</li>
            </ul>
        </div>
    </div>
  )
}

export default Header