import './Header.css'

const Header = () => {

    return (
        <div className="header">
            <div className="row">
                <div className="column">
                    <ul className="menu">
                        <a href="" className="menu-item text-medium">Current</a>
                        <a href="" className="menu-item text-medium">History</a>
                        <a href="" className="menu-item text-medium">Deleted</a>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header