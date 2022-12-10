import React, {useState, useEffect} from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MDButton from '../../../../components1/MDButton';
import { useMaterialUIController } from '../../../../context';
import firebase from "firebase";
import { v4 as uuid } from "uuid";
import swal from "@sweetalert/with-react";
import { db, storage } from '../../../../components/firebase';
import imageCompression from "browser-image-compression";
import { LinearProgress } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import { Spin } from 'antd';


function Exams({ setModalShowAdd }) {
    const [department, setDepartment] = React.useState('');
    const [year, setYear] = React.useState('');
    const [semester, setSemester] = React.useState('');
    const [code, setCode] = React.useState('');
    const [name, setName] = React.useState('');
    const [yos, setYos] = React.useState('');
    const [file, setFile] = React.useState('');
    const [loading, setLoading] = useState(false)
    const handleChangeDepartment = (event) => {
        setDepartment(event.target.value);
    };
    const handleChangeYear = (event) => {
        setYear(event.target.value);
    };
    const handleChangeSemester = (event) => {
        setSemester(event.target.value);
    };
    const handleChangeCode = (event) => {
        setCode(event.target.value);
    };
    const handleChangeName = (event) => {
        setName(event.target.value);
    };
    const handleChangeYos = (event) => {
        setYos(event.target.value);
    };
    const handleChangeFile = (event) => {
        setFile(event.target.value);
    };
    const [controller ] = useMaterialUIController();
    const { sidenavColor } = controller;

    const [imageURL, setImageURL] = useState('');
    const [noLikes, setNoLikes] = useState(0);
    const [uploadData, setUploadData] = useState({
      // description: "",
      file: {
        type: "",
        name: "",
        data: "",
      },
    });

    const [progress, setProgress] = React.useState("");
    const pastPaperID = db.collection('past-papers').doc().id

    const uploadFileToDB = () => {
      // uploading to collection called posts
      setLoading(true)
      if(!department){
        toast.error("Department Name is required!")
        setLoading(false)
      }else if(!year){
        toast.error("Year Of Study is required!")
        setLoading(false)
      }else if(!semester){
        toast.error("Semester is required!")
        setLoading(false)
      }else if(!code){
        toast.error("Unit Code is required!")
        setLoading(false)
      }else if(!name){
        toast.error("Unit Name is required!")
        setLoading(false)
      }else if(!yos){
        toast.error("Academic Year is required!")
        setLoading(false)
      }else if(!file){
        toast.error("File URL is required!")
        setLoading(false)
      }else{

        db.collection('past-papers').doc(pastPaperID).set({
            pastPaperId: pastPaperID,
            pastPaperCode:code,
            pastPaperName:name,
            yos:year,
            academicYear:yos,
            file,
            department,
            semester,
            type:"exams",
        })
        .then(() => 
        setLoading(false),
        setModalShowAdd(false),
        setDepartment(""),
        setYear(""),
        setSemester(""),
        setCode(""),
        setName(""),
        setYos(""),
        setFile("")
        )
        .catch(function(error) {
          console.error("Error writing document: ", error);
       })
        swal("✔️ successfully uploaded a document");
      }
    };
  


    
  return (
    <React.Fragment>
    <ToastContainer />
    <Typography variant="h6" gutterBottom>
      Main Exams
    </Typography>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Department</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={department}
          label="Department"
          MenuProps={{
            style: {zIndex: 2001}
        }}
        sx={{ height: 35}}
          onChange={handleChangeDepartment}
        >
          <MenuItem value="Civil & Construction Engineering">Civil & Construction Engineering</MenuItem>
        </Select>
      </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Year</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={year}
          label="Year"
          MenuProps={{
            style: {zIndex: 2001}
        }}
        sx={{ height: 35}}
          onChange={handleChangeYear}
        >
        <MenuItem value="1">Year 1</MenuItem>
        <MenuItem value="2">Year 2</MenuItem>
        <MenuItem value="3">Year 3</MenuItem>
        <MenuItem value="4">Year 4</MenuItem>
        <MenuItem value="5">Year 5</MenuItem>
        </Select>
      </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Semester</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={semester}
          label="Sememster"
          MenuProps={{
            style: {zIndex: 2001}
        }}
        sx={{ height: 35}}
          onChange={handleChangeSemester}
        >
          <MenuItem value="1">Semester 1</MenuItem>
          <MenuItem value="2">Semester 2</MenuItem>
        </Select>
      </FormControl>
      </Grid>

      {department == "Civil & Construction Engineering" &&(
        <>
        {semester === "1" &&(
          <>

          
          {year === "1"?(
            <>    
          <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Unit Code</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={code}
              label="Unit Code"
              MenuProps={{
                style: {zIndex: 2001}
            }}
            sx={{ height: 35}}
              onChange={handleChangeCode}
            >
    
                   <MenuItem value="FCE 101">FCE 101</MenuItem>
                   <MenuItem value="FCE 131">FCE 131</MenuItem>
                   <MenuItem value="FCE 161">FCE 161</MenuItem>
                   <MenuItem value="FCE 163">FCE 163</MenuItem>
                   <MenuItem value="FCE 165">FCE 165</MenuItem>
                   <MenuItem value="FCE 181">FCE 181</MenuItem>
            </Select>
          </FormControl>
          </Grid>
          </>
          ): year === "2"?(
              <>
              <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Unit Code</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={code}
                  label="Unit Code"
                  MenuProps={{
                    style: {zIndex: 2001}
                }}
                sx={{ height: 35}}
                  onChange={handleChangeCode}
                >    
                <MenuItem value="FCE 201">FCE 201</MenuItem>
                <MenuItem value="FCE 211">FCE 211</MenuItem>
                <MenuItem value="FCE 231">FCE 231</MenuItem>
                <MenuItem value="FCE 245">FCE 245</MenuItem>
                <MenuItem value="FCE 265">FCE 265</MenuItem>
                <MenuItem value="FCE 251">FCE 251</MenuItem>
                <MenuItem value="FCE 261">FCE 261</MenuItem>
                <MenuItem value="FCE 271">FCE 271</MenuItem>
                </Select>
              </FormControl>
              </Grid>
              </>
          ): year === "3"?(
            <>
            <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Unit Code</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={code}
                label="Unit Code"
                MenuProps={{
                  style: {zIndex: 2001}
              }}
              sx={{ height: 35}}
                onChange={handleChangeCode}
              >    
              <MenuItem value="FCE 301">FCE 301</MenuItem>
              <MenuItem value="FCE 311">FCE 311</MenuItem>
              <MenuItem value="FCE 331">FCE 331</MenuItem>
              <MenuItem value="FCE 345">FCE 345</MenuItem>
              <MenuItem value="FCE 351">FCE 351</MenuItem>
              <MenuItem value="FCE 361">FCE 361</MenuItem>
              <MenuItem value="FCE 391">FCE 391</MenuItem>
              </Select>
            </FormControl>
            </Grid>
            </>
          ): year === "4"?(
            <>
            <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Unit Code</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={code}
                label="Unit Code"
                MenuProps={{
                  style: {zIndex: 2001}
              }}
              sx={{ height: 35}}
                onChange={handleChangeCode}
              >    
              <MenuItem value="FCE 401">FCE 401</MenuItem>
              <MenuItem value="FCE 411">FCE 411</MenuItem>
              <MenuItem value="FCE 431">FCE 431</MenuItem>
              <MenuItem value="FCE 421">FCE 421</MenuItem>
              <MenuItem value="FCE 451">FCE 451</MenuItem>
              <MenuItem value="FCE 461">FCE 461</MenuItem>
              <MenuItem value="FCE 481">FCE 481</MenuItem>
              <MenuItem value="FCE 425">FCE 425</MenuItem>
              </Select>
            </FormControl>
            </Grid>
            </>
          ):(
            <>
            <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Unit Code</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={code}
                label="Unit Code"
                MenuProps={{
                  style: {zIndex: 2001}
              }}
              sx={{ height: 35}}
                onChange={handleChangeCode}
              >    
              <MenuItem value="FCE 545">FCE 545</MenuItem>
              <MenuItem value="FCE 511">FCE 511</MenuItem>
              <MenuItem value="FCE 531">FCE 531</MenuItem>
              <MenuItem value="FCE 564">FCE 564</MenuItem>
              <MenuItem value="FCE 551">FCE 551</MenuItem>
              <MenuItem value="FCE 590">FCE 590</MenuItem>
              <MenuItem value="FCE 581">FCE 581</MenuItem>
              <MenuItem value="FCE 525">FCE 525</MenuItem>
              </Select>
            </FormControl>
            </Grid>
            </> 
          )}
          </>
        )}
        </>
      )}
      <Grid item xs={12} sm={6}>
        <TextField
          id="city"
          value={name}
          name="Unit Name"
          label="Unit Name"
          fullWidth
          onChange={handleChangeName}
          variant="standard"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
      <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Academic Year</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={yos}
        label="Unit Code"
        MenuProps={{
          style: {zIndex: 2001}
      }}
      sx={{ height: 35}}
        onChange={handleChangeYos}
      >    
             <MenuItem value="2022/23">2022/23</MenuItem>
             <MenuItem value="2021/22">2021/22</MenuItem>
             <MenuItem value="2020/21">2020/21</MenuItem>
             <MenuItem value="2019/20">2019/20</MenuItem>
             <MenuItem value="2018/19">2018/19</MenuItem>
             <MenuItem value="2017/18">2017/18</MenuItem>
             <MenuItem value="2016/17">2016/17</MenuItem>
             <MenuItem value="2015/16">2015/16</MenuItem>
             <MenuItem value="2014/15">2014/15</MenuItem>
             <MenuItem value="2013/14">2013/14</MenuItem>
             <MenuItem value="2012/13">2012/13</MenuItem>
             <MenuItem value="2011/12">2011/12</MenuItem>
             <MenuItem value="2010/11">2010/11</MenuItem>

      </Select>
    </FormControl>
      </Grid>
      <Grid item xs={12}>
      <TextField
        id="address2"
        name="File URL"
        label="File URL"
        fullWidth
        value={file}
        onChange={handleChangeFile}
        variant="standard"
      />
    </Grid>
      <Grid item xs={12}>
      <MDButton
      rel="noreferrer"
      onClick={uploadFileToDB}
      variant="gradient"
      color={sidenavColor}>
      {loading === true ?(
        <>
        Uploading... <Spin style={{color:'#fff'}}/>
        </>
      ):(
        <>
        Upload
        </>
      )}
      </MDButton>
      </Grid>
    </Grid>
  </React.Fragment>
  )
}

export default Exams