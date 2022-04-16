import "./Home.css";
import React from "react";
import bannerbackground from "../../../Photos/bannerbackground.png";
import { Button, FormControl, InputGroup } from "react-bootstrap";

const Home = () => {
  return (
    <div>
        {/*====================hero section=================*/}
      <div className="hero-backgroud-image">
        <img className="img-fluid" src={bannerbackground} alt="" />
        <div>
          <h2 className="hero-search-text">
            Best Food Wating For Your Belly
            <InputGroup className="mb-3 mt-2 w-50 hero-search-input ">
              <FormControl
                placeholder="Search Your Favourite Food"
                aria-label="Search Your Favourite Food"
                aria-describedby="basic-addon2"
              />
              <Button className="search-button" variant="outline-secondary" id="button-addon2">
                Search
              </Button>
            </InputGroup>
          </h2>
        </div>
      </div>

      
    </div>
  );
};

export default Home;
