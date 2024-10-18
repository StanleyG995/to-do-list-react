import PropTypes from 'prop-types'
import './ErrorMessage.css'


const ErrorMessage = ( {message} ) => {
    return (
        <p className='error-message'>{message}</p>
    )
}

ErrorMessage.propTypes = {
    message: PropTypes.string,
}

export default ErrorMessage