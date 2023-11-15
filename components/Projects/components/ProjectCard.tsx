import { Carousel } from '@mantine/carousel';
import { Card, Image, Text, Group, Badge, Button, createStyles, rem, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    // maxWidth: '350px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',

    background: 'rgba( 41, 51, 127, 0.3 )',
    boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
    backdropFilter: 'blur(14px)',
    WebkitBackdropFilter: 'blur(14px)',
    borderRadius: '10px',
    border: '1px solid rgba(255, 255, 255, 0.18)',
  },

  description: {
    maxHeight: '200px',
    overflowY: 'hidden',
    '& div': {
      textOverflow: 'ellipsis',
    },
  },

  section: {
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.md,
  },

  like: {
    color: theme.colors.red[6],
  },

  label: {
    textTransform: 'uppercase',
    fontSize: theme.fontSizes.xs,
    fontWeight: 700,
  },

  buttonContainer: {
    paddingTop: theme.spacing.md,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    marginTop: 'auto',
  },
}));

interface BadgeCardProps {
  image: string;
  title: string;
  description: string;
  images: any[];
  techs: string[];
}

export function ProjectCard({ image, title, description, images, techs }: BadgeCardProps) {
  const { classes, theme } = useStyles();
  const [opened, { open, close }] = useDisclosure(false);

  const slides = images.map((url: any) => (
    <Carousel.Slide size="100%" key={url.default.src}>
      <Image
        fit="cover"
        src={url.default.src}
        onClick={(e) => {
          e.stopPropagation();
        }}
      />
    </Carousel.Slide>
  ));

  return (
    <Card withBorder radius="md" p="md" className={classes.card}>
      <Card.Section>
        <Image src={image} alt={title} height={180} />
      </Card.Section>

      <Card.Section className={classes.section} mt="md">
        <Group position="apart">
          <Text fz="lg" fw={500}>
            {title}
          </Text>
        </Group>
        <div className={classes.description}>
          <Text color="dimmed" fz="sm" mt="xs">
            {description}
          </Text>
        </div>

        <Group mt={15} spacing={5}>
          {techs.map((tech) => (
            <Badge
              size="sm"
              color={Object.keys(theme.colors)[Math.floor(Math.random() * (12 - 2)) + 2]}
            >
              {tech}
            </Badge>
          ))}
        </Group>
      </Card.Section>

      <Group className={classes.buttonContainer}>
        <Button radius="md" style={{ flex: 1 }} onClick={open}>
          Show details
        </Button>
      </Group>

      <Modal size="80%" opened={opened} onClose={close} centered title={title}>
        <Carousel slidesToScroll={1} height={510} maw={900} mx="auto" withIndicators slideGap="lg">
          {slides}
        </Carousel>
      </Modal>
    </Card>
  );
}
