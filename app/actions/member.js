export function fetchMembers() {
  return {
    type: "FETCH_MEMBERS",
    payload: [
			{
				id:4,
				name: "Stevy Noodles",
				position: "Node Engineer",
				photo: "images/Mamber 4.jpg"
			},
			{
				id:5,
				name: "Pamper",
				position: "Office Dog",
				photo: "images/Mamber 6.jpg"
			},
			{
				id:6,
				name: "Alex Toov",
				position: "Data Scientist",
				photo: "images/Mamber 5.jpg"
			}
	]
  }
}
