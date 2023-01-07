import React from 'react'
import './styles/filterPrice.css'

const FilterPrice = ({setInputPrice}) => {

  const handleSubmit = e => {
    e.preventDefault()
    const inputFrom = +e.target.from.value
    const inputTo = +e.target.to.value
    if(inputFrom && inputTo){
      setInputPrice({
        from: inputFrom,
        to: inputTo
      })
    } else if (!inputFrom && inputTo) {
      setInputPrice({
        from: 0,
        to: inputTo
      })
    } else if (inputFrom && !inputTo) {
      setInputPrice({
        from: inputFrom,
        to: Infinity
      })
    } else {
      setInputPrice({
        from: 0,
        to: Infinity
      })
    }
  }

  return (
    <section className='filter_price'>
      <h2 className='filter_header'>Price</h2>
      <form className='filter_form_container' onSubmit={handleSubmit}>
        <div className='filter_form'>
          <label className='filter_form_label' htmlFor="from">From</label>
          <input className='filter_form_input' type="number" id='from' />
        </div>
        <div className='filter_form'>
          <label className='filter_form_label' htmlFor="to">To</label>
          <input className='filter_form_input' type="number" id='to' />
        </div>
        <button className='filter_btn'>Apply</button>
      </form>
    </section>
  )
}

export default FilterPrice