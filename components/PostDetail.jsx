import React from 'react'

const PostDetail = ({ post }) => {
  return (
    <div className='bg-white shadow-lg rounded lg:p-8 pb-12 mb-8'>
        <div className='relitive overflow-hidden shadow-md mb-6'>
            <img 
                src={post.featuredImage.url}
                alt={post.title}
                className='object-top height-full width-full rounded-t-lg'
            />
        </div>
    </div>
  )
}

export default PostDetail