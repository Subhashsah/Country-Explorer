const countriesCard= document.querySelector('.countries-card')

fetch('https://restcountries.com/v3.1/all')
.then((res)=>res.json())
.then((data)=>{
    data.forEach((Country)=>{
        const countryCard = document.createElement('a')
        countryCard.classList.add('country-card')
        countryCard.href=`/country.html?name=${Country.name.common}` 
        countryCard.innerHTML= ` <img src="${Country.flags.svg}"alt="">
        <div class="card-content">
            <h3 class="countryName">${Country.name.common}</h3>
            <p><b>Population:</b></p>${Country.population.toLocaleString('en-IN')}
            <p><b>Region:</b>${Country.region}</p>
            <p><b>Capital:</b>${Country.capital}</p>
        </div>`
        countriesCard.appendChild(countryCard)
    })
        
    })




