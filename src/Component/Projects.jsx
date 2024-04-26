import './Projects.css'
const Projects = () => {
  return (
    <div className='projects'>
      <div className="project">
        <h1 className="project-exp">Professional Projects</h1>
        <div className='project-container'>
          <h2 className="project-title">News</h2>
          <p className="details">Worked as a frontend React developer for this Australian News client during my TCS period</p>
        </div>
        <div className='project-container'>
          <h2 className="project-title">Macy's</h2>
          <p className="details">Worked as an automation Engineer for this US retail client during my CTS period</p>
        </div>
      </div>
      <div className="project">
        <h1 className="project-exp">Personal Projects</h1>
        <div className='project-container'>
          <h2 className="project-title">Snap Up</h2>
          <p className="details">Developed a responsive super market UI using React.js and Redux toolkit. Clone of Bigbasket.</p>
        </div>
        <div className='project-container'>
          <h2 className="project-title">News</h2>
          <p className="details">Developed a responsive News UI using React.js and Redux toolkit. Used an third-party API news.org to get the news artciles using axios.</p>
        </div>
        <div className='project-container'>
          <h2 className="project-title">Portfolio</h2>
          <p className="details last">Developed a responsive self portfolio UI using React.js.</p>
        </div>
      </div>
    </div>
  )
}

export default Projects
