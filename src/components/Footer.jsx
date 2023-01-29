import { Link } from "react-router-dom"
import Logo from '../images/logo.png'
import { FaLinkedin } from "react-icons/fa"
import { FaFacebookF } from "react-icons/fa"

import { AiFillInstagram } from "react-icons/ai"

const Footer = () =>{
    return(
<div>
    <footer>
        <div className="container footer__container">
<article>
    <Link to='/' className="logo">
        <img src={Logo} alt ='footer logo'/>
    </Link>
    <p>
        Lorem ipsum dolor ,it amet concsecutor adipiscing elit .Qui tenetur harum paritauri isuto animl cupiditate, providant dolore porro eum .

    </p>
<div className="footer__socials">
 <a  href='https://linkedin.com/' targets='blank' rel='noreferrer noopener'> <FaLinkedin/></a>
 <a  href='https://facebook.com/' targets='blank' rel='noreferrer noopener'> <FaFacebookF/> </a>
 <a  href='https://instagram.com/' targets='blank' rel='noreferrer noopener'> <AiFillInstagram/></a>
 

</div>
</article>
<article>
    <h4>Permalinks</h4>
    <Link to='/about'>About</Link>
    <Link to='/plans'>Plans</Link>
    <Link to='/trainers'>Trainers</Link>
    <Link to='/gallery'>Gallery</Link>
    <Link to='/contact'>Contact</Link>
</article>
<article>
    <h4>Insights</h4>
    <Link to='/s'>Blog</Link>
    <Link to='/s'>Case Studies</Link>
    <Link to='/s'>Events</Link>
    <Link to='/s'>Communities</Link>
    <Link to='/s'>FAQs</Link>
</article>
<article>
    <h4>Get In Touch</h4>
    <Link to='/contact'>Contact Us</Link>
    <Link to='/s'>Support</Link>
    
</article>
</div>
<div className="footer__copyright">
<small>2023 Surbhi Agrawal &copy; </small>
</div>
    </footer>
</div>
    )
}
export default Footer




