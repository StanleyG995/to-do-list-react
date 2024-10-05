import './header.css'

function Header() {
    return (
        <div className="header-container">
            <h1 className='header-title'><span style={{color: 'rgb(6, 30, 216)',}}>🗹</span> To Do List</h1>
            <p className='header-tagline'>Keep your work organized!</p>
        </div>
    )
}

export default Header