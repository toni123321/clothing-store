import { createSelector } from 'reselect';

const selectCategoryReducer = (state) => state.categories;

export const selectCategories = createSelector(
     // slices that you want to produce smth new outside
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.categories 
);


export const selectCategoriesMap = createSelector(
        [selectCategories],
        (categories) => categories.reduce((acc, data) => {
                const { title, items } = data;
                acc[title.toLowerCase()] = items;
                return acc;
        }, {})
);

export const selectCategoriesIsLoading = createSelector(
        [selectCategoryReducer],
        (categoriesSlice) => categoriesSlice.isLoading
);
