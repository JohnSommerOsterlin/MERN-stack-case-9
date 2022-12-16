// Dependencies
import { useState } from "react"

// Hooks
import { usePostsContext } from "../hooks/usePostsContext";
import { useAuthContext } from "../hooks/useAuthContext";


const PostForm = () => {
    const { dispatch } = usePostsContext()
    const {user} = useAuthContext()

    const [username, setUsername] = useState("")
    const [description, setDescription] = useState("")
    // const [likes, setLikes] = useState(0)
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!user) {
            setError("You must be logged in")
            return
        }

        const post = {username, description}

        const response = await fetch("http://localhost:5000/api/posts", {
            method: "POST",
            body: JSON.stringify(post),
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${user.token}` 
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setUsername("")
            setDescription("")
            setError(null)
            console.log("New post added", response)
            dispatch({type: "CREATE_POST", payload: json})
        }
    }



    return (  
        <form className="flex flex-col" onSubmit={handleSubmit}>
            <h3 className="font-bold text-lg">Add a new bark</h3>

            <div className="mb-5">
                <label className="block">Username</label>
                <input className="border-2 rounded-md" type="text" 
                onChange={(e) => setUsername(e.target.value)} 
                value={username}
                />
            </div>

            <div className="mb-5">
                <label className="block">Bark your heart out!</label>
                <textarea className="border-2 area h-36 w-60 rounded-md" type="text" 
                onChange={(e) => setDescription(e.target.value)} 
                value={description}
                />
            </div>

            <button className="border-2 w-28 rounded-lg py-1 px-2">Post</button>
            {error && <div className="border-2 bg-red-300 p-3">{error}</div>}
        </form>
    );
}

export default PostForm;