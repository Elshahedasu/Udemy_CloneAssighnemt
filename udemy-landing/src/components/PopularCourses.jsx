import React from 'react';
import { COURSES } from '../data';
import CourseCard from './CourseCard';


export default function PopularCourses() {
return (
<section className="container courses">
<h2>Popular on Udemy</h2>
<div className="grid courses-grid">
{COURSES.map((c) => (
<CourseCard key={c.id} course={c} />
))}
</div>
</section>
);
}