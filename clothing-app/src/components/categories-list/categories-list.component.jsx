import './categories-list.style.scss'
import CategoryItem from '../directory-item/directory-item.component';

const CategoriesList = ({categories}) => {
    
    return (
        <div className="categories-container">
            {categories.map((category) => (
            <CategoryItem key={category.id} category={category}/>
            ))}
        </div>
    )
}
export default CategoriesList;