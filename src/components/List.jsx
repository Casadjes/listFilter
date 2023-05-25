import { useState } from "react";
import frameworkList from "./items.js";
import { ListView } from "./ListView.jsx";

// Componentes de Presentacion y componentes contenedores
export function List() {
	let [items, setItems] = useState(frameworkList);

	function filterItems(searchPattern) {
		if (searchPattern === "") {
			setItems(frameworkList);
		} else {
			let newItems = filterItemsBySearchPattern(searchPattern);
			setItems(newItems);
		}
	}

	function filterItemsBySearchPattern(searchPattern) {
		let filteredItems = frameworkList.filter((item) =>
			item.toLowerCase().includes(searchPattern.toLowerCase())
		);
		return filteredItems;
	}

	return <ListView elements={items} funcFilterItems={filterItems} />;
}
