import { createStyles, Title, Container, rem, Chip, Group, Paper, Divider } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    paddingTop: rem(100),
    paddingBottom: rem(150),
    height: '100vh',
    scrollSnapAlign: 'start',
    display: 'flex',
    gap: '40px',

    [theme.fn.smallerThan('sm')]: {
      paddingTop: rem(80),
      paddingBottom: rem(60),
    },
  },

  inner: {
    position: 'relative',
    zIndex: 1,
  },

  bgImage: {
    // opacity: 0.1,
  },
}));

const SKILLS_ARRAY: string[] = [
  'React.js',
  'Next.js',
  'Javascript',
  'Typescript',
  'HTML/CSS',
  'Sass',
  'Tailwind',
  'Bootstrap',
  'Material-UI',
  'Redux',
  'Tanstack Libs',
  'Node.js',
  'Git/Github/Gitlab',
];

const LANGS_ARRAY = ['English', 'Turkish', 'Persian'];

export function Skills() {
  const { classes } = useStyles();

  return (
    <Container className={classes.wrapper} size={1400}>
      <div className={classes.inner}>
        <Title align="start" weight={800}>
          Skills
        </Title>

        <Group py={30} maw={400}>
          {SKILLS_ARRAY.map((item) => (
            <Chip
              size="md"
              radius="sm"
              readOnly
              checked={false}
              color="cyan"
              variant="filled"
              onChange={() => {}}
            >
              {item}
            </Chip>
          ))}
        </Group>
      </div>

      <Divider orientation="vertical" />

      <div className={classes.inner}>
        <Title align="start" weight={800}>
          Languages
        </Title>

        <Group py={30} maw={400}>
          {LANGS_ARRAY.map((item) => (
            <Paper shadow="xs" p="lg" withBorder>
              {item}
            </Paper>
          ))}
        </Group>
      </div>
    </Container>
  );
}
