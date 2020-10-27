import React, { useState } from 'react';

import './App.css';

import Header from './components/Header';

function App() {
  const [projects, setProjects] = useState(['Desenvolvimento Web',  'Desenvolvimento Mobile']);

  function handleAddProject(){
    setProjects([...projects, `Novo Projeto ${Date.now()}`]);
  }

  return (
    <>
      <Header title="Teste" />

      <ul>
        {projects.map(project => <li key={project}>{project}</li>)}
      </ul>

      <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
    </>
  );
}

export default App;