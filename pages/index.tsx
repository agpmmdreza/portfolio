import { Container, createStyles, Divider, Group, rem } from '@mantine/core';
import { Education } from '../components/Education';
import { Experience } from '../components/Experience';
import { HeroText } from '../components/HeroSection';
import { Projects } from '../components/Projects';
import { Skills } from '../components/Skills';

const useStyles = createStyles((theme) => ({
  expContainer: {
    paddingTop: rem(150),
    paddingBottom: rem(200),
    height: '100vh',
    scrollSnapAlign: 'start',

    [theme.fn.smallerThan('sm')]: {
      flexWrap: 'wrap',
    },
  },
}));

export default function HomePage() {
  const { classes } = useStyles();

  return (
    <>
      {/* <HeaderAction links={HEADER_OPTIONS} /> */}
      <HeroText />

      <Container>
        <Group className={classes.expContainer} align="flex-start">
          <Experience />
          <Divider orientation="vertical" />
          <Education />
        </Group>

        <Skills />
        <Projects />
      </Container>
    </>
  );
}
