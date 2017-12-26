export default function ItemReducer(items = [], action) {
    switch (action.type) {
        case 'ADD_ITEM':
            const newItem = action.payload;
            return [...items, newItem];
        case 'REMOVE_ITEM':
            return items.filter(item => {
               return item.id !== action.payload
            });
        case 'UPDATE_ITEM':
            let note = items.find(item => {
                return item.id === action.payload.id
            });
            note.title = action.payload.title;
            note.text = action.payload.text;
            return items;
        case 'SEARCH_ITEMS':
            const searchText = action.payload;
            if (!searchText || 0 === searchText.length) {
                return items;
            } else {
                items.map(item => {
                    if (item.title.indexOf(searchText) === -1) item.visible = false;
                });
                return items;
            }
        default:
            return items;
    }
}