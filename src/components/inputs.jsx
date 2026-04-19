import TextField from "@mui/material/TextField";
import { useContext } from "react";
import { All_Data } from "./context";
export default function Input() {
const {id, type, variant, value,Change  }= useContext(All_Data)
    return(
        <TextField
                 id={id}
                 type={type}
                 variant= {variant}
                 value={value}
                 onChange={(e) => Change( e.target.value )}
                 fullWidth
                />
    )
}