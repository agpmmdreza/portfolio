import {
  createStyles,
  Title,
  Text,
  Container,
  rem,
  Chip,
  Group,
  Timeline,
  Center,
} from '@mantine/core';
import { IconGitBranch, IconGitCommit, IconGitPullRequest, IconMessageDots } from '@tabler/icons';

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    // paddingTop: rem(220),
    // paddingBottom: rem(150),

    [theme.fn.smallerThan('sm')]: {
      paddingTop: rem(80),
      paddingBottom: rem(60),
    },
  },

  inner: {
    position: 'relative',
    zIndex: 1,
  },
}));

const SKILLS_ARRAY: string[] = [
  'React.js',
  'Next.js',
  'Javascript',
  'Typescript',
  'HTML',
  'CSS',
  'Sass',
  'Tailwind',
  'Bootstrap',
  'Material-UI',
  'Redux',
  'Tanstack Libs',
  'HTML/CSS',
  'Node.js',
  'Git & Github',
];

export function Experience() {
  const { classes } = useStyles();

  return (
    <Container className={classes.wrapper} size={500}>
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
              2021 - Present
            </Text>
          </Timeline.Item>
        </Timeline>
      </Center>
    </Container>
  );
}
