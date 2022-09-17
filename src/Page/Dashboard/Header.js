import React from 'react'

const Header = ({setIsAdding}) => {
  return (
      <header>
        <h1>Employee Management Software</h1>
        <div>
          <button type="button" className="btn btn-primary" onClick={()=>setIsAdding(true)}>Add Button</button>
          
        </div>
      </header>
  )
}

export default Header