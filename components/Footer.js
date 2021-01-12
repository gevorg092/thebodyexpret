import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: 'black',
        width: '100%',
        display: 'flex',
        height: '80px',
        position: 'relative',
    },
    logo_section: {
        position: 'absolute',
        '@media (max-width: 1920px)': {
            top: '9px',
            left: '123px',
        },
        '@media (max-width: 1440px)': {
            top: '9px',
            left: '123px',
        },
        '@media (max-width: 768px)': {
            top: '15px',
            left: '19px',
        },
    },
    logo_image: {
        '@media (max-width: 1920px)': {
            width: '62px',
        },
        '@media (max-width: 1440px)': {
            width: '62px',
        },
        '@media (max-width: 768px)': {
            width: '50px',
        },
    },
    copywriter: {
        position: 'absolute',
        top: '29px',
        '@media (max-width: 1920px)': {
            marginLeft: '43.5%',
        },
        '@media (max-width: 1440px)': {
            marginLeft: '43.5%',
        },
        '@media (max-width: 768px)': {
            right: '14.5px',
        },
    },
    copywrite_text: {
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 1.85,
        letterSpacing: 'normal',
        textAlign: 'center',
        color: '#9fa4af',
        '@media (max-width: 1920px)': {
            fontSize: '13px',
        },
        '@media (max-width: 1440px)': {
            fontSize: '13px',
        },
        '@media (max-width: 768px)': {
            fontSize: '10px',
        },
    },
    social_section: {
        position: 'absolute',
        top: '34px',
        '@media (max-width: 1440px)': {
            display: 'none',
        },
    },
    social: {
        width: '20%',
        display: 'flex',
        justifyContent: 'flex-end',
    },
    icon: {
        width: '16px',
        top: '36px',
        color: 'white',
    },
    twitter_image: {
        right: '6.41%',
    },
    instagram_image: {
        right: '9.27%',
    },
    facebook_image: {
        right: '12.55%',
    },
}));

export default function Footer(props) {
    const classes = useStyles();

    return (
        <footer className={`${classes.footer}`}>
            <div className={`${classes.logo_section}`}>
                <img
                    src='/assets/images/logo-footer.svg'
                    className={`${classes.logo_image}`}
                />
            </div>

            <div className={`${classes.copywriter}`}>
                <p className={`${classes.copywrite_text}`}>@ 2020 TheBodyExpert / All rights reserved</p>
            </div>

            <div className={`${classes.social_section} ${classes.twitter_image}`}>
                <img
                    src='/assets/images/facebook.svg'
                    className={`${classes.icon}`}
                />
            </div>
            <div className={`${classes.social_section} ${classes.instagram_image}`}>
                <img
                    src='/assets/images/instagram.svg'
                    className={`${classes.icon}`}
                />
            </div>
            <div className={`${classes.social_section} ${classes.facebook_image}`}>
                <img
                    src='/assets/images/twitter.svg'
                    className={`${classes.icon}`}
                />
            </div>
        </footer>
    );
}
