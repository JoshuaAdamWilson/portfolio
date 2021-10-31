import sanityClient from '../../client.js';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const AllPosts = () => {
  const [ allPostsData, setAllPosts ] = useState(null);

  useEffect(() => {
    const getData = () => {
      sanityClient
        .fetch(
          `*[_type == "post"]{
            title,
            slug,
            publishedAt,
            mainImage{
                asset->{
                _id,
                url
              }
            }
          }`
        )
        .then((data) => setAllPosts(data))
        .catch(console.error)
        console.log(allPostsData)
    }
    getData()
    
  }, [allPostsData]);

  return (
    <div className='blog'>
      <div className="bg-green-100 min-h-screen p-12">
        <div className="container mx-auto">
          <h2 id="blog" className="text-5xl flex justify-center cursive">Blog Posts</h2>
          <h3 className="text-lg text-gray-600 flex justify-center mb-12">
            Welcome to my blog posts page!
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPostsData &&
              allPostsData.sort((a, b) => a.publishedAt > b.publishedAt ? 1 : -1)
              .map((post, index) => (
                <Link to={"/blog/" + post.slug.current} key={post.slug.current}>
                  <span
                    className="block h-64 relative rounded shadow leading-snug bg-white
                        border-l-8 border-blue-400"
                    key={index}
                  >
                    
                    <img
                      className="w-full h-full rounded-r object-cover absolute"
                      src={post.mainImage.asset.url}
                      alt=""
                    />
                    
                    <span
                      className="block relative h-full flex justify-end items-end pr
                        -4 pb-4"
                    >
                      <h3 
                        className="block absolute top-0 left-0 text-gray-600 text-sm font-bold px-2 py-2 bg-teal-700
                          text-red-100 bg-opacity-75 rounded z-1000"
                      >
                        {post.publishedAt.slice(5, 10) + "-" + post.publishedAt.slice(0, 4)}
                      </h3>
                      <h2
                        className="text-gray-800 text-lg font-bold px-3 py-4 bg-teal-700
                          text-red-100 bg-opacity-75 rounded"
                      >
                        {post.title}
                      </h2>
                    </span>
                  </span>
                </Link>
              )).reverse()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllPosts
