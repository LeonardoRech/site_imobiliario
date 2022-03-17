import ImoveisTemplate from './template/ImoveisTemplate'
import Layout from './components/Layout'

export default function ImoveisPage(){
    return (
      <Layout title="Imóveis" subtitle='Gerenciamento de Imóveis'>
        <ImoveisTemplate />
      </Layout>
    )
}