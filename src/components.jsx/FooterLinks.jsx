import React from 'react'

function FooterLinks({content}) {
  return (

    <div className="footerLinks">
       {content.map(link => { 
                // return console.log(link)
                return <a href="#">{link}</a>
            }            
            )}
    </div>
  )
}

export default FooterLinks