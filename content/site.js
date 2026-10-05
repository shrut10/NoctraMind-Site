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
  introduction: 'I study data science at Leeds. I build AI and ML projects, and write about brains, minds and machines.',
  welcome: 'Here are the things I’ve been making and the questions I keep coming back to.',
  degree: 'BSc Data Science · University of Leeds · 2027',
};

export const home = {
  eyebrow: 'A small corner of the internet',
  greeting: 'Hi, I’m',
  newsLabel: 'Latest from my workbench',
  newsTitle: 'IntentLab',
  newsText: 'My latest project explores how imagined hand movements can become computer commands.',
  newsDetail: 'An interactive experiment using real, recorded brain signals.',
  newsButton: 'Meet IntentLab',
  projectsHeading: 'Things I’ve built',
  projectsIntro: 'Some personal experiments, some university work. All with code to look through.',
  writingHeading: 'Pages from my notebook',
  writingIntro: 'The bigger questions, and a few detours.',
  contactHeading: 'Something on your mind?',
  contactText: 'I’d love to hear about interesting AI projects, graduate opportunities or an idea you want to talk through.',
};

export const intentlab = {
  title: 'IntentLab',
  subtitle: 'Decoding imagined movement from recorded brain signals.',
  description: 'IntentLab uses machine learning to predict whether someone was imagining moving their left or right fist. You can replay recorded EEG, see the prediction and watch it control a cursor when the model is confident enough.',
  live: 'https://intentlab-bci.vercel.app',
  github: 'https://github.com/shrut10/intentlab-bci',
  question: 'Could imagining a movement become a useful way to control a computer?',
  motivation: 'Brain–computer interfaces sit right in the middle of what interests me: brains, machine learning and the possibility of new ways to interact with technology. IntentLab is a small, practical way to explore that question with real data.',
  limitation: 'This is a replay of recorded experiments, not a live headset connection or a medical device. The model predicts one of two imagined movements; it cannot read thoughts.',
  result: '61.1%',
  resultLabel: 'Balanced accuracy on unseen participants',
  resultNote: 'Participant-macro average across 21 held-out people. The 95% bootstrap interval is 55.8–66.6%; chance is 50%.',
  evaluation: 'Training, validation and test participants are kept separate. The compact neural network was selected using validation results, before evaluating it on the test set. That makes this a test of how it handles unfamiliar people.',
  uncertainty: 'The model did not meet the validation target for reliable control. At the default 75% confidence threshold, it accepts just 2.9% of test trials. The demo makes that trade-off visible: a lower threshold moves the cursor more often, but can admit more mistakes.',
  steps: [
    { title: 'Choose a recording', text: 'Pick a held-out EEG trial from the public PhysioNet motor imagery dataset.' },
    { title: 'Decode the signal', text: 'A compact neural network estimates left or right imagined movement from nine electrodes.' },
    { title: 'See what happens', text: 'Compare the prediction with the recorded label. Adjust the confidence threshold, add noise or remove a channel to explore the model’s limits.' },
  ],
  stack: ['Python', 'PyTorch', 'ONNX', 'FastAPI', 'Parquet', 'Docker', 'GitHub Actions'],
};

