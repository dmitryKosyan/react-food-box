
import './Button.css'
const Button = ({ children }) => {
    return (
        <>
            <button className="product__add-cart" >{children}</button>
        </>
    )
}
export default Button