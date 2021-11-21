import React, { useState, useEffect, useCallback } from 'react';
import {
    Grid,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@material-ui/core';
import useStyles from './style';
import Lecturers from '../lecturer';
import LecturerSearchBar from '../lecturer_search';
import axios from 'axios';

const LecturerList = () => {
    const classes = useStyles();
    //search
    const [serchKeyword, setSearchKeyWord] = useState();
    //search event handler
    const handleSeachKey = (e) => {
        setSearchKeyWord(e.currentTarget.value);
    };
    //data search
    const filteredData = (data) => {
        data = data.filter((c) => {
            return c.username.indexOf(serchKeyword) > -1;
        });
        return data.map((c) => {
            for (let i = 0; i < enrollYesData.length; i++) {
                if (c.id === enrollYesData[i].id) {
                    return null;
                }
            }
            return (
                <Lecturers
                    key={c.username}
                    username={c.username}
                    id={c.id}
                    enrollData={enrollData}
                />
            );
        });
    };

    //강사정보
    const [users, setUsers] = useState([]);
    const [enrollData, setEnrollData] = useState([]);
    const [enrollYesData, setEnrollYesData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const fetchUsers = useCallback(async () => {
        try {
            // 요청이 시작 할 때에는 error 와 users 를 초기화하고
            setError(null);
            setUsers(null);
            // loading 상태를 true 로 바꿉니다.
            setLoading(true);
            const responseAll = await axios.get('/api/learners/list'); //전체 강사list api
            const responseEnroll = await axios.get('api/learners/');
            for (let i = 0; i < responseAll.data.list.length; i++) {
                for (let j = 0; j < responseEnroll.data.status.length; j++) {
                    if (
                        responseAll.data.list[i].id ===
                            responseEnroll.data.status[j].lecturer.id &&
                        responseEnroll.data.status[j].isenrolled
                    ) {
                        setEnrollYesData((prevList) => [
                            ...prevList,
                            responseAll.data.list[i],
                        ]);
                    } else if (
                        responseAll.data.list[i].id ===
                            responseEnroll.data.status[j].lecturer.id &&
                        !responseEnroll.data.status[j].isenrolled
                    ) {
                        setEnrollData((prevList) => [
                            ...prevList,
                            responseAll.data.list[i],
                        ]);
                    }
                }
            }
            setUsers(responseAll.data.list);
        } catch (e) {
            setError(e);
        }
        setLoading(false);
    }, []);
    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!users) return null;

    return (
        <Grid>
            <LecturerSearchBar
                value={serchKeyword}
                handleSeachKey={handleSeachKey}
            />
            <TableContainer component={Paper} className={classes.paper}>
                <Table
                    aria-label="lecturer list"
                    className={classes.table}
                    size="small"
                    sx={{ minWidth: 650 }}
                    stickyHeader
                >
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">강사 이름</TableCell>
                            <TableCell align="center">강사 추가</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {serchKeyword
                            ? filteredData(users)
                            : users.map((c) => {
                                  for (
                                      let i = 0;
                                      i < enrollYesData.length;
                                      i++
                                  ) {
                                      if (c.id === enrollYesData[i].id) {
                                          return null;
                                      }
                                  }
                                  return (
                                      <Lecturers
                                          key={c.username}
                                          username={c.username}
                                          id={c.id}
                                          enrollData={enrollData}
                                      />
                                  );
                              })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    );
};

export default LecturerList;
