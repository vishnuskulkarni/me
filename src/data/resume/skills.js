// const skills = [
//   {
//     title: 'Javascript',
//     competency: 4,
//     category: ['Web Development', 'Languages', 'Javascript'],
//   },
//   {
//     title: 'Node.JS',
//     competency: 5,
//     category: ['Web Development', 'Javascript'],
//   },
//   {
//     title: 'React',
//     competency: 2,
//     category: ['Web Development', 'Javascript'],
//   },
//   {
//     title: 'Next.JS',
//     competency: 3,
//     category: ['Web Development', 'Javascript'],
//   },
//   {
//     title: 'Bash',
//     competency: 2,
//     category: ['Tools', 'Languages'],
//   },
//   {
//     title: 'Amazon Web Services',
//     competency: 4,
//     category: ['Web Development', 'Tools'],
//   },
//   {
//     title: 'Heroku',
//     competency: 2,
//     category: ['Web Development', 'Tools'],
//   },
//   {
//     title: 'MongoDB',
//     competency: 3,
//     category: ['Web Development', 'Databases'],
//   },
//   {
//     title: 'ElasticSearch',
//     competency: 2,
//     category: ['Web Development', 'Databases'],
//   },
//   {
//     title: 'PostgreSQL/SQLite3/SQL/Redshift',
//     competency: 4,
//     category: ['Web Development', 'Databases', 'Languages'],
//   },
//   {
//     title: 'Redis',
//     competency: 3,
//     category: ['Web Development', 'Databases'],
//   },
//   {
//     title: 'Data Mining',
//     competency: 3,
//     category: ['ML Engineering'],
//   },
//   {
//     title: 'Express.JS',
//     competency: 2,
//     category: ['Web Development', 'Javascript'],
//   },
//   {
//     title: 'D3',
//     competency: 2,
//     category: ['Web Development', 'Javascript'],
//   },
//   {
//     title: 'Flask',
//     competency: 3,
//     category: ['Web Development', 'Python'],
//   },
//   {
//     title: 'FastAPI',
//     competency: 3,
//     category: ['Web Development', 'Python'],
//   },
//   {
//     title: 'Git/Mercurial',
//     competency: 3,
//     category: ['Tools'],
//   },
//   {
//     title: 'Kubernetes',
//     competency: 2,
//     category: ['Tools', 'Data Engineering'],
//   },
//   {
//     title: 'Google Cloud Compute',
//     competency: 2,
//     category: ['Tools', 'Web Development'],
//   },
//   {
//     title: 'AWS',
//     competency: 3,
//     category: ['Tools', 'Web Development'],
//   },
//   {
//     title: 'Docker',
//     competency: 3,
//     category: ['Tools', 'Data Engineering'],
//   },
//   {
//     title: 'AWS Lambda',
//     competency: 3,
//     category: ['Tools', 'Web Development'],
//   },
//   {
//     title: 'Numpy',
//     competency: 3,
//     category: ['Data Science', 'Data Engineering', 'Python', 'ML Engineering'],
//   },
//   {
//     title: 'Numba',
//     competency: 2,
//     category: ['Data Science', 'Data Engineering', 'Python'],
//   },
//   {
//     title: 'Tensorflow + Keras',
//     competency: 3,
//     category: ['ML Engineering', 'Python'],
//   },
//   {
//     title: 'PyTorch',
//     competency: 3,
//     category: ['ML Engineering', 'Python'],
//   },
//   {
//     title: 'Jupyter',
//     competency: 3,
//     category: ['Data Science', 'Python'],
//   },
//   {
//     title: 'Typescript',
//     competency: 3,
//     category: ['Web Development', 'Languages', 'Javascript'],
//   },
//   {
//     title: 'HTML + SASS/SCSS/CSS',
//     competency: 3,
//     category: ['Web Development', 'Languages'],
//   },
//   {
//     title: 'Python',
//     competency: 5,
//     category: ['Languages', 'Python', 'ML Engineering'],
//   },
//   {
//     title: 'Ruby',
//     competency: 2,
//     category: ['Languages'],
//   },
//   {
//     title: 'Ruby on Rails',
//     competency: 3,
//     category: ['Web Development', 'Languages'],
//   },
//   {
//     title: 'C++',
//     competency: 1,
//     category: ['Languages'],
//   },
//   {
//     title: 'Julia',
//     competency: 2,
//     category: ['Languages'],
//   },
//   {
//     title: 'MATLAB',
//     competency: 2,
//     category: ['Languages'],
//   },
//   {
//     title: 'R',
//     competency: 2,
//     category: ['Languages'],
//   },
//   {
//     title: 'Data Visualization',
//     competency: 3,
//     category: ['Data Science', 'Javascript'],
//   },
//   {
//     title: 'GraphQL',
//     competency: 2,
//     category: ['Web Development', 'Databases'],
//   },
//   {
//     title: 'Pandas',
//     competency: 5,
//     category: ['Data Engineering', 'ML Engineering', 'Python'],
//   },
//   {
//     title: 'Matplotlib',
//     competency: 3,
//     category: ['Data Engineering', 'ML Engineering', 'Python'],
//   },
//   {
//     title: 'Scikit-Learn',
//     competency: 4,
//     category: ['Data Engineering', 'ML Engineering', 'Python'],
//   },
//   {
//     title: 'Spark',
//     competency: 2,
//     category: ['Data Engineering', 'ML Engineering'],
//   },
//   {
//     title: 'Dagster',
//     competency: 2,
//     category: ['Data Engineering', 'Python', 'ML Engineering'],
//   },
//   {
//     title: 'Mypy',
//     competency: 3,
//     category: ['Python'],
//   },
//   {
//     title: 'Pylint',
//     competency: 4,
//     category: ['Data Engineering', 'Python'],
//   },
// ].map((skill) => ({ ...skill, category: skill.category.sort() }));

