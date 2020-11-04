import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ButtonExampleEmphasisShorthand from "./ButtonExampleEmphasisShorthand";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        margin: 5,

        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1
    ,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },


});

export default function SimpleCard(props) {

    const argProps =
        {
            title: "Question 1",
            content: "А вы знали, что загнанных лошадей пристреливают?",
            options: ["да", "нет"]
        }

    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>

                </Typography>
                <Typography variant="h5" component="h2">
                    {bull}{argProps.title}{bull}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {argProps.content}
                </Typography>
                <Typography variant="body2" component="p">
                    some extra text some extra text
                    <br />
                </Typography>
            </CardContent>
            <CardActions>
                <ButtonExampleEmphasisShorthand />
            </CardActions>
        </Card>
    );
}