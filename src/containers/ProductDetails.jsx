import { useEffect, useCallback } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productsActions";
const ProductDetails = () => {
  const { productId } = useParams();
  let product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  const dispatch = useDispatch();
  const fetchProductDetail = useCallback(
    async (id) => {
      const response = await axios
        .get(`https://fakestoreapi.com/products/${id}`)
        .catch((err) => {
          console.log("Error: ", err);
        });
      dispatch(selectedProduct(response.data));
    },
    [dispatch]
  );
  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId, dispatch, fetchProductDetail]);
  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="details">
          <img src={image} />
          <div className="content">
            <h1 className="title">{title}</h1>
            <h2>
              <a className="price">${price}</a>
            </h2>
            <h3 className="category">{category}</h3>
            <p className="desc">{description}</p>
            <div className="ui vertical animated button" tabIndex="0">
              <button className="add">Add to Cart</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default ProductDetails;
