const geo = navigator.geolocation.getCurrentPosition(success, error);
function success(e) {
	console.log(e);
	lat = e.coords.latitude;
	lon = e.coords.longitude;

	const button = document.querySelector("button");
	button.addEventListener("click", (e) => {
		const span = document.createElement("span");
		const wrap = document.querySelector(".wrap");
		span.id = `removeSpan`;
		wrap.insertBefore(span, button);
		span.innerHTML = `lat${lat} lng${lon}`;

		if (span === true) {
			wrap.parentNode.removeChild(span);
		}
	});
}
function error(error) {
	console.log(error);
}
