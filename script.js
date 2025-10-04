// Course Data
const courses = [
  {
    id: 1,
    title: "Python Basics",
    description: "Learn the fundamentals of Python programming.",
    lessons: ["Introduction", "Variables", "Loops", "Functions"]
  },
  {
    id: 2,
    title: "Web Development",
    description: "Build websites with HTML, CSS, and JavaScript.",
    lessons: ["HTML Basics", "CSS Styling", "JavaScript Intro", "DOM Manipulation"]
  },
  {
    id: 3,
    title: "Data Science",
    description: "Explore data analysis and visualization techniques.",
    lessons: ["Data Cleaning", "Pandas Library", "Matplotlib", "Machine Learning Basics"]
  }
];

let completedCourses = [];

const courseListEl = document.getElementById("courseList");
const courseDetailEl = document.getElementById("courseDetail");

// Render Course List
function renderCourseList() {
  courseDetailEl.style.display = "none";
  courseListEl.style.display = "block";
  courseListEl.innerHTML = "<h2>Available Courses</h2>";

  courses.forEach(course => {
    const div = document.createElement("div");
    div.className = "course-card";
    div.innerHTML = `
      <h3>${course.title}</h3>
      <p>${course.description}</p>
      <p>Status: ${completedCourses.includes(course.id) ? "<span class='completed'>Completed ✅</span>" : "In Progress 📘"}</p>
    `;
    div.onclick = () => showCourseDetail(course.id);
    courseListEl.appendChild(div);
  });
}

// Show Course Detail
function showCourseDetail(id) {
  const course = courses.find(c => c.id === id);
  if (!course) return;

  courseListEl.style.display = "none";
  courseDetailEl.style.display = "block";

  let lessonsHtml = "<ul>";
  course.lessons.forEach(lesson => {
    lessonsHtml += `<li>${lesson}</li>`;
  });
  lessonsHtml += "</ul>";

  courseDetailEl.innerHTML = `
    <button class="back-btn" onclick="renderCourseList()">⬅ Back to Courses</button>
    <h2>${course.title}</h2>
    <p>${course.description}</p>
    <h3>Lessons</h3>
    ${lessonsHtml}
    <p>Status: ${completedCourses.includes(course.id) ? "<span class='completed'>Completed ✅</span>" : "In Progress 📘"}</p>
    <button onclick="markCompleted(${course.id})">Mark as Completed</button>
  `;
}

// Mark as Completed
function markCompleted(id) {
  if (!completedCourses.includes(id)) {
    completedCourses.push(id);
  }
  showCourseDetail(id);
}

// Initial Render
renderCourseList();
