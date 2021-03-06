export default function viewedUser(
	state = { user: {}, loading: false },
	action
) {
	switch (action.type) {
		case "LOADING_USER":
			return {
				...state,
				user: state.user,
				loading: true,
			};

		case "ADD_USER":
			return {
				...state,
				user: action.data.user,
				loading: false,
			};

		default:
			return state;
	}
}
