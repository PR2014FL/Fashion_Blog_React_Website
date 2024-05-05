import React from 'react'

function BlogTitle({content}) {
  return (
    <div className="blogTitle">
        <h3>{content.date}</h3>
        <h1>{content.title}</h1>
    </div>
  )
}

export default BlogTitle