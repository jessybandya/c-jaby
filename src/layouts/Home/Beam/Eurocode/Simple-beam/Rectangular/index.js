import React, { useEffect, useState } from 'react'
import MDTypography from '../../../../../../components1/MDTypography'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import VisibilityIcon from '@mui/icons-material/Visibility';

function Rectangular({ d1, d2, fck, fyk, hCrossSection, bCrossSection, memberLength, name, link, cover, dLoad }) {
    var Med = (parseFloat(dLoad) * ((parseFloat(memberLength) ** 2) / 1000000)) / 8
    var Mrd = (0.167 * parseFloat(bCrossSection) * (parseFloat(d1) ** 2) * fck) / 1000000
    const [As, setAs] = useState('')
    const [As2, setAs2] = useState('')
    const [AsMin, setAsMin] = useState('')
    var k = ((Med * 1000000) / (parseFloat(bCrossSection) * (parseFloat(d1) ** 2) * parseFloat(fck)))
    var rootValue = (0.25 - (0.882 * k))
    var z = ((0.5 + (Math.sqrt(rootValue))) * parseFloat(d1))
    var zFinal = z > (0.95 * parseFloat(d1)) ? (0.95 * parseFloat(d1)) : z


        if(Med > Mrd){
            var r2 = ((Med - Mrd) * 1000000) / (0.87 * (parseFloat(fyk) * parseFloat(d1-d2)))
            var r1 = (((Mrd * 1000000) / (0.87 * (parseFloat(fyk) * (zFinal)))) + r2)
            var r3 = ((0.13 / 100) * parseFloat(bCrossSection) * parseFloat(d1))
        }else{
            var r1 = (Med * 1000000) / (0.87 * (parseFloat(fyk) * (zFinal)))
            var r3 = ( 0.0013 * (parseFloat(bCrossSection) * parseFloat(d1)))
        }

  return (
    <TableContainer sx={{ maxHeight: 440,mt: 2 }}>
    <Table stickyHeader aria-label="sticky table">
    <TableHead sx={{ display: "table-header-group" }}>
    <TableRow>
    <TableCell style={{minWidth:100,backgroundColor: "#49a3f1"}}><MDTypography style={{fontSize:15}}>B. Name</MDTypography></TableCell>
    <TableCell style={{minWidth:100,backgroundColor: "#49a3f1"}} align="right"><MDTypography style={{fontSize:15}}>Mrd(KNm)</MDTypography></TableCell>
    <TableCell style={{minWidth:100,backgroundColor: "#49a3f1"}} align="right"><MDTypography style={{fontSize:15}}>Med(KNm)</MDTypography></TableCell>
    <TableCell style={{minWidth:100,backgroundColor: "#49a3f1"}} align="right"><MDTypography style={{fontSize:15}}>Comparison</MDTypography></TableCell>
    <TableCell style={{minWidth:100,backgroundColor: "#49a3f1"}} align="right"><MDTypography style={{fontSize:15}}>Comment</MDTypography></TableCell>
    <TableCell style={{minWidth:100,backgroundColor: "#49a3f1"}} align="right"><MDTypography style={{fontSize:15}}>As(mm-2)</MDTypography></TableCell>
    <TableCell style={{minWidth:100,backgroundColor: "#49a3f1"}} align="right"><MDTypography style={{fontSize:15}}>As2(mm-2)</MDTypography></TableCell>
    <TableCell style={{minWidth:100,backgroundColor: "#49a3f1"}} align="right"><MDTypography style={{fontSize:15}}>As, min</MDTypography></TableCell>
    <TableCell style={{minWidth:100,backgroundColor: "#49a3f1"}} align="right"><MDTypography style={{fontSize:15}}>View</MDTypography></TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
  <TableRow hover role="checkbox" tabIndex={-1}>
  <TableCell > 
  <MDTypography style={{color:'#49a3f1',fontSize:15}}>
    {name}
</MDTypography>    
  </TableCell>
  <TableCell align='right'> 
  <MDTypography style={{color:'#49a3f1',fontSize:15}}>
    {parseFloat(Mrd).toFixed(2)}
</MDTypography>    
  </TableCell>
  <TableCell align='right'> 
  <MDTypography style={{color:'#49a3f1',fontSize:15}}>
  {parseFloat(Med).toFixed(2)}
</MDTypography>
  </TableCell>
  <TableCell align='right'> 
  <MDTypography style={{color:'#49a3f1',fontSize:15}}>
  { Mrd > Med ?(
      <span>{'Mrd > Med'}</span>
  ):(<span>{'Mrd < Med'}</span>)

  }
</MDTypography>
  </TableCell>
  <TableCell align='right'> 
  <MDTypography style={{color:'#49a3f1',fontSize:15}}>
  { Mrd > Med ?(
      <span>Singly Reinforced</span>
  ):(<span>Doubly Reinforced</span>)

  }
</MDTypography>
  </TableCell>

  <TableCell align='right'> 
  <MDTypography style={{color:'#49a3f1',fontSize:15}}>
 {parseFloat(r1).toFixed(2)}
</MDTypography>
  </TableCell>

  <TableCell align='right'> 
  <MDTypography style={{color:'#49a3f1',fontSize:15}}>
  { Mrd > Med ?(
    <span>-</span>
):(<span>{parseFloat(r2).toFixed(2)}</span>)

}
</MDTypography>
  </TableCell>

  <TableCell align='right'> 
  <MDTypography style={{color:'#49a3f1',fontSize:15}}>
  {parseFloat(r3).toFixed(2)}
</MDTypography>
  </TableCell>
  
  <TableCell align='right'> 
  <MDTypography style={{color:'#49a3f1',fontSize:15}}>
  <VisibilityIcon fontSize='medium'/>

</MDTypography>
  </TableCell>
   </TableRow>
</TableBody>
      </Table>
    </TableContainer>
  )
}

export default Rectangular