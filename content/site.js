// Edit the wording here. Keep keys, quotes and commas in place.
// See EDITING.md for previewing and publishing your changes.
export const profile = {
  name: 'Jayashruthi Rajesh Babu',
  shortName: 'Shruthi',
  alternateNames: ['Shruthi', 'Jaya', 'Jayashruthi', 'Jaya Shruthi', 'Shruthi Rajesh', 'Shruthi Rajesh Babu', 'Shruthi Rajeshbabu', 'Jayashruthi Rajesh', 'Jayashruthi Rajeshbabu', 'Jaya Shruthi Rajesh Babu', 'Shruthi R', 'Jayashruthi R'],
  email: 'rjayashruthi@yahoo.com',
  github: 'https://github.com/shrut10',
  universityGithub: 'https://github.com/wphs3147-uol',
  linkedin: 'https://www.linkedin.com/in/jayashruthi-r-6592101b9/',
  medium: 'https://medium.com/@rjayashruthi',
  introduction: 'I’m a data science student at Leeds working on brain–computer interfaces (BCI), EEG decoding and agentic AI. I built IntentLab and GeneCraft.',
  welcome: 'Interested in neuroscience, neurotechnology and how people and machines learn.',
  degree: 'BSc Data Science · University of Leeds · 2027',
};

export const home = {
  greeting: 'Hi, I’m',
  newsLabel: 'Research update',
  newsTitle: 'Learning from unlabelled EEG',
  newsText: 'I’ve added an IntentLab study comparing masked-channel pretraining with learning from scratch, alongside clearer timing measurements and an audit of a separate intracortical dataset.',
  newsButton: 'Explore IntentLab',
  newsHref: '/projects/intentlab#pretraining',
  newsResourceLabel: 'View the Awesome BCI listing',
  projectsHeading: 'Projects',
  projectsIntro: 'Brain–computer interfaces, AI agents and machine learning projects.',
  writingHeading: 'Writing',
  writingIntro: 'Essays on neuroscience, artificial intelligence and mathematics',
  contactHeading: 'Contact',
  contactText: 'Have a project in mind, or want to talk about my work? Send me a message.',
};

// Headings, navigation and short labels used across the site.
export const ui = {
  navigation: [{ href: '/', label: 'Home' }, { href: '/projects', label: 'Projects' }, { href: '/blog', label: 'Writing' }, { href: '/about', label: 'About' }, { href: '/contact', label: 'Contact' }],
  projectsButton: 'My projects', aboutButton: 'About me', allProjects: 'All projects',
  allWriting: 'All writing', contactButton: 'Get in touch', codeButton: 'Source code',
  projectButton: 'About the project', demoButton: 'Try the demo', backProjects: '← Back to projects',
  projectsTitle: 'Projects', projectsIntro: 'Brain–computer interfaces, agentic AI and machine learning: IntentLab, GeneCraft and more.',
  moreProjects: 'More projects', githubButton: 'More on GitHub',
  writingTitle: 'Writing', writingIntro: 'Essays on consciousness, neuroscience and mathematics',
  essaysLabel: 'Essays', entriesLabel: 'entries', mediumButton: 'My Medium',
  writingNote: 'My essays are on Medium. The Markov processes paper is a PDF.',
  emailButton: 'Write me an email', letterTo: 'To: Shruthi',
  contactLinks: [{ title: 'GitHub', text: 'My personal projects', key: 'github' }, { title: 'University code', text: 'Coursework and group projects', key: 'universityGithub' }, { title: 'LinkedIn', text: 'Work and opportunities', key: 'linkedin' }],
  footerGithub: 'GitHub', footerUniversity: 'University code', footerLinkedin: 'LinkedIn', footerEmail: 'Email',
};

