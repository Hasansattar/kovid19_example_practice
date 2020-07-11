import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles({
    root: {

        position: "fixed",

        bottom: 0,
        right: 0,
        left: 0,


    },
});

function Footer({screenConfig}) {
    const classes = useStyles();
    console.log(screenConfig);
   // const [value, setValue] = React.useState(0);

    return (
        <BottomNavigation
            value={screenConfig[0]}
            onChange={(event, newValue) => {
                 screenConfig[1](newValue);
                
            }}
            showLabels
            className={classes.root}
        >
            <BottomNavigationAction label="GLOBAL DATA" icon={<RestoreIcon />} />
            <BottomNavigationAction label="COUNTRY DATA" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="GRAPHS" icon={<LocationOnIcon />} />
        </BottomNavigation>
    );
}
export default Footer;
