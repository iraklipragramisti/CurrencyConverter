import React from 'react'

const CurrencyRow = (props) => {
  const {
    currencyOptions,
    selectedCurrency,
    onChangeCurrency,
    onChangeAmount,
    amount
  } = props

  return (
    <div>
      <input type="number" className="border-2 border-black rounded-lg p-1 font-serif" value={amount} onChange={onChangeAmount}/>
      <select className="m-2 border border-gray-400" value={selectedCurrency} onChange={onChangeCurrency}>
        {currencyOptions.map(option => (
        <option key={option} value={option}>{option}</option>))}
      </select>
    </div>
  )
}

export default CurrencyRow
