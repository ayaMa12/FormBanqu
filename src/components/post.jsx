import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function Post({ posts, t }) {
  return (
    <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      {posts.map((post) => (
        <li key={post.id} style={{ listStyleType: "none" }}>
          <Link to={`/ayaMa12/MyRouter/Post/${post.id}`}>
            <Button variant="contained">{t(post.title)}</Button>
          </Link>
        </li>
      ))}
    </ul>
  );
}
