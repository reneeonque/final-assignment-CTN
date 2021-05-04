document.addEventListener("DOMContentLoaded", function () {
	const select_menus = document.querySelectorAll(".filter");


	select_menus.forEach(function (select_menu) {
		select_menu.addEventListener("change", function (e) {
			const year_class = e.target.value;
			const filter_container = e.target.closest(".filter-container");
			const active_items = filter_container.querySelectorAll(".item.active");

			active_items.forEach(function (item) {
				item.classList.remove("active");
			});

			console.log(year_class);

			const year_items = filter_container.querySelectorAll(`.item.${year_class}`);
			year_items.forEach(function (item) {
				item.classList.add("active");
			});
		}); //end listener

	}); //ends loop
}); //ends DOM Ready