import React, { useState } from 'react';
import { Button, ListItem, ListItemText, Typography, Menu, MenuItem } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import globalStyles from './GlobalStyles';
import ModalButton from './ModalButton';

const useStyles = makeStyles({
    root: {
        height: '171px',
        width: '100%',
        borderBottom: 'solid 1px #8f9094',
        backgroundColor: 'white',
        zIndex: 100,
        '@media (max-width: 768px)': {
            height: '55px',
        },
    },
    logo_section: {
        '@media (max-width: 1920px)': {
            width: '370px',
            top: '29px',
        },
        '@media (max-width: 1440px)': {
            width: '337px',
            top: '49px',
        },
        '@media (max-width: 768px)': {
            width: '87px',
            top: '12px',
        },
    },
    logo_image: {
        '@media (max-width: 1920px)': {
            width: '120px',
        },
        '@media (max-width: 1440px)': {
            width: '97px',
        },
        '@media (max-width: 768px)': {
            width: '35px',
        },
    },
    menu_section: {
        display: 'inherit',
        marginTop: '90px',
        width: '100%',
        '@media (max-width: 1920px)': {
            marginLeft: '627px',
            marginRight: '332px',
        },
        '@media (max-width: 1440px)': {
            marginLeft: '356px',
            marginRight: '336px',
        },
        '@media (max-width: 1100px)': {
            marginLeft: '356px',
            marginRight: '0px',
        },
        '@media (max-width: 768px)': {
            display: 'none',
        },
    },
    menu: {
        fontSize: '14px',
    },
    linkText: {
        textDecoration: 'none',
        textTransform: 'uppercase',
        color: '#0e0d0d',
        '&:hover': {
            color: '#0e0d0d',
            textDecoration: 'none'
        }
    },
    button_section: {
        width: '332px',
        top: '71px',
        right: '0px',
        '@media (max-width: 1100px)': {
            display: 'none',
        },
    },
    button: {
        borderRadius: '0%',
        height: '56px',
        fontSize: '14px',
        outline: 'none',
        '&:focus': {
            outline:'none',
        },
    },
    submit: {
        color:'white',
        backgroundColor:'black',
        width: '212px',
        '&:hover': {
            backgroundColor:'black !important',
        },
    },
    es_en_button: {
        width: '93px',
        color: 'red',
        border: 'solid 1px red',
        marginLeft: '27px',
    },

    list_section: {
        right: '30px',
        top: '17px',
        '@media (max-width: 1920px)': {
            display: 'none',
        },
        '@media (max-width: 1440px)': {
            display: 'none',
        },
        '@media (max-width: 768px)': {
            display: 'block',
        },
    },

    list_image: {
        cursor: 'pointer',
    },

    list: {
        width: '280px',
        padding: '0 32px',
        margin: '0px',
        height: '50px',
    },

    list_menu: {
        padding:'0px',
        margin: '0px',
        height:'50px',
        minHeight: '40px',
        '&:focus': {
            backgroundColor:'white !important',
        },
    },

    list_menu_text: {
        fontFamily: 'Roboto',
        fontSize: '14px',
        fontWeight: 500,
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 'normal',
        letterSpacing: '2.05px',
        // textAlign: 'center',
        color: '#0e0d0d',
        '&:hover': {
            color:'black',
            textDecoration: 'none',
            '& .text:after': {
                display: 'inline-block',
                content: `''`,
                borderTop: '2px solid red',
                width: '109px',
                transform: 'translateX(-2rem)',
            }
        },
        textTransform: 'uppercase',
    },

    mobile_button_es_en: {
        width: '93px',
        height: '40px',
        borderRadius: '0%',
        border: 'solid 2px #8f8d8d',
        fontFamily: 'Roboto',
        fontSize: '14px',
        fontWeight: 500,
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 'normal',
        letterSpacing: '2.05px',
        textAlign: 'center',
        color: '#8f8d8d',
    },

    mobile_button: {
        width: '216px',
        height: '50px',
        borderRadius: '0%',
        backgroundColor: '#070707',
        fontFamily: 'Roboto',
        fontSize: '14px',
        fontWeight: 500,
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 'normal',
        letterSpacing: '2.05px',
        textAlign: 'center',
        color: '#ffffff',
    },

    menu_root: {
        '& .MuiMenu-paper' : {
            border: 'solid 1px #979797',
            borderRadius: '0%',
            left: 'auto !important',
            top: '54px !important',
            right: '0px',
            width: '280px',
        },
        '& .MuiMenu-list' : {
            padding:'0px',
        },
    }
});

