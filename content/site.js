// Edit the wording here. Keep keys, quotes and commas in place.
// See EDITING.md for previewing and publishing your changes.
export const profile = {
  name: 'Jayashruthi Rajesh Babu',
  shortName: 'Shruthi',
  email: 'rjayashruthi@yahoo.com',
  github: 'https://github.com/shrut10',
  universityGithub: 'https://github.com/wphs3147-uol',
  linkedin: 'https://www.linkedin.com/in/jayashruthi-r-6592101b9/',
  medium: 'https://medium.com/@rjayashruthi',
  introduction: 'I’m a data science student at the University of Leeds, building machine learning systems and exploring how we understand the brain through computation.',
  welcome: 'My interests include neural interfaces, artificial intelligence and consciousness',
  degree: 'BSc Data Science · University of Leeds · 2027',
};

export const home = {
  greeting: 'Hi, I’m',
  newsLabel: 'Latest project',
  newsTitle: 'IntentLab',
  newsText: 'My latest project uses recorded EEG to classify imagined left and right hand movements, exploring how brain signals could control a computer',
  newsButton: 'View project',
  projectsHeading: 'Projects',
  projectsIntro: 'Selected personal projects and university work, with source code and documented results',
  writingHeading: 'Writing',
  writingIntro: 'Essays on neuroscience, artificial intelligence and mathematics',
  contactHeading: 'Contact',
  contactText: 'I’d love to hear about interesting AI projects, graduate opportunities or an idea you want to talk through.',
};

export const intentlab = {
  title: 'IntentLab',
  subtitle: 'Decoding imagined movement from recorded brain signals',
  description: 'IntentLab predicts imagined left or right fist movement from recorded EEG, with an interactive demonstration that shows how model confidence affects cursor control.',
  live: 'https://intentlab-bci.vercel.app',
  github: 'https://github.com/shrut10/intentlab-bci',
  question: 'Could imagining a movement become a useful way to control a computer?',
  motivation: 'I built IntentLab to investigate whether machine learning could identify imagined movement in EEG recordings from people it had not encountered during training, connecting my interest in neuroscience with the practical challenges of developing neural interfaces.',
  limitation: 'The demonstration replays recorded experiments to classify two imagined movements; it has no live headset connection, cannot read thoughts and is not a medical device.',
  result: '61.1%',
  resultLabel: 'Balanced accuracy on unseen participants',
  resultNote: 'A participant-macro average across 21 held-out people, with a 95% bootstrap interval of 55.8–66.6% against a 50% chance baseline',
  evaluation: 'The compact neural network was selected using validation results before evaluation on a separate test set, with participants kept apart throughout to assess generalisation to unfamiliar people.',
  uncertainty: 'The model did not meet the validation target for reliable control and accepts just 2.9% of test trials at the default 75% confidence threshold, illustrating how rejecting uncertain predictions reduces the number of usable commands.',
  steps: [
    { title: 'Choose a recording', text: 'Pick a held-out EEG trial from the public PhysioNet motor imagery dataset.' },
    { title: 'Decode the signal', text: 'A compact neural network estimates left or right imagined movement from nine electrodes.' },
    { title: 'Inspect the result', text: 'Compare the prediction with the recorded label while adjusting confidence, noise and channel availability to explore the model’s limits.' },
  ],
  stack: ['Python', 'PyTorch', 'ONNX', 'FastAPI', 'Parquet', 'Docker', 'GitHub Actions'],
};

