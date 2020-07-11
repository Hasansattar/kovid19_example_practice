import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
 

 

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
   table:{
     
    border: '1px solid bslack',

    padding: '15px',
  
textAlign: 'left'
 
   }
}));
  
   
function AllCountries() {

    const [globalData, setGlobalData] = useState([{}]);


    useEffect(() => {

        async function getAPI() {
            const responce = await fetch('https://api.thevirustracker.com/free-api?countryTotals=ALL');
            const data = await responce.json();
            delete data.countryitems[0]["1"].source;
            delete data.countryitems[0]["1"].ourid;
            delete data.countryitems[0]["1"].total_unresolved;
            setGlobalData(Object.values(Object.values(data.countryitems)[0]));
            console.log(data.countryitems[0]["1"]);

        }
        getAPI();
    }, [])



    const classes = useStyles();

    return (
         <>
          <  div className={classes.root}>
         <table  className={classes.table}>
         <tr className={classes.table} >
                              <th>TITLE</th>
                              <th>CODE</th>
                              <th>TOTAL CASES</th>
                              <th>TOTAL RECOVERED</th>
                              <th>TOTAL DEATHS</th>
                            </tr>
         {globalData.map((value, index) => {
                        return ( 
                           
                        <tr>
                          <td>{globalData[index].title}</td>
                          <td>{globalData[index].code}</td>
                          <td>{globalData[index].total_cases}</td>
                          <td>{globalData[index].total_recovered}</td>
                          <td>{globalData[index].total_deaths}</td>
                        </tr>

                        )
         })}
         </table>

          </div>
         </>
    
    
       /* <>
            <  div className={classes.root}>
                <Grid container spacing={3}> 
                    {Object.keys(globalData[0]).map((value, index) => {
                        return (

                            
                            <Grid item xs={12} sm={4} key={index}>
                                <Paper className={classes.paper} elevation={3}>

                                    <h3 className={classes.title}>{value.replace(/_/g, " ").toUpperCase()}</h3>
                                    <h3>{globalData[0][value]}</h3>

                           </Paper>
                           </Grid>

                        )
                    })}


                </Grid>
            </div >
        </>  */
    )
}
export default AllCountries;