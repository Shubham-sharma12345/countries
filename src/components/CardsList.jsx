
import CountriesData from '../CountriesData'
import Card from './Card'

const CardsList = ({Query}) => {
  return (
    <div>
      {CountriesData
        
          .filter((country) =>
            country.name.common.toLowerCase().includes(Query)
          ).map((country) => {
        return (
            <Card
                key={country.name.common}
                name={country.name.common}
                flag={country.flags.svg}
                population={country.population}
                region={country.region}
                capital={country.capital?.[0]}
              />
        )
      })}
    </div>
  )
}

export default CardsList
