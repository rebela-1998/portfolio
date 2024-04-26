import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
    <div className='intro'>
      <h1 className="page-name">Rebela</h1>
      <p className="designation">Frontend Developer</p>
      </div>
      <ul className="options">
        <li className="index"><NavLink className="index-link" to='/'>Home</NavLink></li>
        <li className="index"><NavLink className="index-link" to='/about'>About</NavLink></li>
        <li className="index"><NavLink className="index-link" to='/services'>Services</NavLink></li>
        <li className="index"><NavLink className="index-link" to='/projects'>Projects</NavLink></li>
        <li className="index"><NavLink className="index-link" to='/contact'>Contact Me</NavLink></li>
      </ul>
    </div>
  )
}

export default Navbar
