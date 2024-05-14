import './GenericComponent.css';

function StarRating({ rating }) {
  // Round down to the nearest whole number rating
  const roundedRating = Math.floor(rating);

  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          className={`star ${index < roundedRating ? 'selected' : ''}`}
          data-rating={index + 1}
        />
      ))}
    </div>
  );
}

export { StarRating };
