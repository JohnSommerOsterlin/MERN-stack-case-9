// Icons
import { TiDeleteOutline} from "react-icons/ti"
import { AiOutlineHeart } from "react-icons/ai"

// Hooks
import { usePostsContext } from "../hooks/usePostsContext"



const PostDetails = ({ post }) => {
    const { dispatch } = usePostsContext()

    const handleClick = async () => {
        const response = await fetch("http://localhost:5000/api/posts/" + post._id, {
            method: "DELETE"
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({ type: "DELETE_POST", payload: json})
        }
    }

    return ( 
        <div className="post-details relative flex flex-col bg-white py-3 px-6 shadow-md border rounded-lg mb-3">
            <h4 className="font-bold text-lg">{post.username}</h4>
            <p>{post.description}</p>
            <div className="flex justify-between mt-6">
                <div className="flex">
                    <AiOutlineHeart className="w-6 h-6"/>
                    <p className="text-xs">{post.likes}</p>
                </div>
                <p className="text-xs">{post.createdAt}</p>
            </div>
            <TiDeleteOutline onClick={handleClick} className="absolute right-3 w-6 h-6 opacity-60"/>
        </div>
    );
}

export default PostDetails;