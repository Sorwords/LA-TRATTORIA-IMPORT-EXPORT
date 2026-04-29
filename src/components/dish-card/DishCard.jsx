import './DishCard.css'

function DishCard({ dish }) {
  const { name, description, price, category, isPopular } = dish

  return (
    <article className="dish-card">
      {isPopular && <span className="dish-card-badge">Popular</span>}
      <div className="dish-card-body">
        <span className="dish-card-category">{category}</span>
        <h3 className="dish-card-name">{name}</h3>
        <p className="dish-card-description">{description}</p>
        <div className="dish-card-footer">
          <span className="dish-card-price">{price}</span>
          <button className="dish-card-btn">Anadir</button>
        </div>
      
      </div>
    </article>
  )
}

export default DishCard