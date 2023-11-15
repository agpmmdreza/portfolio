import { createStyles, Title, Text, Container, rem, Timeline } from '@mantine/core';
import Image from 'next/dist/client/image';
const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    padding: '50px 70px',
    height: '100%',
    // paddingTop: rem(220),
    // paddingBottom: rem(150),
    background: 'rgba( 41, 51, 127, 0.3 )',
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
    transform: 'rotate(90deg)',
    position: 'absolute',
    right: 0,
    bottom: 0,
    opacity: '0.7',
  },

  eclipseBottom: {
    WebkitTransform: 'scaleX(-1)',
    transform: 'scaleX(-1)',
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: '0.9',
  },
}));

export function Education() {
  const { classes } = useStyles();

  return (
    <Container className={classes.wrapper}>
      <Image
        src="/assets/green-ecl.svg"
        alt="e"
        width={200}
        height={200}
        className={classes.eclipse}
      />

      <Image
        src="/assets/purple-ecl.svg"
        alt="e"
        width={300}
        height={300}
        className={classes.eclipseBottom}
      />
      <Title align="start" weight={800} pb={40}>
        Education
      </Title>

      <Timeline active={1} bulletSize={30} lineWidth={3}>
        <Timeline.Item title="Bachelor of Computer Engineering" lineVariant="dashed">
          <Text color="dimmed" size="sm">
            University of Tabriz
          </Text>
          <Text size="xs" weight="bold" mt={4}>
            2019 - 2023
          </Text>
        </Timeline.Item>
        <Timeline.Item title="..."></Timeline.Item>
      </Timeline>
    </Container>
  );
}
