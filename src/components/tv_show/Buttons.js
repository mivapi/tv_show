import React, {useEffect } from 'react'
import PropTypes from 'prop-types'

const Buttons = (props) => {
    return(
        <button onClick={props.setLocalStorage.bind(this, props.show)} className={`btn ${props.color}`}>
            <i className="far fa-star"></i>
        </button>
    )
}
export default Buttons;

Buttons.propTypes = {
    tvShow : PropTypes.array.isRequired,
    setLocalStorage: PropTypes.func.isRequired,
    show : PropTypes.object.isRequired,
    color: PropTypes.string.isRequired
}
