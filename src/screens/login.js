import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import SMButton from "../components/SMButton";
import {logInUser} from "../config/firebasemethods"

function Login() {

    const [model, setModel] = useState({});


    let userLogIn = (model) => {
        logInUser(model)
            .then(() => {
                console.log("Login successfull")
            })
            .catch(() => {
                console.log("Login unsuccessful")
            })
    }


    return (

        <Box>
            <Box>
                <Typography>Login</Typography>
            </Box>
            <Box>
                <input type="text" placeholder="Enter email" onChange={(x) => setModel({ ...model, email: x.target.value })} />
            </Box>
            <Box>
                <input type="text" placeholder="Enter password" onChange={(x) => setModel({ ...model, password: x.target.value })} />
            </Box>
            <SMButton label="Submit" onClick={()=>userLogIn(model)} />
        </Box>
    )
}

export default Login;