export const genecraft = {
  title: 'GeneCraft',
  kind: 'Minecraft · Agent sandbox',
  subtitle: 'Agents you can talk to, build with and leave a job to do.',
  description: 'A Minecraft Java plugin with named agents, saved memory and jobs that carry on between conversations. Ask an agent to collect wood, mine a tunnel or build a starter house from shared supplies.',
  image: '/projects/genecraft.png',
  imageAlt: 'GeneCraft in Minecraft: a woodcutter agent accepts a request to gather 32 logs and save planks to shared supplies.',
  imageCaption: 'The woodcutter accepting a gathering job in my Minecraft world.',
  github: 'https://github.com/shrut10/genecraft',
  release: 'https://github.com/shrut10/genecraft/releases/latest',
  releaseButton: 'Get the plugin',
  stack: ['Java', 'Paper', 'Python', 'Agent memory'],
  question: 'What can an agent actually do in a world you share?',
  howHeading: 'In the game',
  implementationHeading: 'Under the hood',
  motivation: 'I wanted agents that could do more than reply in chat. GeneCraft gives each one a visible place in Minecraft, things to remember and work to carry out. A woodcutter can gather materials for a builder, and their jobs and supplies survive a server restart.',
  implementation: 'A local Python bridge interprets requests. The Paper plugin checks the chosen action and runs the work in the game. Gathering, mining and building continue locally without asking a model what to do for every block.',
  limits: 'Requires Minecraft Java Edition and a Paper server. AI chat uses an optional local bridge and an eligible ChatGPT account. The pathfinding demo runs without connecting an AI account.',
  affiliation: 'Independent community project, not an official Minecraft product or service. Not approved by or associated with Mojang or Microsoft.',
  steps: [
    { title: 'Give an agent a job', text: 'Talk in game to ask for wood, a tunnel or a small house. Each agent has its own name and saved memory.' },
    { title: 'Watch the work', text: 'Agents move through the world and use shared supplies. Jobs pause when you leave the work area.' },
    { title: 'Pick up where you left off', text: 'Goals, jobs and supplies persist. You can check progress or cancel a job from Minecraft chat.' },
  ],
};

export const intentlab = {
  title: 'IntentLab',
  subtitle: 'Can EEG tell left from right when you imagine a movement?',
  description: 'An experiment with recorded EEG and imagined hand movements. Pick a recording, run the model and see when it makes a prediction or holds back.',
  live: 'https://intentlab-bci.vercel.app',
  github: 'https://github.com/shrut10/intentlab-bci',
  recognition: 'Included in NeuroTechX’s community-curated Awesome BCI resources',
  recognitionUrl: 'https://github.com/NeuroTechX/awesome-bci#tutorials-and-project-ideas',
  recognitionDetail: 'NeuroTechX’s Awesome BCI maintainers accepted IntentLab into the Tutorials and Project Ideas section, where the recorded-EEG demonstration and teaching exercise are available to people learning about brain–computer interfaces.',
  recognitionContribution: 'https://github.com/NeuroTechX/awesome-bci/pull/100',
  teachingUrl: 'https://github.com/shrut10/intentlab-bci/blob/main/docs/TEACHING.md',
  question: 'Could imagining a movement become a useful way to control a computer?',
  motivation: 'I wanted to see whether a model trained on some people’s EEG could recognise imagined movement in someone else’s recordings. IntentLab lets you inspect those predictions, including the ones it gets wrong.',
  kind: 'EEG · Brain–computer interfaces',
  image: '/projects/intentlab.png',
  imageAlt: 'Recorded EEG traces, recording controls and left and right probabilities in IntentLab’s pixel-art demo.',
  detailHeadings: { community: 'Community resources', question: 'The question', demo: 'How to use it', result: 'Results on unseen people', implementation: 'How it works' },
  implementation: [
    'The training pipeline compares simple baselines with a compact convolutional network, using public EEG recordings. The selected model runs through ONNX and FastAPI.',
    'Since the first demo, I’ve added a calibration and alignment comparison, a participant reliability audit, and a chronological calibration example for MOABB. The saved results and teaching exercise are available alongside the code.',
  ],
  researchUpdate: {
    heading: 'Learning from unlabelled EEG',
    description: 'I compared masked-channel pretraining with the same model trained from scratch, using 252 or 2,832 movement labels. The report includes all three seeds and explains why these are exploratory validation results, not a new independent test.',
    detail: 'The demo now separates server processing from browser round-trip time and the three-second recording window. I also checked the public metadata and access status of a separate intracortical dataset; its recordings were unavailable to download and have not been used for training.',
    link: 'https://intentlab-bci.vercel.app/research/pretraining',
  },
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
  { id: 'comparison', kind: 'Machine learning · Individual coursework', icon: 'network', title: 'Neural network vs polynomial regression', description: 'Two models, the same noisy data. The five-parameter polynomial fit had about 14% lower held-out MSE than the neural network. Includes the analysis, report and an interactive plot.', tags: ['PyTorch', 'NumPy', 'Plotly', 'pytest'], image: '/projects/model-comparison.png', imageAlt: 'Published comparison plot showing polynomial and neural-network fits over the training and validation data.', link: 'https://github.com/shrut10/Neural-Network-vs-Polynomial-Regression-for-Function-Approximation' },
  { id: 'housing', kind: 'Group coursework', icon: 'house', title: 'House prices & neighbourhoods', description: 'Our group added neighbourhood graph features to a neural-network model of California house prices. Test MSE fell from 0.2569 to 0.1672, a 34.9% reduction against the baseline.', tags: ['Python', 'scikit-learn', 'Graph features'], link: 'https://github.com/shrut10/House-Price-Prediction' },
  { id: 'pagerank', kind: 'Earlier project', icon: 'network', title: 'PageRank visualiser', description: 'A web crawler and SQLite link graph, with an iterative PageRank implementation and a D3 view of how pages connect.', tags: ['Python', 'SQLite', 'PageRank', 'D3'], link: 'https://github.com/shrut10/pagerank' },
];

