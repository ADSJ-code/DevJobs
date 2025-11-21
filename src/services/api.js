export const fetchJobs = async () => {
  try {
    const response = await fetch('https://remotive.com/api/remote-jobs?limit=50');
    const data = await response.json();
    
    return data.jobs.map(job => ({
      id: job.id,
      title: job.title,
      company: job.company_name,
      location: job.candidate_required_location,
      type: job.job_type,
      postedAt: new Date(job.publication_date).toLocaleDateString('pt-BR'),
      description: job.description,
      url: job.url,
      tags: job.tags || [],
      logo: job.company_logo_url
    }));
  } catch (error) {
    console.error("Erro ao buscar vagas:", error);
    return [];
  }
};