export const projects = [
  { id: 'housing', kind: 'Group coursework', icon: 'house', title: 'House prices & neighbourhoods', description: 'A group project combining neural networks with neighbourhood graph features to predict California house prices, reporting a 35% reduction in test error against its baseline.', tags: ['Python', 'Neural networks', 'Graph features'], link: 'https://github.com/shrut10/House-Price-Prediction' },
  { id: 'agent', kind: 'Personal project', icon: 'terminal', title: 'Desktop automation agent', description: 'A macOS automation agent combining screen reading, action planning and SQLite memory to carry out tasks described in everyday language.', tags: ['Python', 'LLMs', 'OCR', 'SQLite'], link: 'https://github.com/wphs3147-uol/ai-agent-tool' },
  { id: 'evolution', kind: 'Experiment', icon: 'sprout', title: 'Evolutionary optimisation', description: 'Controlled trials investigating how population size and mutation rate affect convergence, performance and variation across evolutionary algorithms.', tags: ['Python', 'Optimisation', 'Statistics'], link: 'https://github.com/shrut10/Evolutionary-Optimisation' },
  { id: 'pagerank', kind: 'Project', icon: 'network', title: 'PageRank visualiser', description: 'A web crawler, a SQLite link graph and an iterative PageRank implementation, with a D3 visualiser to explore how pages connect.', tags: ['Python', 'SQLite', 'PageRank', 'D3'], link: 'https://github.com/shrut10/pagerank' },
  { id: 'shakespeare', kind: 'Group coursework', icon: 'book', title: 'Evolving Shakespeare', description: 'A genetic algorithm that evolves random strings towards a target Shakespearean sonnet through selection, mutation and crossover.', tags: ['Genetic algorithms', 'Optimisation'], link: 'https://github.com/wphs3147-uol/MATH1604-group-project' },
  { id: 'portfolio', kind: 'You are here', icon: 'flower', title: 'Portfolio website', description: 'A Next.js portfolio featuring an interactive pixel-art simulation, accessible navigation and a central file for editing the main website copy.', tags: ['Next.js', 'React', 'CSS'], link: 'https://github.com/shrut10/NoctraMind-Site' },
];

export const posts = [
  { title: 'Bridging minds and machines through neural networks', excerpt: 'What would it take to upload a human brain into a computer?', topic: 'Brains & machines', format: 'Essay', link: 'https://medium.com/@rjayashruthi/bridging-minds-and-machines-through-neural-networks-9a5f06778cc2' },
  { title: 'Structural dependencies in Markov processes', excerpt: 'An overview of communicating classes, irreducibility, periodicity and the links between discrete and continuous time.', topic: 'Mathematics', format: 'PDF', link: '/pdfs/markov-essay.pdf' },
  { title: 'Exploring the hypothesis of a cyclical universe', excerpt: 'Thinking through the idea of a universe that follows a cycle of creation and collapse.', topic: 'Cosmology', format: 'Essay', link: 'https://medium.com/@rjayashruthi/exploring-the-hypothesis-of-a-cyclical-universe-fbc11c980dc5' },
  { title: 'What Channel 4’s “Humans” teaches us about machine minds', excerpt: 'Why this series stayed with me, and the questions it raises about sentient artificial intelligence.', topic: 'Machine minds', format: 'Essay', link: 'https://medium.com/@rjayashruthi/what-channel-4s-humans-teaches-us-about-machine-minds-cc752e3f576f' },
  { title: 'Can psychedelics aid in meditation for higher states of consciousness?', excerpt: 'An exploration of altered states, meditation and consciousness.', topic: 'Consciousness', format: 'Essay', link: 'https://medium.com/@rjayashruthi/can-psychedelics-aid-in-meditation-for-reaching-higher-states-of-consciousness-b609e6a5aa7f' },
];

export const about = {
  title: 'About',
  intro: 'I’m Jayashruthi Rajesh Babu, usually known as Shruthi, and I’m completing a BSc in Data Science at the University of Leeds, graduating in 2027.',
  paragraphs: [
    'I’m interested in the overlap between human minds and machines: how we learn, how we make decisions, and what an artificial system might be able to understand.',
    'I explore these questions through machine learning projects, automation tools and experiments with AI agents, alongside writing about consciousness, cognition and computational neuroscience.',
    'I’m working towards a career in AI and ML engineering, with an emphasis on building useful systems and understanding the evidence behind their performance.',
  ],
  currentHeading: 'What I’m exploring',
  current: [
    'Brain–computer interfaces and motor imagery through IntentLab',
    'Deep learning and explainable AI in my final year',
    'The relationship between pattern recognition and understanding',
  ],
};

export const contact = {
  title: 'Contact',
  intro: 'Get in touch about AI and ML opportunities, collaborations or questions about my work',
  note: 'I’m interested in AI and ML graduate roles in London, starting in 2027, and projects that give me something new to figure out.',
};
