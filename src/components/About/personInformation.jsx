import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen,faLocationDot,faEnvelope,faStar,faPhoneVolume } from '@fortawesome/free-solid-svg-icons'


const PersonInformation = () => {
  return (
    <div className="personalInfo">
                    <h2>personal information</h2>
                    <div className="personal-info">
                    <table>
                        <tbody>
                                <tr>
                                    <td>
                                        <FontAwesomeIcon icon={faPen} />
                                        <span>Full Name</span>
                                    </td>
                                    <td>Mahmoud Nabil Rashad</td>
                                </tr>
                                <tr>
                                    <td>
                                        <FontAwesomeIcon icon={faStar} />
                                        <span>D.O.B</span>
                                    </td>
                                    <td>August 12, 1995</td>
                                </tr>
                                <tr>
                                    <td>
                                        <FontAwesomeIcon icon={faLocationDot} />
                                        <span>ADDRESS</span>
                                    </td>
                                    <td>Egypt,Qalyubia,Banha</td>
                                </tr>
                                <tr>
                                    <td>
                                        <FontAwesomeIcon icon={faEnvelope} />
                                        <span>E-MAIL</span>
                                    </td>
                                    <td>e.mahmoudnabil@gmail.com</td>
                                </tr>
                                <tr>
                                    <td>
                                        <FontAwesomeIcon icon={faPhoneVolume} />
                                        <span>PHONE</span>
                                    </td>
                                    <td>01146285867</td>
                                </tr>
                        </tbody>
                    </table>
                    </div>
        </div>
  )
}

export default PersonInformation