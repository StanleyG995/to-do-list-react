import PropTypes from 'prop-types'
import './Button.css'

const Button = ( {children, classes, action}) => {
    return (
        <button className={classes} onClick={action}>
            {children}
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.string,
    action: PropTypes.func,
}

export default Button
