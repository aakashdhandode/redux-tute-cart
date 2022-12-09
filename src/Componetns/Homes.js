import React from 'react'
const dataApi =[
    {name: "I phone",
    price:1000}
]
const Homes = (props) => {
    // console.log("Home", props.data)
    console.log("remove", props)
  return (
    <div>
        {/* <div className='cart-item'>
            <h5>Cart <span>{props.data.length}</span></h5>
        </div> */}
        <h4>Home Component</h4>
        <div className='cart-wrapper'>
            <div className='img-wrapper item'>
                <img src="https://i.gadgets360cdn.com/products/large/moto-g52-db-709x800-1649827920.jpg" className='w-100'  />
            </div>
            <div className='text-wrapper item'>
                <span>I-phone</span>
                <span>Price: 100.00</span>
            </div>
            <div className='button-wrapper item'>
                <button onClick={() =>props.addToCartHandler(dataApi)}>Add to Cart</button>
                <button onClick={() =>props.removeToCartHandler(dataApi)} style={{backgroundColor: 'green'}}>Add to Cart</button>
            </div>
        </div>
    </div>
  )
}

export default Homes
