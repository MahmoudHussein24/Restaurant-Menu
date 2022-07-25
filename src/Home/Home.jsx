import React, { Component } from 'react'
import style from './Home.module.css'

export default class Home extends Component {
  render() {
    return (
      <>
      <div className={`${style.bgIgame}`}>
        <img className={`${style.cover} w-100`} src="https://img.freepik.com/free-photo/white-empty-frame-colorful-vegetables-backdrop_23-2147885664.jpg?w=2000" alt=""  />
     
      
      
      <div className={`${style.text} ` }  >
        <h3 className='text text-center'>WELCOME TO </h3>
        <h1>WHAT TO EAT!</h1>
      </div>
      


      </div>
      
      
      
      
      
      
      
      </>
    )
  }
}
