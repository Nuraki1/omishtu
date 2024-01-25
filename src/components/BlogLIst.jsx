import React from 'react'

function BlogLIst({blog, title}) {
    
  return (
    <div>
    
      <h1>{title}</h1>
      {
        blog.map((blog)=>(
            <div>
                <h2>{blog.company}</h2>
                <p>owned by {blog.name}</p>
                <p>whose profession is {blog.profession}</p>
            </div>
        ))
        }

       
    </div>
  )
}

export default BlogLIst
