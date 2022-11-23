function createDateData(dateString, n) {
    console.log(dateString);
    let week = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"]
    let dateObj = new Date(dateString)
	let date = week[dateObj.getDay()]
    createDate(date, n)

}