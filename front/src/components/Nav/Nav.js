import React from 'react';
import {NavLink} from 'react-router-dom';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import { connect } from 'react-redux';
import { setUserActive } from '../../store/auth/actions';

const useStyles = makeStyles((theme) => ({
  navLink: {
    textDecoration: 'none',
    fontSize: '20px',
    color: 'white',
    fontWeight: 'bold',
  },
  navLinkMob: {
    textDecoration: 'none',
    color: 'black',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

function PrimarySearchAppBar(props) {

  const { userActive } = props.auth;
  const { setUserActive } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleLogout = () => {
    setUserActive(null);
    localStorage.removeItem('token');
    handleMenuClose();
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      {/* <MenuItem onClick={handleMenuClose}>Log out</MenuItem> */}
      <MenuItem onClick={handleLogout}>Log out</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';

                                        /* секция мобильного меню */
  const renderMobileMenu = (
    <Menu                                        
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <NavLink className={classes.navLinkMob} to='/items'>
        <MenuItem>
          <IconButton aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent={1} color="secondary">
              <span>P</span>
            </Badge>
          </IconButton>
          <p>Я подписан</p>
        </MenuItem>
      </NavLink>

      <NavLink className={classes.navLinkMob} to='/items'>
        <MenuItem>
          <IconButton aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent={2} color="secondary">
              <span>U</span>
            </Badge>
          </IconButton>
          <p>На которых можно подписаться</p>
        </MenuItem>
      </NavLink>

      <NavLink className={classes.navLinkMob} to='/items'>
        <MenuItem>
          <IconButton aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent={3} color="secondary">
              <span>F</span>
            </Badge>
          </IconButton>
          <p>Избранное</p>
        </MenuItem>
      </NavLink>

      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Профиль</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>

          <NavLink className={classes.navLink} to='/main'>
              NaPOSTU
          </NavLink>
          
           <div className={classes.grow} />  {/* для размещения поиска по центру, експериментальным способом */}

          {userActive && <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>}

          <div className={classes.grow} />  {/* для размещения поиска по центру, експериментальным способом */}

          {userActive && <div className={classes.sectionDesktop}>
            <NavLink className={classes.navLink} to='/main'>
              <IconButton aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={1} color="secondary">
                  <span>P</span>
                </Badge>
              </IconButton>
            </NavLink>

            <NavLink className={classes.navLink} to='/asd'>
                <IconButton aria-label="show 4 new mails" color="inherit">
                  <Badge badgeContent={2} color="secondary">
                    <span>U</span>
                  </Badge>
                </IconButton>
            </NavLink>

            <NavLink className={classes.navLink} to='/asd'>
              <IconButton aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={3} color="secondary">
                  <span>F</span>
                </Badge>
              </IconButton>
            </NavLink>

            <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>}

          {userActive && <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>}
        </Toolbar>
      </AppBar>

      {userActive && renderMobileMenu}

      {userActive && renderMenu}

    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUserActive: (data) => dispatch(setUserActive(data))
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PrimarySearchAppBar);
