document.addEventListener("DOMContentLoaded", function () {
	const select_menu = document.querySelector(".filter");

	select_menu.addEventListener("change", function (e) {
		const year_class = e.target.value;
		const active_items = document.querySelectorAll(".item.active");

		active_items.forEach(function (item) {
			item.classList.remove("active");
		});

		const year_items = document.querySelectorAll(`.item${year_class}`);
		year_items.forEach(function (item) {
			item.classList.add("active");
		});
	});
});