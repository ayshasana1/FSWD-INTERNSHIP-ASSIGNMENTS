function Filter({ setCategory }) {
  return (
    <div>
      <button onClick={() => setCategory("All")}>All</button>
      <button onClick={() => setCategory("Electronics")}>Electronics</button>
      <button onClick={() => setCategory("Clothing")}>Clothing</button>
      <button onClick={() => setCategory("Footwear")}>Footwear</button>
    </div>
  );
}

export default Filter;