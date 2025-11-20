import React from 'react';
import { CATEGORIES } from '../data';


export default function Categories() {
return (
<section className="categories container">
<h2>Popular categories</h2>
<div className="grid categories-grid">
{CATEGORIES.map((c) => (
<div className="card category-card" key={c.title}>
<div className="cat-icon">{c.icon}</div>
<div>
<div className="cat-title">{c.title}</div>
<div className="cat-sub">{c.courses} courses</div>
</div>
</div>
))}
</div>
</section>
);
}