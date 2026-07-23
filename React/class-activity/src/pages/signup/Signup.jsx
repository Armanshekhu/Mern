import "./signup.css";

function Signup() {
    return (
        <div className="signup-container">
            <p>This is Signup Page</p>
            <input type='text' placeholder="Enter First Name" />
            <input type='text' placeholder="Enter Last Name" />
            <input type='email' placeholder="Enter email" />
            <input type='password' placeholder="Enter password" />
        </div>
    )
}

export default Signup;