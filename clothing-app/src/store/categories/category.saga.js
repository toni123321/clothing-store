import { takeLatest, all, call, put } from 'redux-saga/effects';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import { fetchCategoriesSuccess, fetchCategoriesFailed } from './category.action';
import { CATEGORIES_ACTION_TYPES } from './category.types';


export function* fetchCategoriesAsync() {
    try 
    {
        // wait until it comes with something, turn function into event using call and respond with yield
        // in generators we can't use async await, instead we use yield
        const categoriesArray = yield call(getCategoriesAndDocuments, 'categories');
        // in generators function we use put instead of dispatch
        yield put(fetchCategoriesSuccess(categoriesArray))
    }
    catch(error) {
        // same as dispatch but a generators version
        yield put(fetchCategoriesFailed(error));
    }
}

// Respond to Categories Start type
export function* onFetchCategories() {
    // Take the latest action to respond to
    yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsync);
}


// all - run everything inside and only run when everything is complete
// Generators respond to actions as well
export function* categoriesSaga() {
    // Listen to onFetchCategories
    yield all([call(onFetchCategories)])
}