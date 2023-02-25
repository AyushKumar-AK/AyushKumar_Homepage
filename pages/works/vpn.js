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
    <Layout title="Ancible_Selfhost_VPN">
        <Container>
            <Title>
            Ancible Selfhost VPN <Badge>2023-</Badge>
            </Title>
            <P>
                Ansible Playbooks To Turn A VPS Into A Wireguard VPN Server.
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Source</Meta>
                    <Link href="https://github.com/AyushKumar-AK/Ansible_SelfHost_VPN">
                    https://github.com/AyushKumar-AK/Ansible_SelfHost_VPN <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>Windows/Mac</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>Ansible</span>
                </ListItem>
            </List>
        </Container>
    </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'