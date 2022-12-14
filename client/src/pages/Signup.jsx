import { useState } from "react";
import { useSignup } from "../hooks/useSignup";


const Signup = () => {
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const {signup, error, isLoading} = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await signup(email, username, password)
    }

    return ( 
        <form className="flex flex-col align-middle w-4/5" onSubmit={handleSubmit}>
            <h3 className="font-bold text-2xl mb-4">Sign up</h3>

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

            <button disabled={isLoading} className="border-2 w-28 rounded-lg mb-3">Sign up</button>
            {error && <div className="border-2 bg-red-300 p-3">{error}</div>}
        </form>
    );
}

export default Signup;