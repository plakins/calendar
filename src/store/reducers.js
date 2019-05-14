import { TOGGLE_MODAL, NEXT_MONTH, PREV_MONTH, OPEN_MODAL, CLOSE_MODAL } from "./action-types";


const initialState = {
    date : new Date(),
    modalDisplayStatus : false,
    tasks : [],
    modal : {
        display : false,
        date : null
    }
}

export default (store = initialState, action) => {
    switch (action.type) {
        case TOGGLE_MODAL:
        {
            return {...store, modalDisplayStatus : !store.modalDisplayStatus}
        }
            
        case NEXT_MONTH:
        {
            const date = new Date();
            let month = store.date.getMonth() + 1;
            let year = store.date.getFullYear();
            if (month === 12) {
                month = 0;
                year++;
            }
            date.setMonth(month);
            date.setFullYear(year);
            return {...store, date}
        }
            
        case PREV_MONTH:
        {
            const date = new Date();
            let month = store.date.getMonth() - 1;
            let year = store.date.getFullYear();
            if (month === -1) {
                month = 11;
                year--;
            }
            date.setMonth(month);
            date.setFullYear(year);
            return {...store, date}
        }

        case OPEN_MODAL:
        {
            return {...store, modal: {display : true, date: action.payload}}
        }

        case CLOSE_MODAL:
        {
            return {...store, modal: {...store.modal, display : false}}
        }
            
        default:
            return store;
    }
}