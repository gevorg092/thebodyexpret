/**
 * Image slider Component
 *
 * @package components
 * @author Gevorg Harutyunyan <gevorgharutyunyan092@gmail.com>
 * @copyright 2021-01-16
 * @licence
 * @version
 * @link
 * */

import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { makeStyles } from '@material-ui/core/styles';
import globalStyles from './GlobalStyles';
import EmailSender from './EmailSender';

const useStyles = makeStyles({
    root: {
        width: '100%',
        zIndex: 50,
    },
    text_section: {
        width: '429px',
    },
    subtitle: {
        fontFamily: 'Roboto',
        fontSize: '18px',
        fontWeight: 'bold',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#969eac',
    },
    title: {
        fontFamily: 'Roboto',
        fontSize: '48px',
        fontWeight: 'bold',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#15181f',
    },
    description: {
        fontFamily: 'Roboto',
        fontSize: '21px',
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 1.86,
        letterSpacing: 'normal',
        textAlign: 'justify',
        color: '#8f9094',
    },
    slider_section: {
        width: 'calc(100vw - 429px)',
        '@media (max-width: 1920px)': {
            marginLeft: '90px',
        },
        '@media (max-width: 1220px)': {
            marginLeft: '0px',
        },

        top: 0,
    },
    slider: {
        width: '100%',
    },
    image_section: {
        maxWidth: '1161px',
        '@media (max-width: 1920px)': {
            width: 'calc(100% - 65px)',
        },
        '@media (max-width: 1620px)': {
            width: '100%',
        },
    },
    social_section: {
        '@media (max-width: 1620px)': {
            display: 'none',
        },
        width: '67px',
        marginTop: '17%',
    },
    social_image: {
        width: '16px',
    },
    social_div: {
        textAlign: 'end',
    },
    avatar_section: {
        marginRight: '68px',
        paddingTop: '16px',
    },
    avatar_image: {
        '@media (max-width: 768px)': {
            paddingTop: '20px',
        },
    },
    white_play: {
        paddingTop: '21px',
    },
    avatar_text_section: {
        paddingTop: '8px',
    },
    avatar_text: {
        opacity: 0.75,
        fontFamily: 'Roboto',
        fontSize: '20px',
        fontWeight: 500,
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 1.6,
        letterSpacing: '1.43px',
        color: '#040404',
        margin: '0px',
        '&::after': {
            display: 'inline-block',
            content: `''`,
            borderTop: '2px solid red',
            width: '55px',
            transform: 'translateY(-3px)',
        },
    },
    background_section: {
        backgroundColor: 'red',
    },
    web_section: {
        padding: '0 52px 176px 120px',
        '@media (max-width: 1620px)': {
            padding: '0 0 176px 120px',
        },
        width: '100%',
        '@media (max-width: 1220px)': {
            display: 'none',
        },
    },
    mobile_section: {
        display: 'none',
        width: '100%',
        padding: '46px 10px 74px 10px',
        '@media (max-width: 1220px)': {
            display: 'block',
        },
    },
    carousel_root: {
        '& .carousel-control-prev': {
            display: 'none',
        },
    },
    red_play: {
        '@media (max-width: 1440px)': {
            display: 'none',
        },
    },
    black_play: {
        '@media (max-width: 1920px)': {
            display: 'none',
        },
        '@media (max-width: 1440px)': {
            display: 'block',
        },
    }
});

