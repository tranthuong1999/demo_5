import { put, takeEvery, call } from 'redux-saga/effects';
import { FETCH_MENU_CATEGORY_WORK, fetCategoryWorkSuccess } from './actions';
import { fetchWorkCategoyApi } from '../apis/work_api';


function* fetchWorkCategoy() {
    try {
        const listWorkCategory: any[] = yield call(fetchWorkCategoyApi);
        yield put(fetCategoryWorkSuccess(listWorkCategory));
    } catch (error) {
        console.error('Failed to fetch work categories', error);
    }
}

function* rootSaga() {
    yield takeEvery(FETCH_MENU_CATEGORY_WORK, fetchWorkCategoy);
}

export default rootSaga;
