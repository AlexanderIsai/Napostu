import React from 'react';
import {NavLink, useHistory} from 'react-router-dom';
// import { withRouter } from 'react-router';
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
import Hidden from '@material-ui/core/Hidden';

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

  const { userActive } = props;
  console.log('userActive---- ', userActive)
  const { setUserActive } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const history = useHistory();

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

  const handleProfile = () => {
    handleMenuClose();
    history.push(`/users/${userActive._id}`);
  }


  const usersToSubscribe = () => {
    const subscriptions = userActive.subscriptions;
    const usersTosubscribe = props.users.filter(user => userActive._id !== user._id && !subscriptions.includes(user._id));
    console.log('userstosubscribe.length ---- ', usersTosubscribe)
    return usersTosubscribe.length
  }

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
      <MenuItem onClick={handleProfile}>Profile</MenuItem>
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
     
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={userActive && userActive.subscriptions.length} color="secondary">
            <span>F</span>
          </Badge>
        </IconButton>
        <p>Избранное</p>
      </MenuItem>
      
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
    <div className={classes.grow} >
      <AppBar position="static" style={{maxWidth: "1280px", margin: "0 auto", padding: "0"}}>
        <Toolbar>
          <NavLink style={{paddingLeft: "66px"}} className={classes.navLink} to='/main'>
            <div style={{width: "54px", height: "54px", position: 'absolute', top: "2px", left: "27px", padding: "1px"}}>
              <img style={{width: "100%"}} alt="logoNaPostu" src="LogoNP(mine).png" className="logoNaPostu"/>
            </div>
            <div style={{ width: "150px", position: 'absolute', top: "18px", left: "90px"}}>
              <img style={{ width: "100%"}} alt="logoNaPostu" src="LogoNPtxt.png"/>
            </div>
          </NavLink>
          
           <div className={classes.grow} />  {/* для размещения поиска по центру*/}

          {userActive && 
          
          <Hidden only={['xs', 'sm']}>
            <div className={classes.search}>
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
          </div>
          </Hidden>}

          <div className={classes.grow} />  {/* для размещения поиска по центру */}

          {userActive && <div className={classes.sectionDesktop}>
              <IconButton aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={userActive && userActive.subscriptions.length} color="secondary">
                  <span>F</span>
                </Badge>
              </IconButton>
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
    userActive: state.auth.userActive,
    users: state.users.users
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PrimarySearchAppBar);
