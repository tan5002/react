import './App.css';
// import Hello from './components/index';
// import Card from './components/card';
import ProductCard from './components/lab2';
function App(){
  return (
    <>
    {/* <Hello/>
    <Card
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-5Ei0F_j0MnzOfLg0x-GqTVcgss3x_yogXw&s"
      title="Tân nguyễn"
      content="abcxyz"
      contentButton="click here"
    /> */}
    <ProductCard
      price={20}
      image="https://bizweb.dktcdn.net/100/299/021/products/den-hoc-protex-pr001l-kem-bong-1.jpg?v=1614340621517"
      title="KAJUTA"
      description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur repellat id in, harum corrupti repudiandae vitae facere repellendus quia sit rerum deserunt expedita minima praesentium distinctio! Rerum possimus nihil voluptas?
'
      quantity={1}
      totalPrice={20}
    />
    </>
  )
}

export default App