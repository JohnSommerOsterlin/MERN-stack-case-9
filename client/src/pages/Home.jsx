// Dependencies
import { Link } from "react-router-dom"

// Hooks
import { useEffect } from "react";
import { usePostsContext } from "../hooks/usePostsContext";



// Components
import PostDetails from "../components/PostDetails";
import PostForm from "../components/PostForm";
import { useAuthContext } from "../hooks/useAuthContext";
import BottomNavbar from "../components/BottomNavbar";


const Home = () => {
    const {posts, dispatch} = usePostsContext()
    const { user } = useAuthContext();

    console.log(posts)

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch("http://localhost:5000/api/posts")
            const json = await response.json()

            if (response.ok) {
                dispatch({type: "SET_POSTS", payload: json})
            }
        }
            fetchPosts()
    }, [dispatch])

    const notPrivatePost = posts.filter((post) => !post.isPrivate);
    console.log(notPrivatePost)

    return ( 
        <div className="home w-11/12 max-w-2xl pb-20">
            <div className="posts ">
                {notPrivatePost.map((post) => (
                    <PostDetails key={post._id} post={post} />
                ))}
            </div>
            <PostForm />
                {user && (
                    <BottomNavbar>
                        <Link to="/private-posts">
                            <button className="bg-blue-700 px-10 h-12 rounded-full mt-4 text-white ">Private posts</button>
                        </Link>
                    </BottomNavbar>
                )}
        </div>
    );
}

export default Home;
