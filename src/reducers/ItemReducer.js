export default function ItemReducer(items = [], action) {
    switch (action.type) {
        case 'ADD_ITEM':
            const newItem = action.payload;
            return [...items, newItem];
        case 'REMOVE_ITEM':
            return items.filter(item => {
               return item.id !== action.payload
            });
        default:
            return items;
    }
}