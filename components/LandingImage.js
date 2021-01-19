/**
 * Landing Page Component
 *
 * @package components
 * @author Gevorg Harutyunyan <gevorgharutyunyan092@gmail.com>
 * @copyright 2021-01-16
 * @licence
 * @version
 * @link
 * */

import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import globalStyles from './GlobalStyles';
import EmailSender from "./EmailSender";

const useStyles = makeStyles({
    root: {
        width: '100%',
        height: '1243px',
        marginTop: '128px',
        '@media (max-width: 768px)': {
            marginTop: '55px',
            height: '628px',
        },
        zIndex: 10,
        position: 'relative',
    },
    subroot: {
        marginLeft: '361px',
        width: '81.25%',
        height: '75%',
        top: 0,
        zIndex: -5,
        position: 'absolute',
        '@media (max-width: 768px)': {
            marginLeft: '0px',
            width: '100%',
            height: '484px',
        },
    },
    email_sender: {
        marginTop: '193px',
        marginLeft: '241px',
        '@media (max-width: 768px)': {
            margin: '498px auto 0 auto',
        },
    },
    title_section: {
        marginTop: '53px',
        width: '113%',
    },
    title: {
        marginLeft: '-35px',
        marginRight: '-70px',
        fontSize: 'calc(12.5vw - 10px)',
        fontFamily: 'raleway',
        fontWeight: 300,
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 0.92,
        letterSpacing: 'calc(7.0354vw - 5.65px)',
        color: '#0d0c0c',
        margin: '0px',
    },
    image_section: {
        top: 0,
        height: '950px',
        marginLeft: '360px',
    },
    red_bar: {
        top: 0,
        marginLeft: 'calc(33.333vw + 687px)',
        width: '288px',
        height: '1591px',
        backgroundColor: 'red',
        opacity: 0.9,
        zIndex: -10,
        '@media (max-width: 1220px)': {
            display: 'none'
        },
        display: 'block',
    },
    web_email: {
        display: 'block',
        '@media (max-width: 768px)': {
            display: 'none',
        },
    },
    mobile_email: {
        display: 'none',
        '@media (max-width: 768px)': {
            display: 'block'
        },
        marginTop: '165px',
    },
    mobile_title: {
        fontFamily: 'raleway',
        fontWeight: 300,
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 1.23,

        color: '#0d0c0c',
        margin: '0px',
    },
});

export default function LandingImage(){
    const classes = useStyles();
    const global_classes = globalStyles();

    return (
        <div className={`${classes.root}`}>
            <div className={`${classes.web_email}`}>
                <div style={{zIndex:50, opacity:0.8}}>
                    <div className={`${classes.email_sender}`}>
                        <EmailSender
                            class_name={'red_email'}
                            text='Todas nuestras novedades a un click:'
                        />
                    </div>
                    <div className={`${classes.title_section}`}>
                        <p className={`${classes.title}`}>THE BODY</p>
                        <p className={`${classes.title}`} style={{fontWeight: 500}}>EXPERT</p>
                    </div>
                </div>

                <div className={`${classes.subroot}`} style={{
                    backgroundImage: 'url(/assets/images/landing.png)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                }} />

                <div className={`${classes.red_bar} ${global_classes.pos_absolute}`} />
            </div>

            <div className={`${classes.mobile_email}`}>
                <div className={`${classes.subroot}`} style={{
                    backgroundImage: 'url(/assets/images/landing.png)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                }}>
                    <div style={{paddingTop: '84px'}}>
                        <p className={`${classes.mobile_title}`} style={{fontSize: '100px', fontWeight:300, letterSpacing:'calc(47.554vw - 86.217px)', lineHeight:0.86 }}>THE</p>
                        <p className={`${classes.mobile_title}`} style={{fontSize: '72px', fontWeight:300, letterSpacing:'calc(32.065vw - 61.261px)', lineHeight:0.96 }}>BODY</p>
                        <p className={`${classes.mobile_title}`} style={{fontSize: '55px', fontWeight: 500, letterSpacing:'calc(19.02vw - 37.087px)', lineHeight:2.44 }}>EXPERT</p>
                    </div>
                </div>
                <div className={`${classes.email_sender}`} >
                    <EmailSender
                        class_name={'red_email'}
                        text='Todas nuestras novedades a un click:'
                    />
                </div>
            </div>
        </div>
    );
}