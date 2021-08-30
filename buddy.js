const lodeBuddies=()=>{
               fetch('https://randomuser.me/api/?results=5')
               .then(res=>res.json())
               .then(data=>DisplayBuddies(data))
}
lodeBuddies();
const DisplayBuddies=(buddy)=>{
               const buddies =buddy.results;
               const DivBuddy =document.getElementById('buddies')
               // DivBuddy.innerText=buddy.email;
               for(const buddy of buddies){
                              console.log(buddy.name.first,buddy.name.last)
                              const p=document.createElement('p')
                              p.style.border='1px solid red'
                              p.innerText=` name:${buddy.name.title} ${buddy.name.first}${buddy.name.last}`;
                              DivBuddy.appendChild(p)
               }


               // https://randomuser.me/documentation
}