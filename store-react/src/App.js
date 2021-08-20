import { BrowserRouter as Router, Route} from "react-router-dom";
import Products from './component/Products';
import AddProduct from './component/AddProduct';
import UpdateProduct from './component/UpdateProduct';

function App() {
  return (
    <Router>
      <div className="items-center justify-between flex bg-gray-800 bg-opacity-90 px-12 py-6 mx-auto shadow-2xl text-white font-bold"><h1 className="text-5xl">SuperStore</h1>    
      </div>

      
      
      <Route exact path="/" component={Products} />
      <Route path="/products" component={Products} />
      <Route path="/product/create" component={AddProduct} />
      <Route path="/product/update/:idProduct" component={UpdateProduct} />

    </Router>
  );
}

export default App;