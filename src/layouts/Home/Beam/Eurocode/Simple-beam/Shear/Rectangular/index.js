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

const rows500Mpa = [
  {
    linkSize:'8',
    values:[1.313, 1.006, 0.805,0.671,0.575,0.503,0.447,0.402,0.366,0.335],
    values1:[
      {area:1.313,linkSize:8,space:75},{area:1.006,linkSize:8,space:100},
      {area:0.805,linkSize:8,space:125},{area:0.671,linkSize:8,space:150},
      {area:0.575,linkSize:8,space:175},{area:0.503,linkSize:8,space:200},
      {area:0.447,linkSize:8,space:225},{area:0.402,linkSize:8,space:250},
      {area:0.366,linkSize:8,space:275},{area:0.335,linkSize:8,space:300}
    ]
  },
  {
    linkSize:'10',
    values:[2.053, 1.570, 1.256,1.047,0.897,0.785,0.698,0.628,0.571,0.523],
    values1:[
      {area:2.053,linkSize:10,space:75},{area:1.570,linkSize:10,space:100},
      {area:1.256,linkSize:10,space:125},{area:1.047,linkSize:10,space:150},
      {area:0.897,linkSize:10,space:175},{area:0.785,linkSize:10,space:200},
      {area:0.698,linkSize:10,space:225},{area:0.628,linkSize:10,space:250},
      {area:0.571,linkSize:10,space:275},{area:0.523,linkSize:10,space:300}
    ]
  },
  {
    linkSize:'12',
    values:[2.955, 2.260, 1.808,1.507,1.291,1.130,1.004,0.904,0.822,0.753],
    values1:[
      {area:2.955,linkSize:12,space:75},{area:2.260,linkSize:12,space:100},
      {area:1.808,linkSize:12,space:125},{area:1.507,linkSize:12,space:150},
      {area:1.291,linkSize:12,space:175},{area:1.130,linkSize:12,space:200},
      {area:1.004,linkSize:12,space:225},{area:0.904,linkSize:12,space:250},
      {area:0.822,linkSize:12,space:275},{area:0.753,linkSize:12,space:300}
    ]
  },
  {
    linkSize:'16',
    values:[5.253, 4.020, 3.216,2.680,2.297,2.010,1.787,1.608,1.462,1.340],
    values1:[
      {area:5.253,linkSize:16,space:75},{area:4.020,linkSize:16,space:100},
      {area:3.216,linkSize:16,space:125},{area:2.680,linkSize:16,space:150},
      {area:2.297,linkSize:16,space:175},{area:2.010,linkSize:16,space:200},
      {area:1.787,linkSize:16,space:225},{area:1.608,linkSize:16,space:250},
      {area:1.462,linkSize:16,space:275},{area:1.340,linkSize:16,space:300}
    ]
  },
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
    var Ved = (((parseFloat(dLoad) * parseFloat(memberLength)) / 2) / 1000)
    var Vrd45= (((0.18 * parseFloat(bCrossSection) * parseFloat(d1) * parseFloat(fck)) * (1 - (parseFloat(fck) / 250))) / 1000) 
    var Vrd21= ((0.124 * parseFloat(bCrossSection) * parseFloat(d1) * parseFloat(fck)) * (1 - (parseFloat(fck) / 250)) / 1000)
    var Asw = 0
    var o = 0
    var AswMin= ((0.08 * parseFloat(bCrossSection)) * (Math.sqrt(parseFloat(fck)) / parseFloat(fyk)))
    const [linkSize, setLinkSize] = useState(0)
    const [linkSpace, setLinkSpace] = useState(0)
    const [linkArea, setLinkArea] = useState(0)
    const [modalShow, setModalShow] = React.useState(false);
    const [expanded, setExpanded] = React.useState(false);
    const [expanded1, setExpanded1] = React.useState(false);
    var sMax = (0.75 * parseFloat(d1))
    var noOfLinks = (parseFloat((memberLength - 50) / linkSpace))
    var finalNoOfLinks = noOfLinks == Math.floor(noOfLinks) ?  noOfLinks + 1 : noOfLinks + 1
    const handleExpandClick = () => {
      setExpanded(!expanded);
      setExpanded1(false);
    };
    const handleExpandClick1 = () => {
      setExpanded1(!expanded1);
      setExpanded(false);
    };

    if(Ved < Vrd21){
      o = 2.5;
      Asw = ((Ved * 1000) / (0.9 * parseFloat(d1) * 0.87 * parseFloat(fyk) * o)) < AswMin ? AswMin : ((Ved * 1000) / (0.9 * parseFloat(d1) * 0.87 * parseFloat(fyk) * o))
    }else{
      var deg2rad = Math.PI / 180;
      o = 0.5 * ((Math.asin(Ved / Vrd45)) * (180 / Math.PI))
      o = 1 / Math.tan( o * deg2rad )
      
      Asw = ((Ved * 1000) / (0.9 * parseFloat(d1) * 0.87 * parseFloat(fyk) * o)) < AswMin ? AswMin : ((Ved * 1000) / (0.9 * parseFloat(d1) * 0.87 * parseFloat(fyk) * o))
    }


    const funBase = () =>{
      let value1 = []
      let value2 = []
      let value3 = []
  
  
      rows500Mpa.map((rows) => (
        rows.values1.map((a) => (
          value1.push(a)
        ))
   ))
   
   value2 = value1.filter(obj => +obj.area >= Asw && +obj.space < sMax)
    
   value2.sort((a, b) => a.area - b.area);
   value2.forEach((e) => {
     value3.push(e)
     setLinkSize(value3[0].linkSize)
     setLinkSpace(value3[0].space)
     setLinkArea(value3[0].area)
  });
  
    }




const openModal = () =>{
  setModalShow(true)
  funBase()
}

  return (
    <TableContainer sx={{ maxHeight: 440,mt: 2 }}>
    <Table stickyHeader aria-label="sticky table">
    <TableHead sx={{ display: "table-header-group" }}>
    <TableRow>
    <TableCell style={{minWidth:80,backgroundColor: "#49a3f1"}}><MDTypography style={{fontSize:15}}>Name</MDTypography></TableCell>
    <TableCell style={{minWidth:80,backgroundColor: "#49a3f1"}} align="right"><MDTypography style={{fontSize:15}}>Ved(KN)</MDTypography></TableCell>
    <TableCell style={{minWidth:80,backgroundColor: "#49a3f1"}} align="right"><MDTypography style={{fontSize:15}}>Vrd,45(KN)</MDTypography></TableCell>
    <TableCell style={{minWidth:80,backgroundColor: "#49a3f1"}} align="right"><MDTypography style={{fontSize:15}}>Vrd,21.8(KN)</MDTypography></TableCell>
    <TableCell style={{minWidth:80,backgroundColor: "#49a3f1"}} align="right"><MDTypography style={{fontSize:15}}>Comparison</MDTypography></TableCell>
    <TableCell style={{minWidth:80,backgroundColor: "#49a3f1"}} align="right"><MDTypography style={{fontSize:15}}>Comment</MDTypography></TableCell>
    <TableCell style={{minWidth:80,backgroundColor: "#49a3f1"}} align="right"><MDTypography style={{fontSize:15}}>Asw/s</MDTypography></TableCell>
    <TableCell style={{minWidth:80,backgroundColor: "#49a3f1"}} align="right"><MDTypography style={{fontSize:15}}>Asw/s, min</MDTypography></TableCell>
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
  {parseFloat(Ved).toFixed(2)}
</MDTypography>    
  </TableCell>
  <TableCell style={{backgroundColor: "#49a3f1"}} align='right'> 
  <MDTypography style={{color:'#fff',fontSize:15}}>
  {parseFloat(Vrd45).toFixed(2)}
</MDTypography>
  </TableCell>
  <TableCell style={{backgroundColor: "#49a3f1"}} align='right'> 
  <MDTypography style={{color:'#fff',fontSize:15}}>
  {parseFloat(Vrd21).toFixed(2)}
</MDTypography>
  </TableCell>
  <TableCell style={{backgroundColor: "#49a3f1"}} align='right'> 
  <MDTypography style={{color:'#fff',fontSize:15}}>
    {Ved > Vrd45 ?(
      <>{'Ved > Vrd45'}</>
    ): Ved < Vrd21 ?(
       <>{'Ved < Vrd21.8'}</>
    ): Vrd21 < Ved < Vrd45 ?(
         <>{'Vrd21.8 < Ved < Vrd45'}</>
    ):(<></>)}
</MDTypography>
  </TableCell>

  <TableCell style={{backgroundColor: "#49a3f1"}} align='right'> 
  <MDTypography style={{color:'#fff',fontSize:15}}>
  {Ved > Vrd45 ?(
    <>{'Conc. Strength Not Ok.'}</>
  ): Ved < Vrd21 ?(
     <>{'cot𝜃 = 2.5'}</>
  ): Vrd21 < Ved < Vrd45 ?(
       <>
       {`𝜃 = ${parseFloat(o).toFixed(3)}`}
       </>
  ):(<></>)}
</MDTypography>
  </TableCell>

  <TableCell style={{backgroundColor: "#49a3f1"}} align='right'> 
  <MDTypography style={{color:'#fff',fontSize:15}}>
  {parseFloat(Asw).toFixed(3)}
</MDTypography>
  </TableCell>

  <TableCell style={{backgroundColor: "#49a3f1"}} align='right'> 
  <MDTypography style={{color:'#fff',fontSize:15}}>
  {parseFloat(AswMin).toFixed(3)}
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
        Link Spacing(mm) fwk=500Mpa <VisibilityIcon fontSize='medium' onClick={openModal} style={{cursor:'pointer'}}/>


        </MDTypography>
        </TableCell>
      </TableRow>
        <TableRow>
        <TableCell style={{minWidth:80,backgroundColor: "#49a3f1"}}><MDTypography style={{fontSize:15,fontWeight:'bold'}}>Link Size(mm)</MDTypography></TableCell>
        <TableCell style={{minWidth:80,backgroundColor: "#49a3f1"}} align="right"><MDTypography style={{fontSize:15,fontWeight:'bold'}}>75</MDTypography></TableCell>
        <TableCell style={{minWidth:80,backgroundColor: "#49a3f1"}} align="right"><MDTypography style={{fontSize:15,fontWeight:'bold'}}>100</MDTypography></TableCell>
        <TableCell style={{minWidth:80,backgroundColor: "#49a3f1"}} align="right"><MDTypography style={{fontSize:15,fontWeight:'bold'}}>125</MDTypography></TableCell>
        <TableCell style={{minWidth:80,backgroundColor: "#49a3f1"}} align="right"><MDTypography style={{fontSize:15,fontWeight:'bold'}}>150</MDTypography></TableCell>
        <TableCell style={{minWidth:80,backgroundColor: "#49a3f1"}} align="right"><MDTypography style={{fontSize:15,fontWeight:'bold'}}>175</MDTypography></TableCell>
        <TableCell style={{minWidth:80,backgroundColor: "#49a3f1"}} align="right"><MDTypography style={{fontSize:15,fontWeight:'bold'}}>200</MDTypography></TableCell>
        <TableCell style={{minWidth:80,backgroundColor: "#49a3f1"}} align="right"><MDTypography style={{fontSize:15,fontWeight:'bold'}}>225</MDTypography></TableCell>
        <TableCell style={{minWidth:80,backgroundColor: "#49a3f1"}} align="right"><MDTypography style={{fontSize:15,fontWeight:'bold'}}>250</MDTypography></TableCell>
        <TableCell style={{minWidth:80,backgroundColor: "#49a3f1"}} align="right"><MDTypography style={{fontSize:15,fontWeight:'bold'}}>275</MDTypography></TableCell>
        <TableCell style={{minWidth:80,backgroundColor: "#49a3f1"}} align="right"><MDTypography style={{fontSize:15,fontWeight:'bold'}}>300</MDTypography></TableCell>
        </TableRow>
      </TableHead>
          <TableBody>
          {rows500Mpa.map((rows) => (
            <TableRow hover role="checkbox" tabIndex={-1}>
            <TableCell>
            <MDTypography style={{fontSize:15,fontWeight:'bold'}}>
            {rows.linkSize}
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



<center>
<MDTypography style={{color:'#fff',fontSize:15,fontWeight:'bold'}}>
CALCULATIONS
</MDTypography> 
</center>
<TableHead sx={{ display: "table-header-group" }}>
<TableRow>
<TableCell style={{minWidth:150,backgroundColor: "#49a3f1"}}><MDTypography style={{fontSize:10}}>Ved=wl/2= valueKN</MDTypography></TableCell>
<TableCell style={{minWidth:150,backgroundColor: "#49a3f1"}} align="right"><MDTypography style={{fontSize:10}}>Vrd,21.8=0.167fckbd^2= KN</MDTypography></TableCell>
<TableCell style={{minWidth:150,backgroundColor: "#49a3f1"}} align="right"><MDTypography style={{fontSize:10}}>K=Med/(fckbd^2)= 0.167</MDTypography></TableCell>
<TableCell style={{minWidth:150,backgroundColor: "#49a3f1"}} align="right"><MDTypography style={{fontSize:10}}>z=0.82d= </MDTypography></TableCell>
<TableCell style={{minWidth:150,backgroundColor: "#49a3f1"}} align="right"><MDTypography style={{fontSize:10}}>As2=(Med-Mrd)/0.87fyk(d1-d2)= mm^2</MDTypography></TableCell>
<TableCell style={{minWidth:150,backgroundColor: "#49a3f1"}} align="right"><MDTypography style={{fontSize:10}}>As=(Med/0.87fykz)+As2=mm^2</MDTypography></TableCell>
<TableCell style={{minWidth:150,backgroundColor: "#49a3f1"}} align="right"><MDTypography style={{fontSize:10}}>As,min=(0.13/100)bd= mm^-2</MDTypography></TableCell>
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
      <span>{`BEAM = ${name}`}</span>
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
          <div>
          <center style={{color:'#49a3f1'}}>
               Shear Reinforcements
          </center>
          <Table stickyHeader aria-label="sticky table">
          <TableHead sx={{ display: "table-header-group" }}>
          <TableRow style={{width:'100%'}}>
          <TableCell align="center" style={{minWidth:80,backgroundColor: "#49a3f1"}} colSpan={10}>
          <MDTypography style={{fontSize:15,fontWeight:'bold'}}>
          {parseFloat(finalNoOfLinks).toFixed(0)}{fyk === '460'?<>T</>:<>H</>}{linkSize}@{linkSpace}-01 ({linkArea})
          </MDTypography>
          </TableCell>
        </TableRow>


      <TableRow style={{width:'100%'}}>
      <TableCell style={{minWidth:80}} colSpan={10}>
      <MDTypography style={{fontSize:15,fontWeight:'bold'}}>
         <MDTypography style={{fontSize:15,fontWeight:'bold'}}>{"Suppose the outer to outer length of the beam is 5000mm and 8mm dia stirrups are placed at 200mm C toC then Assume that you are providing a clear cover of 25mm on either side Available length is 5000-(2x25)=4950mm Spacing of striatum is 200mm. Hence. 4950/200=24. 75 No of stirrups is spacing plus one. Hence 26 stirrups.(Simple Supported beam trick)"}</MDTypography> 
      </MDTypography>
      </TableCell>
    </TableRow>

        </TableHead>
        </Table>
          </div>

    </MDTypography>
    </MDTypography>
     
  </Modal.Body>
    </Card>

    </Modal>
    </TableContainer>
  )
}

export default Rectangular