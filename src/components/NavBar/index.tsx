import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Slide from "@mui/material/Slide";
import {Link} from "react-router-dom";


export const NavBar = () => {
    const navbarStyle = {
        position: "fixed",
        top: 0,
        right: 0,
        height:60,
        zIndex: 1000, // You can adjust this value as needed
        justifyContent: "flex-start",
        backgroundColor: "rgba(255, 255, 255, 0.17)", // Semi-transparent background
    };

    const linkStyle = {
        textDecoration: "none",
        color: "#bc8729",
        fontWeight: "bold",
    };

    return (
        <Slide direction="down" in={true} mountOnEnter unmountOnExit>
            <AppBar sx={navbarStyle}>
                <Toolbar>
                    <Button color="inherit">
                      <Link to="/" style={linkStyle}>Home</Link>
                    </Button>        
                    <Button color="inherit">
                      <Link to="/address" style={linkStyle}>Events</Link>
                    </Button>
                    <Button color="inherit">
                      <Link to="/photos" style={linkStyle}>Photos</Link>
                    </Button>
                    <Button color="inherit">
                        <Link to="/story" style={linkStyle}>Our Story</Link>
                    </Button>
                    <Button color="inherit">
                      <Link to="/rsvp" style={linkStyle}>RSVP</Link>
                    </Button>
                </Toolbar>
            </AppBar>
        </Slide>
    );
};
