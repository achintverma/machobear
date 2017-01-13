export function fetchWorks() {
  return {
    type: "FETCH_WORKS",
    payload: [
			{
			id:5,
			image: "images/PRO 5.png",
			title: "Project Five",
			description: "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec sed odio dui."
		},
		{
			id:6,
			image: "images/PRO 6.png",
			title: "Project Six",
			description: "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec sed odio dui. Another line to see it fits perfectly centered."
		}
	]
  }
}
