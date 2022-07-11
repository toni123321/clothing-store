import { BackgroundImage, DirectoryItemContainer, Body } from './directory-item.styles'

const DirectoryItem = ({ category }) => {
    const { title, imageUrl } = category

    return (
        <DirectoryItemContainer>
          <BackgroundImage imageUrl={imageUrl}/>
          <Body>
              <h2>{title}</h2>
              <p>Shop now</p>
          </Body>
        </DirectoryItemContainer>
    )
}

export default DirectoryItem;