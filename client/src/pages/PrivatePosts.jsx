import { usePostsContext } from "../hooks/usePostsContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import BottomNavbar from "../components/BottomNavbar";
import PostDetails from "../components/PostDetails";

const PrivatePosts = () => {
  const { posts, dispatch } = usePostsContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("http://localhost:5000/api/posts");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_POSTS", payload: json });
      }
    };
    fetchPosts();
  }, [dispatch]);

  // Checking if currently signed in user is the same that created the posts
  const userPosts = posts.filter((post) => post.isPrivate && post.postedBy?.username === user?.username);


    // console.log(user)

  return (
    <div className="home w-11/12 max-w-2xl">
      
          {userPosts.map((post) => (
            <PostDetails key={post._id} post={post} />
          ))}

      <BottomNavbar>
        <Link to="/">
          <button className="bg-blue-700 px-10 h-12 rounded-full mt-4 text-white ">
            Public Posts
          </button>
        </Link>
      </BottomNavbar>
    </div>
  );
};

export default PrivatePosts;
