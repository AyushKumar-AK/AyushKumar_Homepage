import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
  } from '@chakra-ui/react'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  import Layout from '../../components/layouts/article'
  
  const Work = () => (
    <Layout title="Python Chatbot">
      <Container>
        <Title>
          Python Chatbot <Badge>2021-</Badge>
        </Title>
        <P>
        A chatbot developed using python. 
        It recognizes phrases and respond to it. This chatbot has 10 happy to go responses for most asked questions.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Source</Meta>
            <Link href="https://github.com/AyushKumar-AK/ChatBot">
              https://github.com/AyushKumar-AK/ChatBot <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Python</span>
          </ListItem>
        </List>
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'