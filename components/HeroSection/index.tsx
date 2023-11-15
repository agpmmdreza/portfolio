import {
  createStyles,
  Title,
  Text,
  Container,
  rem,
  Divider,
  Group,
  ActionIcon,
  Button,
  Flex,
  Grid,
} from '@mantine/core';
import {
  IconBrandGithub,
  IconBrandGitlab,
  IconBrandTelegram,
  IconCurrentLocation,
  IconLocation,
  IconMail,
  IconMapPin,
} from '@tabler/icons';

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    height: '100vh',
    // scrollSnapAlign: 'start',
    // scrollSnapType: 'y mandatory',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 'unset',
    // paddingTop: rem(80),
    // paddingBottom: rem(60),
    [theme.fn.smallerThan('md')]: {
      paddingTop: rem(20),
      paddingBottom: rem(60),
      flexWrap: 'wrap',
    },
  },

  inner: {
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    gap: '50px',

    [theme.fn.smallerThan('sm')]: {},
  },

  dots: {
    position: 'absolute',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  dotsLeft: {
    left: 0,
    top: 0,
  },

  title: {
    maxWidth: '450px',
    textAlign: 'start',
    fontWeight: 1000,
    fontSize: rem(80),
    letterSpacing: -1,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    marginBottom: theme.spacing.xs,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(40),
      textAlign: 'left',
      padding: '0 4px',
    },
  },

  highlight: {
    color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6],
  },

  description: {
    textAlign: 'start',

    [theme.fn.smallerThan('xs')]: {
      textAlign: 'left',
      fontSize: theme.fontSizes.md,
      padding: '0 4px',
    },
  },

  controls: {
    marginTop: theme.spacing.lg,
    display: 'flex',
    justifyContent: 'center',

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  control: {
    '&:not(:first-of-type)': {
      marginLeft: theme.spacing.md,
    },

    [theme.fn.smallerThan('xs')]: {
      height: rem(42),
      fontSize: theme.fontSizes.md,

      '&:not(:first-of-type)': {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
  },

  shape: {
    position: 'absolute',
    top: 0,
    right: 0,
  },

  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: 0,
  },

  button: {
    background: 'rgba( 41, 58, 135, 0.3 )',
    // boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
    backdropFilter: 'blur(14px)',
    WebkitBackdropFilter: 'blur(14px)',
    borderRadius: '10px',
    border: '1px solid rgba(255, 255, 255, 0.18)',

    '&.mantine-Button-root:hover': {
      background: 'rgba(  41, 58, 135, 0.4 )',
    },
  },
}));

export function HeroText() {
  const { classes } = useStyles();

  return (
    <Container className={classes.wrapper} size={1400}>
      {/* <ReactangleShape className={classes.shape} /> */}

      <div className={classes.inner}>
        <Grid style={{ padding: '20px' }}>
          <Grid.Col lg={4}>
            <Flex direction="column" gap="lg">
              <Title className={classes.title}>
                {`Hi!
                  I'm 
                  Mohammadreza Aghapour`}
                {/* <Text component="span" className={classes.highlight} inherit></Text>{' '} */}
              </Title>
            </Flex>
          </Grid.Col>

          <Grid.Col lg={4}>
            <Divider orientation="vertical" />
          </Grid.Col>

          <Grid.Col lg={4}>
            <Container display="flex" className={classes.container} p={0} size={600}>
              <Text size="lg" weight={500} color="dimmed" className={classes.description}>
                I have been working as a ReactJS developer for about +3 years, and I truly enjoy
                creating easy-to-use web applications. I make it a point to stay updated with the
                latest industry trends and continuously enhance my skills. Throughout my career, I
                have had the privilege of working on different projects and collaborating with
                talented teams. I am looking forward to contributing to future projects with my
                experience and expertise.
              </Text>

              <Text
                mt={20}
                size="lg"
                display="flex"
                weight={700}
                color="dimmed"
                className={classes.description}
              >
                <IconMapPin style={{ marginRight: '5px' }} />
                Tabriz, Iran
              </Text>

              <Group mt={30}>
                <ActionIcon
                  variant="subtle"
                  component="a"
                  href="https://github.com/agpmmdreza"
                  target="_blank"
                >
                  <IconBrandGithub />
                </ActionIcon>
                <ActionIcon
                  color="orange"
                  component="a"
                  href="https://gitlab.com/agpmmdreza"
                  target="_blank"
                >
                  <IconBrandGitlab />
                </ActionIcon>
                <ActionIcon
                  color="green"
                  component="a"
                  href="mailto:agpmmdreza@gmail.com"
                  target="_blank"
                >
                  <IconMail />
                </ActionIcon>
                <ActionIcon
                  color="blue"
                  component="a"
                  href="https://t.me/Mmdreza_Ag"
                  target="_blank"
                >
                  <IconBrandTelegram />
                </ActionIcon>
              </Group>

              <Button
                w={200}
                mt={30}
                // variant="default"
                // leftIcon={<IconFileDownload />}
                size="md"
                uppercase
                component="a"
                href="/CV_MohammadrezaAghapour.pdf"
                className={classes.button}
              >
                Download CV
              </Button>
            </Container>
          </Grid.Col>
        </Grid>
      </div>
    </Container>
  );
}
