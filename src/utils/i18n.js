const translations = {
  en: {
    title: "DevJobs Board",
    search: "Search",
    filter: "Filter",
    location: "Location",
    fullTime: "Full Time Only",
    apply: "Apply Now",
    description: "Job Description",
    requirements: "Requirements",
    back: "Back"
  },
  pt: {
    title: "Quadro de Vagas DevJobs",
    search: "Pesquisar",
    filter: "Filtrar",
    location: "Localização",
    fullTime: "Apenas Tempo Integral",
    apply: "Candidatar-se",
    description: "Descrição da Vaga",
    requirements: "Requisitos",
    back: "Voltar"
  }
};

export const t = (key) => {
  const lang = navigator.language.startsWith('pt') ? 'pt' : 'en';
  return translations[lang][key] || translations['en'][key] || key;
};