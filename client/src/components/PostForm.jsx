// Dependencies
import { useState } from "react"
import { usePostsContext } from "../hooks/usePostsContext";


const PostForm = () => {
    const {dispatch } = usePostsContext()

    const [username, setUsername] = useState("")
    const [description, setDescription] = useState("")
    // const [likes, setLikes] = useState(0)
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const post = {username, description}

        const response = await fetch("http://localhost:5000/api/posts", {
            method: "POST",
            body: JSON.stringify(post),
            headers: {
                "Content-Type": "application/json"
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
                <input className="border-2" type="text" 
                onChange={(e) => setUsername(e.target.value)} 
                value={username}
                />
            </div>

            <div className="mb-5">
                <label className="block">Description</label>
                <input className="border-2" type="text" 
                onChange={(e) => setDescription(e.target.value)} 
                value={description}
                />
            </div>

            <button className="border-2 w-28 rounded-lg py-1 px-2">Bark!</button>
            {error && <div>{error}</div>}
        </form>
    );
}

export default PostForm;