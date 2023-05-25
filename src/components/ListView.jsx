import PropTypes from "prop-types";
import "./ListView.css";

export function ListView({ elements, funcFilterItems }) {
	return (
		<div className='container'>
			<input type='text' onChange={(e) => funcFilterItems(e.target.value)} />
			<ul>
				{elements.map((nombre, index) => (
					<li key={index}>{nombre}</li>
				))}
			</ul>
		</div>
	);
}

ListView.propTypes = {
	elements: PropTypes.array.isRequired,
	funcFilterItems: PropTypes.func.isRequired
};
