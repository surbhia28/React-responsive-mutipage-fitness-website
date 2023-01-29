import React from 'react'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
// import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'
import StoryImage from '../../images/about1.jpg'
import './about.css'




const About = () => {
  return (
    <>
      <Header title='About Us' image={HeaderImage}>
      Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."

      </Header>
      <section className='about__story'>
<div className='container about__story-container'>
  <div className='about__section-image'>
<img src={StoryImage}  alt= " our story "/>
  </div>
  <div className='about__section-content'>
    <h1>Our Story</h1>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum velit odio, quis egestas mauris facilisis sed. Duis nec diam in mi lobortis congue ac sed nulla. Vestibulum ut tortor ac purus tempor imperdiet a nec augue. Nulla vitae tortor sit amet lacus posuere ultrices. Mauris molestie dui quis orci luctus condimentum. Vestibulum ut mauris vitae magna feugiat dapibus non et nibh
 </p>
 <p>
 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum velit odio, quis egestas mauris facilisis sed. Duis nec diam in mi lobortis congue ac sed nulla. Vestibulum ut tortor ac purus tempor imperdiet a nec augue. Nulla vitae tortor sit amet lacus posuere ultrices. Mauris molestie dui quis orci luctus condimentum. Vestibulum ut mauris vitae magna feugiat dapibus non et nibh
</p>
<p>
Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
</p>
  </div>
</div>

      </section>
      <section className='about__Vision'>
<div className='container about__Vision-container'>

  <div className='about__section-content'>
    <h1>Our Vision</h1>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum velit odio, quis egestas mauris facilisis sed. Duis nec diam in mi lobortis congue ac sed nulla. Vestibulum ut tortor ac purus tempor imperdiet a nec augue. Nulla vitae tortor sit amet lacus posuere ultrices. Mauris molestie dui quis orci luctus condimentum. Vestibulum ut mauris vitae magna feugiat dapibus non et nibh
 </p>
 <p>
 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum velit odio, quis egestas mauris facilisis sed. Duis nec diam in mi lobortis congue ac sed nulla. Vestibulum ut tortor ac purus tempor imperdiet a nec augue. Nulla vitae tortor sit amet lacus posuere ultrices. Mauris molestie dui quis orci luctus condimentum. Vestibulum ut mauris vitae magna feugiat dapibus non et nibh
 </p>
 </div>
   
 

 </div>
      </section>


      <section className='about__mission'>
<div className='container about__mission-container'>
  <div className='about__section-image'>
<img src={MissionImage}  alt=" our mission "/>
  </div>
  <div className='about__section-content'>
    <h1>Our Mission</h1>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum velit odio, quis egestas mauris facilisis sed. Duis nec diam in mi lobortis congue ac sed nulla. Vestibulum ut tortor ac purus tempor imperdiet a nec augue. Nulla vitae tortor sit amet lacus posuere ultrices. Mauris molestie dui quis orci luctus condimentum. Vestibulum ut mauris vitae magna feugiat dapibus non et nibh
 </p>
 <p>
 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum velit odio, quis egestas mauris facilisis sed. Duis nec diam in mi lobortis congue ac sed nulla. Vestibulum ut tortor ac purus tempor imperdiet a nec augue. Nulla vitae tortor sit amet lacus posuere ultrices. Mauris molestie dui quis orci luctus condimentum. Vestibulum ut mauris vitae magna feugiat dapibus non et nibh
</p>
<p>
Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
</p>
  </div>
</div>

      </section>

</>
  )
}

export default About
