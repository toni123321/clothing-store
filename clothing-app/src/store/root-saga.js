// Encapsulate all different sagas

// Interact with redux stores through saga help methods
import { all, call } from 'redux-saga/effects';
import { categoriesSaga } from './categories/category.saga';
import { userSagas } from './user/user.saga';

// ES6 generator function
export function* rootSaga() {
    // yield the all call with array passing the different sagas
    yield all([call(categoriesSaga), call(userSagas)]);
}
