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
        default:
            return items;
    }
}