import './Products.css'

const Products = ({products}) => {

    return (
        <table>
            <thead>

            <tr>
                <td>S. No</td>
                <td>Name</td>
                <td>Price</td>
                <td>Seller</td>
                <td>Category</td>
            </tr>
            </thead>
            <tbody>

            {products.map((product, ind) => (
                <tr key={ind+1}>
                    <td>{ind+1}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.seller}</td>
                    <td>
                        <span className={ind%2 === 0 ? "category blue-bg": "category orange-bg"}>{product.category}</span>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}

export default Products
