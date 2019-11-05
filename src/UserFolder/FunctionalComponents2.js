import React from 'react'
import PropTypes from "prop-types";

function Navbar2(props) {
    return (
        <div><h3>
            {/* Burası 2. navbardır */}
            {props.title}

            </h3>
            </div>
    )
}

Navbar2.propTypes ={
    title : PropTypes.string.isRequired
}
export default Navbar2;
