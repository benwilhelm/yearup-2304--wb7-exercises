const params = new URLSearchParams(location.search);
const courseId = params.get('courseId');

// fetch() course info

const span = document.querySelector('h1 span');
span.innerHTML = `Course ${courseId}`;
