import { AiOutlineHeart } from "react-icons/ai"

const PostDetails = ({ post }) => {
    return ( 
        <div className="workout-details bg-white py-3 px-6 shadow-md border rounded-lg mb-3">
            <h4 className="font-bold text-lg">{post.username}</h4>
            <p>{post.description}</p>
            <div className="flex justify-between mt-6">
                <div className="flex">
                    <AiOutlineHeart className="w-6 h-6"/>
                    <p className="text-xs">{post.likes}</p>
                </div>
                <p className="text-xs">{post.createdAt}</p>
            </div>
        </div>
    );
}

export default PostDetails;