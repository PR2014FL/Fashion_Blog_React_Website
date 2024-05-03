import React from 'react'
import Brooklyn from '../Images/Brooklyn.png'

function BlogImage({src, alt}) {
  return (
    <div className="blogImage">
        <img src={Brooklyn} alt={"Women in an orange dress walking down a city street"} />
    </div>
  )
}

export default BlogImage