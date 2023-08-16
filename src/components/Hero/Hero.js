import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import { Link } from 'react-scroll';
import { Footer } from "../Footer/Footer";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi, I'm Ronak. <br/>
          I'm a Full-Stack Developer.
        </SectionTitle>
        <SectionText>
        I am a self-taught developer deeply passionate about technology and programming, continuously striving to elevate my skills and create impactful applications.
        </SectionText>
        <Link to="footer" smooth={true} duration={500}>
          <Button>
            Learn More
          </Button>
        </Link>
      </LeftSection>
    </Section>
  </>
);

export default Hero;