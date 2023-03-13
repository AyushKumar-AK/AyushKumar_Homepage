import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbwsl from '../public/images/works/tictactoe.png'
import thumbwg from '../public/images/works/newsletter.jpg'
import thumbansible from '../public/images/works/weather_app.png'
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
            id="newsletter"
            title="Newsletter Signup" 
            thumbnail={thumbwg}
          >
            A newsletter signup web application built using HTML, CSS, Node.js, Express, and the Mailchimp API.
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