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
    <Layout title="TicTacToe">
      <Container>
        <Title>
          Tic-Tac-Toe Apk <Badge>2021-</Badge>
        </Title>
        <P>
          Tic-Tac-Toe app developed using flutter which can predict all outcomes.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Source</Meta>
            <Link href="https://github.com/AyushKumar-AK/Flutter_Project">
              https://github.com/AyushKumar-AK/Flutter_Project <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Android/iOS</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Flutter</span>
          </ListItem>
        </List>
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'