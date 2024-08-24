export default function product() {
  return (
    <div>
      <h1> Product details </h1>
      <ul>
        <p> Goto to "product/:productid" to see the particular product</p>
        <p> Goto to "product/:productid/reviews" to get all reviews</p>
        <p>  
            Goto to "product/:productid/reviews/reviewid" to get a particular
            review
        </p>
      </ul>
    </div>
  );
}
