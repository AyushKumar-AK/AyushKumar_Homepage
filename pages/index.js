import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m a Web developer specializing in front-end and back-end development Skilled in modern web technologies and languages Committed to delivering exceptional and user-friendly websites.
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Ayush Kumar
          </Heading>
          <p>Web Developer | Full Stack Developer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/me.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="125%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Ayush Kumar is a Computer Science Sophomore and active member of NSS and Ek Bharat Shresth Bharat club. He have a strong understanding of the latest web technologies and programming languages. He have a 
          keen eye for detail and a deep understanding of how to create visually appealing and user-friendly websites.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My Projects
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2004</BioYear>
          Born in Jamshedpur, India.
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Completed 10th grade from Jamshedpur Public School
          with aggregate of 85.8%.
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Completed High School from Jamshedpur Public School
          with aggregate of 86%.
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          I took part in the Smart India Hackathon and advanced to the college level.
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Current CGPA: 8.71
          3rd Sem SGPA: 9.25
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Likes
        </Heading>
        <Paragraph>
        Enjoys reading about new technologies and building PCs. Also have a passion for traveling and 
        discovering new things, and enjoy watching horror movies and trying different types of food.
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/AyushKumar-AK" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @Ayush_Kumar_AK
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/Ayush_Kumar_AK" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @Ayush_Kumar_AK
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/ayush._.ak" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @Ayush_Kumar_AK
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
