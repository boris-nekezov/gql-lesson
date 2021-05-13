import React from 'react';
// $259.04
// import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
// $259.03
// import { addItem } from '../../redux/cart/cart.actions';

import './collection-item.styles.scss';

const CollectionItem = ({ item, addItem }) => {
	const { name, price, imageUrl } = item;
	return (
		<div className="collection-item">
			<div
				className="image"
				style={{
					backgroundImage: `url(${imageUrl})`,
				}}
			/>
			<div className="collection-footer">
				<span className="name">{name}</span>
				<span className="price">{price}</span>
			</div>
			<CustomButton onClick={() => addItem(item)} inverted>
				Add to cart
			</CustomButton>
		</div>
	);
};

// $259.01
// const mapDispatchToProps = dispatch => ({
//   addItem: item => dispatch(addItem(item))
// });

// export default connect(null, mapDispatchToProps)(CollectionItem);
// $259.02
export default CollectionItem;
