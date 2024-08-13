import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Link, Switch, Routes, Outlet, useParams, NavLink } from 'react-router-dom';
 
 
class Home extends React.Component
{
  render(){
    return <p>Home Page</p>;
  }
}
 
class Contacts extends React.Component
{
  render(){
    return <p>Contacts Page</p>;
  }
}
function PC(){  return <h3>PC</h3>;}
function Tablet(){  return <h3>Tablet</h3>;}
class NotFound extends React.Component{
  render(){
    return <p>Page not found</p>;
  }
}
 
const products = [
  {id:1, name: "PC1"},
  {id:2, name: "PC2"},
  {id:3, name: "PC3"},
  {id:4, name: "PC4"}
];
function Product(){
  const params = useParams();
  const Id = params.id;
  const product = products.find(p=>p.id == Id);
  if(product===undefined)
    return <p>No product with this Id</p>
  else
    return <h3>Product {product.name} </h3>;
}
function ProductList(){
  return <div>
    <h3>Products:</h3>
    <ul>
      {
        products.map(
          function(item){
            return <li key={item.id}><NavLink to={`/products/${item.id}`}>{item.name}</NavLink></li>
          }
        )
      }
    </ul>
  </div>;
}
function Products() {
  return <div>
    <h2>Products</h2>
    <Outlet/>
  </div>;
}
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/contacts" element={<Contacts/>}></Route>
        <Route path="/products" element={<Products/>}>
          <Route index element={<ProductList/>}/>
          <Route path=':id' element={<Product/>}></Route>
          {/* <Route path='pc' element={<PC/>}></Route>
          <Route path='tablet' element={<Tablet/>}></Route> */}
        </Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </div>
  </Router>
);
 
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();