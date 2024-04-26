import './Intro.css'

const Intro = () => {
  const downloadResume=()=>{
    const pdfUrl = "/assets/Resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Resume.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div className="introduction">
      <h2 className="greet">Hi! I'm Rebela</h2>
      <p className="introduce">A passionate front end developer <br/>based in India </p>
      <button className='resume' onClick={()=>{downloadResume()}}>Download Resume</button>
    </div>
  )
}

export default Intro
