function highlight() {
//select all <strong> elements and change them to green color>
	const boldWords = document.querySelectorAll("strong");
	boldWords.forEach(word) =>  {
		word.style.color = "green";
	});
}
function return_normal() {
    const boldWords = document.querySelectorAll("strong");
	boldWords.forEach((word) => {
		word.style.color =" black";
	});
}

