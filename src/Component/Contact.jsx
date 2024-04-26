import './Contact.css'

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-channel">
        <h1 className="channel-name">You can drop me an email at</h1>
        <p className="conact-details mail">
          <span className="material-symbols-outlined">mail</span>
          rebela.ray@outlook.com</p>
      </div>
      <div className="contact-channel">
        <h1 className="channel-name">You can ping me on whatsapp or ring me on</h1>
        <p className="conact-details call">
        <span className="material-symbols-outlined">perm_phone_msg</span>
          +91- 9123624277</p>
      </div>
      <div className="contact-channel">
        <h1 className="channel-name">You can find me on linkedIn by</h1>
        <p className="conact-details linkedIn">
        <img src="\assets\linkedInWhite.svg" alt="linkedIn link"/>
          https://www.linkedin.com/in/rebela-ray-7705011a6/</p>
      </div>
    </div>
  )
}

export default Contact
