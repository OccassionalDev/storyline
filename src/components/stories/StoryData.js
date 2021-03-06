import React, { Component } from "react";

import { Link } from "react-router-dom";

class StoryData extends Component {
	render() {
		if (!this.props.story.user) {
			return <div></div>;
		} else {
			return (
				<div>
					<h1>{this.props.story.title}</h1>
					<h2>
						Created By:{" "}
						<Link to={`/users/${this.props.user.id}`}>
							{this.props.user.username}
						</Link>
					</h2>

					<h3>About</h3>
					<p>{this.props.story.summary}</p>
				</div>
			);
		}
	}
}

export default StoryData;
