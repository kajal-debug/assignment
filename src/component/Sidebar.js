 import React,{useState} from 'react';
 import '../style/Sidebar.css';
 function Sidebar (){
    const [header,setHeader] = useState('Dashbord');
    const [start,SetStart] = useState('');
    return(
        <div className='parent'>
            <h3 className='header'>{header}</h3>
            {/* <div className='parentbody'> */}
            <div className={`child ${header==='Dashbord'?'active':''}`} onClick={()=>{setHeader('Dashbord')
        }}>Dashbord</div>
            <div className={`child ${header==='Product'?'active':''}`}onClick={()=>{setHeader('Product')
        }}>Product</div>
            <div className={`child ${header==='Customers'?'active':''}`} onClick={()=>{setHeader('Customers')
        }}>Customers</div>
            <div className={`child ${header==='Income'?'active':''}`} onClick={()=>{setHeader('Income')
        }}>Income</div>
            <div className={`child ${header==='Promote'?'active':''}`} onClick={()=>{setHeader('Promote')
        }}>Promote</div>
            <div className={`child ${header==='Help'?'active':''}`} onClick={()=>{setHeader('Help')
        }}>Help</div>
            {/* </div> */}
            <div className='footer'>
                <h4>Evano</h4>
                <p style={{marginTop: "-20px"}}>Project Manager</p>
            </div>
        </div>
    )
 }
 export default Sidebar;