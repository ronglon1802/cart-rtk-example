import React from 'react';
import './Product.scss'
import img1 from '../../assets/Topseller1.jpg';
import img2 from '../../assets/Topseller2.jpg';
import img3 from '../../assets/Topseller3.jpg';
import { addToCart } from '../../redux/cardSlice';
import { useDispatch } from 'react-redux';


const data = [
    {
        id: 1,
        sale: true,
        code: 'A39023',
        name: 'Áo phông',
        price: '30$',
        image: img1
    },
    {
        id: 2,
        sale: true,
        code: 'A39023',
        name: 'Áo phông',
        price: '30$',
        image: img2
    },
    {
        id: 3,
        sale: false,
        code: 'A39023',
        name: 'Áo phông',
        price: '30$',
        image: img3
    },
]

const Product = () => {

    const dispatch = useDispatch();
    return (
        <>
            <div className='container'>
                {data.map((item, index) => (
                    <div key={index} className='container-item'>
                        <img src={item.image} alt='ava' />
                        <div className='name'>{item.name}</div>
                        <button onClick={() => dispatch(addToCart(item))}>Add</button>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Product