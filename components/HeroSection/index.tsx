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
  Image,
} from '@mantine/core';
import { IconBrandGithub, IconBrandGitlab, IconBrandTelegram, IconMail } from '@tabler/icons';
import bg from './assets/bg.png';

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    height: '100vh',
    scrollSnapAlign: 'start',
    scrollSnapType: 'y mandatory',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    // paddingTop: rem(80),
    paddingBottom: rem(60),
    [theme.fn.smallerThan('md')]: {
      paddingTop: rem(80),
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
    fontWeight: 900,
    fontSize: rem(60),
    letterSpacing: -1,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    marginBottom: theme.spacing.xs,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    [theme.fn.smallerThan('xs')]: {
      fontSize: rem(28),
      textAlign: 'left',
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
  },
}));

export function HeroText() {
  const { classes } = useStyles();

  return (
    <Container className={classes.wrapper} size={1400}>
      {/* <ReactangleShape className={classes.shape} /> */}
      <Image className={classes.shape} src={bg.src} />
      <div className={classes.inner}>
        <Flex direction="column" gap="lg">
          <Title className={classes.title}>
            {`Hi!
         I'm 
         Mohammadreza Aghapour`}
            {/* <Text component="span" className={classes.highlight} inherit></Text>{' '} */}
          </Title>
        </Flex>

        <Divider orientation="vertical" />

        <Container display="flex" className={classes.container} p={0} size={600}>
          <Text size="lg" weight={500} color="dimmed" className={classes.description}>
            A React.js web developer with +3 years of experience. I specialize in React.js
            development and have a passion for creating engaging and user-friendly web applications.
            With a strong commitment to delivering high-quality code and exceeding client
            expectations, I thrive in fast-paced, collaborative environments.
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
            <ActionIcon color="blue" component="a" href="https://t.me/Mmdreza_Ag" target="_blank">
              <IconBrandTelegram />
            </ActionIcon>
          </Group>
          <Button
            w={170}
            mt={30}
            // variant="default"
            color="gray"
            // leftIcon={<IconFileDownload />}
            size="md"
            uppercase
            component="a"
            href="/CV_MohammadrezaAghapour.pdf"
          >
            Download CV
          </Button>
        </Container>
      </div>
    </Container>
  );
}
