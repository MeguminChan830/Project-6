import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import ProductListing from './containers/ProductListing'
import Header from './containers/Header'
import ProductDetails from './containers/ProductDetails'
function App() {

  return (
    <div className="App">
      <Header/>
      <Router>
      <Routes>
          <Route path='/' element={<ProductListing/>}/>
          <Route path='/product/:productId' element={<ProductDetails/>}/>
          <Route path="*" element={<h1>404 Not Found!</h1>}/>
      </Routes>
      </Router>
    </div>
  )
}

export default App
