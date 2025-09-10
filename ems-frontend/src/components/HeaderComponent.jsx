import React from 'react'
import { Link } from 'react-router-dom'

const HeaderComponent = () => {
  return (
    <div>
        <header>
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark shadow-sm'>
                <div className="container">
                    <Link to="/employees" className="navbar-brand">
                    👥 Employee Management System
                    </Link>
                 </div>
            </nav>
        </header>
        
    </div>
  )
}

export default HeaderComponent