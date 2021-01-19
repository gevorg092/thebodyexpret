/**
 * Media Card Component
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
import GlobalStyles from "./GlobalStyles";

const useStyles = makeStyles({
    root: {
        '@media (max-width: 1920px)': {
            padding: '0 120px',
        },
        '@media (max-width: 1440px)': {
            padding: '0 120px',
            paddingTop: '144px',
        },
        '@media (max-width: 768px)': {
            padding: '0 12px',
        },
        position: 'relative',
    },
    card_section: {
        '@media (max-width: 1920px)': {
            marginLeft: '245px',
        },
        '@media (max-width: 1440px)': {
            marginLeft: '0px',
        },
        '@media (max-width: 768px)': {
            marginLeft: '0px',
        },
    },
    subsection: {
        padding: '10px 0px',
        backgroundColor: '#eeeeee',
        height: '270px',
        width:'428px',
    },
    text_section: {
        paddingTop: '39px',
        '@media (max-width: 1920px)': {
            width: 'calc((100vw - 633px)/3)',
        },
        '@media (max-width: 1440px)': {
            width: 'calc((100vw - 422px)/3)',
        },
        '@media (max-width: 768px)': {
            width: '100%',
            paddingTop: '1px',
        },
    },
    card: {
        height: '541px',
        marginTop: '40px',
        borderRadius: '0%',
        boxShadow: 'none',
    },
    media: {
        height: '272px',
        '@media (max-width: 1920px)': {
            width: 'calc((100vw - 633px)/3)',
        },
        '@media (max-width: 1440px)': {
            width: 'calc((100vw - 422px)/3)',
        },
        '@media (max-width: 768px)': {
            width: '100%',
        },
    },
    section_3: {
        '@media (max-width: 1920px)': {
            marginLeft: 'auto',
        },
        '@media (max-width: 768px)': {
            margin: 'auto',
        },
    },
    line_section: {
        '@media (max-width: 1920px)': {
            paddingTop: '69px',
        },
        '@media (max-width: 1440px)': {
            paddingTop: '101px',
        },
        '@media (max-width: 768px)': {
            paddingTop: '21px',
        },
    },
    bottom_padding: {
        '@media (max-width: 1920px)': {
            paddingBottom: '193px',
        },
        '@media (max-width: 1440px)': {
            paddingBottom: '184px',
        },
        '@media (max-width: 768px)': {
            paddingBottom: '120px',
        },
    },
    title: {
        height: '32px',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 1.6,
        letterSpacing: '1.43px',
        color: '#000000',
        margin: '0px',
        fontSize: '20px',
        '&::after': {
            display: 'inline-block',
            content: `''`,
            borderTop: '2px solid red',
            width: '100px',
            transform: 'translateY(-1rem)',
        },
    },
    first: {
        '&::after': {
            width: '200px',
        },
    },
    text: {
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        letterSpacing: '1.43px',
        margin: '0px',
        lineHeight: '1.71',
        fontSize: '14px',
        color: '#848894',
        paddingTop: '20px',
    },
    background_section: {
        top: 466,
        width: '100%',
        zIndex: -10,
        height: '80%',
        backgroundColor: '#eeeeee',
        '@media (max-width: 768px)': {
            display: 'none',
        },
    },
    mobile_part: {
        '@media (min-width: 768px)': {
            display: 'none',
        },
        paddingBottom: '37px',
        paddingTop: '38px',
    },
    web_part: {
        '@media (max-width: 768px)': {
            display: 'none',
            padding: 'none'
        },
    }
});

export default function MediaCard(props) {
    const classes = useStyles();
    const global_classes = GlobalStyles();

    return (
        <div style={{position: 'relative'}} id='actividades'>
            <div className={`${classes.root}`}>
                <div className={`col-sm-12 ${global_classes.pad_0}`}>
                    <div className={`row ${global_classes.mar_0}`}>
                        <div style={{height:'36px', width:'100%'}}>
                            <p className={`${global_classes.subtitle} ${global_classes.mar_0} ${global_classes.pad_0}`}>Nuestras</p>
                        </div>
                        <div style={{height:'71px', width:'100%'}}>
                            <p className={`${global_classes.title} ${global_classes.mar_0} ${global_classes.pad_0}`}>Actividades.</p>
                        </div>
                        <p className={`${global_classes.description} ${global_classes.mar_0} ${global_classes.pad_0}`}>Porque sabemos que un buen entrenamiento puede marcar la diferencia entre un buen o mal día, en <strong>The Body Expert</strong> ofrecemos una atención personalizada exclusiva en nuestro gimnasio u online. Reforzando nuestra filosofía de proporcionar un espacio de bienestar y salud excepcional en los que nuestros miembros se sientan cuidados.</p>
                    </div>
                </div>

                <div className={`${global_classes.pad_0} ${classes.card_section}`}>
                    <div className={`col-sm-12 ${global_classes.pad_0} ${classes.line_section}`}>
                        <div className={`row ${global_classes.mar_0}`}>
                            <div className={`col-sm-4 ${global_classes.pad_0}`}>
                                <div className={`${classes.text_section} ${classes.mobile_part}`}>
                                    <h5 className={`${classes.title} ${global_classes.mar_0} ${classes.first}`}>ENTRENAMIENTO PERSONAL<br/></h5>
                                </div>
                                <div className={`${classes.media}`} style={{
                                    backgroundImage: 'url(/assets/images/card1.png)',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center center',
                                }} />
                                <div className={`${classes.text_section}`}>
                                    <h5 className={`${classes.title} ${global_classes.mar_0} ${classes.first} ${classes.web_part}`}>ENTRENAMIENTO PERSONAL<br/></h5>
                                    <p className={`${classes.text} ${global_classes.mar_0}`}>Cada persona tiene unos objetivos y necesidades diferentes, por ese motivo, tu plan de entrenamiento será único.<br/></p>
                                    <p className={`${classes.text} ${global_classes.mar_0}`}>Nuestro personal trainer es el encargado de elaborarlo adaptándolo a tus necesidades con el objetivo de que alcances tus metas. Nos centraremos en mejorar tus zonas más conflictivas y a construir el físico que deseas.</p>
                                </div>
                            </div>
                            <div className={`col-sm-4 ${global_classes.pad_0}`}>
                                <div className={`${classes.text_section} ${classes.mobile_part}`}>
                                    <h5 className={`${classes.title} ${global_classes.mar_0} ${classes.first}`}>RETO 30 SEMANAS<br/></h5>
                                </div>
                                <div className={`row ${global_classes.mar_0}`}>
                                    <div className={`${classes.media}`} style={{
                                        backgroundImage: 'url(/assets/images/card2.png)',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center center',
                                        margin: '0 auto',
                                    }} />
                                    <div className={`${classes.text_section}`} style={{margin:'auto'}}>
                                        <h5 className={`${classes.title} ${global_classes.mar_0} ${classes.web_part}`}>RETO 30 SEMANAS<br/></h5>
                                        <p className={`${classes.text} ${global_classes.mar_0}`}>Nuestro reto te ayudará a <strong>mejorar tu salud y forma física.</strong> Éste consta de una serie de rutinas para ejercitar todo el cuerpo, aumentando de intensidad de manera paulatina y con unas pautas alimenticias bajo la supervisión de nuestro especialista.<br/></p>
                                        <p className={`${classes.text} ${global_classes.mar_0}`}>Cada reto está diseñado dependiendo la persona y su nivel: principiante, intermedio y avanzado.</p>
                                    </div>
                                </div>
                            </div>
                            <div className={`col-sm-4 ${global_classes.pad_0}`}>
                                <div className={`${classes.text_section} ${classes.mobile_part}`}>
                                    <h5 className={`${classes.title} ${global_classes.mar_0} ${classes.first}`}>PLANES ONLINE<br/></h5>
                                </div>
                                <div className={`row ${global_classes.mar_0}`}>
                                    <div className={`${classes.media} ${classes.section_3}`} style={{
                                        backgroundImage: 'url(/assets/images/card3.png)',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center center',
                                    }} />
                                    <div className={`${classes.text_section}`} style={{marginLeft:'auto'}}>
                                        <h5 className={`${classes.title} ${global_classes.mar_0} ${classes.web_part}`}>PLANES ONLINE<br/></h5>
                                        <p className={`${classes.text} ${global_classes.mar_0}`}>También puedes disfrutar de The Body Expert desde la comodidad del salón de tu casa con vídeos bajo demanda y en streaming con un catálogo de distintos planes de fitness y nutrición.<br/></p>
                                        <p className={`${classes.text} ${global_classes.mar_0}`}>Rutinas de entrenamiento totalmente personalizada, diseñada por expertos entrenadores personales para lograr tu objetivo teniendo en cuenta tu nivel y disponibilidad.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`col-sm-12 ${global_classes.pad_0} ${classes.line_section} ${classes.bottom_padding}`}>
                        <div className={`row ${global_classes.mar_0}`}>
                            <div className={`col-sm-4 ${global_classes.pad_0}`}>

                            </div>
                            <div className={`col-sm-4 ${global_classes.pad_0}`}>
                                <div className={`${classes.text_section} ${classes.mobile_part}`}>
                                    <h5 className={`${classes.title} ${global_classes.mar_0} ${classes.first}`}>AQUAFITNESS<br/></h5>
                                </div>
                                <div className={`row ${global_classes.mar_0}`}>
                                    <div className={`${classes.media}`} style={{
                                        backgroundImage: 'url(/assets/images/card4.png)',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center center',
                                        margin: '0 auto',
                                    }} />
                                    <div className={`${classes.text_section}`} style={{margin:'auto'}}>
                                        <h5 className={`${classes.title} ${global_classes.mar_0} ${classes.web_part}`}>AQUAFITNESS<br/></h5>
                                        <p className={`${classes.text} ${global_classes.mar_0}`}>Una de las novedades de esta actividad es que se realiza en <strong>agua salada,</strong> evitando así, problemas en la piel por la exposición al cloro.<br/></p>
                                        <p className={`${classes.text} ${global_classes.mar_0}`}>En nuestra piscina climatizada, además del uso lucrativo, los entusiastas del deporte podrán entrenar todo el año preparándose para triatlones y otros eventos de resistencia gracias a su <strong>sistema de natación contracorriente,</strong> así como, ser el espacio perfecto para realizar rehabilitación y terapia deportiva.</p>
                                    </div>
                                </div>
                            </div>
                            <div className={`col-sm-4 ${global_classes.pad_0}`}>
                                <div className={`${classes.text_section} ${classes.mobile_part}`}>
                                    <h5 className={`${classes.title} ${global_classes.mar_0} ${classes.first}`}>BATTLEZONE<br/></h5>
                                </div>
                                <div className={`row ${global_classes.mar_0}`}>
                                    <div className={`${classes.media} ${classes.section_3}`} style={{
                                        backgroundImage: 'url(/assets/images/card5.png)',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center center',
                                    }} />
                                    <div className={`${classes.text_section}`} style={{marginLeft:'auto'}}>
                                        <h5 className={`${classes.title} ${global_classes.mar_0} ${classes.web_part}`}>BATTLEZONE<br/></h5>
                                        <p className={`${classes.text} ${global_classes.mar_0}`}>Realizar ejercicio físico al aire libre y en contacto con la naturaleza y el sol, aumenta nuestra motivación, autoestima y bienestar.<br/></p>
                                        <p className={`${classes.text} ${global_classes.mar_0}`}>En <strong>Paraíso Pueblo</strong> contamos con nuestra “battle zone” preparada con varias estructuras y materiales para que puedas aumentar tus aptitudes físicas más importantes: flexibilidad, potencia, equilibrio, coordinación, resistencia muscular, cardiorrespiratoria, fuerza, velocidad, agilidad y precisión.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className={`${classes.background_section} ${global_classes.pos_absolute}`} />

        </div>
    );
}
