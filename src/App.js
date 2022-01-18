import {useState} from 'react'
import Modal from './components/Modal'
import Products from './components/Products'
import Sidebar from './components/Sidebar'
import './App.css';

function App() {

  const sampleProducts = [
      {
          name: "Marvel Tshirt",
          price: 399,
          seller: "Bewakoof.com",
          category: "clothing"
      },
      {
          name: "OnePlus 9R",
          price: 39999,
          seller: "OnePlus",
          category: "Electronics"
      },
      
  ]
  const [showModal, setShowModal] = useState(false);
  const [products, setProducts] = useState([...sampleProducts]);

  const addProduct = (e)=>{
    e.preventDefault()
    const product = {
      name: e.target.name.value,
      category: e.target.category.value,
      price: e.target.price.value,
      seller: e.target.seller.value
    }
    setProducts([...products, product]);
    setShowModal(!showModal);
  }
  return (
    <div className="container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main">
        <h2>Products</h2>
        <hr />
        <div className="products">
          <div className="row2">
            <h3>All Products</h3>
            <button onClick={() => {setShowModal(!showModal)}} >Add Product</button>
          </div>

          {showModal ? (
            <Modal>
              <div className="modal">
                <div className="head">
                  <h3>Add Product</h3>
                  <button onClick={() => {setShowModal(!showModal)}} >X</button>
                </div>
                <form className="form" onSubmit={addProduct}>
                  <input type="text" placeholder="Enter Product Name" name="name"/>
                  <select name="category">
                    <option value="">
                      Category
                    </option>
                    <option value="Electronics">
                      Electronics
                    </option>
                    <option value="Clothing">
                      Clothing
                    </option>
                    <option value="Books">
                      Books
                    </option>
                  </select>
                  <input type="text" placeholder="Seller" name="seller"/>
                  <input type="number" placeholder="Price" name="price"/>
                  <div className="buttons">
                    <button className="pill black-bg" onClick={() => {setShowModal(!showModal)}}>Cancel</button>
                    <input type="submit" className="pill light-orange-bg" value="Save" />
                  </div>
                </form>
              </div>
            </Modal>
          ) : null}

        <Products products={products} />
        </div>
      </div>
    </div>
  );
}

export default App;
