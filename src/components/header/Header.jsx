import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Action from '../../actions/';

import styles from './Header.sass';

class Header extends Component {
}

Header.defaultProps = {
	title: ''
};

Header.propTypes = {
	title: PropTypes.string
};

function mapStateToProps(state) {
	return {
		title: state.page.title
	};
}

function mapDispatchToProps(dispatch) {
	return {
		title: () => {
			dispatch(
				Action()
			);
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
