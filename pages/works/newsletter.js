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
    <Layout title="Newsletter Signup">
      <Container>
        <Title>
          Newsletter Signup <Badge>2023-</Badge>
        </Title>
        <P>
        A newsletter signup web application built using HTML, CSS, Node.js, Express, and the Mailchimp API. 
        Users can enter their name and email address to sign up for a newsletter, and the data is saved to a Mailchimp audience list using the API.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Source</Meta>
            <Link href="https://github.com/AyushKumar-AK/Newsletter_Signup">
              https://github.com/AyushKumar-AK/Newsletter_Signup <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>HTML CSS Node Express</span>
          </ListItem>
        </List>
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'