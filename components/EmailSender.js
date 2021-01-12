import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import globalStyles from '../components/GlobalStyles';

const useStyles = makeStyles({
    root: {
        width:'333px',
        height: '84px',
        '@media (max-width: 768px)': {
            margin: 'auto',
        },
    },
    white_email_section: {
        marginLeft: '0px',
    },
    red_email_text: {
        fontFamily: 'Roboto',
        fontSize: '18px',
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#080808',
        marginBottom: '10px',
    },
    white_email_text: {
        fontFamily: 'Roboto',
        fontSize: '16px',
        fontWeight: 'bold',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#8c8d8f',
    },
    input: {
        border: 'none',
        '&:hover': {
            outline: 'none',
        },
        '&:focus': {
            outline: 'none',
        },
        height: '51px',
        padding: '15px 21px',
        color: '#8c8d8f',
        fontSize: '14px',
        width: '287px',
    },
    white_email: {
        fontSize: '11px',
    },
    red_border: {
        border: 'solid 1px red',
        backgroundColor:'#ff0000ba',
    },
    white_border: {
        border: 'solid 1px #8f9094',
    },
    red_email: {
        backgroundColor:'transparent',
        '&::placeholder': {
            color:'white',
        },
        color: 'white',
    },
    red_send: {
        color: 'white',
    },
    arrow_icon: {
        cursor:'pointer',
        width: '27px',
        height: '21px',
    },
})

export default function EmailSender(props) {
    const classes = useStyles();
    const globalclasses = globalStyles();
    return (
        <div className={`${classes.root} ${(props.class_name==='red_email') ? classes.red_email_section : classes.white_email_section}`}>
            <p className={`${(props.class_name==='red_email') ? classes.red_email_text : classes.white_email_text}`}>{props.text}</p>
            <div className={`${globalclasses.mar_auto} ${globalclasses.dis_flex} ${(props.class_name==='red_email') ? classes.red_border : classes.white_border}`}>
                <input
                    type='email'
                    className={`${(props.class_name==='red_email') ? classes.red_email : classes.white_email} ${classes.input}`}
                    placeholder='Tu email'
                />
                <ArrowRightAltIcon
                    className={`${classes.arrow_icon} ${globalclasses.mar_auto_0} ${(props.class_name==='red_email') ? classes.red_send : classes.white_send}`}
                />
            </div>
        </div>
    );
}