 
// import { connect } from "react-redux";
// import Header from "../Componetns/Header";

// const mapStateToProps=state =>({
//     data:state.cardItems

// })
// const mapDispatchToProps=dispatch => ({
// })
// export default connect(mapStateToProps,mapDispatchToProps)(Header)


import { connect } from "react-redux";
import Header from "../Componetns/Header";
import {addToCart} from '../Services/Actions/Actions'

const mapStateToProps=state =>({
    data:state.cardItems

})
const mapDispatchToProps= (dispatch) => ({
})
export default connect(mapStateToProps,mapDispatchToProps)(Header)

