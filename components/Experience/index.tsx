import { createStyles, Title, Text, Container, rem, Timeline, Center } from '@mantine/core';
import Image from 'next/image';

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    // paddingTop: rem(220),
    // paddingBottom: rem(150),
    height: '100%',
    padding: '50px 70px',
    background: 'rgba( 41, 51, 127, 0.15 )',
    // boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
    backdropFilter: 'blur(14px)',
    WebkitBackdropFilter: 'blur(14px)',
    borderRadius: '10px',
    border: '1px solid rgba(255, 255, 255, 0.18)',

    [theme.fn.smallerThan('sm')]: {
      paddingTop: rem(50),
      paddingBottom: rem(60),
      paddingRight: rem(35),
      paddingLeft: rem(35),
    },
  },

  inner: {
    position: 'relative',
    zIndex: 1,
  },

  eclipse: {
    position: 'absolute',
    right: 0,
    top: 0,
    opacity: '0.9',
  },

  eclipseBottom: {
    WebkitTransform: 'scaleX(-1)',
    transform: 'scaleX(-1)',
    position: 'absolute',
    left: 0,
    bottom: 0,
    opacity: '0.9',
  },
}));

export function Experience() {
  const { classes } = useStyles();

  return (
    <Container className={classes.wrapper}>
      <Image
        src="/assets/blue-ecl.svg"
        alt="e"
        width={300}
        height={300}
        className={classes.eclipse}
      />

      <Image
        src="/assets/purple-ecl.svg"
        alt="e"
        width={400}
        height={400}
        className={classes.eclipseBottom}
      />
      <Title align="start" weight={800} pb={40}>
        Experience
      </Title>
      <Center>
        <Timeline active={1} bulletSize={30} lineWidth={3}>
          <Timeline.Item title="Freelancing">
            <Text color="dimmed" size="sm">
              In my year as a React.js freelancer, I immersed myself in the world of web development
              and I have gained valuable experience in developing high-quality and responsive web
              applications.
            </Text>
            <Text size="xs" weight="bold" mt={4}>
              2020 - 2021
            </Text>
          </Timeline.Item>
          <Timeline.Item title="Frontend Developer (Husan Company)">
            <Text color="dimmed" size="sm">
              Working closely with a dedicated team, I had the invaluable opportunity to work on
              real-world projects for a prominent health company.
            </Text>
            <Text size="xs" mt={4}>
              2021 - 2023
            </Text>
          </Timeline.Item>
        </Timeline>
      </Center>
    </Container>
  );
}