export const projects = [
  { id: 'housing', kind: 'Group coursework', icon: 'house', title: 'House prices & neighbourhoods', description: 'Predicting California house prices with a neural network, then adding neighbourhood information from a graph of nearby homes. The group project reported a 35% reduction in test error against its baseline.', tags: ['Python', 'Neural networks', 'Graph features'], link: 'https://github.com/shrut10/House-Price-Prediction' },
  { id: 'agent', kind: 'Personal project', icon: 'terminal', title: 'An agent for the desktop', description: 'An experiment in giving a macOS agent tasks in everyday language. It combines screen reading, action planning and SQLite memory to carry out actions with Python.', tags: ['Python', 'LLMs', 'OCR', 'SQLite'], link: 'https://github.com/wphs3147-uol/ai-agent-tool' },
  { id: 'evolution', kind: 'Experiment', icon: 'sprout', title: 'Evolutionary optimisation', description: 'What changes when you alter a population size or mutation rate? Controlled trials comparing convergence, performance and variation across evolutionary algorithms.', tags: ['Python', 'Optimisation', 'Statistics'], link: 'https://github.com/shrut10/Evolutionary-Optimisation' },
  { id: 'pagerank', kind: 'Project', icon: 'network', title: 'A tiny search engine', description: 'A web crawler, a SQLite link graph and an iterative PageRank implementation, with a D3 visualiser to explore how pages connect.', tags: ['Python', 'SQLite', 'PageRank', 'D3'], link: 'https://github.com/shrut10/pagerank' },
  { id: 'shakespeare', kind: 'Group coursework', icon: 'book', title: 'Evolving Shakespeare', description: 'Turning random strings into a target Shakespearean sonnet through selection, mutation and crossover. A text-based experiment with genetic algorithms.', tags: ['Genetic algorithms', 'Optimisation'], link: 'https://github.com/wphs3147-uol/MATH1604-group-project' },
  { id: 'portfolio', kind: 'You are here', icon: 'flower', title: 'This little website', description: 'A home for my projects and writing, built with Next.js. Pixel illustrations, chunky buttons and a single file for the words I’ll inevitably want to rewrite.', tags: ['Next.js', 'React', 'CSS'], link: 'https://github.com/shrut10/NoctraMind-Site' },
];

export const posts = [
  { title: 'Bridging minds and machines through neural networks', excerpt: 'What would it take to upload a human brain into a computer?', topic: 'Brains & machines', format: 'Essay', link: 'https://medium.com/@rjayashruthi/bridging-minds-and-machines-through-neural-networks-9a5f06778cc2' },
  { title: 'Structural dependencies in Markov processes', excerpt: 'An overview of communicating classes, irreducibility, periodicity and the links between discrete and continuous time.', topic: 'Mathematics', format: 'PDF', link: '/pdfs/markov-essay.pdf' },
  { title: 'Exploring the hypothesis of a cyclical universe', excerpt: 'Thinking through the idea of a universe that follows a cycle of creation and collapse.', topic: 'Cosmology', format: 'Essay', link: 'https://medium.com/@rjayashruthi/exploring-the-hypothesis-of-a-cyclical-universe-fbc11c980dc5' },
  { title: 'What Channel 4’s “Humans” teaches us about machine minds', excerpt: 'Why this series stayed with me, and the questions it raises about sentient artificial intelligence.', topic: 'Machine minds', format: 'Essay', link: 'https://medium.com/@rjayashruthi/what-channel-4s-humans-teaches-us-about-machine-minds-cc752e3f576f' },
  { title: 'Can psychedelics aid in meditation for higher states of consciousness?', excerpt: 'An exploration of altered states, meditation and consciousness.', topic: 'Consciousness', format: 'Essay', link: 'https://medium.com/@rjayashruthi/can-psychedelics-aid-in-meditation-for-reaching-higher-states-of-consciousness-b609e6a5aa7f' },
];

export const about = {
  title: 'A bit about me',
  intro: 'My name is Jayashruthi Rajesh Babu, but I go by Shruthi. I’m studying BSc Data Science at the University of Leeds and graduating in 2027.',
  paragraphs: [
    'I’m interested in the overlap between human minds and machines: how we learn, how we make decisions, and what an artificial system might be able to understand.',
    'That curiosity takes a few forms. I build ML projects and automation tools, experiment with AI agents, and write about consciousness, cognition and computational neuroscience.',
    'I’m working towards a career in AI and ML engineering. I want to build useful systems, understand why they work, and be honest about where they don’t.',
  ],
  currentHeading: 'What I’m exploring',
  current: [
    'Brain–computer interfaces and motor imagery, through IntentLab.',
    'Deep learning and explainable AI in my final year.',
    'The gap between recognising a pattern and understanding something.',
  ],
};

export const contact = {
  title: 'Say hello',
  intro: 'Have a project, an opportunity or a question? Drop me a message.',
  note: 'I’m interested in AI and ML graduate roles in London, starting in 2027, and projects that give me something new to figure out.',
};
