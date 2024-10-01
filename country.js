const container = document.querySelector('.container')
const countryName = new URLSearchParams(location.search).get('name')
console.log(countryName)
const flagimg= document.querySelector('.details img')
const Name=document.querySelector('.details-text h1')
const nativename=document.querySelector('.nativeName')
const population =document.querySelector('.population')
const region =document.querySelector('.region')
const subregion =document.querySelector('.subregion')
const capital =document.querySelector('.capital')
const topl =document.querySelector('.top')
const curr =document.querySelector('.curr')
const lang =document.querySelector('.lang')
const anchor=document.querySelector('.anchor')
const back=document.querySelector('.back')



fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
.then((res)=>res.json())
.then(([country])=>{
   
    console.log(country)
    console.log(Object.values(country.languages
    ))
    const language= Object.values(country.languages).map((lan)=>(lan))
    console.log(language)
    const paisa = Object.values(country.currencies).map((curr) => curr.name);
    console.log(paisa);
    flagimg.src=country.flags.svg
    Name.innerText=country.name.common
    if(country.name.nativename){
        nativename.innerText=Object.values(country.name.nativename[0].common)
    }
    else{
        nativename.innerText=country.name.common
    }
    population.innerText=country.population.toLocaleString('en-IN')
    region.innerText=country.region;
    subregion.innerText=country.subregion;
    capital.innerText=country.capital;
    topl.innerText=country.tld.join(', ');
    curr.innerText=paisa;
    lang.innerText=language;
    back.addEventListener('click',()=>{
        history.back()
    })

    if(country.borders){
        country.borders.forEach((border)=>{
            console.log(border)
            fetch(`https://restcountries.com/v3.1/alpha/${border}`)
            .then((res)=>res.json())
            .then(([data])=>{
                console.log(data)
                const countryTag = document.createElement('a');
                countryTag.innerText=data.name.common;
                countryTag.href= `/country.html?name=${data.name.common}
`                
               anchor.appendChild(countryTag)

             
            })
        })
    
    }


    
 
})
