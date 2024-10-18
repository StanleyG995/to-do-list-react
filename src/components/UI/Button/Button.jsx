import PropTypes from 'prop-types'

const Button = ( {children, classes}) => {
    return (
        <button className={classes}>
            {children}
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.string
}

export default Button
