import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbwsl from '../public/images/works/tictactoe.png'
import thumbwg from '../public/images/works/chatbot.png'
import thumbansible from '../public/images/works/weatherapp.png'
import thumbwh from '../public/images/works/Wireguard.jpg'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="tictactoe" title="TicTacToe" thumbnail={thumbwsl}>
            Tic-tac-toe game app developed using flutter.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="chatbot"
            title="Python Chatbot"
            thumbnail={thumbwg}
          >
            A chatbot developed using python. It recognizes phrases and respond to it. 
            This chatbot has 10 happy to go responses for most asked questions.
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            id="vpn"
            title="Ancible Selfhost VPN"
            thumbnail={thumbwh}
          >
            Ansible Playbooks To Turn A VPS Into A Wireguard VPN Server
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="weatherapp"
            title="Weather App"
            thumbnail={thumbansible}
          >
            A Weather app built using HTML, CSS, and JavaScript
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'