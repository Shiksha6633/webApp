import React, { useContext, useState } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { userContext } from "../App";
import {
  Button,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemText,
  CssBaseline,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import MoreIcon from "@material-ui/icons/MoreVert";
import CancelIcon from "@material-ui/icons/Cancel";
import Avatar from "./Avatar";
import Divider from "@material-ui/core/Divider";
import PersonIcon from '@material-ui/icons/Person';
import ExtensionIcon from '@material-ui/icons/Extension';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ShopTwoIcon from '@material-ui/icons/ShopTwo';
import HomeIcon from '@material-ui/icons/Home';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import ListItemIcon from "@material-ui/core/ListItemIcon";

//Appbar
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    marginRight: "auto",
  },
  drawer: {
    width: 500,
    flexShrink: 0,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
}));

const Navbar = (props) => {
  const { state, dispatch } = useContext(userContext);
  const classes = useStyles();
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState(null);
  const isMobileMenuOpen = Boolean(mobileMenuAnchor);
  const openMobileMenu = (e) => {
    setMobileMenuAnchor(e.currentTarget);
  };

  const closeMobileMenu = () => {
    setMobileMenuAnchor(null);
  };

  const [open, setOpen] = useState(false);
  const mobileMenu = (
    <Menu
      // className='mobileNavbar'

      anchorEl={mobileMenuAnchor}
      id="mobile-menu"
      keepMounted
      open={isMobileMenuOpen}
    >
      <MenuItem onClick={closeMobileMenu} component={NavLink} to="/">
        Home
      </MenuItem>
      <MenuItem onClick={closeMobileMenu} component={NavLink} to="/about">
        MyProfile
      </MenuItem>
      <MenuItem onClick={closeMobileMenu} component={NavLink} to="/contact">
        Contact
      </MenuItem>
      <MenuItem onClick={closeMobileMenu} component={NavLink} to="/login">
        Login
      </MenuItem>
      <MenuItem onClick={closeMobileMenu} component={NavLink} to="/register">
        Register
      </MenuItem>
      <MenuItem onClick={closeMobileMenu}>
        <CancelIcon />
      </MenuItem>
    </Menu>
  );

  const RenderMenu = () => {
    if (state) {
      return (
        <>
          <li className="nav-item active">
            <NavLink className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item active">
            <NavLink className="nav-link" to="/about">
              MyProfile{" "}
            </NavLink>
          </li>
          <li className="nav-item active">
            <NavLink className="nav-link" to="/contact">
              Contact{" "}
            </NavLink>
          </li>
          <li className="nav-item active">
            <NavLink className="nav-link" to="/logout">
              Logout{" "}
            </NavLink>
          </li>
          <li>
            <Avatar />
          </li>
        </>
      );
    } else {
      return (
        <>
          <li className="nav-item active">
            <NavLink className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item active">
            <NavLink className="nav-link" to="/about">
              Dashboard{" "}
            </NavLink>
          </li>
          <li className="nav-item active">
            <NavLink className="nav-link" to="/contact">
              Contact{" "}
            </NavLink>
          </li>
          <li className="nav-item active">
            <NavLink className="nav-link" to="/login">
              Login{" "}
            </NavLink>
          </li>

          <li className="nav-item active">
            <NavLink className="nav-link" to="/register">
              Register{" "}
            </NavLink>
          </li>
          {/* <li className="nav-item active">
            <NavLink className="nav-link" to="/stepper">
              Stepper{" "}
            </NavLink>
          </li> */}
        </>
      );
    }
  };

  // drawer ConvolverNode
  const { history } = props;
  const itemList = [
    { text: "Home", icon: <HomeIcon />, onClick: () => history.push("/") },
    {
      text: "MyProfile",
      icon: <PersonIcon />,
      onClick: () => history.push("/about"),
    },
    {
      text: "Products",
      icon: <ExtensionIcon />,
      onClick: () => history.push("/product"),
    },
    
    {
      text: "Offers",
      icon: <ShopTwoIcon />,
      onClick: () => history.push("/offerCart"),
    },
    
  ];

  const itemLists=[
    {
      text: "Login",
      icon: <LockOpenIcon />,
      onClick: () => history.push("/login"),
    },
    {
      text: "Register",
      icon: <VpnKeyIcon />,
      onClick: () => history.push("/register"),
    },
    {
      text: "Contact Us",
      icon: <ContactPhoneIcon />,
      onClick: () => history.push("/contact"),
    },

  ];
  const drawer = (
    <div>
      <div className={classes.drawerHeader}></div>
      <Divider />
      <List>
        {itemList.map((item, index) => {
          const { text, icon, onClick } = item;
          return (
            <ListItem button key={text} onClick={onClick}>
              {icon && <ListItemIcon>{icon} </ListItemIcon>}
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
      </List>
      <Divider />
      <List>
        {itemLists.map((item, index) => {
          const { text, icon, onClick } = item;
          return(
          <ListItem button key={text} onClick={onClick}>
          {icon && <ListItemIcon>{icon} </ListItemIcon>}
            <ListItemText primary={text} />
          </ListItem>
        )})}
      </List>
    </div>
  );

  return (
    <>
      <div className={classes.root}>
        <CssBaseline />
        <Drawer open={open} onClose={() => setOpen(false)}>
          {drawer}
        </Drawer>
        {/* appbar starts here */}
        <AppBar
          style={{ background: "linear-gradient(45deg, #87adfe,#ff77cd)" }}
        >
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              FunkyTrendz
            </Typography>
            <div className={classes.sectionDesktop}>
              <RenderMenu />
            </div>
            <IconButton color="inherit" onClick={openMobileMenu}>
              <MoreIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <div className="mobileNavbar">{mobileMenu}</div>
        <main className={classes.content}></main>
      </div>
    </>
  );
};

export default withRouter(Navbar);
