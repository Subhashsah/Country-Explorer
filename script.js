const countriesCard= document.querySelector('.countries-card')
const filterByRegion = document.querySelector('.filter-by-region')
const inputFiled=document.querySelector('.inputFiled')
const themechange=document.querySelector('.theme-change')

let allCountries;

fetch('https://restcountries.com/v3.1/all')
.then((res)=>res.json())
.then((data)=>{
    renderCountries(data)
    allCountries=data
})
    
filterByRegion.addEventListener('change',(e)=>{
fetch(`https://restcountries.com/v3.1/region/${filterByRegion.value}`)
.then((res)=>res.json())
.then(renderCountries)
})

inputFiled.addEventListener('input',(e)=>{
    const result=allCountries.filter((Country)=>Country.name.common.toLowerCase().includes(e.target.value.toLowerCase()))
    renderCountries(result)
})



function renderCountries(data){
    countriesCard.innerHTML='';
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
}

themechange.addEventListener('click',()=>{
    document.body.classList.toggle('dark')
})