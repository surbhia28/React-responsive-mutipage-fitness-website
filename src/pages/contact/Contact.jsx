import React from 'react'
 import Header from '../../components/Header'
 import HeaderImage from '../../images/header_bg_2.jpg'
 import {MdEmail} from 'react-icons/md'

 import {IoLogoWhatsapp} from 'react-icons/io'
import './contact.css'



const Contact = () => {
  return (
    <>

    <Header title='Get in Touch' image={HeaderImage}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum velit odio, quis egestas mauris facilisis sed. Duis nec diam in mi loborti nibh
    </Header>
    <section className='contact'>
    <div className='container contact__container'>
 <div className='contact__wrapper'>
 <a href='mailto:support@surbhiagarwal831@gmail.com' target='_blank' rel="noreferrer noopener"><MdEmail/></a>
 <a href='https://wa.me/+918002494490' target='_blank' rel="noreferrer noopener"><IoLogoWhatsapp/></a>
 </div>
    </div>

    </section>
    </>
  )
}

export default Contact
