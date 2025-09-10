const LazyLoadComp = () => {
  return (
    <div>
      <h2>Lazy Loading Component</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel 
        ligula scelerisque, vehicula dui eu, fermentum velit. 
        {Array(100).fill(
          " Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        )}
      </p>
    </div>
  );
};
export default LazyLoadComp;
