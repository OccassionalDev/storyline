export default function manageStory(
	state = { stories: [], loading: false },
	action
) {
	switch (action.type) {
		case "LOADING_STORIES":
			return {
				...state,
				stories: [...state.stories],
				loading: true,
			};

		case "ADD_STORIES":
			return {
				...state,
				stories: action.data,
				loading: false,
			};

		case "ADD_STORY":
			const story = {
				id: action.id,
				user_id: action.user_id,
				title: action.title,
				summary: action.summary,
			};

			return { ...state, stories: [...state.stories, story] };

		case "REMOVE_STORY":
			const stories = state.stories.filter(
				story => story.id !== action.data.id
			);
			return { ...state, stories: stories };

		default:
			return state;
	}
}
