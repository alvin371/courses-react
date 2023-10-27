import React from 'react'
import Navbar from '../../components/Navbar'
import CardCourses from '../../components/Card'


const CourseSearch = () => {

  const courses = [
    {
        id : 1,
        title :'something1'
    },
    {
        id : 2,
        title : 'something2'
    }
]

  return (
    <div>
      <Navbar/>
      <h1>Courses</h1>

      <div className='filter'>
        
      </div>

      {courses.map((value) => (
        <div key={value.id}>
        <CardCourses id={value.id} title={value.title} />
        </div>
      ))}
    </div>
  )
}

export default CourseSearch