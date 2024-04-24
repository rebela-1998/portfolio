import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
    <div className='intro'>
      <h1 className="page-name">Rebela</h1>
      <p className="designation">Frontend Developer</p>
      </div>
      <ul className="options">
        <li className="index"><a className="index-link">Home</a></li>
        <li className="index"><a className="index-link">About</a></li>
        <li className="index"><a className="index-link">Services</a></li>
        <li className="index"><a className="index-link">Projects</a></li>
        <li className="index"><a className="index-link">Contact Me</a></li>
      </ul>
    </div>
  )
}

export default Navbar
