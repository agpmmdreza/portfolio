import { createStyles, Title, Container, rem, Grid } from '@mantine/core';
import { ProjectCard } from './components/ProjectCard';
import leo from './images/leo360/thumb.png';
import { gozarban, leo360 } from './imagesImporter';

const PROJECT_LIST = [
  {
    title: 'LEO360',
    country: 'React.js',
    description:
      'The telehealth web app is a revolutionary platform that allows doctors to connect with patients online, providing virtual medical consultations and care. Designed with a user-friendly interface, the app enables doctors to seamlessly conduct video appointments, review patient medical histories, and prescribe medications',
    image: leo360[8].default.src,
    images: leo360,
  },
  {
    title: 'Gozarban',
    country: 'React.js',
    description:
      'Gozarban is an advanced Web Performance & Security website that I contributed to as a React.js Developer. It offers a user-friendly interface and a comprehensive suite of tools for optimizing website performance and ensuring top-level security. Through advanced caching, asset optimization, and CDN integration, businesses can enhance page load times and responsiveness.',
    image: gozarban[1].default.src,
    images: gozarban,
  },
];

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    paddingTop: rem(100),
    paddingBottom: rem(150),
    height: '1300px',
    scrollSnapAlign: 'start',

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

export function Projects() {
  const { classes } = useStyles();

  return (
    <Container className={classes.wrapper} size={1400}>
      <Title align="center" weight={800} mb={40}>
        Projects
      </Title>

      <Grid gutter={20}>
        {PROJECT_LIST.map((prj) => (
          <Grid.Col span={4}>
            <ProjectCard
              title={prj.title}
              country={prj.country}
              description={prj.description}
              image={prj.image}
              images={prj.images || []}
            />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}
