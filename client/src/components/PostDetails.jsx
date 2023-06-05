import { useState } from "react"

// Icons
import { TiDeleteOutline} from "react-icons/ti"
import { AiOutlineHeart } from "react-icons/ai"
import { BiPencil } from "react-icons/bi"

// Hooks
import { usePostsContext } from "../hooks/usePostsContext"
import { useAuthContext } from "../hooks/useAuthContext"

import EditPostForm from "./EditPostForm"

const PostDetails = ({ post }) => {
    const { dispatch } = usePostsContext()
    const { user } = useAuthContext()

    const isPrivate = post?.isPrivate 
    console.log(isPrivate)


    const [isEditing, setIsEditing] = useState(false)

    const handleDelete = async () => {
        if(!user) {
            return
        }
        const response = await fetch(`http://localhost:5000/api/posts/${post._id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${user.token}` 
            }
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({ type: "DELETE_POST", payload: json})
        }
    }



    return ( 
        <div className="post-details relative flex flex-col bg-white py-3 px-6 shadow-md border rounded-lg mb-3">
            <h4 className="font-bold text-lg">{post.postedBy.username}</h4>

            {isEditing ? (<EditPostForm post={post}/>
            ) : (
            <div>
            <p>{post.description}</p>
            <BiPencil onClick={() => setIsEditing(true)} className="absolute top-3 right-10 w-5 h-6 opacity-60"/>
            </div>
            )}

            {isPrivate && (
                <p className="text-sm text-gray-600 absolute right-16 top-3 italic">private</p>
            )}
            <div className="flex justify-between mt-6">
                <div className="flex">
                    <AiOutlineHeart className="w-6 h-6"/>
                    <p className="text-xs">{post.likes}</p>
                </div>
                <p className="text-xs">{post.createdAt}</p>
            </div>
            <TiDeleteOutline onClick={handleDelete} className="absolute right-3 w-6 h-6 opacity-60"/>
        </div>
    );
}

export default PostDetails;