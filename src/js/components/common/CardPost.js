import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import CardContent from "@material-ui/core/CardContent";
import {makeStyles} from "@material-ui/core/styles";
import withWidth from '@material-ui/core/withWidth';
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import i18next from "i18next";
import {mobileSize} from "../../constansts/constCommon";
import Divider from "@material-ui/core/Divider";
const useStyles = makeStyles((theme) => ({
    rootGird: {
        marginTop: theme.spacing(1)
    },
    cardPadding: {
        marginTop: theme.spacing(2),
        right:10,
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(1)
    },
    submit: {
        'font-family': 'Arial'
    },
    link: {
        display: 'block',
        'line-height': 'normal',
        'font-family': 'Arial'
    },
    banner:{
        margin:0,
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        background:'#E5E9E8'
    }
}));
function CardPost(props) {
    const classes = useStyles();
    const post =
        [{
        tittle:'1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25',
            content:' AAAAaaaa aaaa aaa aaaaa aaaaaaaa aaaaa aaaa aaaaaaaaa aaaaaa aaa aaaaa aaaaaaa aaaaaaaa',
            author:'Trương văn dũng',
            size:[0,5000000],
            offered:30,
            bid_time_remaining:"1 ngày 23 giờ 23 phút"
        },{
            tittle:'Xây dựng web bán hàng bằng Wordpress',
            content:'Công ty chúng tôi cần xây dựng một website bán hàng bàng wordpress',
            author:'Trương văn dũng',
            size: [10000,50000000],
            offered:10,
            bid_time_remaining:"1 ngày 23 giờ 23 phút"
        }
            ];
    const listPost= post.map((post) => {
        if(mobileSize.indexOf(props.width) > -1){
            if(post.content.length > 50){
                post.content = post.content.substr(0,50)+'...';
            }
            if(post.tittle.length > 50){
                post.tittle = post.tittle.substr(0,50)+'...';
            }
        }
        return (
            <Grid xs={12} className={classes.rootGird} item>

                <Paper variant="outlined" square >
                    <CardContent className={classes.cardPadding}>
                        <Typography  display={"inline"} xs={12}   m={4} variant={'h6'}>
                            <Link className={classes.link} variant={'h6'}  underline='none' href={'/'}>
                                {post.tittle}
                            </Link>
                            <Typography variant="caption" display="block" gutterBottom>
                                {i18next.t('post_by')}
                                <Typography variant="overline"  gutterBottom>
                                    {post.author}
                                </Typography>
                            </Typography>

                        </Typography>
                        <Typography paragraph={true}  className={classes.submit} >
                            {post.content}
                        </Typography>
                        <Divider light />
                        <Typography >
                            {i18next.t('bid_time_remaining')}     <Typography variant={'span'} color={'error'}> {post.bid_time_remaining} </Typography>
                        </Typography>
                    </CardContent>
                    <Box className={classes.banner}>
                      <Grid container >
                          <Grid item xs={8}>
                              <Typography  variant=""  gutterBottom>
                                  {i18next.t('project_size')} {post.size[0].toLocaleString()} - {post.size[1].toLocaleString()} VND
                              </Typography>
                          </Grid>
                          <Grid item xs={4} align={'end'}>
                              <Typography   variant=""  gutterBottom>
                                  {post.offered} {i18next.t('offered')}
                              </Typography>
                          </Grid>
                      </Grid>
                    </Box>

                </Paper>
            </Grid>
        )
    })
    return (
        <Grid xs={mobileSize.indexOf(props.width) > -1 ? 12 : 7}  container
              direction="row"
              justify="center"
              alignItems="center" >
            {listPost}
        </Grid>
    )
};
export default withWidth()(CardPost);
