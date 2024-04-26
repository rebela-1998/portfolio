import './Social.css'

const Social = () => {
    return (
        <div className='icons'>
            <ul className='icon-list'>
                <li className='icon'>
                <a className='mail-link' href="https://discord.com/users/rebela9820"><img src="\assets\discord.svg" alt="discord link"/></a>
                </li>
                <li className='icon'>
                    <a className='linkedIn-link' href="https://www.linkedin.com/in/rebela-ray-7705011a6/" target='_blank'><img src="\assets\linkedIn.svg" alt="linkedIn link"/></a>
                </li>
                <li className='icon'>
                <a className='github-link' href="https://github.com/rebela-1998" target='_blank'><img src="\assets\github.svg" alt="github link"/></a>
                </li>
            </ul>
        </div>
    )
}

export default Social
