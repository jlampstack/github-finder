import React, { Fragment } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

const Users = ({ users, loading }) => {
	return (
		<Fragment>
			{loading ? (
				<div style={loadingStyle}>
					<Spinner />
				</div>
			) : (
				<div style={userStyle}>
					{users.map(user => (
						<UserItem key={user.id} user={user} />
					))}
				</div>
			)}
		</Fragment>
	);
};

Users.propTypes = {
	users: PropTypes.array.isRequired,
	loading: PropTypes.bool.isRequired,
};

const userStyle = {
	display: 'grid',
	gridTemplateColumns: 'repeat(3, 1fr)',
	gridGap: '1rem',
};

const loadingStyle = {
	display: 'flex',
	justifyContent: 'center',
};

export default Users;
