import React from 'react'


function BlogImage({src, alt}) {
  return (
    <div className="blogImage">
        <img src={src} alt={alt.imageAlt} />
    </div>
  )
}

export default BlogImage