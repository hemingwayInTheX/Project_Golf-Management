import { Link, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import React from "react";

export const learnerListItems = (
    <div>
        <ListItem button component={Link} href="/learner/myprofile" color='black'>
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="프로필수정" />
        </ListItem>
        <ListItem button component={Link} href="/learner" color='black'>
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="강사추가" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItem>
    </div>
);
export const lecturerListItems = (
    <div>
        <ListItem button component={Link} href="/lecturer/myprofile" color='black'>
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="프로필수정" />
        </ListItem>
        <ListItem button component={Link} href="/lecturer" color='black'>
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="회원목록" />
        </ListItem>
        <ListItem button component={Link} href="/lecturer/addlearner" color='black'>
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="회원추가" />
        </ListItem>
    </div>
);