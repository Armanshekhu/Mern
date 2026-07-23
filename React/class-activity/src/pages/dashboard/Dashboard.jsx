import CardComponent from "../../components/cardComponent/CardComponent";
import courses from "../../data/courses";
import "./dashboard.css";

function Dashboard() {
    return (
        <div>
            <p>This is Dashboard Page</p>
            <div className="card-grid">
                {courses.map((course) => (
                    <CardComponent
                        key={course.id}
                        image={course.image}
                        title={course.title}
                        instructor={course.instructor}
                        price={course.price}
                        level={course.level}
                    />
                ))}
            </div>
        </div>
    );
}

export default Dashboard;