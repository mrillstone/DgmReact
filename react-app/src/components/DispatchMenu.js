import React from 'react';
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionActions from '@material-ui/core/AccordionActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    alignItems: 'center'
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  details: {
    alignItems: 'center',
    borderBottom: '.5px solid #707070',
    borderTop: '.5px solid #707070',
  },
  border: {
    borderBottom: '.5px solid #707070',
    borderTop: '.5px solid #707070',
  },
  column: {
    // flexBasis: '33.33%',
    textAlign: 'center',
    margin: 'auto',
  },
  helper: {
    // borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2),
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  txt: {
    fontWeight: 400,
    fontSize: '10px',
    color: "#707070",
  },
  txtH: {
    fontWeight: 700,
    fontSize: '15px',
    color: "#707070",
    textTransform: 'Uppercase'
  },
  txtHH: {
    fontWeight: 700,
    fontSize: '10px',
    color: "#707070",
  },
}));

export default function DispatchMenu() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion defaultExpanded>
        <AccordionSummary
          aria-controls="panel1c-content"
          id="panel1c-header"
        >
          <div className={classes.column}>
            <Typography className={classes.txtHH}>2019</Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          <div className={classes.column}>
            <Typography className={classes.txt}>08/26</Typography>
          </div>
          <div className={clsx(classes.column, classes.helper)}>
            <Typography variant="caption" className={classes.txtH}>
              <a href="#secondary-heading-and-columns" className={classes.link}>
              Devil's Peak
              <br />
              Downhill
              </a>
            </Typography>
          </div>
          <div className={classes.column}>
            <Typography className={classes.txt}>
              CO
               <br />
              USA
            </Typography>
          </div>
        </AccordionDetails>
        {/* <Divider />
        <AccordionActions>
          <Button size="small">Cancel</Button>
          <Button size="small" color="primary">
            Save
          </Button>
        </AccordionActions> */}
      </Accordion>
    </div>
  );
}
