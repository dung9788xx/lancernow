import React, {useEffect, useState} from 'react';
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import i18n from "../../i18n/i18n";
export default function Footer() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                {i18n.t('web_name')}
            </Link>
            {" "+new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
