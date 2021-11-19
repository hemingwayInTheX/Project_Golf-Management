import React, { useState } from 'react';
import CreateIcon from '@material-ui/icons/Create';
import { Button } from '@material-ui/core';
import ModifyDialog from './modify_dialog';
import axios from 'axios';

const ModifyButton = (props) => {
    const [open, setOpen] = useState(false);
    //해당 학생의 해당 주차 세부 강의내용 data
    const [users, setUsers] = useState([]); //default 주기위한 데이터
    const openHandler = (e) => {
        e.preventDefault();
        setOpen(true);
        const response = axios.get(
            `/api/instructors/detailinfo/${props.username}/${props.session_no}`
        );
        setUsers(response.data); //data가 없을 경우 예외처리 필요!!
    };

    const closeHandler = () => {
        setOpen(false);
    };

    return (
        <>
            <Button aria-label="modify" onClick={openHandler}>
                <CreateIcon />
            </Button>
            <ModifyDialog
                open={open}
                handleClose={closeHandler}
                username={props.username}
                session_no={props.session_no}
            />
        </>
    );
};

export default ModifyButton;