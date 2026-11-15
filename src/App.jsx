import Layout from './components/Layout.jsx'

export default function App({ route }) {
  return <Layout path={route.path}>{route.element()}</Layout>
}
