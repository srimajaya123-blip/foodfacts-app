import { useNavigate } from 'react-router-dom'

function FoodCard({ product }) {
  const navigate = useNavigate()

  const {
    product_name,
    brands,
    nutriments,
    image_small_url,
    code
  } = product

  const handleClick = () => {
    navigate(`/product/${code}`)
  }

  return (
    <div
      className="food-card"
      onClick={handleClick}
    >
      <img
        src={image_small_url || 'https://via.placeholder.com/150'}
        alt={product_name}
      />

      <h3>{product_name}</h3>

      <p>{brands}</p>

      <p>
        Calories:{' '}
        {nutriments?.['energy-kcal_100g'] || 'N/A'}
      </p>

      <p>
        Protein:{' '}
        {nutriments?.proteins_100g || 'N/A'}g
      </p>

      <p>
        Carbs:{' '}
        {nutriments?.carbohydrates_100g || 'N/A'}g
      </p>
    </div>
  )
}

export default FoodCard