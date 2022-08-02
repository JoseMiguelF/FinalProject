//Store
import { configureStore } from '@reduxjs/toolkit'
import logInSlice from './slices/logIn.slice'
import isLoading from './slices/isLoading.slice'
import productsSlice from './slices/products.slice'

export default configureStore({
    reducer: {
        log:logInSlice,
        loading: isLoading,
        products: productsSlice
    }
})

//Los slices se deben importar sin {}
