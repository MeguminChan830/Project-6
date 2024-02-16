import {Link} from "react-router-dom"
import {useSelector} from "react-redux"
const ProductComponent=()=>{
    const products = useSelector((state)=>state.allProducts.products)
    const renderList= products.length==0||products.map((product)=>{
        console.log("Products Here: ",products)
        const {id, title, image, price, category} = product
        return (
            <div className="" key={id}>
                <Link to={`product/${id}`} className="link">
                    <div className="card">
                        <div className="image">
                            <img src={image} alt={title}/>
                        </div>
                        <div className="content">
                            <div className="title">{title}</div>
                            <div className="price">$ {price}</div>
                            <div className="category">{category}</div>
                        </div>
                    </div>
                </Link>
            </div>
        )
    })
    return <>{renderList}</>
    
}
export default ProductComponent