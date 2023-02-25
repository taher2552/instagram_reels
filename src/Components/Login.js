
import React, { Component } from "react";
import "./Css/Login.css";
import phoneImage from "../images/phones.png";
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import img4 from "../images/img4.png";
import { Slide, Slider, CarouselProvider, Image } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Card from '@mui/material/Card';
import instaLogo from '../images/insta_logo.jpg';
import { Button, CardActions, CardContent, TextField } from "@mui/material";



export default class Login extends Component {
  render() {
    return (
      <div className="loginWrapper">
        <div
          className="imgWrapper"
          style={{
            backgroundImage: `url(${phoneImage})`,
            backgroundSize: "80% 100%",
            backgroundRepeat: "no-repeat",
          }}
        >
            <div className="img">
            <CarouselProvider
            totalSlides={4}
            visibleSlides={1}
            isPlaying={true}
            interval={2000}
            naturalSlideHeight={560}
            naturalSlideWidth={240}
            dragEnabled={false}
            infinite={true}
            touchEnabled={true}
          >
            <Slider>
              <Slide index={0}>
                <Image src={`${img1}`}></Image>
              </Slide>
              <Slide index={1}>
                <Image src={`${img2}`}></Image>
              </Slide>
              <Slide index={2}>
                <Image src={`${img3}`}></Image>
              </Slide>
              <Slide index={3}>
                <Image src={`${img4}`}></Image>
              </Slide>
            </Slider>
          </CarouselProvider>
            </div>
         
        </div>

        <div className="loginCard">
        <Card variant="outlined">
          <div className="insta_logo">
            <img src={instaLogo} alt="" />
          </div>

          <CardContent>
            <TextField label="Email" variant="outlined" fullWidth={true} onChange={(e)=> this.setState({ email: e.target.value})}/>
            <TextField label="Password" type="password" variant="outlined" fullWidth={true} onChange={(e)=> this.setState({password: e.target.value})}/>
          </CardContent>

          <CardActions>
            <Button color="primary" fullWidth={true} variant="contained" onClick={this.handleClick}> Log in </Button> 
            <Button color="primary" fullWidth={true} variant="contained" onClick={this.handleGoogleClick}> Login with google </Button>
          </CardActions>
        </Card>
        </div>
      </div>
    );
  }
}