// // this is a list of colors that I like. The length should be === to the
// // number of categories. Re-arrange this list until you find a pattern you like.
// const colors = [
//   '#6968b3',
//   '#37b1f5',
//   '#40494e',
//   '#515dd4',
//   '#e47272',
//   '#cc7b94',
//   '#3896e2',
//   '#c3423f',
//   '#d75858',
//   '#747fff',
//   '#64cb7b',
// ];

// const categories = [
//   ...new Set(skills.flatMap(({ category }) => category)),
// ].sort().map((category, index) => ({
//   name: category,
//   color: colors[index],
// }));

// export { categories, skills };

const skills = [
  {
    title: 'Python',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'R',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'Javascript',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'C++',
    competency: 1,
    category: ['Languages'],
  },
  {
    title: 'Latex',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'Amazon Web Services',
    competency: 2,
    category: ['Cloud'],
  },
  {
    title: 'HTML + CSS/SCSS',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'Verilog HDL',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'Google Cloud Platform',
    competency: 4,
    category: ['Cloud'],
  },
  {
    title: 'Microsoft Azure',
    competency: 3,
    category: ['Cloud'],
  },
  {
    title: 'Azure Cosmos DB',
    competency: 3,
    category: ['Cloud'],
  },
  {
    title: 'Tensorflow',
    competency: 4,
    category: ['Frameworks/Libraries'],
  },
  {
    title: 'Keras',
    competency: 4,
    category: ['Frameworks/Libraries'],
  },
  {
    title: 'PyTorch',
    competency: 3,
    category: ['Frameworks/Libraries'],
  },
  {
    title: 'Scikit-learn',
    competency: 4,
    category: ['Frameworks/Libraries'],
  },
  {
    title: 'SciPy',
    competency: 3,
    category: ['Frameworks/Libraries'],
  },
  {
    title: 'NumPy',
    competency: 5,
    category: ['Frameworks/Libraries'],
  },
  {
    title: 'Pandas',
    competency: 4,
    category: ['Frameworks/Libraries'],
  },
  {
    title: 'LangChain',
    competency: 4,
    category: ['Frameworks/Libraries'],
  },
  {
    title: 'Pinecone (Vector Database)',
    competency: 4,
    category: ['Frameworks/Libraries'],
  },
  {
    title: 'Seaborn',
    competency: 4,
    category: ['Frameworks/Libraries'],
  },
  {
    title: 'Matplotlib',
    competency: 4,
    category: ['Frameworks/Libraries'],
  },
  {
    title: 'D3.js',
    competency: 3,
    category: ['Frameworks/Libraries'],
  },
  {
    title: 'ReactJS',
    competency: 2,
    category: ['Frameworks/Libraries'],
  },
  {
    title: 'Tensorflow Lite (TinyML)',
    competency: 2,
    category: ['Frameworks/Libraries'],
  },
  {
    title: 'Apache Spark (PySpark, Airflow)',
    competency: 2,
    category: ['Frameworks/Libraries'],
  },
  {
    title: 'Hadoop',
    competency: 2,
    category: ['Frameworks/Libraries'],
  },
  {
    title: 'Git',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Adobe Photoshop',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Microsoft Visual Studio',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Microsoft Office',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'AutoCAD',
    competency: 2,
    category: ['Tools'],
  },
  {
    title: 'MATLAB',
    competency: 2,
    category: ['Tools'],
  },
  {
    title: 'Postman API Testing',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Jupyter',
    competency: 4,
    category: ['Tools'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#d75858',
  '#747fff',
  '#64cb7b',
  '#515dd4',
];

const categories = [
  ...new Set(skills.flatMap(({ category }) => category)),
].sort().map((category, index) => ({
  name: category,
  color: colors[index],
}));

export { categories, skills };
