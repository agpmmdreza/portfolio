import { createStyles, Title, Container, rem, Chip, Flex } from '@mantine/core';
import Image from 'next/image';

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
    boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
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
    width: '100%',
  },

  bgImage: {
    // opacity: 0.1,
  },

  pgIcons: {
    marginRight: '7px',
  },

  chip: {
    background: 'rgba( 41, 51, 127, 0.3 )',
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
    opacity: '0.9',
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

const SKILLS_ARRAY: { text: string; icon: string; color: string }[] = [
  {
    text: 'React.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    color: 'rgba(97,218,251, 0.16)',
  },
  {
    text: 'Next.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg',
    color: 'rgba(130,130,130, 0.16)',
  },
  {
    text: 'Redux',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
    color: 'rgba(118,74,188, 0.16)',
  },
  {
    text: 'Javascript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg',
    color: 'rgba(240,219,79, 0.16)',
  },
  {
    text: 'Typescript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    color: 'rgba(0,122,204, 0.16)',
  },
  {
    text: 'Sass',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
    color: 'rgba(203,102,153, 0.16)',
  },
  {
    text: 'Tailwind',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
    color: 'rgba(56,178,172, 0.16)',
  },
  {
    text: 'Bootstrap',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
    color: 'rgba(131,18,250, 0.16)',
  },
  {
    text: 'Material-UI',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-plain.svg',
    color: 'rgba(31,166,202, 0.16)',
  },

  {
    text: 'Node.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg',
    color: 'rgba(131,205,41, 0.16)',
  },
  {
    text: 'Java',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    color: 'rgba(17,105,170, 0.16)',
  },
  {
    text: 'Python',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    color: 'rgba(255,228,104, 0.16)',
  },
  // { text: 'React.js', icon: reactIcon },
  // { text: 'React.js', icon: reactIcon },
  // { text: 'React.js', icon: reactIcon },
  // { text: 'React.js', icon: reactIcon },
  // 'Next.js',
  // 'Javascript',
  // 'Typescript',
  // 'HTML/CSS',
  // 'Sass',
  // 'Tailwind',
  // 'Bootstrap',
  // 'Material-UI',
  // 'Redux',
  // 'Tanstack Libs',
  // 'Node.js',
  // 'Git/Github/Gitlab',
];

export function Skills() {
  const { classes } = useStyles();

  return (
    <Container className={classes.wrapper} size={1400}>
      <Image
        src="/assets/green-ecl.svg"
        alt="e"
        width={300}
        height={300}
        className={classes.eclipse}
      />

      <Image
        src="/assets/purple-ecl.svg"
        alt="e"
        width={450}
        height={450}
        className={classes.eclipseBottom}
      />
      <div className={classes.inner}>
        <Title align="start" weight={800}>
          Skills
        </Title>

        <Flex wrap="wrap" gap={15} py={30} maw={400}>
          {SKILLS_ARRAY.map((item) => (
            <Chip
              className={classes.chip}
              style={{ background: item.color }}
              size="md"
              radius="sm"
              readOnly
              checked={false}
              variant=""
              onChange={() => {}}
            >
              <Image className={classes.pgIcons} src={item.icon} alt="sdf" height={20} width={20} />
              {item.text}
            </Chip>
          ))}
        </Flex>
      </div>
    </Container>
  );
}
