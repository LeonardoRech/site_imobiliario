import ContactComponent from './template/ContactComponent'
import Layout from './components/Layout'

export default function ContactsPage(){

  return (
      <Layout 
        title="Contatos" 
        subtitle='Gerenciamento de Contatos'
      >
        <ContactComponent />
      </Layout>
    )
}