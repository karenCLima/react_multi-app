import AuthProvider from './context/AuthProvider'
import Routes from './routes'
import AccessProvider from './context/AccessContext';

// Define o componente principal do aplicativo.
const App = () => {

  // Renderiza o componente principal.
  return (
    <AuthProvider>
      <AccessProvider>
        <Routes/>
      </AccessProvider>
  
    </AuthProvider>
  )
};

// Exporta o componente App para ser utilizado em outras partes da aplicação.
export default App;
