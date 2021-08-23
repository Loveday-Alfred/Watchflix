import { Tabs, Tab, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import useStyles from './NavigationStyles';


const Navigation = () => {
    const classes = useStyles();
    let location = useLocation();
    return (
        <>
        <Tabs className={classes.tabContainer}>
         <Tab
           className={classNames(location.pathname === '/' ? classes.active : undefined, classes.tab)} 
           component={Link} 
           to="/" 
           label="Trending" 
         />
         <Tab 
         className={classNames(location.pathname === '/movies' ? classes.active : undefined, classes.tab)} 
         component={Link} 
         to="/movies" 
         label="Movies" 
       />
         <Tab 
           className={classNames(location.pathname === '/series' ? classes.active : undefined, classes.tab)} 
           component={Link} 
           to="/series" 
           label="Series" 
         />
         </Tabs>
         <IconButton 
           aria-label="search" color="inherit"
           component={Link} 
           to="/search" 
           className={classNames(location.pathname === '/search' ? classes.activea : undefined, classes.button)}
         >
         <SearchIcon className={classes.button} />
         </IconButton>
     </>
    )
}

export default Navigation
