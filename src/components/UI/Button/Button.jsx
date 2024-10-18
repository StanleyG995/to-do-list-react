import PropTypes from 'prop-types'
import './Button.css'

const Button = ( {children, classes, onClick} ) => {
    return (
        <button className={classes} onClick={onClick}>
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
