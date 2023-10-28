import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CourseDetail = () => {
  const [courseData, setCourseData] = useState(null);

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        const response = await axios.get('URL_MOCKAPI');
        setCourseData(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchCourseData();
  }, []);

  const handleBack = () => {
    history.push('/courses');
  };

  return (
    <div className="container mx-auto my-8">
      {courseData ? (
        <div>
          <h2 className="text-3xl font-bold mb-4">{courseData.title}</h2>
          <p>Type: {courseData.type}</p>
          <p>Duration: {courseData.duration}</p>
          <p>Accent: {courseData.accent}</p>
          <p>Facility: {courseData.facility}</p>
          <p>Description: {courseData.description}</p>
          <p>Contact: {courseData.contact}</p>

          <button
            onClick={handleBack}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded focus:outline-none focus:shadow-outline"
          >
            Back to Courses
          </button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CourseDetail;