import { createStyles, Title, Text, Container, rem, Timeline, Center } from '@mantine/core';
import { IconGitBranch } from '@tabler/icons';

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

export function Education() {
  const { classes } = useStyles();

  return (
    <Container className={classes.wrapper} size={500}>
      <Title align="start" weight={800} pb={40}>
        Education
      </Title>
      <Center>
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
      </Center>
    </Container>
  );
}
