import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getAllProducts, getProductsByCategory } from '../../store/slices/products.slice'
import './styles/filterCategory.css'

const FilterCategory = (setInputValue) => {

    const [categories, setCategories] = useState()

    useEffect(() => {
        const URL = 'https://e-commerce-api.academlo.tech/api/v1/products/categories'
        axios.get(URL)
            .then(res => setCategories(res.data.data.categories))
            .catch(err => console.log(err))
    }, [])

    const dispatch = useDispatch()

    const handleClick = id => {
        dispatch(getProductsByCategory(id))
    }

    const handleAllProducts = () => {
        dispatch(getAllProducts())
    }

    return (
        <section className='filter_category'>
            <h3 className='filter_header'>Categories</h3>
            <div className="category_list">
            <ul>
                <li className='list_items' onClick={ handleAllProducts }>All products</li>
                {
                    categories?.map(category => (
                        <li className='list_items' onClick={() => handleClick(category.id)} key={category.id}>{category.name}</li>
                        ))
                    }
            </ul>
            </div>
        </section>
    )
}
export default FilterCategory