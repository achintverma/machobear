export default function reducer(state={
    members: [{
				id:1,
				name: "Marsha Thomas",
				position: "CEO",
				photo: "images/Member 1.jpg"
			},
			{
				id:2,
				name: "Emily Craft",
				position: "Lead UI Designer",
				photo: "images/Member 2.jpg"
			},
			{
				id:3,
				name: "John Pepperman",
				position: "Sr Front-End Developer",
				photo: "images/Member 3.jpg"
			}
	]
  }, action) {

    switch (action.type) {
      case "FETCH_MEMBERS": {
      	return Object.assign({}, state, {
        	members: state.members.concat(action.payload)
        });
      }
    }
    return state
}