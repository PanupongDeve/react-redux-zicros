import ProductOTS from '.././../DataHelper/ObjectToStore/ProductOTS';
import model from '../../model';

export const getProductsWithSocket = () => async (dispatch) => {
    const reciveDataFunction = (products) => {
        products = products.filter(product => product.status === "active");
        ProductOTS.toDispatch(ProductOTS.fetchProducts, products)(dispatch);
    };

    await model.product.getWithSocket(reciveDataFunction);
};