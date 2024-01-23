import { useEffect, useState } from 'react';
import { getItem, saveItem } from 'utils/storage';

export const useSearchHistory = (key: string) => {
	const [searchHistoryItem, setSearchHistoryItem] = useState<any[]>([]);

	useEffect(() => {
		(async () => {
			const item = await getItem(key);

			if (item) {
                const previousSearches = JSON.parse(item);
                previousSearches.slice(0,10)
				setSearchHistoryItem(previousSearches);
			}
		})();

	}, [key]);


const addItemToSearchHistory = (item: any) => {
    const filteredData = searchHistoryItem?.filter( searchItem => {
        return searchItem.place_Id !== item.place_Id;
    })

    setSearchHistoryItem([item, ...filteredData])
    saveItem("places", JSON.stringify([item, ...filteredData]))
}

return {searchHistoryItem,addItemToSearchHistory}

};


