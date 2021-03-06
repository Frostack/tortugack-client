import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CheckIcon from '@material-ui/icons/Check';

const useStyles = makeStyles({
  card: {
    width: 250,
    height: 450,
    margin: 8,
    cursor: 'pointer',
    transition: '0.3s ease',
    '&:hover': {
      backgroundColor: '#263238',
    },
  },
  green: {
    color: '#00C853',
  },
});

function HiddenEventCard(props) {
  const classes = useStyles();

  return (
    <Card
      className={classes.card}
      onClick={() => props.cardClickHandler(props.index, props.selected)}
    >
      {props.selected ? <CheckIcon className={classes.green} /> : null}
    </Card>
  );
}

export default HiddenEventCard;
