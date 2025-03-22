import Content from "./Content";
import Header from "./Header";
import Total from "./Total";

const Course = ({ course }) => (
  <div>
    <Header course={course.name} />
    <Content parts={course.parts} />
    <Total total={course.parts} />
  </div>
);

export default Course;
