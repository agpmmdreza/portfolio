import { createStyles, Title, Container, rem, Chip, Group, Paper, Divider } from '@mantine/core';
import Image from 'next/dist/client/image';

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    // paddingTop: rem(100),
    // paddingBottom: rem(150),
    // height: '100vh',
    // scrollSnapAlign: 'start',
    display: 'flex',
    gap: '40px',
    padding: '50px 70px',
    height: '100%',

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

  bgImage: {
    // opacity: 0.1,
  },

  chip: {
    background: 'rgba( 0, 50, 120, 0.3 )',
    // boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
    backdropFilter: 'blur(14px)',
    WebkitBackdropFilter: 'blur(14px)',
    borderRadius: '10px',
    border: '1px solid rgba(255, 255, 255, 0.18)',

    width: 'fit-content',

    [theme.fn.smallerThan('sm')]: {
      '& .mantine-Chip-label': {
        padding: '1px 8px',
      },
    },
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
    opacity: '0.7',
  },
}));

const LANGS_ARRAY = ['English (C2)', 'Turkish/Persian (Native)'];

export function Languages() {
  const { classes } = useStyles();

  return (
    <Container className={classes.wrapper} size={1400}>
      <Image
        src="/assets/purple-ecl.svg"
        alt="e"
        width={350}
        height={350}
        className={classes.eclipse}
      />

      <Image
        src="/assets/blue-ecl.svg"
        alt="e"
        width={300}
        height={300}
        className={classes.eclipseBottom}
      />
      <div className={classes.inner}>
        <Title align="start" weight={800}>
          Languages
        </Title>

        <Group py={30} maw={400}>
          {LANGS_ARRAY.map((item) => (
            <Paper shadow="xs" p="lg" withBorder className={classes.chip}>
              {item}
            </Paper>
          ))}
        </Group>
      </div>
    </Container>
  );
}
