import React from 'react'

function Search({handlesearch }) {
    return (
       <section className='searchbox-wrap'>
           <input type='text'placeholder='Search For a movie...'className='searchbox'onChange={(e)=>handlesearch(e)} />
       </section>
    )
}

export default Search
