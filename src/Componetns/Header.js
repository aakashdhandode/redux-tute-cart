import React from 'react'

const Header = (props) => {
    console.log("Header", props.data)
  return (
    <div>
        <div className='cart-item'>
            <h5>Cart <span>{props.data.length}</span></h5>
        </div>
        
    </div>
  )
}

export default Header
