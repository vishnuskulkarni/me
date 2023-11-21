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
    title: 'Author Attribution using NLP and ML',
    link: 'https://drive.google.com/drive/folders/1FxAVUqbbQNSgowwDMgUjUez1DHCuBIp-?usp=sharing',
    subtitle: 'Python, Machine Learning, Natural Language Processing',
    image: '/images/projects/aml.jpeg',
    date: '2023-04-01',
    desc:
      'Leveraged machine learning methods, such as Random Forests, SVMs and TF-IDF Vectorizations,'
      + 'to train classifiers to predict media publication based on article text. Interpreting the features and/or thresholds '
      + 'Formalized the reward function and trained the agent to find a robust and efficient policy to land on a marked '
      + 'used for predicting media outlets may provide valuable insight into prevalent biases.',
  },
  {
    title: 'Predicting survival of patients with heart failure using Machine Learning',
    subtitle: 'R, Machine Learning',
    link: 'https://drive.google.com/drive/folders/1g0jVQ86ciC7KLITHmngBmp4_DbnQgwT6?usp=sharing',
    image: '/images/projects/statlearning.jpeg',
    date: '2022-11-01',
    desc:
      'Used Machine Learning (ML) methods for predicting the survival of patients with heart failure. We use several ML classifiers to not only predict patient survival but also rank the most important risk factors in the data, '
      + 'which can be used for prediction. We use our ML methods in conjunction with traditional biostatistical analysis methods to carry out feature ranking and compare their results. '
      + 'As a fascinating result to our project, we were able to show that by using only the top 2 features '
      + 'obtained from applying ML methods for feature ranking, we were able to obtain higher prediction accuracy for the prediction of patient survival.',
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
    title: 'Waste Bottle Classifier Model Implemented on a Raspberry Pi Module',
    subtitle: 'Python, TFLite, Deep Learning, AI on an Embedded Platform',
    link: 'https://drive.google.com/drive/folders/1uftWeD7cJ5vB9fVD7LXTCHt3Gp-QEreM?usp=sharing',
    image: '/images/projects/embeddedai.jpeg',
    date: '2023-04-01',
    desc:
      'Built a Waste Bottle Classifier system using Deep Learning, a Raspberry Pi 3B, and a USB camera module. '
      + 'The proposed system utilizes a pre-trained and fine tuned MobileNet model to classify recyclable bottles in real-time into four classes: PET, HDPEM, Glass, and Aluminium Cans. '
      + 'All data used for training was collected and preprocessed by us. MobileNet model was quantised and converted to a TF Lite model, which maintained a 96.11% classification accuracy on test images.',
  },
  {
    title: 'Shakespearean Poem Generator',
    subtitle: 'Python, Natural Language Processing',
    // link: 'http://www.spacepotato.org',
    image: '/images/projects/shakespeare.png',
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
    title: 'Reproduction of the Swin Transformer Model',
    subtitle: 'Python, CNNs, TensorFlow',
    link: 'https://drive.google.com/drive/folders/1xAN3kCIvy9HZHriSoTqWEcszDS3h2_vb?usp=sharing',
    image: '/images/projects/swin.jpeg',
    date: '2022-11-15',
    desc:
      'Reproduced a complete Swin Transformer Network, including image partition, embedding layers and Swin Transformer Blocks, from scratch using Tensorflow. '
      + 'Experimented with various configuration settings to investigate the effect of different network parameters and configurations on the effectiveness of the model. '
      + 'We applied our model for the classification of images in the Cifar100 dataset. In our project, we were unable to replicate the accuracy obtained by the original paper and examined our results and implementations. (Paper attached!)',
  },
  {
    title: 'JPEG Encoder',
    subtitle: 'Verilog HDL, Image Processing',
    image: '/images/projects/jpegdct.png',
    date: '2018-10-01',
    desc:
      'Programmed a JPEG Encoder using DCT based Encoder Processing steps with Verilog HDL - for efficient image compression.',
  },
];

export default data;
