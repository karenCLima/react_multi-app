import Select from 'react-select'; //Importa o react-select para estilizar o Select

//Cria as opções disponíveis para o select
const options = [
    { value: 'en', label: 'English' },
    { value: 'es', label: 'Spanish' },
    { value: 'fr', label: 'French' },
    { value: 'de', label: 'German' },
    { value: 'it', label: 'Italian' },
    { value: 'pt', label: 'Portuguese' },
  ];
  
  // Estilos customizados para o Select do react-select
const customStyles = {
    control: (provided) => ({
      ...provided,
      borderRadius: '20px',
      boxShadow: 'none',
      '&:hover': {
        borderColor: 'var(--terciary-color)',
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? 'var(--primary-color)' // Cor de fundo da option selecionada
        : state.isFocused
        ? 'var(--terciary-color)' // Cor de fundo ao passar o mouse (hover)
        : '#fff', // Cor de fundo padrão
      color: state.isSelected ? 'grey' : 'black', // Cor do texto
      padding: 10,
      borderRadius: '20px'
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: '20px',
    }),
};

const SelectLanguage =({language, setLanguage}) =>{
    return(
        <Select
            value={options.find((option) => option.value === language)}
            onChange={(option) => setLanguage(option.value)}
            options={options}
            styles={customStyles} // Aplicando os estilos customizados
        />
    )
}

export default SelectLanguage