const navLinks = [
    { title: 'Paraiso Pueblo', path: '#paraiso' },
    { title: 'Actividades', path: '#actividades' },
    { title: 'Contacto', path: '#contacto' },
]

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);

export default function Header(){
    const classes = useStyles();
    const global_classes = globalStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [isOpen, setIsOpen] = React.useState(false);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setIsOpen(true);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setIsOpen(false);
    };

    return (
        <div className={`${classes.root} ${global_classes.mar_0} ${global_classes.dis_flex} ${global_classes.pos_absolute}`}>
            <div className={`${classes.logo_section} ${global_classes.dis_flex} ${global_classes.jus_center} ${global_classes.pos_absolute}`}>
                <img
                    className={`${classes.logo_image}`}
                    src='/assets/images/logo.svg'
                />
            </div>
            <div className={`${global_classes.mar_0} ${global_classes.pad_0} ${classes.menu_section}`}>
                <div className={`col-sm-12 ${global_classes.pad_0} ${global_classes.dis_flex}`} style={{width: '100%'}}>
                {navLinks.map((navLink, index) => (
                    <div className={`col-sm-4 ${global_classes.pad_0}`} key={`${index}`}>
                        <a href={navLink.path} className={classes.linkText}>
                            <ListItem button className={`${global_classes.pad_0}`}>
                                <ListItemText primary={
                                    <Typography variant='h6' style={{ fontSize:'14px'}}>
                                        {navLink.title}
                                    </Typography>
                                } className={`${classes.title} ${global_classes.mar_0}`}/>
                            </ListItem>
                        </a>
                    </div>
                ))}
                </div>
            </div>
            <div className={`${classes.button_section} ${global_classes.dis_flex} ${global_classes.pos_absolute}`}>
                <div className={`${global_classes.mar_auto} ${global_classes.dis_flex}`}>
                    <ModalButton
                        width={212}
                        height={56}
                    />
                    <Button className={`${classes.button} ${classes.es_en_button} ${global_classes.mar_auto}`} variant='outlined'>
                        ES/EN
                    </Button>
                </div>
            </div>
            <div className={`${classes.list_section} ${global_classes.pos_absolute}`}>
                {isOpen ?
                    <img
                    src='/assets/images/close.png'
                    onClick={handleClose}
                    />
                    :
                    <img
                        src='/assets/images/list.png'
                        className={`${classes.list_image}`}
                        onClick={handleClick}
                    />
                }

                <StyledMenu
                    id="customized-menu"
                    anchorEl={anchorEl}
                    className={classes.menu_root}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <StyledMenuItem className={`${classes.list_menu}`} style={{marginTop:'60px'}}>
                        <ListItemText className={`${classes.list}`}><a href='#paraiso' className={`${classes.list_menu_text}`}><p className={`${global_classes.mar_0} text`} onClick={handleClose}>Paraiso Pueblo<br/></p></a></ListItemText>
                    </StyledMenuItem>
                    <StyledMenuItem className={`${classes.list_menu}`}>
                        <ListItemText className={`${classes.list}`}><a href='#actividades' className={`${classes.list_menu_text}`}><p className={`${global_classes.mar_0} text`} onClick={handleClose}>Actividades<br/></p></a></ListItemText>
                    </StyledMenuItem>
                    <StyledMenuItem className={`${classes.list_menu}`}>
                        <ListItemText className={`${classes.list}`}><a href='#contacto' className={`${classes.list_menu_text}`}><p className={`${global_classes.mar_0} text`} onClick={handleClose}>Contacto<br/></p></a></ListItemText>
                    </StyledMenuItem>
                    <StyledMenuItem className={`${global_classes.pad_0} ${global_classes.mar_0}`} style={{paddingTop:'63px'}}>
                        <ListItemText className={`${classes.list}`}>
                            <Button className={`${classes.mobile_button_es_en} ${global_classes.mar_auto}`} variant='outlined'>
                                ES/EN
                            </Button>
                        </ListItemText>
                    </StyledMenuItem>
                    <StyledMenuItem className={`${global_classes.pad_0} ${global_classes.mar_0}`} style={{paddingTop:'16px', paddingBottom:'20px'}}>
                        <ListItemText className={`${classes.list}`}>
                            <ModalButton
                                width={216}
                                height={50}
                            />
                        </ListItemText>
                    </StyledMenuItem>
                </StyledMenu>
            </div>
        </div>
    )
}
