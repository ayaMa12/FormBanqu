import { useParams } from "react-router-dom";
import ErrorPage from "./eroor";

export default function PostDetails({ posts }) {
  const { id } = useParams();
  const post = posts.find((p) => p.id === Number(id));

  return (
    <>
    
      <h2>{post ? post.discription :  <ErrorPage title="هذا البوست  غير وجودة" />}</h2>
     
    </>
  );
}
