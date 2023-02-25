import React from 'react'
import { Link} from 'react-router-dom'

function AdminNavigation() {
  return (
    <>
    <div className='admin-navbar-main'>
            <Link to="/my-account">Dashboard</Link>
            <Link to="/patient-panel">Patient Panel</Link>
    </div>
    </>   
  )
}

export default AdminNavigation