import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Header from "./AdminHeader";
import { createURL } from "./constant";

import "./modal.css";
import AuthGuard from "./AuthGuard";
import { useNavigate } from "react-router-dom";
import { setAuthToken } from "./Productview";
import CheckUser from "./CheckUser";
import {convertTimestampToReadable} from './DateTimeFormate';

export default function AdminOrders() {
  const [data, setData] = useState([]);
  const [itemData, setItemData] = useState([]);
  const nevigate=useNavigate();
  const token=sessionStorage['token'];
 

  useEffect(() => {
   
    getOrders();
  }, []);

  const getOrders=()=>{
    if(token === undefined){
      nevigate("/PageNotFound");
     
     return 
    }
    var role = CheckUser(token);
    const url = createURL(`api/Orders/AllOrders`);
    axios.get(url)
    .then((res)=>{
      
      setData(res.data);
      
    }
    )
  }

  
  const getData = (type, id) => {
    if(!token){
      nevigate("/Login");
      alert("please login")
      return 
    }
   
    const url = createURL(`api/Orders`);
    setAuthToken(sessionStorage.getItem("token"));
    axios
      .post(url)
      .then((result) => {
        const data = result.data;
        if (data.statusCode === 200) {
          type === "Admin" ? setData(data.listOrders) : setItemData(data.listOrders);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleItemDetail = (id) => {
    getData("UserItems",id);
  
  };


  
  return (
    <Fragment>
      <Header />
      <br></br>
      <div className="form-group col-md-12">
        <h3 style={{textAlign:"center"}}>All Orders</h3>
      </div>
      {data ? (
        <table
          className="table stripped table-hover mt-4"
          style={{ backgroundColor: "white", width: "80%", margin: "0 auto" }}
        >
          <thead className="thead-light">
            <tr>
              <th scope="col">S.N.</th>
              <th scope="col">Customer Id</th>
              <th scope="col">Order No</th>
              <th scope="col">Total</th>
              <th scope="col">Product Name</th>
              <th scope="col">Order Date</th>
             
            </tr>
          </thead>
          <tbody>
            {data.map((val, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{val.userId}</td>
                  <td onClick={() => handleItemDetail(val.id)}>
                    {val.orderId}
                  </td>
                  <td>{val.totalAmount}</td>
                  <td>{val.productName}</td>
                  <td>{convertTimestampToReadable(val.dateTime)}</td>
                 
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        "No data found"
      )}
     
      <AuthGuard/>
    </Fragment>
  );
}
