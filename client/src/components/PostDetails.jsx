

const PostDetails = ({ post }) => {
    return ( 
        <div className="workout-details bg-white p-3 shadow-md border rounded-lg mb-3">
            <h4 className="font-bold text-lg">{post.username}</h4>
            <p>{post.description}</p>
            <div className="flex justify-between mt-6">
                <p className="text-xs">{post.likes}</p>
                <p className="text-xs">{post.createdAt}</p>
            </div>
        </div>
    );
}

export default PostDetails;