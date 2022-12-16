// Hooks
import { useEffect } from "react";
import { usePostsContext } from "../hooks/usePostsContext";
import { useAuthContext } from "../hooks/useAuthContext"


// Components
import PostDetails from "../components/PostDetails";
import PostForm from "../components/PostForm";


const Home = () => {
    const {posts, dispatch} = usePostsContext()
    const {user} = useAuthContext()

    useEffect(() => {
        const fetchPost = async () => {
            const response = await fetch("http://localhost:5000/api/posts", {
                headers: {
                    "Authorization": `Bearer ${user.token}` 
                }
            })
            const json = await response.json()

            if (response.ok) {
                dispatch({type: "SET_POSTS", payload: json})
            }
        }

        if (user) {
            fetchPost()
        }
        
    }, [dispatch, user])


    return ( 
        <div className="home w-11/12 max-w-2xl">
            <div className="posts ">
                {posts && posts.map((post) => (
                    <PostDetails key={post._id} post={post} />
                ))}
            </div>
            <PostForm />
        </div>
    );
}

export default Home;
