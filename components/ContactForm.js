import { makeStyles } from '@material-ui/core/styles';
import globalStyles from './GlobalStyles';
import * as React from 'react';
import {Button} from '@material-ui/core';
import GoogleMapsContainer from './GoogleMapsContainer';

const useStyles = makeStyles({
    contact: {
        marginTop: 'auto',
        '@media (max-width: 1920px)': {
            width: '44.32%',
        },
        '@media (max-width: 1440px)': {
            width: '44.32%',
        },
        '@media (max-width: 768px)': {
            width: '100%',
        },
    },
    contact_section: {
        '@media (max-width: 1920px)': {
            padding: '0 120px',
        },
        '@media (max-width: 1440px)': {
            padding: '0 120px',
        },
        '@media (max-width: 768px)': {
            padding: '0 10px',
        },
    },
    input: {
        border: '2px solid #dbdbdb',
        '@media (max-width: 1920px)': {
            width: '95%',
        },
        '@media (max-width: 1440px)': {
            width: '95%',
        },
        '@media (max-width: 768px)': {
            width: '100%',
        },
        height: '53px',
        '&:hover': {
            outline: 'none',
        },
        '&:focus': {
            outline: 'none',
        },
        padding: '14px 29px 13px 29px',
        fontSize: '12px',
        opacity: 0.99,
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 2.17,
        letterSpacing: '0.48px',
        color: '#9e9e9e',
        '&::-webkit-input-placeholder': {
            color: '#9e9e9e',
        }
    },
    input_pad: {
        padding: '2.5% 0',
    },
    second: {
        marginLeft: 'auto',
    },
    multi_line_input: {
        width:'100%',
        height:'287px',
    },
    submit: {
        width: '200px',
        height: '54px',
        backgroundColor: '#070707',
        color:'white',
        borderRadius: '0%',
        fontSize: '12px',
        '&:hover': {
            backgroundColor:'black !important',
        },
    },
    googlemap: {
        '@media (max-width: 1920px)': {
            width: '55.68%',
        },
        '@media (max-width: 1440px)': {
            width: '55.68%',
        },
        '@media (max-width: 768px)': {
            width: '100%',
        },
    },
    position_section: {
        paddingLeft: '11.36%',
        '@media (max-width: 1440px)': {
            paddingLeft: '0px',
        },
        '@media (max-width: 768px)': {
            padding: '0 10px',
        },
    },
    position_title: {
        opacity: 0.99,
        fontFamily: 'Roboto',
        fontSize: '20px',
        fontWeight: 500,
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 1.3,
        letterSpacing: 'normal',
        color: '#333333',
        margin: '0px',
        paddingTop: '45px',
        '&::after': {
            display: 'inline-block',
            content: `''`,
            borderTop: '2px solid red',
            width: '35px',
            transform: 'translate(-10px, -12px)',
        },
    },
    position_description: {
        opacity: 0.99,
        fontFamily: 'Roboto',
        fontSize: '15px',
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        letterSpacing: 'normal',
        color: '#9e9e9e',
        margin: '0px',
        width: '80%',
    },
    position: {
        '@media (max-width: 768px)': {
            flexDirection: 'column-reverse',
        },
    },
    padding_bottom: {
        '@media (max-width: 1920px)': {
            paddingBottom: '155px',
        },
        '@media (max-width: 1440px)': {
            paddingBottom: '94px',
        },
        '@media (max-width: 768px)': {
            paddingBottom: '16px',
        },

    },
    vertical_line_hide: {
        '@media (max-width: 1920px)': {
            display: 'none',
        },
        '@media (max-width: 1440px)': {
            display: 'block',
        },
    },

    vertical_line: {
        '@media (max-width: 1920px)': {
            display: 'block',
        },
        '@media (max-width: 1440px)': {
            display: 'none',
        },
    }
});

