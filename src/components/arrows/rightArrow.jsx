import React from 'react'
import { Link } from 'react-router-dom'

const RightArrow = (props) => {
  return (
    <div className="right-arrow">
             <Link to={props.link}><i className="fas fa-arrow-right"></i> </Link>
        </div>
  )
}

export default RightArrow