import React from "react";
import decagonLogo from "../../../assets/img/logo.png";
import teamsLogo from "../../../assets/img/Teams-logo.png";
import {
  HomePageWrapper,
  SectionOne,
  SectionTwo,
  TagWrapper,
  ImgResponsive,
} from "./Home.style";
import { Buttons } from "../../atoms/button/Button.style";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <HomePageWrapper>
      <SectionOne></SectionOne>
      <SectionTwo>
        <div>
          <TagWrapper>
            <ImgResponsive src={decagonLogo} alt="decagon logo" />
          </TagWrapper>
          <TagWrapper>
            <h4>Welcome to Decagon's Learning Tracker</h4>
          </TagWrapper>
          <TagWrapper>
            <ImgResponsive
              src={teamsLogo}
              alt="teams logo"
            />
          </TagWrapper>
          <TagWrapper>
                <Link to="/dashboard">
                    <Buttons>Login With Microsoft Teams</Buttons>
                </Link>
          </TagWrapper>
        </div>
      </SectionTwo>
    </HomePageWrapper>
  );
};

export default HomePage;
