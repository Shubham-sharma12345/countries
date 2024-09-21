

const Card = ({name,flag,population,region,capital}) => {
    
  return (
    <div>
    <div>
    
       <img src={flag}  alt={name + ' Flag'}/>
       </div>
       <div>
           <h3> {name}</h3>
            <p>Population:{population}</p>
            <p> Region:{region}</p>
            <p>Capital:{capital}</p>
       </div>
    </div>
  )
}

export default Card