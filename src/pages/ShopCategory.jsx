import React from 'react'
import './CSS/ShopCategory.css';
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import dropdown_icon from '../components/assets/dropdown_icon.png';
import Item from '../components/item/Item';

const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);

  console.log(all_product);
  return (
    <div className='shop-category'>
      <img src={props.banner} alt="Banner" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12 </span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="Dropdown Icon" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item, i)=>{
          if (props.category===item.category) {
            return (<Item key={i} id={item.id} name={item.name} image={item.image} 
            new_price={item.new_price} old_price={item.old_price}/>
            );
          }
          else {
            return null;
          }
        })}
      </div>
    </div>
  )
}

export default ShopCategory