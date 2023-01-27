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
    <Layout title="Phonebook Management System">
      <Container>
        <Title>
          Phonebook Management System <Badge>2022-</Badge>
        </Title>
        <P>
        A phonebook management system made using double linked list in C programming language.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Source</Meta>
            <Link href="https://github.com/AyushKumar-AK/PhoneBook">
              https://github.com/AyushKumar-AK/PhoneBook <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/Linux</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>C programming language</span>
          </ListItem>
        </List>
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'