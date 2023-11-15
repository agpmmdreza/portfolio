import { createStyles, rem, Grid } from '@mantine/core';
import Image from 'next/image';
import { Education } from '../components/Education';
import { Experience } from '../components/Experience';
import { HeroText } from '../components/HeroSection';
import { Projects } from '../components/Projects';
import { Skills } from '../components/Skills';
import { Languages } from '../components/Skills/languages';

const useStyles = createStyles((theme) => ({
  expContainer: {
    paddingTop: rem(100),
    paddingBottom: rem(200),
    // height: '100vh',
    paddingLeft: rem(300),
    paddingRight: rem(300),
    marginBottom: rem(100),
    margin: 0,
    // scrollSnapAlign: 'start',

    [theme.fn.smallerThan('sm')]: {
      paddingLeft: rem(20),
      paddingRight: rem(20),
      flexWrap: 'wrap',
    },
  },

  shape: {
    position: 'absolute',
    top: 0,
    right: 0,
  },

  eclipse: {
    // transform: 'rotate(90deg)',
    position: 'absolute',
    right: 0,
    bottom: 0,
    opacity: '0.5',
  },

  eclipseBottom: {
    WebkitTransform: 'scaleX(-1)',
    transform: 'scaleX(-1)',
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: '0.5',
  },
}));

export default function HomePage() {
  const { classes } = useStyles();

  return (
    <>
      {/* <Image className={classes.shape} src={bg.src} /> */}
      {/* <HeaderAction links={HEADER_OPTIONS} /> */}
      <HeroText />

      {/* <Container> */}
      <Grid className={classes.expContainer} gutter={30} grow>
        <Grid.Col md={6} lg={6}>
          <Experience />
        </Grid.Col>
        <Grid.Col md={6} lg={6}>
          <Skills />
        </Grid.Col>
        {/* <Divider orientation="vertical" /> */}
        <Grid.Col md={6} lg={6}>
          <Education />
        </Grid.Col>

        <Grid.Col md={6} lg={6}>
          <Languages />
        </Grid.Col>
      </Grid>

      <Projects />
      {/* </Container> */}
    </>
  );
}
