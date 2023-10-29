import React from 'react'
import { useNavigate } from 'react-router-dom'

const CardCourses = ({id, title}) => {
  const navigate = useNavigate
  return (
    <div>
      <div id={id}
      onClick={()=> navigate('/course-detail')}
      className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
        </a>
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Available
          </p>
        </div>
      </div>
    </div>
  )
}

export default CardCourses