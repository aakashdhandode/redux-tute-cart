
import { connect } from "react-redux";
import Homes from "../Componetns/Homes";
import {addToCart, removeToCart} from '../Services/Actions/Actions'

const mapStateToProps=state =>({
    data:state.cardItems

})
const mapDispatchToProps= (dispatch) => ({
    addToCartHandler:data=>dispatch(addToCart(data)),
    removeToCartHandler:data=>dispatch(removeToCart(data))
})
export default connect(mapStateToProps,mapDispatchToProps)(Homes)

