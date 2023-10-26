import React from 'react'

const CourseSearch = () => {
  
  return (
    <div>
      <Navbar/>
      <h1>Courses</h1>

      <div className='filter'>
        
      </div>

      {courses.map((course) => (
        <Card key={course.id} course={course} />
      ))}
    </div>
  )
}

export default CourseSearch