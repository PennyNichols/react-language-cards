import React, {useState} from 'react'

import Cards from '../Card/Cards'

const LanguageCards = () => {
    
        return(
                <Cards/>
            
        )
        

    // const renderCards = (props, index)=>{
    //     return (
    //         <div className='flippable-card-container' key='index'>
    //                 <Card style={{ width: '18rem' }}>
    //                     <Card.Img variant="top" src={props.img} />
    //                     <Card.Body>
    //                         <Card.Title>{props.name}</Card.Title>
    //                     </Card.Body>
    //                 </Card>
                
    //             <Card style={{ width: '18rem' }}>
    //                 <Card.Body>
    //                     <Card.Text>{props.options}</Card.Text>
    //                 </Card.Body>
    //             </Card>
                
                
    //         </div>
    //     )
    // }
    // return(
    //     <div className="flex">{languages.map(renderCards)}</div>
    // )
}

export default LanguageCards
