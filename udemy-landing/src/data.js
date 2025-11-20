// src/data.js
// All dummy data stored here for reuse
export const NAV = [
    { label: 'Categories', href: '#' },
    { label: 'Udemy Business', href: '#' },
    { label: 'Teach on Udemy', href: '#' },
    { label: 'Sign in', href: '#' },
    { label: 'Sign up', href: '#' },
];

export const HERO = {
    title: 'Learn the skills to drive your career forward',
    subtitle: 'Join millions of learners and gain new skills with expert-led online courses.',
    ctas: [
        { label: 'Get started', href: '#' },
        { label: 'Browse categories', href: '#' },
    ],
};

export const CATEGORIES = [
    { title: 'Development', courses: '180k', icon: '💻' },
    { title: 'Business', courses: '50k', icon: '📈' },
    { title: 'Finance & Accounting', courses: '18k', icon: '💰' },
    { title: 'IT & Software', courses: '40k', icon: '🖥️' },
    { title: 'Office Productivity', courses: '12k', icon: '📊' },
    { title: 'Personal Development', courses: '25k', icon: '🧭' },
];

export const COURSES = [{
        id: 1,
        title: 'The Complete JavaScript Course 2025: From Zero to Expert',
        instructor: 'Jonas Schmedtmann',
        rating: 4.7,
        reviews: 102345,
        price: '$14.99',
        image: null,
    },
    {
        id: 2,
        title: 'Python for Data Science and Machine Learning Bootcamp',
        instructor: 'Jose Portilla',
        rating: 4.6,
        reviews: 88321,
        price: '$12.99',
        image: null,
    },
    {
        id: 3,
        title: 'UI/UX Design with Figma: From Beginner to Advanced',
        instructor: 'DesignCourse',
        rating: 4.5,
        reviews: 45321,
        price: '$19.99',
        image: null,
    },
    {
        id: 4,
        title: 'React — The Complete Guide (incl Hooks, React Router)',
        instructor: 'Maximilian Schwarzmüller',
        rating: 4.8,
        reviews: 120987,
        price: '$16.99',
        image: null,
    },
];

export const TRUSTED = ['Google', 'Netflix', 'Udemy', 'Amazon', 'PayPal', 'Spotify'];