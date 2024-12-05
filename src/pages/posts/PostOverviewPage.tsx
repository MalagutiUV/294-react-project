import { useEffect, useState } from "react";

import { Loader2Icon } from "lucide-react";
import Navbar from "../../components/layout/Navbar";
import PostItem from "../../components/posts/PostItem";
import { useNavigate } from "react-router";

export interface IPostOverviewPageProps {}

const PostOverviewPage: React.FC<IPostOverviewPageProps> = (props) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const token = localStorage.getItem("muv-token");
      console.log(token);
      if (token === null) {
        navigate("/login");
      }

      const response = await fetch(
        "https://react-vid-app.vercel.app/api/posts",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 401) {
        navigate("/login");
      }
      const data = await response.json();
      setPosts(data);
      setIsLoading(false);
    };
    fetchData();
  }, []);
  console.log(posts);
  return (
    <>
      <Navbar />
      <h1>Feed</h1>
      {isLoading ? (
        <>
          <Loader2Icon className='w-6 h-6 animate-pulse' />
        </>
      ) : (
        <>
          {posts.map((entry: any) => (
            <PostItem postItem={entry} />
          ))}
        </>
      )}
    </>
  );
};

export default PostOverviewPage;
