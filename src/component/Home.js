import  React,{useState,useEffect} from "react";
import '../style/Home.css';
import { css } from '@mui/system';
import Grid from '@mui/material/Grid';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from './Sidebar';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import Card from '@mui/material/Card';
import BalanceIcon from '@mui/icons-material/Balance';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import Bar from './Bar';
import PieChart from "./pieChart";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { makeStyles } from '@mui/styles';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

const useStyles = makeStyles({
  maxCardHeight: {
    minHeight: '124px',
    minWidth:"122px",
    margin:"10px"
  },
  searchInput: {
    backgroundColor: "white",
    height: "30px",
    width: "170px",
  },
  maxSecondCardHeight: {
    minHeight: '400px',
    borderRadius:'10px',
    // boxShadow:'2px black'
  },
});
function Home(){
  const classes = useStyles();
  const [menu,setMenu]= useState(true);
  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth <= 768) {
        setMenu(false);
      } else {
        setMenu(true);
      }
    };

    checkScreenSize(); // Initial check

    // Listen for window resize events to update the state
    window.addEventListener('resize', checkScreenSize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };},[])
    return(
      <>
     
       <Grid container > 
       <Grid  xs={12} s={6} md={3} lg={3}>
       <div  className="menubar">
        {menu?<MenuIcon className="menui" onClick={()=>{setMenu(false)}}/>:<MenuOpenIcon 
        className="menui" onClick={()=>{setMenu(true)}}/>}
        </div>
       {menu?
       <div><Sidebar/></div>
              :<></>}
              </Grid>
            
            <Grid  xs={12} sm={6} md={8} lg={8}  className="secondgrid">
              <div style={{display:"flex",justifyContent: "space-between",margin: "20px"}}>
              <h3 style={{display:"flex",}}>Hello Shahrukh <div>👋</div>
            </h3>
            <TextField
      placeholder="Search..."
      
       
      InputProps={{
        
        startAdornment: (
       
            <SearchIcon />
         
        ),
      }}
      // style={{
      //   background: "white",
      //   height: "50px",
      //   width: "170px",
      // }}
    />
              </div>
       
       <Grid container> 
       <Grid  xs={12} sm={6} md={3} lg={3} p={1}>
       <Card  className={classes.maxCardHeight}  style={{margin:"1px"}}>
        <div className="parentclass">
          <div className="dollarparenticon"><CurrencyExchangeIcon className="dollaricon"/></div>
          <div>
            <div style={{fontSize:"12px",color:"gray"}}>Earning</div>
            <div style={{fontSize:"17px",fontSize: "18px",fontWeight: "600"}}>$198k</div>
            <div style={{fontSize:"12px",color:"gray"}}><span style={{color:"green", fontWeight: "500"}}>37.8%</span> this month</div>
          </div>
        </div>
       </Card>
       </Grid>
       <Grid  xs={12} sm={6} md={3} lg={3} p={1}>
       <Card  className={classes.maxCardHeight} style={{margin:"1px"}}>
       <div className="parentclass">
          <div className="orderparenticon"><BalanceIcon className="Ordersicon"/></div>
          <div>
            <div style={{fontSize:"12px",color:"gray"}}>Orders</div>
            <div style={{fontSize:"17px",fontSize: "23px",fontWeight: "700"}}>$2.4k</div>
            <div style={{fontSize:"12px",color:"gray"}}><span style={{color:"pink", fontWeight: "500"}}>2%</span> this month</div>
          </div>
        </div>
       </Card>
       </Grid>
       <Grid  xs={12} sm={6} md={3} lg={3} p={1}>
       <Card  className={classes.maxCardHeight} style={{margin:"1px"}}>
       <div className="parentclass">
          <div className="balanceparenticon"><AccountBalanceWalletIcon className="Balanceicon"/></div>
          <div>
            <div style={{fontSize:"12px",color:"gray"}}>Balance</div>
            <div style={{fontSize:"17px",fontSize: "23px",fontWeight: "700"}}>$2.4k</div>
            <div style={{fontSize:"12px",color:"gray"}}><span style={{color:"pink", fontWeight: "500"}}>2%</span> this month</div>
          </div>
        </div>
       </Card>
       </Grid>
       <Grid  xs={12} sm={6} md={3} lg={3} p={1}>
       <Card  className={classes.maxCardHeight} style={{margin:"1px"}}>
       <div className="parentclass">
          <div className="salesparenticon"><ShoppingBagIcon className="Salesicon"/></div>
          <div>
          <div style={{fontSize:"12px",color:"gray"}}>Total Sales</div>
          <div style={{fontSize:"17px",fontSize: "23px",fontWeight: "700"}}>$89k</div>
          <div style={{fontSize:"12px",color:"gray"}}><span style={{color:"green", fontWeight: "500"}}>11%</span> this month</div>
          </div>
        </div>
       </Card>
       </Grid>
              </Grid>
               <Grid container > 
       <Grid  xs={12} sm={12} md={8} lg={8}>
       <Card  className={classes.maxSecondCardHeight}  style={{margin:"10px",padding:"10px"}}>
        <div style={{fontWeight:"800",fontSize:"18px"}}>Overview</div>
        <div style={{fontSize: "12px", color: "gray"}}>Monthly Earning</div>
       <div style={{position: "relative", bottom: "-102px !important", overflowX: "scroll", overflowY: "hidden"}}>
       <Bar/>
        </div> 
       </Card>
       </Grid>
       <Grid  xs={12} sm={12} md={4} lg={4}>
       <Card className={classes.maxSecondCardHeight} style={{margin:"10px",padding:"10px"}}>
       <div style={{fontWeight:"800",fontSize:"18px"}}>Customers</div>
        <div style={{fontSize: "12px", color: "gray"}}>Customers that buy products</div>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"70px"}}>
        <PieChart/>
        </div>
       
       </Card>
       </Grid>
              </Grid>
            </Grid>
          </Grid>
      </>
    )
}
export default Home;