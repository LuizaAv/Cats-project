import React from "react"


function Categories({cats}){


    return(
        <div className="mainContainer">
            {
            cats.map( cat => 
                <img 
                src={cat.url}
                height= "500px"
                width="500px"
                key={cat.id}
                ></img>
            )
          }
        </div>
    )
}

export default Categories