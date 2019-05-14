import { TOGGLE_MODAL, NEXT_MONTH, PREV_MONTH, CLOSE_MODAL, OPEN_MODAL } from "./action-types";

export const toggleModal = () => {
    return {
        type : TOGGLE_MODAL,
        payload : null
    }
}

export const nextMonth = () => {
    return {
        type : NEXT_MONTH,
        payload : null
    }
}

export const prevMonth = () => {
    return {
        type : PREV_MONTH,
        payload : null
    }
}


export const closeModal = () => {
    return {
        type : CLOSE_MODAL,
        payload : null
    }
}

export const openModal = (date) => {
    return {
        type : OPEN_MODAL,
        payload : date
    }
}