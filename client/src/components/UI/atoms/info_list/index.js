import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableFooter, TablePagination } from "@material-ui/core";
import Info from "../info";
import useStyles from "./style";
import { getPostById } from '../../../../Data'

const StudyInfo = () => {
    const classes = useStyles();
    //상세페이지정보
    const [data, setData] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        setData(getPostById(id));
    }, []);
    //Table
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (e, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (e) => {
        setRowsPerPage(parseInt(e.target.value, 10))
        setPage(0)
    }


    return (
        <TableContainer component={Paper} className={classes.paper}>
            <Table aria-label="customer week study info" className={classes.table} sx={{ minWidth: 650 }} >
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Num</TableCell>
                        <TableCell align="center">강의진행날짜</TableCell>
                        <TableCell align="center" className={classes.topic}>강의주제</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data ? data.slice(page * rowsPerPage, (page + 1) * rowsPerPage)
                        .map(c => {
                            return <Info key={c.num} num={c.num} studyDate={c.studyDate} topic={c.topic} />
                        }):'해당 게시글을 찾을 수 없습니다.'}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25]}
                            count={data.length}
                            page={page}
                            rowsPerPage={rowsPerPage}
                            onChangePage={handleChangePage}
                            onChangeRowsPerPage={handleChangeRowsPerPage}
                        />
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
    );
};

export default StudyInfo;