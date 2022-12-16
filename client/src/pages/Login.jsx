import { useState } from "react"
import { Link } from "react-router-dom"
import { useLogin } from "../hooks/useLogin"


const Login = () => {

    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const {login, error, isLoading} = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await login(email, username, password)
    }
    return (  
        <form className="flex flex-col align-middle w-4/5" onSubmit={handleSubmit}>
            <h3 className="font-bold text-2xl mb-4">Log in</h3>

            <label>Email:</label>
            <input
                className="border-2"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email} 
            />
            <label>Username:</label>
            <input
                className="border-2" 
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                value={username} 
            />
            <label>Password:</label>
            <input 
                className="border-2"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password} 
            />
            <p className="mb-6">Dont have an account? Register <Link className="text-blue-600 underline" to="/signup">here</Link></p>

            <button disabled={isLoading} className="border-2 w-28 rounded-lg">Log in</button>
            {error && <div>{error}</div>}
        </form>
    );
}

export default Login;