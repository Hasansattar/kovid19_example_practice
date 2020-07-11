import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
 

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 1000,
        margin: '0 auto',
        marginTop: 50,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    title: {
        color: '#3f51b5'
    }
}));

function GlobalRecord( ) {

    const [globalData, setGlobalData] = useState({});

    
    useEffect(() => {

        async function getAPI() {
            const responce = await fetch('https://api.thevirustracker.com/free-api?global=stats');
            const data = await responce.json();
            delete data.results[0].source;
            console.log(data.results[0]);

            setGlobalData(data.results[0]);
        }
        getAPI();
    }, [])



    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    {Object.keys(globalData).map((value, index) => {
                        return (
                            <Grid item xs={12} sm={4} key={index}>
                                <Paper className={classes.paper} elevation={3}>

                                    <h3 className={classes.title}>{value.replace(/_/g, " ").toUpperCase()}</h3>
                                    <h3>{globalData[value]}</h3>

                                </Paper>
                            </Grid>

                        )
                    })}


                </Grid>
            </div>
        </>
    );
}
export default GlobalRecord;