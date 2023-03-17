import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import SMButton from "../components/SMButton";
import {signUpUser} from "../config/firebasemethods"

function SignUp() {

    const [model, setModel] = useState({});


    let userSignUp = (model) => {
        signUpUser(model)
            .then(() => {
                console.log("Sign up successfull")
            })
            .catch((err) => {
                console.log(err.message)
            })
    }


    return (

        <Box>
            <Box>
                <Typography>Sign Up</Typography>
            </Box>
            <Box>
                <input type="text" placeholder="Enter email" onChange={(x) => setModel({ ...model, email: x.target.value })} />
            </Box>
            <Box>
                <input type="text" placeholder="Enter password" onChange={(x) => setModel({ ...model, password: x.target.value })} />
            </Box>
            <SMButton label="Submit" onClick={()=>userSignUp(model)} />
        </Box>
    )
}

export default SignUp;