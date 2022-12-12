import React, { useEffect, useState } from 'react'
import MDTypography from '../../../../../../../components1/MDTypography'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Collapse from '@mui/material/Collapse';
import Paper from '@mui/material/Paper';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from "@mui/material/Card";

const rows460Mpa = [
  {
    barSize:'12',
    values:[226, 339, 452,565,679,792,905,1017,1131],
    values1:[
      {area:226,barSize:12,no:2},{area:339,barSize:12,no:3},
      {area:452,barSize:12,no:4},{area:565,barSize:12,no:5},
      {area:679,barSize:12,no:6},{area:792,barSize:12,no:7},
      {area:905,barSize:12,no:8},{area:1017,barSize:12,no:9},
      {area:1131,barSize:12,no:10}
    ]
  },
  {
    barSize:'16',
    values:[402, 603, 804,1005,1206,1407,1808,1809,2011],
    values1:[
      {area:402,barSize:16,no:2},{area:603,barSize:16,no:3},
      {area:804,barSize:16,no:4},{area:1005,barSize:16,no:5},
      {area:1206,barSize:16,no:6},{area:1407,barSize:16,no:7},
      {area:1808,barSize:16,no:8},{area:1809,barSize:16,no:9},
      {area:2011,barSize:16,no:10}
    ]
  },  {
    barSize:'20',
    values:[628, 942, 1257,1571,1885,2199,2513,2827,3142],
    values1:[
      {area:628,barSize:20,no:2},{area:942,barSize:20,no:3},
      {area:1257,barSize:20,no:4},{area:1571,barSize:20,no:5},
      {area:1885,barSize:20,no:6},{area:2199,barSize:20,no:7},
      {area:2513,barSize:20,no:8},{area:2827,barSize:20,no:9},
      {area:3142,barSize:20,no:10}
    ]
  },
  {
    barSize:'25',
    values:[982, 1473, 1963,2454,2945,3436,3927,4418,4909],
    values1:[
      {area:982,barSize:25,no:2},{area:1473,barSize:25,no:3},
      {area:1963,barSize:25,no:4},{area:2454,barSize:25,no:5},
      {area:2945,barSize:25,no:6},{area:3436,barSize:25,no:7},
      {area:3927,barSize:25,no:8},{area:4418,barSize:25,no:9},
      {area:4909,barSize:25,no:10}
    ]
  },  
  {
    barSize:'32',
    values:[1608, 2412, 3216,4021,4825,5629,6433,7237,8042],
    values1:[
      {area:1608,barSize:32,no:2},{area:2412,barSize:32,no:3},
      {area:3216,barSize:32,no:4},{area:4021,barSize:32,no:5},
      {area:4825,barSize:32,no:6},{area:5629,barSize:32,no:7},
      {area:7237,barSize:32,no:8},{area:7237,barSize:32,no:9},
      {area:8042,barSize:32,no:10}
    ]
  },
  {
    barSize:'40',
    values:[2513, 3769, 5026,6283,7539,8796,10050,11310,12570],
    values1:[
      {area:2513,barSize:40,no:2},{area:3769,barSize:40,no:3},
      {area:5026,barSize:40,no:4},{area:6283,barSize:40,no:5},
      {area:7539,barSize:40,no:6},{area:8796,barSize:40,no:7},
      {area:10050,barSize:40,no:8},{area:11310,barSize:40,no:9},
      {area:12570,barSize:40,no:10}
    ]
  }
];


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function Rectangular({ d1, d2, fck, fyk, hCrossSection, bCrossSection, memberLength, name, link, cover, dLoad, mainBar }) {
    var Med = (parseFloat(dLoad) * ((parseFloat(memberLength) ** 2) / 1000000)) / 8
    var Mrd = (0.167 * parseFloat(bCrossSection) * (parseFloat(d1) ** 2) * fck) / 1000000
    const [As, setAs] = useState('')
    const [As2, setAs2] = useState('')
    const [AsMin, setAsMin] = useState('')
    const [modalShow, setModalShow] = React.useState(false);
    const [barSizeEconDoublyCompression, setBarSizeEconDoublyCompression]= useState(0)
    const [noOfBarsEconDoublyCompression, setNoOfBarsEconDoublyCompression]= useState(0)
    const [areaEconDoublyCompression, setAreaEconDoublyCompression]= useState(0)
    const [barSizeEconDoublyTension, setBarSizeEconDoublyTension]= useState(0)
    const [noOfBarsEconDoublyTension, setNoOfBarsEconDoublyTension]= useState(0)
    const [areaEconDoublyTension, setAreaEconDoublyTension]= useState(0)

    const [barSizeEconSinglyCompression, setBarSizeEconSinglyCompression]= useState(0)
    const [noOfBarsEconSinglyCompression, setNoOfBarsEconSinglyCompression]= useState(0)
    const [areaEconSinglyCompression, setAreaEconSinglyCompression]= useState(0)
    const [barSizeEconSinglyTension, setBarSizeEconSinglyTension]= useState(0)
    const [noOfBarsEconSinglyTension, setNoOfBarsEconSinglyTension]= useState(0)
    const [areaEconSinglyTension, setAreaEconSinglyTension]= useState(0)

    var r1, r2,r3;
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    const [expanded1, setExpanded1] = React.useState(false);

    const handleExpandClick1 = () => {
      setExpanded1(!expanded1);
    };

    let compresionDoubly = []
    let compresionDoubly1 = []
    let compresionValues = []

    let tensionDoubly = []
    let tensionDoubly1 = []
    let tensionValues = []

    let compresionSingly = []
    let compresionSingly1 = []
    let compresionValuesSingly = []

    let tensionSingly = []
    let tensionSingly1 = []
    let tensionValuesSingly = []


    const funBase = () => {
      if(Med > Mrd){
        //  compression

        rows460Mpa.map((rows) => (
          rows.values1.map((a) => (
           compresionDoubly.push(a)
          ))
     ))
     
     compresionValues = compresionDoubly.filter(obj => +obj.area > (r2 < r3 ? r3 : r2) && 
      ((bCrossSection - (2 * cover) - (2 * link) - (+obj.no * +obj.barSize)) / (+obj.no - 1) >= 20)
      )
     compresionValues.sort((a, b) => a.area - b.area);
     compresionValues.forEach((e) => {
       compresionDoubly1.push(e)
       setBarSizeEconDoublyCompression(compresionDoubly1[0].barSize)
       setAreaEconDoublyCompression(compresionDoubly1[0].area)
       setNoOfBarsEconDoublyCompression(compresionDoubly1[0].no)
    });



    rows460Mpa.map((rows) => (
      rows.values1.map((a) => (
       tensionDoubly.push(a)
      ))
 ))
 
 tensionValues = tensionDoubly.filter(obj => +obj.area > (r1 < r3 ? r3 : r1) && 
  ((bCrossSection - (2 * cover) - (2 * link) - (+obj.no * +obj.barSize)) / (+obj.no - 1) >= 20)
  )
 tensionValues.sort((a, b) => a.area - b.area);
 tensionValues.forEach((e) => {
   tensionDoubly1.push(e)
   setBarSizeEconDoublyTension(tensionDoubly1[0].barSize)
   setAreaEconDoublyTension(tensionDoubly1[0].area)
   setNoOfBarsEconDoublyTension(tensionDoubly1[0].no)
});
    
          }else{

            


                    //  compression

        rows460Mpa.map((rows) => (
          rows.values1.map((a) => (
           compresionSingly.push(a)
          ))
     ))
     
     compresionValuesSingly = compresionSingly.filter(obj => r3 > +obj.area  && 
      ((bCrossSection - (2 * cover) - (2 * link) - (+obj.no * +obj.barSize)) / (+obj.no - 1) >= 20)
      )
     compresionValuesSingly.sort((a, b) => a.area - b.area);
     compresionValuesSingly.forEach((e) => {
       compresionSingly1.push(e)
       setBarSizeEconSinglyCompression(compresionSingly1[0].barSize)
       setAreaEconSinglyCompression(compresionSingly1[0].area)
       setNoOfBarsEconSinglyCompression(compresionSingly1[0].no)
    });



    rows460Mpa.map((rows) => (
      rows.values1.map((a) => (
       tensionSingly.push(a)
      ))
 ))
 
 tensionValuesSingly = tensionSingly.filter(obj => +obj.area > (r1 < r3 ? r3 : r1) && 
  ((bCrossSection - (2 * cover) - (2 * link) - (+obj.no * +obj.barSize)) / (+obj.no - 1) >= 20)
  )
 tensionValuesSingly.sort((a, b) => a.area - b.area);
 tensionValuesSingly.forEach((e) => {
   tensionSingly1.push(e)
   setBarSizeEconSinglyTension(tensionSingly1[0].barSize)
   setAreaEconSinglyTension(tensionSingly1[0].area)
   setNoOfBarsEconSinglyTension(tensionSingly1[0].no)
});
    
          }
    }




const openModal = () =>{
  setModalShow(true)
  funBase()
}



    




        if(Med > Mrd){
          var k = 0.167
          var rootValue = (0.25 - (0.882 * k))
          var z = (0.82 * parseFloat(d1))
          r3 = ((0.13 / 100) * parseFloat(bCrossSection) * parseFloat(d1))

             r2 = ((Med - Mrd) * 1000000) / (0.87 * (parseFloat(fyk) * parseFloat(d1-d2))) < r3 ? r3 : ((Med - Mrd) * 1000000) / (0.87 * (parseFloat(fyk) * parseFloat(d1-d2)))
             r1 = (((Mrd * 1000000) / (0.87 * (parseFloat(fyk) * (z)))) + r2)
        }else{
          var k = ((Med * 1000000) / (parseFloat(bCrossSection) * (parseFloat(d1) ** 2) * parseFloat(fck))) < 0.167 ? ((Med * 1000000) / (parseFloat(bCrossSection) * (parseFloat(d1) ** 2) * parseFloat(fck))) : 0.167
          var rootValue = (0.25 - (0.882 * k))
          var z = ((0.5 + (Math.sqrt(rootValue))) * parseFloat(d1))
          var zFinal = z > (0.95 * parseFloat(d1)) ? (0.95 * parseFloat(d1)) : z
             r3 = ( 0.0013 * (parseFloat(bCrossSection) * parseFloat(d1)))
             r1 = (Med * 1000000) / (0.87 * (parseFloat(fyk) * (zFinal))) < r3 ? r3 : (Med * 1000000) / (0.87 * (parseFloat(fyk) * (zFinal)))
        }

  return (
    <TableContainer sx={{ maxHeight: 440,mt: 2 }}>
    <Table stickyHeader aria-label="sticky table">
    <TableHead sx={{ display: "table-header-group" }}>
    <TableRow>
    <TableCell style={{minWidth:80,backgroundColor: "#49a3f1"}}><MDTypography style={{fontSize:15}}>Name</MDTypography></TableCell>
    <TableCell style={{minWidth:80,backgroundColor: "#49a3f1"}} align="right"><MDTypography style={{fontSize:15}}>Mrd(KNm)</MDTypography></TableCell>
    <TableCell style={{minWidth:80,backgroundColor: "#49a3f1"}} align="right"><MDTypography style={{fontSize:15}}>Med(KNm)</MDTypography></TableCell>
    <TableCell style={{minWidth:80,backgroundColor: "#49a3f1"}} align="right"><MDTypography style={{fontSize:15}}>Comparison</MDTypography></TableCell>
    <TableCell style={{minWidth:80,backgroundColor: "#49a3f1"}} align="right"><MDTypography style={{fontSize:15}}>Comment</MDTypography></TableCell>
    <TableCell style={{minWidth:80,backgroundColor: "#49a3f1"}} align="right"><MDTypography style={{fontSize:15}}>As(mm-2)</MDTypography></TableCell>
    <TableCell style={{minWidth:80,backgroundColor: "#49a3f1"}} align="right"><MDTypography style={{fontSize:15}}>As2(mm-2)</MDTypography></TableCell>
    <TableCell style={{minWidth:80,backgroundColor: "#49a3f1"}} align="right"><MDTypography style={{fontSize:15}}>As, min</MDTypography></TableCell>
    <TableCell style={{minWidth:80,backgroundColor: "#49a3f1"}} align="right"><MDTypography style={{fontSize:15}}>Details</MDTypography></TableCell>
    <TableCell style={{minWidth:80,backgroundColor: "#49a3f1"}} align="right"><MDTypography style={{fontSize:15}}>Table</MDTypography></TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
  <TableRow hover role="checkbox" tabIndex={-1}>
  <TableCell style={{backgroundColor: "#49a3f1"}}> 
  <MDTypography style={{color:'#fff',fontSize:15}}>
    {name}
</MDTypography>    
  </TableCell>
  <TableCell style={{backgroundColor: "#49a3f1"}} align='right'> 
  <MDTypography style={{color:'#fff',fontSize:15}}>
    {parseFloat(Mrd).toFixed(2)}
</MDTypography>    
  </TableCell>
  <TableCell style={{backgroundColor: "#49a3f1"}} align='right'> 
  <MDTypography style={{color:'#fff',fontSize:15}}>
  {parseFloat(Med).toFixed(2)}
</MDTypography>
  </TableCell>
  <TableCell style={{backgroundColor: "#49a3f1"}} align='right'> 
  <MDTypography style={{color:'#fff',fontSize:15}}>
  { Mrd > Med ?(
      <span>{'Mrd > Med'}</span>
  ):(<span>{'Mrd < Med'}</span>)

  }
</MDTypography>
  </TableCell>
  <TableCell style={{backgroundColor: "#49a3f1"}} align='right'> 
  <MDTypography style={{color:'#fff',fontSize:15}}>
  { Mrd > Med ?(
      <span>Singly Reinforced</span>
  ):(<span>Doubly Reinforced</span>)

  }
</MDTypography>
  </TableCell>

  <TableCell style={{backgroundColor: "#49a3f1"}} align='right'> 
  <MDTypography style={{color:'#fff',fontSize:15}}>
 {parseFloat(r1).toFixed(2)}
</MDTypography>
  </TableCell>

  <TableCell style={{backgroundColor: "#49a3f1"}} align='right'> 
  <MDTypography style={{color:'#fff',fontSize:15}}>
  { Mrd > Med ?(
    <span>-</span>
):(<span>{parseFloat(r2).toFixed(3)}</span>)

}
</MDTypography>
  </TableCell>

  <TableCell style={{backgroundColor: "#49a3f1"}} align='right'> 
  <MDTypography style={{color:'#fff',fontSize:15}}>
  {parseFloat(r3).toFixed(3)}
</MDTypography>
  </TableCell>
  
  <TableCell style={{backgroundColor: "#49a3f1"}} align='right'> 
  <MDTypography style={{color:'#fff',fontSize:15}}>
  <ExpandMore
  expand={expanded}
  onClick={handleExpandClick}
  aria-expanded={expanded}
  aria-label="show more"
>
  <ExpandMoreIcon fontSize='medium' style={{color:'#fff'}}/>
</ExpandMore>

</MDTypography>
  </TableCell>

  <TableCell style={{backgroundColor: "#49a3f1"}} align='right'> 
  <MDTypography style={{color:'#fff',fontSize:15}}>
  <ExpandMore
  expand={expanded1}
  onClick={handleExpandClick1}
  aria-expanded={expanded1}
  aria-label="show more"
>
  <ExpandMoreIcon fontSize='medium' style={{color:'#fff'}}/>
</ExpandMore>

</MDTypography>
  </TableCell>
   </TableRow>
</TableBody>
      </Table>

      <Collapse in={expanded1} timeout="auto" unmountOnExit>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
        <TableHead sx={{ display: "table-header-group" }}>
        <TableRow style={{width:'100%'}}>
        <TableCell align="center" colSpan={10}>
        <MDTypography style={{fontSize:15,fontWeight:'bold'}}>
        Number of Bars for fyk= 460Mpa <VisibilityIcon fontSize='medium' onClick={openModal} style={{cursor:'pointer'}}/>


        </MDTypography>
        </TableCell>
      </TableRow>
        <TableRow>
        <TableCell style={{minWidth:80,backgroundColor: "#49a3f1"}}><MDTypography style={{fontSize:15,fontWeight:'bold'}}>Bar Size(mm)</MDTypography></TableCell>
        <TableCell style={{minWidth:80,backgroundColor: "#49a3f1"}} align="right"><MDTypography style={{fontSize:15,fontWeight:'bold'}}>2</MDTypography></TableCell>
        <TableCell style={{minWidth:80,backgroundColor: "#49a3f1"}} align="right"><MDTypography style={{fontSize:15,fontWeight:'bold'}}>3</MDTypography></TableCell>
        <TableCell style={{minWidth:80,backgroundColor: "#49a3f1"}} align="right"><MDTypography style={{fontSize:15,fontWeight:'bold'}}>4</MDTypography></TableCell>
        <TableCell style={{minWidth:80,backgroundColor: "#49a3f1"}} align="right"><MDTypography style={{fontSize:15,fontWeight:'bold'}}>5</MDTypography></TableCell>
        <TableCell style={{minWidth:80,backgroundColor: "#49a3f1"}} align="right"><MDTypography style={{fontSize:15,fontWeight:'bold'}}>6</MDTypography></TableCell>
        <TableCell style={{minWidth:80,backgroundColor: "#49a3f1"}} align="right"><MDTypography style={{fontSize:15,fontWeight:'bold'}}>7</MDTypography></TableCell>
        <TableCell style={{minWidth:80,backgroundColor: "#49a3f1"}} align="right"><MDTypography style={{fontSize:15,fontWeight:'bold'}}>8</MDTypography></TableCell>
        <TableCell style={{minWidth:80,backgroundColor: "#49a3f1"}} align="right"><MDTypography style={{fontSize:15,fontWeight:'bold'}}>9</MDTypography></TableCell>
        <TableCell style={{minWidth:80,backgroundColor: "#49a3f1"}} align="right"><MDTypography style={{fontSize:15,fontWeight:'bold'}}>10</MDTypography></TableCell>
        </TableRow>
      </TableHead>
          <TableBody>
          {rows460Mpa.map((rows) => (
            <TableRow hover role="checkbox" tabIndex={-1}>
            <TableCell>
            <MDTypography style={{fontSize:15,fontWeight:'bold'}}>
            {rows.barSize}
        </MDTypography> 
            </TableCell>
                {rows.values.map(number => 
                  <TableCell align='right'>
                  <MDTypography style={{color:'#49a3f1',fontSize:15}}>
                  {number}
              </MDTypography> 
                  </TableCell>
                  )}
            </TableRow>
  ))}

          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
      </Collapse>
      <Collapse in={expanded} timeout="auto" unmountOnExit>

      <center>
      <MDTypography style={{color:'#fff',fontSize:15,fontWeight:'bold'}}>
      INITIAL DATA
  </MDTypography> 
      </center>
    <TableHead sx={{ display: "table-header-group" }}>
    <TableRow>
    <TableCell style={{minWidth:100,backgroundColor: "#49a3f1"}}><MDTypography style={{fontSize:15}}>Depth(mm)</MDTypography></TableCell>
    <TableCell style={{minWidth:100,backgroundColor: "#49a3f1"}} align="right"><MDTypography style={{fontSize:15}}>Width(mm)</MDTypography></TableCell>
    <TableCell style={{minWidth:100,backgroundColor: "#49a3f1"}} align="right"><MDTypography style={{fontSize:15}}>Member(mm)</MDTypography></TableCell>
    <TableCell style={{minWidth:100,backgroundColor: "#49a3f1"}} align="right"><MDTypography style={{fontSize:15}}>fyk(Nmm^-2)</MDTypography></TableCell>
    <TableCell style={{minWidth:100,backgroundColor: "#49a3f1"}} align="right"><MDTypography style={{fontSize:15}}>fck(Nmm^-2)</MDTypography></TableCell>
    <TableCell style={{minWidth:100,backgroundColor: "#49a3f1"}} align="right"><MDTypography style={{fontSize:15}}>D.L(KNm^-1)</MDTypography></TableCell>
    <TableCell style={{minWidth:100,backgroundColor: "#49a3f1"}} align="right"><MDTypography style={{fontSize:15}}>Cover(mm)</MDTypography></TableCell>
    <TableCell style={{minWidth:100,backgroundColor: "#49a3f1"}} align="right"><MDTypography style={{fontSize:15}}>Bar(mm)</MDTypography></TableCell>
    <TableCell style={{minWidth:100,backgroundColor: "#49a3f1"}} align="right"><MDTypography style={{fontSize:15}}>Link(mm)</MDTypography></TableCell>
    </TableRow>
  </TableHead>

<TableBody>
<TableRow hover role="checkbox" tabIndex={-1}>
<TableCell > 
<MDTypography style={{color:'#49a3f1',fontSize:15}}>
  {hCrossSection}
</MDTypography>    
</TableCell>
<TableCell align='right'> 
<MDTypography style={{color:'#49a3f1',fontSize:15}}>
{bCrossSection}
</MDTypography>    
</TableCell>
<TableCell align='right'> 
<MDTypography style={{color:'#49a3f1',fontSize:15}}>
{memberLength}
</MDTypography>    
</TableCell>
<TableCell align='right'> 
<MDTypography style={{color:'#49a3f1',fontSize:15}}>
{fyk}
</MDTypography>    
</TableCell>
<TableCell align='right'> 
<MDTypography style={{color:'#49a3f1',fontSize:15}}>
{fck}
</MDTypography>    
</TableCell>
<TableCell align='right'> 
<MDTypography style={{color:'#49a3f1',fontSize:15}}>
{dLoad}
</MDTypography>    
</TableCell>
<TableCell align='right'> 
<MDTypography style={{color:'#49a3f1',fontSize:15}}>
{cover}
</MDTypography>    
</TableCell>
<TableCell align='right'> 
<MDTypography style={{color:'#49a3f1',fontSize:15}}>
{mainBar}
</MDTypography>    
</TableCell>
<TableCell align='right'> 
<MDTypography style={{color:'#49a3f1',fontSize:15}}>
{link}
</MDTypography>    
</TableCell>
</TableRow>
</TableBody>


{Med > Mrd ?(
<div>
<center>
<MDTypography style={{color:'#fff',fontSize:15,fontWeight:'bold'}}>
CALCULATIONS
</MDTypography> 
</center>
<TableHead sx={{ display: "table-header-group" }}>
<TableRow>
<TableCell style={{minWidth:150,backgroundColor: "#49a3f1"}}><MDTypography style={{fontSize:10}}>Med=wl^2/8= {parseFloat(Med).toFixed(2)}KNm</MDTypography></TableCell>
<TableCell style={{minWidth:150,backgroundColor: "#49a3f1"}} align="right"><MDTypography style={{fontSize:10}}>Mrd=0.167fckbd^2= {parseFloat(Mrd).toFixed(2)}KNm</MDTypography></TableCell>
<TableCell style={{minWidth:150,backgroundColor: "#49a3f1"}} align="right"><MDTypography style={{fontSize:10}}>K=Med/(fckbd^2)= 0.167</MDTypography></TableCell>
<TableCell style={{minWidth:150,backgroundColor: "#49a3f1"}} align="right"><MDTypography style={{fontSize:10}}>z=0.82d= {parseFloat(z).toFixed(2)}</MDTypography></TableCell>
<TableCell style={{minWidth:150,backgroundColor: "#49a3f1"}} align="right"><MDTypography style={{fontSize:10}}>As2=(Med-Mrd)/0.87fyk(d1-d2)= {parseFloat(r2).toFixed(3)}mm^2</MDTypography></TableCell>
<TableCell style={{minWidth:150,backgroundColor: "#49a3f1"}} align="right"><MDTypography style={{fontSize:10}}>As=(Med/0.87fykz)+As2= {parseFloat(r1).toFixed(2)}mm^2</MDTypography></TableCell>
<TableCell style={{minWidth:150,backgroundColor: "#49a3f1"}} align="right"><MDTypography style={{fontSize:10}}>As,min=(0.13/100)bd= {parseFloat(r3).toFixed(2)}mm^-2</MDTypography></TableCell>
</TableRow>
</TableHead>

<TableBody>
<TableRow hover role="checkbox" tabIndex={-1}>
<TableCell > 
<MDTypography style={{color:'#49a3f1',fontSize:10}}>
  Max. Bending on simply supported(wl^2/8) @ mid-span.
</MDTypography>    
</TableCell>
<TableCell align='right'> 
<MDTypography style={{color:'#49a3f1',fontSize:10}}>
 Capacity produced by concrete.
</MDTypography>    
</TableCell>
<TableCell align='right'> 
<MDTypography style={{color:'#49a3f1',fontSize:10}}>
   'K' for a doubly reinforced is 0.167
</MDTypography>    
</TableCell>
<TableCell align='right'> 
<MDTypography style={{color:'#49a3f1',fontSize:10}}>
  z=0.82d when k=0.167
</MDTypography>    
</TableCell>
<TableCell align='right'> 
<MDTypography style={{color:'#49a3f1',fontSize:10}}>
Compresion Reinforcement Area
</MDTypography>    
</TableCell>
<TableCell align='right'> 
<MDTypography style={{color:'#49a3f1',fontSize:10}}>
Tension Reinforcement Area
</MDTypography>    
</TableCell>
<TableCell align='right'> 
<MDTypography style={{color:'#49a3f1',fontSize:10}}>
{'If As or As2 < As,min => As or As2 = As,min'}
</MDTypography>    
</TableCell>
</TableRow>
</TableBody>
</div>
):(
  <div>
  <center>
  <MDTypography style={{color:'#fff',fontSize:15,fontWeight:'bold'}}>
  CALCULATIONS
  </MDTypography> 
  </center>
  <TableHead sx={{ display: "table-header-group" }}>
  <TableRow>
  <TableCell style={{minWidth:150,backgroundColor: "#49a3f1"}}><MDTypography style={{fontSize:10}}>Med=wl^2/8= {parseFloat(Med).toFixed(2)}KNm</MDTypography></TableCell>
  <TableCell style={{minWidth:150,backgroundColor: "#49a3f1"}} align="right"><MDTypography style={{fontSize:10}}>Mrd=0.167fckbd^2= {parseFloat(Mrd).toFixed(2)}KNm</MDTypography></TableCell>
  <TableCell style={{minWidth:150,backgroundColor: "#49a3f1"}} align="right"><MDTypography style={{fontSize:10}}>K=Med/(fckbd^2)= {parseFloat(k).toFixed(3)}</MDTypography></TableCell>
  <TableCell style={{minWidth:150,backgroundColor: "#49a3f1"}} align="right"><MDTypography style={{fontSize:10}}>z=d(0.5+sqrt(0.25-0.882K))= {parseFloat(zFinal).toFixed(2)}</MDTypography></TableCell>
  <TableCell style={{minWidth:150,backgroundColor: "#49a3f1"}} align="right"><MDTypography style={{fontSize:10}}>As=(Med/0.87fykz)= {parseFloat(r1).toFixed(2)}mm^2</MDTypography></TableCell>
  <TableCell style={{minWidth:150,backgroundColor: "#49a3f1"}} align="right"><MDTypography style={{fontSize:10}}>As,min=(0.13/100)bd= {parseFloat(r3).toFixed(2)}mm^-2</MDTypography></TableCell>
  </TableRow>
  </TableHead>
  
  <TableBody>
  <TableRow hover role="checkbox" tabIndex={-1}>
  <TableCell > 
  <MDTypography style={{color:'#49a3f1',fontSize:10}}>
    Max. Bending on simply supported(wl^2/8) @ mid-span.
  </MDTypography>    
  </TableCell>
  <TableCell align='right'> 
  <MDTypography style={{color:'#49a3f1',fontSize:10}}>
   Capacity produced by concrete.
  </MDTypography>    
  </TableCell>
  <TableCell align='right'> 
  <MDTypography style={{color:'#49a3f1',fontSize:10}}>
     {'K for singly reinforced should be < 0.167'}
  </MDTypography>    
  </TableCell>
  <TableCell align='right'> 
  <MDTypography style={{color:'#49a3f1',fontSize:10}}>
    {'0.82d < Z < 0.95d => Under Reinforcement Mode of failure.'}
  </MDTypography>    
  </TableCell>
  <TableCell align='right'> 
  <MDTypography style={{color:'#49a3f1',fontSize:10}}>
  Tension Reinforcement Area
  </MDTypography>    
  </TableCell>
  <TableCell align='right'> 
  <MDTypography style={{color:'#49a3f1',fontSize:10}}>
  {'As,min will be used for hangers at the compression part.'}
  </MDTypography>    
  </TableCell>
  </TableRow>
  </TableBody>
  </div>
)}

      </Collapse>

      <Modal
      show={modalShow}
      onHide={() => setModalShow(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
    <Card>
    <Modal.Header closeButton>
    <Modal.Title id="contained-modal-title-vcenter">
      <MDTypography style={{fontSize:20,fontWeight:'bold'}}>
      <span>Economical Reinforcements</span>
      </MDTypography>
    </Modal.Title>
  </Modal.Header>
  <Modal.Body
  style={{
    height:'70vh',
    overflowY:'auto'
  }}
  >
    <MDTypography>
    <MDTypography style={{fontSize:20,fontWeight:'bold'}}>
        {Med > Mrd ?(
          <div>
          <center style={{color:'#49a3f1'}}>
               Doubly Reinforced
          </center>
          <Table stickyHeader aria-label="sticky table">
          <TableHead sx={{ display: "table-header-group" }}>
          <TableRow style={{width:'100%'}}>
          <TableCell align="center" style={{minWidth:80,backgroundColor: "#49a3f1"}} colSpan={5}>
          <MDTypography style={{fontSize:15,fontWeight:'bold'}}>
                Compression Reinforcements
          </MDTypography>
          </TableCell>
          <TableCell align="center" style={{minWidth:80,backgroundColor: "#49a3f1"}} colSpan={5}>
          <MDTypography style={{fontSize:15,fontWeight:'bold'}}>
                Tension Reinforcements
          </MDTypography>
          </TableCell>
        </TableRow>
        <TableRow style={{width:'100%'}}>
        <TableCell align="center" style={{minWidth:80}} colSpan={5}>
        <MDTypography style={{fontSize:15,fontWeight:'bold'}}>
             {noOfBarsEconDoublyCompression}T{barSizeEconDoublyCompression} ({areaEconDoublyCompression}mm^2)
        </MDTypography>
        </TableCell>
        <TableCell align="center" style={{minWidth:80}} colSpan={4}>
        <MDTypography  style={{fontSize:15,fontWeight:'bold'}}>
        {noOfBarsEconDoublyTension}T{barSizeEconDoublyTension} ({areaEconDoublyTension}mm^2)
        </MDTypography>
        </TableCell>
      </TableRow>


      <TableRow style={{width:'100%'}}>
      <TableCell style={{minWidth:80}} colSpan={5}>
      <MDTypography style={{fontSize:15,fontWeight:'bold'}}>
         <MDTypography style={{fontSize:15,fontWeight:'bold'}}>{"Eurocode-Recommends the compression reinforcement must be designed and it's value of area should >= As,min as per code."}</MDTypography> 
         <MDTypography style={{fontSize:15,fontWeight:'bold'}}>{"If designed As for compression is < As,min then As,min is taken as As,required for compression."}</MDTypography>
      </MDTypography>
      </TableCell>
      <TableCell style={{minWidth:80}} colSpan={3}>
      <MDTypography style={{fontSize:15,fontWeight:'bold'}}>
         <MDTypography style={{fontSize:15,fontWeight:'bold'}}>{"Eurocode- Tension area should be designed &  Min. Diameter of main bars recommended by EC should be >= 12mm & Min No. of main bars >= 2."}</MDTypography> 
      </MDTypography>
      </TableCell>
    </TableRow>

        </TableHead>
        </Table>
          </div>
        ):(
          <div>
          <center style={{color:'#49a3f1'}}>
          Singly Reinforced
          </center>
          <Table stickyHeader aria-label="sticky table">
          <TableHead sx={{ display: "table-header-group" }}>
          <TableRow style={{width:'100%'}}>
          <TableCell align="center" style={{minWidth:80,backgroundColor: "#49a3f1"}} colSpan={5}>
          <MDTypography style={{fontSize:15,fontWeight:'bold'}}>
                Tension Reinforcements 
          </MDTypography>
          </TableCell>
          <TableCell style={{minWidth:80,backgroundColor: "#49a3f1"}} colSpan={3}>
          <MDTypography  style={{fontSize:15,fontWeight:'bold'}}>
                Compression(Hangers)  
          </MDTypography>
          </TableCell>
        </TableRow>

        <TableRow style={{width:'100%'}}>
        <TableCell align="center" style={{minWidth:80}} colSpan={5}>
        <MDTypography style={{fontSize:15,fontWeight:'bold'}}>
             {noOfBarsEconSinglyTension}T{barSizeEconSinglyTension} ({areaEconSinglyTension}mm^2)
        </MDTypography>
        </TableCell>
        <TableCell align="center" style={{minWidth:80}} colSpan={4}>
        <MDTypography  style={{fontSize:15,fontWeight:'bold'}}>
        {noOfBarsEconSinglyCompression}T{barSizeEconSinglyCompression} ({areaEconSinglyCompression}mm^2)
        </MDTypography>
        </TableCell>
      </TableRow>


      <TableRow style={{width:'100%'}}>
      <TableCell style={{minWidth:80}} colSpan={5}>
      <MDTypography style={{fontSize:15,fontWeight:'bold'}}>
         <MDTypography style={{fontSize:15,fontWeight:'bold'}}>{"Eurocode-Recommends the tension reinforcement area > Min.Area recommended by the code."}</MDTypography> 
         <MDTypography style={{fontSize:15,fontWeight:'bold'}}>{"For beam min. Diameter recommended by EC should be >= 12mm & Min No. of main bars >= 2."}</MDTypography>
      </MDTypography>
      </TableCell>
      <TableCell style={{minWidth:80}} colSpan={3}>
      <MDTypography style={{fontSize:15,fontWeight:'bold'}}>
         <MDTypography style={{fontSize:15,fontWeight:'bold'}}>{"Eurocode- Area for hangers should be taken as A,min and Min. hangers should be 2. & Min. diamter of 12mm."}</MDTypography> 
      </MDTypography>
      </TableCell>
    </TableRow>

        </TableHead>
        </Table>
          </div>
        )}
    </MDTypography>
    </MDTypography>
     
  </Modal.Body>
    </Card>

    </Modal>
    </TableContainer>
  )
}

export default Rectangular