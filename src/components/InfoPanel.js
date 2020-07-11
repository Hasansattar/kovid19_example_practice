import React  from 'react';
 import GlobalRecord from './GlobalRecord' 
 import AllCountries from './AllCountries'

function InfoPanel({currentScreen}) {

     if(currentScreen===0)
     return <GlobalRecord/>
     if(currentScreen===1)
     return  <AllCountries/>

     else return <GlobalRecord/>


    
   // return (   

       // <div>
        //     <GlobalRecord/>
       // </div>
   // )
        
}

export default InfoPanel;