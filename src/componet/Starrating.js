import React from 'react'

export default function starsrating({starsrate , handlestar= ()=>{} } ){
    
    const count=(rate)=> { let stars=[]
    for ( let i=0;i<5;i++){
        if(i<rate)
        stars.push(<span className='golden'onClick={()=>handlestar(i+1)}>★</span>)
        else{
            stars.push(<span className='normal'onClick={()=>handlestar(i+1)}>☆</span>)
        }
    } return stars
}



    return (
        <div>
           {count(starsrate)} 
        </div>
    )
}
