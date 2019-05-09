import React from 'react';
import './Admin.scss';

const Admin = (props) => {
    return (
        <div className="admin">
            <h3>Admin Panel</h3>
            <hr />
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <input type="submit" value="Login" />
        </div>
    )
}

export default Admin;