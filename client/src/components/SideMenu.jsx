import {
  Drawer,
  IconButton,
  List,
  ListItem,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import NoteOutlinedIcon from "@material-ui/icons/NoteOutlined";
import LabelOutlinedIcon from "@material-ui/icons/LabelOutlined";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";

const useStyles = makeStyles((theme) => ({
  drawer: {
    "& > div": {
      marginTop: "60px",
      [theme.breakpoints.up("sm")]: {
        marginTop: "64px",
      },

      [theme.breakpoints.down(309)]: {
        marginTop: "73px",
      },
    },
  },
  drawerItemsList: {
    "& > li": {
      [theme.breakpoints.down("sm")]: {
        paddingLeft: "5px",
        paddingRight: "5px",
      },
    },
  },
}));

export default function SideMenu() {
  const classes = useStyles();
  return (
    <Drawer variant="permanent" className={classes.drawer}>
      <List className={classes.drawerItemsList}>
        <ListItem>
          <IconButton>
            <NoteOutlinedIcon />
          </IconButton>
        </ListItem>
        <ListItem>
          <IconButton>
            <LabelOutlinedIcon />
          </IconButton>
        </ListItem>
        <ListItem>
          <IconButton>
            <EditOutlinedIcon />
          </IconButton>
        </ListItem>
        <ListItem>
          <IconButton>
            <DeleteOutlinedIcon />
          </IconButton>
        </ListItem>
      </List>
    </Drawer>
  );
}
