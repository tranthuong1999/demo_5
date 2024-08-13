
import { FETCH_MENU_CATEGORY_WORK, FETCH_MENU_CATEGORY_WORK_SUCCESS } from "./actions";

export interface WorkState {
    listWorkCategory: any[];
}

const initialState: WorkState = {
    listWorkCategory: [],
};

const workReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case FETCH_MENU_CATEGORY_WORK_SUCCESS:
            return {
                ...state,
                listWorkCategory: action.payload,
            };
        default:
            return state;
    }
}

export default workReducer;

