import './Modal.css'
// eslint-disable-next-line react/prop-types
const Modal = ({closeLink}) => {
    return (
        <>
            <div className="modal-wrapper"></div>
            <div className="modal-container">
                <button className="close" onClick={closeLink}>
                    <span className="material-symbols-outlined" >
                        close
                    </span>
                </button>
                <h2 className="project-name">Snap Up</h2>
                <p className="links">Github Link:
                    <a className="github" href='https://github.com/rebela-1998/Snap-Up.git' target="_blank">
                        https://github.com/rebela-1998/Snap-Up.git
                    </a>
                </p>
                <p className="links end">Web Link:
                    <a className="web" href='https://snapupmarket.netlify.app/' target="_blank">
                        https://snapupmarket.netlify.app/
                    </a>
                </p>

                <h2 className="project-name">News</h2>
                <p className="links end">Github Link:
                    <a className="github" href='https://github.com/rebela-1998/News.git' target="_blank">
                        https://github.com/rebela-1998/News.git
                    </a>
                </p>

                <h2 className="project-name">Portfolio</h2>
                <p className="links end">Github Link:
                    <a className="github" href='https://github.com/rebela-1998/portfolio' target="_blank">
                        https://github.com/rebela-1998/portfolio
                    </a>
                </p>

            </div>
        </>
    )
}

export default Modal
