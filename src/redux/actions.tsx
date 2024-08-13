
export const FETCH_MENU_CATEGORY_WORK = 'FETCH_MENU_CATEGORY_WORK';
export const FETCH_MENU_CATEGORY_WORK_SUCCESS = 'FETCH_MENU_CATEGORY_WORK_SUCCESS';

export const fetCategoryWork = () => ({
    type: FETCH_MENU_CATEGORY_WORK,
});

export const fetCategoryWorkSuccess = (payload: any[]) => ({
    type: FETCH_MENU_CATEGORY_WORK_SUCCESS,
    payload,
});



