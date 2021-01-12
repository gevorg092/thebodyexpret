import React from 'react';
import { Button, Menu, MenuItem } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import GlobalStyles from './GlobalStyles';

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
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
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

const useStyles = makeStyles({
    modal_button: {
        borderRadius: '0%',
        height: '56px',
        fontSize: '14px',
        outline: 'none',
        color:'white',
        backgroundColor:'black',
        '&:hover': {
            backgroundColor:'black !important',
        },
        '&:focus': {
            outline:'none',
        },
    },

    modal_root: {
        width: '380px',
        height: '307px',
        '& .MuiMenu-paper' : {
            border: 'solid 1px #979797',
            borderRadius: '0%',
            top: '134px !important',
            right: '0px !important',
            width: '380px',
            height: '307px',
            maxWidth: '380px',
            maxHeight: '307px',
        },
        '& .MuiMenu-list' : {
            padding:'0px',
        },
    },

    list_menu: {
        position: 'relative',
        padding:'0px',
        margin: '0px',
        minHeight: '40px',
        cursor: 'default',
        '&:focus': {
            backgroundColor:'white !important',
        },
    },

    modal_content: {
        padding: '44px 39px 24px 30px',
    },
    modal_header: {
        width: '154px',
        height: '72px',
    },
    header_text: {
        fontFamily: 'Roboto',
        fontSize: '24px',
        fontWeight: 'bold',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 1.5,
        letterSpacing: '-0.16px',
        color: 'rgba(51, 50, 56, 0.84)',
        margin: '0px',
    },
    modal_text: {
        width: '315px',
        height: '56px',
        paddingTop: '7px',
    },
    text: {
        fontFamily: 'Roboto',
        fontSize: '14px',
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 1.71,
        letterSpacing: '-0.09px',
        color: 'rgba(35, 35, 39, 0.84)',
    },
    red_underline: {
        lineHeight: 0.5,
        '&::after': {
            display: 'inline-block',
            content: `''`,
            borderTop: '2px solid red',
            width: '109px',
            transform: 'translateX(-1rem)',
        },
    },
    modal_input: {
        width: '312px',
        height: '46px',
    },
    input: {
        border: '2px solid #979797',
        width: '100%',
        height: '46px',
        '&:hover': {
            outline: 'none',
        },
        '&:focus': {
            outline: 'none',
        },
        padding: '13px',
        fontSize: '18px',
        opacity: 0.99,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 'normal',
        letterSpacing: '-0.12px',
        color: 'rgba(51, 50, 56, 0.84)',
        '&::-webkit-input-placeholder': {
            color: 'rgba(51, 50, 56, 0.84)',
        },
    },
    modal_submit: {
        paddingTop: '19px',
        textAlign: 'end',
    },
    submit: {
        width: '104px',
        height: '44px',
        padding: '7px 14px',
        border: '2px solid #979797',
        fontFamily: 'Roboto',
        fontSize: '14px',
        fontWeight: 'bold',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 2.36,
        letterSpacing: '4.94px',
        color: '#ea0c0c',
        borderRadius: '0%',
        '&:hover': {
            outline: 'none',
        },
        '&:focus': {
            outline: 'none',
        },
    },
    modal_close: {
        top: '22px',
        right: '22px',
        cursor: 'pointer',
    }
});

export default function ModalButton(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const classes = useStyles();
    const global_classes = GlobalStyles();

    return (
        <div style={{width: props.width}}>
            <Button
                aria-controls="customized-menu"
                aria-haspopup="true"
                variant='outlined'
                className={`${classes.modal_button} `}
                onClick={handleClick}
                style={{width: props.width, height: props.height}}
            >
                ENVIAR
            </Button>
            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                className={classes.modal_root}
            >
                <StyledMenuItem className={`${classes.list_menu}`}>
                    <div className={`${classes.modal_close} ${global_classes.pos_absolute}`}>
                        <img
                            src='/assets/images/close.png'
                            width='23px'
                            height='27px'
                            onClick={handleClose}
                        />
                    </div>
                    <div className={`${classes.modal_content}`}>
                        <div className={`${classes.modal_header}`}>
                            <p className={`${classes.header_text} ${classes.red_underline}`}>Nosotros te<br/></p>
                            <p className={`${classes.header_text}`}>Ilamamos.</p>
                        </div>
                        <div className={`${classes.modal_text}`}>
                            <p className={`${classes.text}`}>Indicanos tu telefono y nos pondremos en contacto</p>
                        </div>
                        <div className={`${classes.modal_input}`}>
                            <input
                                type='number'
                                placeholder='+34.'
                                className={`${classes.input}`}
                            />
                        </div>
                        <div className={`${classes.modal_submit}`}>
                            <Button
                                aria-controls="customized-menu"
                                aria-haspopup="true"
                                variant='outlined'
                                className={`${classes.submit} `}
                            >
                                ENVIAR
                            </Button>
                        </div>
                    </div>
                </StyledMenuItem>
            </StyledMenu>
        </div>
    );
}
