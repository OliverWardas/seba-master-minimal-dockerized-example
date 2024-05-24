import {AppBar, Box, Button, TextField, Toolbar} from "@mui/material";
import {AccountBalance} from "@mui/icons-material";
import {Link, useNavigate} from "react-router-dom";

function TopBar({itemcount}) {
    const navigate = useNavigate();

    function navigateToShoppingList(){
        navigate("/App")
    }

    return (
        <AppBar position="sticky">
            <Toolbar>
                <Link to={"/"} >
                    <AccountBalance/>
                </Link>
                <Button variant="filled" sx={{marginLeft: "20px"}} onClick={navigateToShoppingList}>Shopping List</Button>
                <span>Items: {itemcount}</span>
            </Toolbar>
        </AppBar>
    );
}

export default TopBar;
