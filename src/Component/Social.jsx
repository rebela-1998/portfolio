import './Social.css'

const Social = () => {
    return (
        <div className='icons'>
            <ul className='icon-list'>
                <li className='icon'>
                <a className='mail-link' href="/"><span className="material-symbols-outlined">mail</span></a>
                </li>
                <li className='icon'>
                    <a className='linkedIn-link' href="/"><img src="\assets\linkedIn.svg" alt="linkedIn link"/></a>
                </li>
                <li className='icon'>
                <a className='github-link' href="/"><img src="\assets\github.svg" alt="github link"/></a>
                </li>
            </ul>
        </div>
    )
}

export default Social
