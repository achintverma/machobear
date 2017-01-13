export default function reducer(state={
    works: [{
			id:1,
			image: "images/PRO 1.png",
			title: "Project One",
			description: "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec sed odio dui."
		},
		{
			id:2,
			image: "images/PRO 2.png",
			title: "Project Two",
			description: "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec sed odio dui. Another line to see it fits perfectly centered."
		},
		{
			id:3,
			image: "images/PRO 3.png",
			title: "Project Three",
			description: "Cras justo odio, dapibus ac facilisis in, egestas eget quam."
		},
		{
			id:4,
			image: "images/PRO 4.png",
			title: "Project Four",
			description: "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec sed odio dui."
		}
	]
  }, action) {

    switch (action.type) {
      case "FETCH_WORKS": {
      	return Object.assign({}, state, {
        	works: state.works.concat(action.payload)
        });
      }
    }
    return state
}