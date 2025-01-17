/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Financial Finesse',
    position: 'Software Engineering Intern (AI)',
    url: 'https://www.financialfinesse.com/',
    startDate: '2022-05-01',
    endDate: '2022-09-01',
    summary: `<a href="https://www.financialfinesse.com/">Financial Finesse</a> is a Financial Advising company that aims to provide
    unbiased and independent financial coaching to employees of large companies as a service, as one of their business verticals.
    `,
    highlights: [
      'Assisted in the development and integration of an AI powered financial coach (AskAimee) using LangChain and Pinecone (including validation and testing). Also carried out API Testing, data analysis and cleansing and backend software developement. ',
      'AskAimee and Financial Finesse coaching services are used by employees of Fortune 500 companies (Meta, McKinsey, the NFL, etc.)',
    ],
  },
  {
    name: 'Worxogo',
    position: 'Machine Learning Intern',
    url: 'https://www.worxogo.com/',
    startDate: '2022-02-01',
    endDate: '2022-05-01',
    summary: `Worxogo required a cloud based recommendation system for their production uses. The project was aimed at analysing the use cases and capabilities of AWS Personalize in developing ML Pipelines for recommendation systems.
    `,
    highlights: [
      'Implemented and trained a movie recommendation system using AWS Personalize using the MovieLens dataset.',
      'Experimented with different models and hyperparameters for different use cases such as ranking and recommendation of similar items and popular items users had viewed.',
    ],
  },
  {
    name: 'Hearthealth Technologies',
    position: 'Intern',
    url: 'https://hearthealthtech.com/',
    startDate: '2021-11-01',
    endDate: '2022-01-01',
    summary: '',
    highlights: [
      'Helped set up and evaluate an inferencing pipeline with docker images for the segmentation and assessment of abdominal fat images (Dixon MRI scans) for a pharma clinical trial imaging based study.',
      'Worked with datasets of MRI scans (of the myocardium and abdominal fat), installed docker images and analysed (and inferenced) the results of the deep learning pipeline (for segmentation of MRI scans and quantification of image biomarkers such as fibrosis and fat percentage)',
    ],
  },
  {
    name: 'Harvard University Center for Research on Computation and Society (CRCS)',
    position: 'Research (Mentor: Prof. Milind Tambe)',
    url: 'https://crcs.seas.harvard.edu/research',
    startDate: '2021-01-01',
    endDate: '2021-10-01',
    summary: `The <a href="https://papers.nips.cc/paper/2020/file/b460cf6b09878b00a3e1ad4c72344ccd-Paper.pdf">paper</a> proposes a new setting of restless multi-armed bandits called Collapsing Bandits.
    The algorithm was evaluated on several data distributions including data
    from a real-world healthcare task in which a worker must monitor and deliver
    interventions to maximize their patients’ adherence to tuberculosis medication.
    `,
    highlights: [
      "Worked on research tasks related to the paper 'Collapsing Bandits and Their Application to Public Health Interventions'.",
      'Implemented a method to better represent data in the form of modified histogram plots to compare the performance of different whittle algorithms in handling fairness and risk sensitivity concerns.',
      'Assisted in the implementation of a modified whittle index and developing a proof to check for threshold optimality over a finite horizon.',
    ],
  },
  {
    name: 'KPIT',
    position: 'Deep Learning Intern',
    url: 'https://www.kpit.com/solutions/autonomous-driving-adas/',
    startDate: '2020-01-01',
    endDate: '2020-07-01',
    summary: '',
    highlights: [
      'Built image classification and object detection detection models (using CNNs) for detection of road signs and vehicles.',
      'Trained a Reinforcement Learning (RL) agent to navigate through a grid-maze environment using Dynamic Programming, Monte-Carlo, Q-learning, Dyna-Q and Dyna-Q+ algorithms and analysed the difference in efficiencies.',
      'Ideated the formulation of autonomous braking as a RL problem',
    ],
  },
];

export default work;