const ContactForm  = () => {
    const classes = useStyles();
    const global_classes = globalStyles();
    return (
        <div className={`col-md-12 ${global_classes.pad_0} ${classes.padding_bottom}`} id='contacto'>
            <div className={`row ${global_classes.mar_0}`}>
                <div className={`${classes.contact} ${global_classes.pad_0}`}>
                    <div className={`col-sm-12 ${global_classes.pad_0}`} style={{paddingBottom:'36px'}}>
                        <div className={`${classes.contact_section}`}>
                            <p className={`${global_classes.subtitle} ${global_classes.mar_0} ${global_classes.pad_0}`}>Estemos en</p>
                            <p className={`${global_classes.title} ${global_classes.mar_0} ${global_classes.pad_0}`}>Contacto.</p>
                        </div>
                    </div>

                    <div className={`col-sm-12 ${global_classes.pad_0}`}>
                        <div className={`${classes.contact_section}`}>
                            <div className={`row ${global_classes.mar_0}`}>
                                <div className={`col-sm-6 ${global_classes.pad_0} ${classes.input_pad}`}>
                                    <input
                                        id='members'
                                        type='text'
                                        placeholder='MOMBRE'
                                        className={`${classes.input}`}
                                    />
                                </div>
                                <div className={`col-sm-6 ${global_classes.pad_0} ${classes.input_pad}`}>
                                    <div className={`row ${global_classes.mar_0}`}>
                                        <input
                                            id='email'
                                            type='email'
                                            placeholder='EMAIL'
                                            className={`${classes.input} ${classes.second}`}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`col-sm-12 ${global_classes.pad_0}`}>
                        <div className={`${classes.contact_section}`}>
                            <div className={`row ${global_classes.mar_0}`}>
                                <div className={`col-sm-6 ${global_classes.pad_0} ${classes.input_pad}`}>
                                    <input
                                        id='telehono'
                                        type='number'
                                        placeholder='TELEFONO'
                                        className={`${classes.input}`}
                                    />
                                </div>
                                <div className={`col-sm-6 ${global_classes.pad_0} ${classes.input_pad}`}>
                                    <div className={`row ${global_classes.mar_0}`}>
                                        <input
                                            id='asunto'
                                            type='text'
                                            placeholder='ASUNTO'
                                            className={`${classes.input} ${classes.second}`}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`col-sm-12 ${global_classes.pad_0}`}>
                        <div className={`${classes.contact_section}`}>
                            <div className={`row ${global_classes.mar_0}`}>
                                <div className={`col-sm-12 ${global_classes.pad_0} ${classes.input_pad}`}>
                                    <textarea
                                        id='message'
                                        placeholder='TU MENSAJE'
                                        className={`${classes.input} ${classes.multi_line_input}`}
                                        rows={20}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`col-sm-12 ${global_classes.pad_0}`} style={{paddingTop:'10px'}}>
                        <div className={`${classes.contact_section}`}>
                            <div className={`row ${global_classes.mar_0}`} style={{paddingBottom: '30px'}}>
                                <Button
                                    className={`${classes.submit}`}
                                >
                                    ENVIAR MENSAJE
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${classes.googlemap} ${global_classes.pad_0}`}>
                    <GoogleMapsContainer />
                    <div className={`${classes.position_section}`}>
                        <div className={`row ${global_classes.mar_0}`}>
                            <div className={`col-sm-12 ${global_classes.pad_0}`}>
                                <div className={`row ${global_classes.mar_0} ${classes.position}`}>
                                    <div className={`col-sm-6 ${global_classes.pad_0}`}>
                                        <h4 className={classes.position_title}>Horario<br/></h4>
                                        <p className={`${classes.position_description} ${global_classes.pad_left_0}`} style={{lineHeight: 2.27}}><strong>Lunes</strong> - Viernes 06:00 - 21:30</p>
                                        <p className={`${classes.position_description} ${global_classes.pad_left_0}`} style={{lineHeight: 2.27}}><strong>Sábado</strong> - 06:00 - 20:00</p>
                                        <p className={`${classes.position_description} ${global_classes.pad_left_0}`} style={{lineHeight: 2.27}}><strong>Domingo</strong> - 06:00 - 19:00<br/></p>
                                        <p className={`${classes.position_description} ${global_classes.pad_left_0}`} style={{lineHeight: 1.73, marginTop: '28px'}}>* La piscina cierra 20 minutos antes del gimnasio</p>
                                    </div>
                                    <div className={`col-sm-2 ${global_classes.pad_0} ${classes.vertical_line}`}>
                                        <div className={`row ${global_classes.mar_0}`} style={{height:'100%'}}>
                                            <div className={`col-sm-6 ${global_classes.pad_0}`} style={{borderLeft:'solid 1px #9e9e9e', marginTop:'45px'}}>

                                            </div>
                                        </div>
                                    </div>
                                    <div className={`col-sm-4 ${global_classes.pad_0} ${classes.vertical_line}`}>
                                        <h4 className={classes.position_title}>Madrid<br/></h4>
                                        <div className={global_classes.dis_flex}>
                                            <img
                                                src='assets/images/location.png'
                                                style={{width:'15px', height: '22px'}}
                                            />
                                            <p className={classes.position_description} style={{marginLeft:'10px', lineHeight: 1.73}}>Francisco De Ricci<br/>Calle Francisco De Ricci ( Madrid )</p>
                                        </div>
                                        <div className={global_classes.dis_flex} style={{marginTop:'17px', height: '53px'}}>
                                            <img
                                                src='assets/images/telephone.png'
                                                style={{width:'15px', height: '17px', marginTop:'5px'}}
                                            />
                                            <p className={classes.position_description} style={{marginLeft:'10px', lineHeight: 1.73}}>+(00) 852 852 9633</p>
                                        </div>
                                        <div className={global_classes.dis_flex} style={{marginTop:'10px'}}>
                                            <img
                                                src='assets/images/email.png'
                                                style={{width:'17px', height: '11px', marginTop:'7px'}}
                                            />
                                            <p className={`${classes.position_description} ${global_classes.mar_0}`} style={{marginLeft:'10px', lineHeight: 1.73}}>jason@thebodyexpert.com</p>
                                        </div>
                                    </div>
                                    <div className={`col-sm-6 ${global_classes.pad_0} ${classes.vertical_line_hide}`}>
                                        <h4 className={classes.position_title}>Madrid<br/></h4>
                                        <div className={global_classes.dis_flex}>
                                            <img
                                                src='assets/images/location.png'
                                                style={{width:'15px', height: '22px'}}
                                            />
                                            <p className={classes.position_description} style={{marginLeft:'10px', lineHeight: 1.73}}>Francisco De Ricci<br/>Calle Francisco De Ricci ( Madrid )</p>
                                        </div>
                                        <div className={global_classes.dis_flex} style={{marginTop:'17px', height: '53px'}}>
                                            <img
                                                src='assets/images/telephone.png'
                                                style={{width:'15px', height: '17px', marginTop:'5px'}}
                                            />
                                            <p className={classes.position_description} style={{marginLeft:'10px', lineHeight: 1.73}}>+(00) 852 852 9633</p>
                                        </div>
                                        <div className={global_classes.dis_flex} style={{marginTop:'10px'}}>
                                            <img
                                                src='assets/images/email.png'
                                                style={{width:'17px', height: '11px', marginTop:'7px'}}
                                            />
                                            <p className={`${classes.position_description} ${global_classes.mar_0}`} style={{marginLeft:'10px', lineHeight: 1.73}}>jason@thebodyexpert.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;