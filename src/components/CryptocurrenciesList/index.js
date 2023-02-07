import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

const CryptocurrenciesList = props => {
  const {currencyList} = props
  return (
    <div className="currency-list-bg-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
        alt="cryptocurrency"
        className="currency-main-image"
      />
      <ul className="currency-list-container">
        <li className="table-header">
          <p className="table-header-text-1">Coin Type</p>
          <p className="table-header-text-2">USD</p>
          <p className="table-header-text-3">EURO</p>
        </li>
        {currencyList.map(eachCurrency => (
          <CryptocurrencyItem
            currencyDetails={eachCurrency}
            key={eachCurrency.id}
          />
        ))}
      </ul>
    </div>
  )
}

export default CryptocurrenciesList
