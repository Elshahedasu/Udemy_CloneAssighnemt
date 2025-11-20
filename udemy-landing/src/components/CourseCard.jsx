import React from 'react';


export default function CourseCard({ course }) {
return (
<article className="card course-card">
<div className="thumb">📘</div>
<div className="course-body">
<h3 className="course-title">{course.title}</h3>
<div className="course-instructor">{course.instructor}</div>
<div className="course-meta">
<span>⭐ {course.rating}</span>
<span>({course.reviews.toLocaleString()})</span>
<strong className="price">{course.price}</strong>
</div>
</div>
</article>
);
}


