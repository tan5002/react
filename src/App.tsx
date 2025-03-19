import './App.css';
// import Hello from './components/index';
// import Card from './components/card';
import UserProfile from './components/card';
import ProductCard from './components/lab2';
import dataProduct from './data/product.json'
function App(){
  return (
    <>
    {dataProduct.products.map((product, index) => (
      <ProductCard key={index} {...product} />
    ))}
    <UserProfile/>
    </>
  )
}

export default App


