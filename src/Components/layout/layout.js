import React from 'react'
import Header from '../../Components/header/header';
import Footer from '../../Components/footer/footer';

export default (props)=>{
    return (
        <>
          <Header/>
           {props.children}
          <Footer/>
        </>
    )
}