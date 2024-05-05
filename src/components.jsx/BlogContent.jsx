import React from 'react'

function BlogContent({content}) {
  return (
    <article className="blogContent">
       <p>{content.parag}</p>
    </article>
  )
}

export default BlogContent