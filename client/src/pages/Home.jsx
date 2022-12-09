// Hooks
import { useEffect } from "react";
import { usePostsContext } from "../hooks/usePostsContext";


// Components
import PostDetails from "../components/PostDetails";
import PostForm from "../components/PostForm";


const Home = () => {
    const {posts, dispatch} = usePostsContext()

    useEffect(() => {
        const fetchPost = async () => {
            const response = await fetch("http://localhost:5000/api/posts")
            const json = await response.json()

            if (response.ok) {
                dispatch({type: "SET_POSTS", payload: json})
            }
        }

        fetchPost()
    }, [])


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
