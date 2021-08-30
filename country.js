const lodeCountrys=()=>{
               fetch('https://restcountries.eu/rest/v2/all')
               .then(res=>res.json())
               .then(data=>displayCountry(data))
}
lodeCountrys();
const displayCountry=(countrys)=>{
               const countryDiv=document.getElementById('countrys')
               // for(const country of countrys)
               // console.log(country)
               countrys.forEach(country => {
                             // console.log(country)
                             const div=document.createElement('div')
                             div.classList.add('country')
                             div.innerHTML=`
                             <h4>${country.name}</h4>
                             <p>${country.capital}</p>
                             <button onclick="lodeCountryDtails('${country.name}')">button</button>
                             `
                              
                              countryDiv.appendChild(div);
                         console.log(country.name)     
               });
}
const lodeCountryDtails=name=>{
               const url=`https://restcountries.eu/rest/v2/name/${name}`
               fetch(url)
               .then(res=>res.json())
               .then(data=>allInformathiom(data[0]))
}
const allInformathiom=country=>{
               //console.log(country);
               const divCountry=document.getElementById('county-info')

               divCountry.innerHTML=`
               <img width="100px" src="${country.flag}" alt="">
               <h4>${country.name}</h4>
               <h4>region:${country.region}</h4>
               <p>population:${country.population}</P>
               `
}

