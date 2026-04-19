import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

export default function ErrorPage({title}) {
  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "20px" }}>
       {title}
      </h1>
      <p style={{ marginBottom: "20px", fontSize: "1.2rem" }}>
        اتأكد إن الرابط اللي دخلتيه صحيح.
      </p>

      <Link to="/ayaMa12/MyRouter">
        <Button variant="contained" color="primary">
          الرجوع للصفحة الرئيسية
        </Button>
      </Link>
    </div>
  );
}
