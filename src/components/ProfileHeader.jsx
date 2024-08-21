import React from 'react'
import profilePic from '../assets/profile-pic.png';

function ProfileHeader() {
    return (
        <>
            <div className="profile-header">
                <div className="profile-info">
                    <h2>S. Meena, F/23</h2>
                    <p>Patient ID: 87 20200727153457</p>
                </div>
                <div className="profile-image">
                    <img
                        src={profilePic}
                        alt="Profile"
                        className="profile-pic"
                    />
                </div>
            </div>
        </>
    )
}

export default ProfileHeader