export const posts = [
  { title: 'Bridging minds and machines through neural networks', excerpt: 'What would it take to upload a human brain into a computer?', topic: 'Brains & machines', format: 'Essay', link: 'https://medium.com/@rjayashruthi/bridging-minds-and-machines-through-neural-networks-9a5f06778cc2' },
  { title: 'Structural dependencies in Markov processes', excerpt: 'An overview of communicating classes, irreducibility, periodicity and the links between discrete and continuous time.', topic: 'Mathematics', format: 'PDF', link: '/pdfs/markov-essay.pdf' },
  { title: 'What Channel 4’s “Humans” teaches us about machine minds', excerpt: 'Why this series stayed with me, and the questions it raises about sentient artificial intelligence.', topic: 'Machine minds', format: 'Essay', link: 'https://medium.com/@rjayashruthi/what-channel-4s-humans-teaches-us-about-machine-minds-cc752e3f576f' },
];

export const about = {
  title: 'About',
  intro: 'I’m Jayashruthi Rajesh Babu (Shruthi), a data science student at the University of Leeds, graduating in 2027.',
  paragraphs: [
    'My interests are in neuroscience, neurotechnology and artificial intelligence: how we learn, how we make decisions, and what an artificial system might be able to understand.',
    'I built IntentLab to explore brain–computer interfaces (BCI), using machine learning to classify imagined hand movements from recorded EEG. It is included in NeuroTechX’s community-curated Awesome BCI resources.',
    'My agentic AI work includes GeneCraft, a Minecraft Java plugin where agents remember conversations, share supplies and carry out gathering, mining and building jobs. I also write about consciousness, cognition and computational neuroscience.',
    'I’m working towards a career in AI and ML engineering, with an emphasis on useful systems and careful evaluation.',
  ],
  currentHeading: 'What I’m exploring',
  current: [
    'Brain–computer interfaces and motor imagery through IntentLab',
    'Agentic AI, persistent memory and shared worlds through GeneCraft',
    'Deep learning and explainable AI in my final year',
    'The relationship between pattern recognition and understanding',
  ],
};

export const contact = {
  title: 'Contact',
  intro: 'Get in touch about AI and ML opportunities, collaborations or questions about my work',
  note: 'I’m interested in AI and ML graduate roles in London, starting in 2027, and projects that give me something new to figure out.',
};
