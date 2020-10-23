export const reducer = (status, action) => {
    // we use a switch to know what type of action we are using
    switch (action.type) {
        case 'ADD_ITEM':
            const newTodo = [...status.items, action.payload];
            return {
                ...status,
                items: newTodo,
                isActiveModal: true,
                modalMsg: 'todo added'
            }
        case 'NO_VALUE':
            return {
                ...status,
                isActiveModal: true,
                modalMsg: 'try to add some data'
            }
        case 'REMOVE_ITEM':
            const newItems = status.items.filter((todo) => todo.id != action.payload);
            return {
                ...status,
                items: newItems,
                isActiveModal: true,
                modalMsg: 'todo deleted'
            }
        case 'CLOSE_MODAL':
            return {
                ...status,
                isActiveModal: false
            }
    }
}