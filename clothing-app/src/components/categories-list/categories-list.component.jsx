import { CategoriesContainer } from './categories-list.style'
import CategoryItem from '../directory-item/directory-item.component';

const CategoriesList = ({categories}) => {
    
    return (
        <CategoriesContainer>
            {categories.map((category) => (
            <CategoryItem key={category.id} category={category}/>
            ))}
        </CategoriesContainer>
    )
}
export default CategoriesList;