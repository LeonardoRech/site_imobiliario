import Layout from './components/Layout'
import UserComponent from './template/UserComponent'

export default function UsersPage(){
  const token = localStorage.getItem('token')
  require('axios').defaults.headers.common['Authorization'] = `bearer ${token}`

  return (
    <Layout title="Usuários" subtitle='Gerenciamento de Usuários'>
      <UserComponent />
    </Layout>
  )
}