export default function ImageSlider() {
    const classes = useStyles();
    const global_classes = globalStyles();

    return (
        <div className={`${classes.root}`} id='paraiso'>
            <div className={`${classes.web_section} ${global_classes.dis_flex}`}>
                <div className={`${classes.text_section} ${global_classes.mar_auto_0}`}>
                    <div className={`row ${global_classes.mar_0}`}>
                        <div className={`col-sm-12 ${global_classes.pad_0}`}>
                            <div className={`row ${global_classes.mar_0}`}>
                                <div style={{width: '200px', paddingBottom:'4px'}}>
                                    <p className={`${classes.subtitle} ${global_classes.mar_0} ${global_classes.pad_0}`}>Situado en el corazon de</p>
                                </div>
                                <div style={{paddingBottom:'21px'}}>
                                    <p className={`${classes.title} ${global_classes.mar_0} ${global_classes.pad_0}`}>Paraiso Pueblo.</p>
                                </div>
                                <div style={{width: '331px'}}>
                                    <p className={`${classes.description} ${global_classes.mar_0} ${global_classes.pad_0}`}>Situado en el centro de Paraíso Pueblo y rodeado de impresionantes vistas naturales, The Body expert es una moderna y contemporánea instalación dirigida al bienestar y al cuidado personal en la que se ofrecen, entre otros, servicios de fitness y nutrición.</p>
                                </div>
                                <div style={{width: '331px', marginTop:'70px'}}>
                                    <EmailSender
                                        class_name='white'
                                        text='Déjanos tu email y te informaremos de todo...'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${classes.slider_section}`}>
                    <div className={`${classes.slider} ${global_classes.dis_flex}`}>
                        <div className={`${classes.image_section} ${classes.red_play}`}>
                            <Carousel
                                className={classes.carousel_root}
                                indicators={false}
                                // nextIcon=<div style={{display:'flex', justifyContent:'center', marginLeft:'auto', marginTop:'auto', width:'123px', height:'123px', backgroundColor: 'white'}}><img src="/assets/images/red-play.png" width='15px' height='20px' style={{margin:'auto'}}  /></div>
                            >
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="/assets/images/slider1.png"
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="/assets/images/slider2.png"
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="/assets/images/slider3.png"
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </div>
                        <div className={`${classes.image_section} ${classes.black_play}`}>
                            <Carousel
                                className={classes.carousel_root}
                                indicators={false}
                                // nextIcon=<div style={{display:'flex', justifyContent:'center', marginLeft:'auto', marginTop:'auto', width:'123px', height:'123px', backgroundColor: 'white'}}><img src="/assets/images/play.png" width='15px' height='20px' style={{margin:'auto'}}  /></div>
                            >
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="/assets/images/slider1.png"
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="/assets/images/slider2.png"
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="/assets/images/slider3.png"
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </div>
                        <div className={`${classes.social_section}`}>
                            <div className={`${classes.social_div}`}>
                                <img
                                    src='assets/images/facebook.png'
                                    className={`${classes.social_image}`}
                                />
                            </div>
                            <div className={`${classes.social_div}`} style={{paddingTop:'64px'}}>
                                <img
                                    src='assets/images/instagram.png'
                                    className={`${classes.social_image}`}
                                />
                            </div>
                            <div className={`${classes.social_div}`} style={{paddingTop:'64px'}}>
                                <img
                                    src='assets/images/twitter.png'
                                    className={`${classes.social_image}`}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={`${classes.avatar_section}`}>
                        <div className={`row ${global_classes.mar_0}`}>
                            <div className={`col-sm-4 ${global_classes.pad_0}`}>
                                <div className={`${classes.avatar_image}`}>
                                    <img
                                        src='/assets/images/image1.svg'
                                        style={{width:'72px'}}
                                    />
                                </div>
                                <div className={`${classes.avatar_text_section}`}>
                                    <p className={`${classes.avatar_text}`}>PISCINA<br/>AGUA SALADA<br/></p>
                                </div>
                            </div>
                            <div className={`col-sm-4 ${global_classes.pad_0}`}>
                                <div className={`${classes.avatar_image}`}>
                                    <img
                                        src='/assets/images/image2.svg'
                                        style={{width:'47px'}}
                                    />
                                </div>
                                <div className={`${classes.avatar_text_section}`}>
                                    <p className={`${classes.avatar_text}`}>ENTRENAMIENTO<br/>AIRE LIBRE<br/></p>
                                </div>
                            </div>
                            <div className={`col-sm-4 ${global_classes.pad_0}`}>
                                <div className={`${classes.avatar_image}`}>
                                    <img
                                        src='/assets/images/image3.svg'
                                        style={{width:'56px'}}
                                    />
                                </div>
                                <div className={`${classes.avatar_text_section}`}>
                                    <p className={`${classes.avatar_text}`}>ZONA<br/>BATTLEZONE<br/></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${classes.mobile_section}`}>
                <div className={`row ${global_classes.mar_0}`}>
                    <div className={`col-sm-12 ${global_classes.pad_0}`}>
                        <div style={{paddingBottom:'4px'}}>
                            <p className={`${classes.subtitle} ${global_classes.mar_0} ${global_classes.pad_0}`}>Situado en el corazon de</p>
                        </div>
                        <div style={{paddingBottom:'21px'}}>
                            <p className={`${classes.title} ${global_classes.mar_0} ${global_classes.pad_0}`}>Paraiso Pueblo.</p>
                        </div>
                        <div>
                            <p className={`${classes.description} ${global_classes.mar_0} ${global_classes.pad_0}`}>Situado en el centro de Paraíso Pueblo y rodeado de impresionantes vistas naturales, The Body expert es una moderna y contemporánea instalación dirigida al bienestar y al cuidado personal en la que se ofrecen, entre otros, servicios de fitness y nutrición.</p>
                        </div>
                    </div>
                    <div className={`col-sm-12 ${global_classes.pad_0} ${classes.white_play}`}>
                        <Carousel
                            className={classes.carousel_root}
                            indicators={false}
                            // nextIcon=<div style={{display:'flex', justifyContent:'center', marginLeft:'auto', marginTop:'auto', width:'73px', height:'73px', backgroundColor: 'white'}}><img src="/assets/images/play.png" width='15px' height='20px' style={{margin:'auto'}}  /></div>
                        >
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/assets/images/slider1.png"
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/assets/images/slider2.png"
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/assets/images/slider3.png"
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className={`col-sm-12 ${global_classes.pad_0}`} style={{textAlign:'center'}}>
                        <div className={`${classes.avatar_image}`}>
                            <img
                                src='/assets/images/image1.png'
                                style={{width:'72px'}}
                            />
                        </div>
                        <div className={`${classes.avatar_text_section}`}>
                            <p className={`${classes.avatar_text}`}>PISCINA<br/>AGUA SALADA<br/></p>
                        </div>
                    </div>
                    <div className={`col-sm-12 ${global_classes.pad_0}`} style={{textAlign:'center'}}>
                        <div className={`${classes.avatar_image}`}>
                            <img
                                src='/assets/images/image2.png'
                                style={{width:'47px'}}
                            />
                        </div>
                        <div className={`${classes.avatar_text_section}`}>
                            <p className={`${classes.avatar_text}`}>ENTRENAMIENTO<br/>AIRE LIBRE<br/></p>
                        </div>
                    </div>
                    <div className={`col-sm-12 ${global_classes.pad_0}`} style={{textAlign:'center'}}>
                        <div className={`${classes.avatar_image}`}>
                            <img
                                src='/assets/images/image3.png'
                                style={{width:'56px'}}
                            />
                        </div>
                        <div className={`${classes.avatar_text_section}`}>
                            <p className={`${classes.avatar_text}`}>ZONA<br/>BATTLEZONE<br/></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}