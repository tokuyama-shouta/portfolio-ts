import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 1200,
    backgroundColor: theme.palette.background.paper,

  },
}));

export default function ListDividers() {
  const classes = useStyles();

  return (
    <div className="skill-box">
      <h2  className="skill" id="skill">Skill</h2>
      <List component="nav" className={classes.root} aria-label="mailbox folders">
        <ListItem button>
          <ListItemText primary="フロントエンド"/>
          <pre>
              HTML   CSS   Scss/Sass   Material-UI   JavaScript   TypeScript   jQuery   React   Next.js
          </pre>
        </ListItem>
        <Divider />
        <ListItem button divider>
          <ListItemText primary="バックエンド" />
          <pre>
            PHP Laravel
          </pre>
        </ListItem>
        <ListItem button>
          <ListItemText primary="ツール etc..." />
          <pre>
            Git/GitHub WordPress Firebase Slack MacOS Windows
          </pre>
        </ListItem>
        <Divider light />
        
      </List>
    </div>
  );
}