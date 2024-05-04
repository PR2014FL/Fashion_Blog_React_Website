import React from 'react'

function NavBar({content}) {

    
  return (
    <div>
        <div className='navBar'>
            {/* <a href="#">{navLinks[0]}</a>
            <a href="#">{navLinks[1]}</a>
            <a href="#">{navLinks[2]}</a>
            <a href="#">{navLinks[3]}</a>
            <a href="#">{navLinks[4]}</a>
            <a href="#">{navLinks[5]}</a> */}
            {content.map(link => { 
                // return console.log(link)
                return <a href="#">{link}</a>
            }            
            )}
        </div>
    </div>
  )
}

export default NavBar