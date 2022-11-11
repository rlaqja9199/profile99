import React from 'react'
import {useDispatch} from 'react-redux';

const Header = () => {
  const dispatch = useDispatch();
  return (
    <div id='header'>
        <div id='headerWrap' className='inner'>
            <h1 onClick={()=>{dispatch({type: 'INTRODUCTION'})}}>Beom9199</h1>
            <ul>
                <li onClick={()=>{dispatch({type: 'INTRODUCTION'})}}>INTRODUCTION</li>
                <li onClick={()=>{dispatch({type: 'PORTFOLIO'})}}>PORTFOLIO</li>
                <li onClick={()=>{dispatch({type: 'SKILLS'})}}>SKILLS</li>
                <li onClick={()=>{dispatch({type: 'CONTACT'})}}>CONTACT</li>
            </ul>
        </div>
    </div>
  )
}

export default Header