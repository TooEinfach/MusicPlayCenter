import React, { Component } from 'react';
import { Grid, Typography, Card, Iconbutton, LinearProgress } from "@material-ui/core";
import { PlayArrowIcon, SkipNextIcon, PauseIcon } from "@material-ui/icons";

export default class MusicPlayer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const songProgress = (this.props.time / this.props.duration) * 100;

       return (<Card>
            <Grid container alignItems="center">
                <Grid item align="center" xs={4}>
                    <img src={this.props.image_url} height="100%" width="100%"></img>
                </Grid>
                <Grid item align="center" xs={8}>
                    <Typography component="h5" variant="h5">
                        {this.props.title}
                    </Typography>
                    <Typography color="textSecondary" variant="subtile1">
                        {this.props.artist}
                    </Typography>
                    <div>
                        <Iconbutton>
                            {this.props.is_playing ? <PauseIcon /> : <PlayArrowIcon />}
                        </Iconbutton>
                        <Iconbutton>
                            <SkipNextIcon />
                        </Iconbutton>
                    </div>
                </Grid>
            </Grid>
            <LinearProgress variant="determinate" value={songProgress} />
        </Card>);
    }
}