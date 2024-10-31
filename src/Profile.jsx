import React, { useState } from 'react';
import './Profile.css';
import { FaEdit, FaSave } from 'react-icons/fa';

function Profile() {
    const [profile, setProfile] = useState({
        firstName: 'Parth',
        lastName: 'Vyas',
        address: 'Madh Island, Near Versova, Mumbai - 400061',
        panNumber: 'AEZWXXXXX',
        mobileNumber: '9988779966',
        gender: 'Male'
    });

    const [editingField, setEditingField] = useState(null);

    const handleEdit = (field) => {
        setEditingField(field);
    };

    const handleChange = (e) => {
        setProfile({ ...profile, [editingField]: e.target.value });
    };

    const handleSave = () => {
        setEditingField(null);
    };

    const renderEditableField = (fieldName, label) => {
        return (
            <div className="profile-field">
                <label>{label}</label>
                {editingField === fieldName ? (
                    <div className="editable-input">
                        <input
                            type="text"
                            value={profile[fieldName]}
                            onChange={handleChange}
                            onBlur={handleSave}
                            autoFocus
                        />
                        <FaSave className="icon save-icon" onClick={handleSave} />
                    </div>
                ) : (
                    <div className="field-value">
                        <span>{profile[fieldName]}</span>
                        <FaEdit className="icon edit-icon" onClick={() => handleEdit(fieldName)} />
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className="profile-container">
            

            <div className="profile-content">
                <h2>Profile</h2>

                <div className="profile-picture">
                    <div className="profile-avatar"></div>
                </div>

                <div className="profile-details">
                    <div className="left-section">
                        {renderEditableField('firstName', 'First Name')}
                        {renderEditableField('lastName', 'Last Name')}
                        {renderEditableField('address', 'Address')}
                    </div>

                    <div className="right-section">
                        {renderEditableField('panNumber', 'PAN Number')}
                        {renderEditableField('mobileNumber', 'Mobile Number')}
                        {renderEditableField('gender', 'Gender')}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
