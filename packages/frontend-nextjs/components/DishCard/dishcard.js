import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
// import './dishcard.css';
import unknown from '../../../../data-images/unknown.png';
const DishCard = (props) => {
    const { imgPath, name, price, quantity } = props;
    return (
        <div className='dish-card'>
            <Image src={imgPath} width={140} height={140} className='food-image'/>
            <div className='background'>
                <div className='food-info'>
                    <div className='food-name'>{name}</div>
                    <div className='food-price'>{price} $</div>
                    <div className='food-quantity'>{quantity} available</div>
                </div>
            </div>
        </div>
    )
}

DishCard.propTypes = {
    imgPath: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number
}

DishCard.defaultProps = {
    imgPath: unknown,
    name: 'Default Card',
    price: 123456789,
    quantity: 123,
}

export default DishCard;