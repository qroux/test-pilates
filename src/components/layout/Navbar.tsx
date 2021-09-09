import {
  AppBar,
  Button,
  FormControlLabel,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
} from "@material-ui/core";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import MenuIcon from "@material-ui/icons/Menu";

const Navbar = () => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState(null);

  const buttons = [
    { label: "Inscription", path: "/register" },
    { label: "Connexion", path: "/login" },
  ];

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (redirection?: string) => {
    if (redirection) router.push(redirection);
    setAnchorEl(null);
  };

  const renderButtons = () => {
    return buttons.map((btn, id) => {
      return (
        <Link href={btn.path} passHref key={id}>
          <Button style={{ padding: "0 1rem", height: "3rem" }}>
            <Typography
              variant="body1"
              style={{ fontWeight: "bold", color: "white" }}
            >
              {btn.label}
            </Typography>
          </Button>
        </Link>
      );
    });
  };

  const renderItems = () => {
    return buttons.map((button, id) => {
      return (
        <MenuItem onClick={() => handleClose(button.path)} key={id}>
          <Typography variant="button">{button.label}</Typography>
        </MenuItem>
      );
    });
  };

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar variant="regular">
        <Link href="/" passHref>
          <Button style={{ color: "white", fontWeight: "bold" }}>Home</Button>
        </Link>
        <div style={{ paddingLeft: "2rem", marginLeft: "auto" }}>
          {renderButtons()}
        </div>

        {/* <IconButton
          color="inherit"
          size="medium"
          style={{ marginLeft: "auto" }}
          aria-controls="menu"
          aria-haspopup="true"
          onClick={() => console.log("rien")}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={() => handleClose()}
        >
          <MenuItem onClick={() => handleClose("/")}>
            <Typography variant="button">Accueil</Typography>
          </MenuItem>
          {renderItems()}
        </Menu> */}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
