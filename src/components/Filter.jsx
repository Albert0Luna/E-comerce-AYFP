/* eslint-disable no-tabs */
import React, { useContext, useId } from 'react'
import { FiltersContext } from '../context/filter'
import '../styles/Filter.css'

export function Filter () {
  const selectID = useId()
  const rangeId = useId()

  const { filters, setFilters } = useContext(FiltersContext)

  const handleChangeRange = (event) => {
    const rangeSelected = event.target.value
    setFilters(prevState => ({
      ...prevState,
      minPrice: rangeSelected
    }))
  }

  const handleChangeCategory = (event) => {
    const categorySelected = event.target.value
    setFilters(prevState => ({
      ...prevState,
      category: categorySelected
    }))
  }

  return (
    <section>

			<div>
			<label htmlFor={rangeId} className='label-filter'>Min price</label>
				<input
				type="range"
				id={rangeId}
				min='0'
				max='2000'
				onChange={handleChangeRange}
				value={filters.minPrice}
				/>
				<span>$ {filters.minPrice}</span>
			</div>

			<div>
				<label htmlFor={selectID}>Category</label>
					<select
						id={selectID}
						value={filters.category}
						onChange={handleChangeCategory}
					>
						<option value="all" className='comer'>All</option>
						<option value="laptops">Laptops</option>
						<option value="smartphones">Smarphones</option>
					</select>
			</div>
		</section>
  )
}
