import Home from "./Home"
import {connect} from "react-redux";
import actions from "./modules/actions"

const mapStateToProps = (state)=>{
    return {
        countryDetails: state.home.countryDetails
    }
}

const mapDispatchToProps = {
    getCountryDetails: actions.getCountryDetails
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);