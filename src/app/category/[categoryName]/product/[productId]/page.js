export default  function Product({params, searchParams}) {
  return <>
    <div>Category: {params.categoryName}</div>
    <div>Product: {params.productId}</div>
  </>
}