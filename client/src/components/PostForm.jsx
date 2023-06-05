// Dependencies
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// Hooks
import { usePostsContext } from "../hooks/usePostsContext";
import { useAuthContext } from "../hooks/useAuthContext";

const PostForm = () => {
  const navigate = useNavigate();
  const { dispatch } = usePostsContext();
  const { user } = useAuthContext();

  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [isPrivate, setIsPrivate] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      setError("You must be logged in");
      return;
    }

    const post = { username, description, isPrivate };
    console.log(post);

    const response = await fetch("http://localhost:5000/api/posts", {
      method: "POST",
      body: JSON.stringify(post),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setUsername("");
      setDescription("");
      setError(null);
      console.log("New post added", response);
      dispatch({ type: "CREATE_POST", payload: json });
    }
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <h3 className="font-bold text-lg">Add a new bark</h3>

      <div className="mb-5">
        <label className="block">Bark your heart out!</label>
        <textarea
          className="border-2 area h-36 w-60 rounded-md"
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
      </div>
      <div className="mb-5">
        <label className="block">Visibility:</label>
        <div className="flex items-center">
          <input
            className="mr-2"
            type="radio"
            id="public"
            name="visibility"
            checked={!isPrivate}
            onChange={() => setIsPrivate(false)}
          />
          <label htmlFor="public" className="mr-4">
            Public
          </label>
          <input
            className="mr-2"
            type="radio"
            id="private"
            name="visibility"
            checked={isPrivate}
            onChange={() => setIsPrivate(true)}
          />
          <label htmlFor="private">Private</label>
        </div>
      </div>

      <button onClick={() => navigate("/")} className="border-2 w-28 rounded-lg py-1 px-2">
        Post
      </button>
      {error && <div className="border-2 bg-red-300 p-3">{error}</div>}
    </form>
  );
};

export default PostForm;
