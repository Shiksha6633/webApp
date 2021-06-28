import { PRODUCT_LIST_FAILED, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/productConstant";

function productListReducer(state = {products:[]} , action){
    switch(action.type){
        case PRODUCT_LIST_REQUEST :
            return {loading :true};
        
        case PRODUCT_LIST_SUCCESS:
            return {loading : false, products : action.payload};
        case PRODUCT_LIST_FAILED:
            return {loading:false, error: action.payload};
        default:
            return state;
    }
}

export {productListReducer}