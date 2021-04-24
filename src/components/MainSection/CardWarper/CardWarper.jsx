import React from 'react';
import Card from '../../MainSection/Card/Card';
import './CardWarper.css';


function CardWarper({actors, inputVal, sortBy}) {

    const data =  Object.keys(actors).map((key, index)=>{            
        return actors[key]
      });

      //Filter
      const filtererdActors = data.filter(actor => 
        actor.firstName.toLowerCase().includes(inputVal.toLowerCase()) || 
        actor.lastName.toLowerCase().includes(inputVal.toLowerCase()));

        // Sort
        filtererdActors.sort((actor1, actor2) => {
            if (actor1[sortBy] > actor2[sortBy]) {
              return 1;
            } else if (actor1[sortBy] < actor2[sortBy]) {
              return -1;
            } else {
              return 0;
            }
          });
    
    const actorsCard = filtererdActors.map((actor, key) => <Card key={key} {...actor} birthDate={actor.ActorAge()} />)    
    

    if(actorsCard.length != 0 ) {
      return (
      <div className="CardWarper" >
          {actorsCard}           
      </div>
      )
    }else{
      return (
        <div className="NoData" >
           <h1>No Data</h1>          
        </div>
        )
    } 

 
}

export default CardWarper;