import { put, takeEvery, call } from 'redux-saga/effects';
import { FETCH_TODOS, setTodos, Todo } from './actions';

// Giả lập một API call để fetch dữ liệu
const fetchTodosApi = (): Promise<Todo[]> =>
    new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, text: 'Learn Redux Saga' },
                { id: 2, text: 'Build a Todo App' },
            ]);
        }, 1000);
    });

function* fetchTodosSaga() {
    try {
        const todos: Todo[] = yield call(fetchTodosApi);
        yield put(setTodos(todos));
    } catch (error) {
        console.error('Failed to fetch todos', error);
    }
}

function* rootSaga() {
    yield takeEvery(FETCH_TODOS, fetchTodosSaga);
}

export default rootSaga;
