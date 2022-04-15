import React from 'react'
import { Link } from 'react-router-dom'

const LeftArrow = (props) => {
  return (
    <div className="left-arrow">
            <Link to={props.link}> <i className="fas fa-arrow-left"></i> </Link>
        </div>
  )
}

export default LeftArrow