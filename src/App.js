// import Button from 'react-bootstrap/Button'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './components/dashboard/dashboard'
import PostUser from './components/postUser/postUser'
import UpdateUser from './components/updateUser/updateUser'
import NoMatch from './components/nomatch/noMatch'
import Header from './components/header/header'

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Dashboard></Dashboard>}></Route>
        <Route path="/user" element={<PostUser></PostUser>}></Route>
        <Route path="/user/:id" element={<UpdateUser></UpdateUser>}></Route>
        <Route path="*" element={<NoMatch></NoMatch>}></Route>
      </Routes>
    </>
  )
}

export default App
