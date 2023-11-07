// TODO Add a couple lines about each project
const data = [
  {
    title: 'Lunar Lander Problem',
    subtitle: 'Python, OpenAI Gym, Reinforcement Learning',
    image: '/images/projects/lunarlander.png',
    date: '2020-08-01',
    desc:
      'Implemented this project as part of my final semester thesis in undergrad. '
      + 'Implemented a complete Reinforcement Learning task using the LunarLanderEnvironment from OpenAI Gym. '
      + 'Formalized the reward function and trained the agent to find a robust and efficient policy to land on a marked '
      + 'landing pad in the lunar environment using the on-policy Expected Sarsa algorithm. '
      + 'The agent consistently outperformed the baseline.',
  },
  {
    title: 'Inverted Pendulum Problem',
    subtitle: 'Python, OpenAI Gym, Reinforcement Learning',
    // link: 'https://devpost.com/software/harvest',
    image: '/images/projects/invertedpendulum.gif',
    date: '2020-08-20',
    desc:
      'Trained an RL agent to balance a pendulum in the upright position using Softmax Actor-Critic parametrization.',
  },
  {
    title: 'Shakespearean Poem Generator',
    subtitle: 'Python, Natural Language Processing',
    // link: 'http://www.spacepotato.org',
    image: '/images/projects/shakespearepoem.jpg',
    date: '2020-08-01',
    desc:
      'Built a model which generates Shakespearean poems from an existing data set of poems using a character-level '
      + 'language model which uses LSTM cells (2-layer stacked LSTM model to capture long range dependencies).',
  },
  {
    title: 'Road Object Detection',
    subtitle: 'Python, CNNs, TensorFlow',
    image: '/images/projects/roadobjectyolo.png',
    date: '2020-09-15',
    desc:
      'Built an Object Detection Model using the YOLO Algorithm to detect and classify 80 classes '
      + 'of objects that can be observed on roads using a car detection dataset and a deep CNN with pre-trained weights.',
  },
  {
    title: 'JPEG Encoder',
    subtitle: 'Verilog HDL, Image Processing',
    image: '/images/projects/jpeg3.png',
    date: '2018-10-01',
    desc:
      'Programmed a JPEG Encoder using DCT based Encoder Processing steps with Verilog HDL - for efficient image compression.',
  },
];

export default data;
