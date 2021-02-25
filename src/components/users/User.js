import React, { Component } from 'react';

class User extends Component {
	componentDidMount() {
		// Belongs to react-rout-dom. Pulls login from URL
		console.log(this.props.match);
		this.props.getUser(this.props.match.params.login);
	}

	render() {
		const {
			name,
			avatar_url,
			location,
			bio,
			blog,
			login,
			html_url,
			followers,
			following,
			public_repos,
			public_gists,
			hireable,
		} = this.props.user;

		const { loading } = this.props;

		return (
			<div>
				<h3>{name}</h3>
				<p>{login}</p>
			</div>
		);
	}
}

export default User;
