import React from 'react'

function Navbar() {
  return (
    <div>
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand">TaskManager</a>
                <form className="d-flex" role="search" style={{ width: "85%" }}>
                    <input className="form-control me-2 w-100" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>
    </div>
  )
}

export default Navbar