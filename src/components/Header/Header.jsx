import './Header.css'

const Header = () => {

    return (
        <div className="header">
            <div className="row">
                <div className="column">
                    <ul className="menu">
                        <a href="" className="menu-item menu-item--active text-medium"><i className="fa-solid fa-list-check menu-item-icon"></i> Current</a>
                        <a href="" className="menu-item text-medium"><i className="fa-solid fa-clock-rotate-left menu-item-icon"></i> History</a>
                        <a href="" className="menu-item text-medium"><i className="fa-solid fa-trash menu-item-icon"></i> Deleted</a>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header