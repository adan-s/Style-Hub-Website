import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatchCart, useCart } from './ContextReducers'
// import { Dropdown, DropdownButton } from 'react-bootstrap';
export default function Card(props) {
  let data = useCart();

  let navigate = useNavigate()
  const [qty, setQty] = useState(1)
  const [size, setSize] = useState("")
  const priceRef = useRef();
  // const [btnEnable, setBtnEnable] = useState(false);
  // let totval = 0
  // let price = Object.values(options).map((value) => {
  //   return parseInt(value, 10);
  // });
  let options = props.options;
  let priceOptions = Object.keys(options);
  const dispatch = useDispatchCart();
  const handleClick = () => {
    if (!localStorage.getItem("token")) {
      navigate("/login")
    }
  }
  const handleQty = (e) => {
    setQty(e.target.value);
  }
  const handleOptions = (e) => {
    setSize(e.target.value);
  }
  const handleAddToCart = async () => {
    let cloth = []
    for (const item of data) {
      if (item.id === props.clothItem._id) {
        cloth = item;

        break;
      }
    }
    console.log(cloth)
    console.log(new Date())
    if (cloth !== []) {
      if (cloth.size === size) {
        await dispatch({ type: "UPDATE", id: props.clothItem._id, price: finalPrice, qty: qty })
        return
      }
      else if (cloth.size !== size) {
        await dispatch({ type: "ADD", id: props.clothItem._id, name: props.clothItem.name, price: finalPrice, qty: qty, size: size,img: props.ImgSrc })
        console.log("Size different so simply ADD one more to the list")
        return
      }
      return
    }

    await dispatch({ type: "ADD", id: props.clothItem._id, name: props.clothItem.name, price: finalPrice, qty: qty, size: size })

    console.log(data)
  }
  let finalPrice=qty*parseInt(options[size]);
  useEffect(()=>{
    setSize(priceRef.current.value)
  },[]
    
  )
  return (
    <div classNameName="card ">
      <div className="card mt-3" style={{ width: "300px", maxHeight: "510px" }}>
        <img
          className="card-img-top "
          src={props.clothItem.img}
          alt="Card cap"
          style={{ width: "300px", height: "200px" }}
        />
        <div className="card-body">
          <h5 className="card-title">{props.clothItem.name}</h5>
          <p className="card-text">{props.clothItem.description}</p>
          <div className="container w-100">
            <select className="m-2 h-100 w-25 select text-light rounded"  onChange={(e)=>setQty(e.target.value)}>
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}{" "}
                  </option>
                );
              })}
            </select>
            <select className="m-2 h-100 w-50 select text-light rounded" ref={priceRef} onChange={(e)=>setSize(e.target.value)}>
              {
                priceOptions.map((data) => {
                return <option key={data} value={data}>{data}</option>;
              })}
            </select>

            <div className="d-inline h-100 font-weight-bold ms-1">Rs.{finalPrice}</div>
            <hr></hr>
          <button className="btn  btn-success addtoCart ms-1  " onClick={handleAddToCart}> Add to Cart</button>
          </div>
         
        </div>
      </div>
    </div>
  );
}
