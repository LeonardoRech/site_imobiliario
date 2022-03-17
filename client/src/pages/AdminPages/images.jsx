import Layout from './components/Layout'
import ImagesTemplate from './template/ImagesTemplate'

export default function ImagesPage(){ 
  return (
      <Layout title="Imagens" subtitle='Gerenciamento de Imagens'>
        <ImagesTemplate />
      </Layout>
    )
}