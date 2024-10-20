import PropTypes from 'prop-types'
import './Button.css'

const Button = ( {children, classNames, onClick} ) => {
    return (
        <button className={classNames} onClick={onClick}>
            {children}
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
