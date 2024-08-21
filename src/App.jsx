import AuthProvider from './context/AuthProvider'
import Routes from './routes'

// Define o componente principal do aplicativo.
const App = () => {

  // Renderiza o componente principal.
  return (
    <AuthProvider>
      <Routes/>
    </AuthProvider>
  )
};

// Exporta o componente App para ser utilizado em outras partes da aplicação.
export default App;
