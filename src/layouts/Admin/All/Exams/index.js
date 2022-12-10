import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import SearchBar from "material-ui-search-bar";
import { db } from "../../../../components/firebase"
import Post from "./Post";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

const Demo = () => {
  const classes = useStyles();
  const [posts, setPosts] = useState([])
  useEffect(() => {
    db.collection('past-papers').where("type","==","exams").onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => ({
            id: doc.id,
            post: doc.data(),
        })));
    })
  }, []);

  const originalRows = [
    { name: "Pizza", calories: 200, fat: 6.0, carbs: 24, protein: 4.0 },
    { name: "Hot Dog", calories: 300, fat: 6.0, carbs: 24, protein: 4.0 },
    { name: "Burger", calories: 400, fat: 6.0, carbs: 24, protein: 4.0 },
    { name: "Hamburger", calories: 500, fat: 6.0, carbs: 24, protein: 4.0 },
    { name: "Fries", calories: 600, fat: 6.0, carbs: 24, protein: 4.0 },
    { name: "Ice Cream", calories: 700, fat: 6.0, carbs: 24, protein: 4.0 }
  ];

  const [rows, setRows] = useState(originalRows);
  const [searched, setSearched] = useState("");

  const requestSearch = (searchedVal) => {
    const filteredRows = originalRows.filter((row) => {
      return row.name.toLowerCase().includes(searchedVal.toLowerCase());
    });
    setRows(filteredRows);
  };

  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  };

  return (
    <>
    <TableContainer sx={{ height: 400,maxHeight: 400}}>
    <Table stickyHeader aria-label="sticky table">
    <TableHead       
    >
    <TableRow >
      <TableCell sx={{fontWeight:"900",borderBottom: "2px solid #0d6efd",color:`#0d6efd`}}>CODE</TableCell>
      <TableCell sx={{fontWeight:"900",borderBottom: "2px solid #0d6efd",color:`#0d6efd`}} align="right">NAME</TableCell>
      <TableCell sx={{fontWeight:"900",borderBottom: "2px solid #0d6efd",color:`#0d6efd`}} align="right">DEPARTMENT</TableCell>
      <TableCell sx={{fontWeight:"900",borderBottom: "2px solid #0d6efd",color:`#0d6efd`}} align="right">YEAR OF STUDY</TableCell>
      <TableCell sx={{fontWeight:"900",borderBottom: "2px solid #0d6efd",color:`#0d6efd`}} align="right">SEMESTER</TableCell>
      <TableCell sx={{fontWeight:"900",borderBottom: "2px solid #0d6efd",color:`#0d6efd`}} align="right">ACADEMIC YEAR</TableCell>
      <TableCell sx={{fontWeight:"900",borderBottom: "2px solid #0d6efd",color:`#0d6efd`}} align="right">VIEW SOLNs</TableCell>
      <TableCell sx={{fontWeight:"900",borderBottom: "2px solid #0d6efd",color:`#0d6efd`}} align="right">VIEW PAPER</TableCell>
      <TableCell sx={{fontWeight:"900",borderBottom: "2px solid #0d6efd",color:`#0d6efd`}} align="right">ACTION</TableCell>
      <TableCell sx={{borderBottom: `2px solid #0d6efd`}}/>
    </TableRow>
    </TableHead>
    <TableBody>
    

    {
      posts.map(({ id, post }) => (
        <Post 
        key={id} 
        postId={id}
        year={post?.academicYear}
        pastpaperId={post.pastpaperId}
        timestamp={post?.timestamp}
        pastPaperName={post?.pastPaperName}
        type={post?.type}
        file={post?.file}
        code={post?.pastPaperCode}
        department={post?.department}
        semester={post?.semester}
        yos={post?.yos} 
        />
        )
      )
    }
    
    </TableBody>
    </Table>
    </TableContainer>

    </>
  );
};

export default Demo;
