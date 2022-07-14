import propTypes from 'prop-types';

import './GlobalStyles.module.scss';

function GlobalStyles({ children }) {
	return children;
}

GlobalStyles.propTypes = {
	children: propTypes.node.isRequired,
};

export default GlobalStyles;
