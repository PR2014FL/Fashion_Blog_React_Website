import React from 'react'

function NavBar() {

    const links = ["Women's", "Men's", "On the Street", "The Catwalk", "AdWatch", "About"];
  return (


    <div>
        <div className='navBar'>

            <a href="#">{links[0]}</a>
            <a href="#">{links[1]}</a>
            <a href="#">{links[2]}</a>
            <a href="#">{links[3]}</a>
            <a href="#">{links[4]}</a>
            <a href="#">{links[5]}</a>
            {/* {links.map(link => { 
                return console.log(link)
                // return <a href="#">{link}</a>
            }            
            )} */}
        </div>
    </div>
  )
}

export default NavBar