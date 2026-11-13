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
  introduction: 'Projects in brain computer interfaces, EEG decoding, agentic AI and machine learning',
  welcome: 'Research and writing on neuroscience, artificial intelligence and learning',
  degree: 'BSc Data Science · University of Leeds · 2027',
};

export const home = {
  newsLabel: 'Research update',
  newsTitle: 'Learning from unlabelled EEG',
  newsText: 'IntentLab now includes a comparison of masked channel pretraining and learning from scratch, with timing measurements and an audit of a separate intracortical dataset',
  newsButton: 'Explore IntentLab',
  newsHref: '/projects/intentlab#pretraining',
  newsResourceLabel: 'Included in NeuroTechX’s Awesome BCI resources',
  projectsHeading: 'Projects',
  projectsIntro: 'Brain computer interfaces, AI agents and machine learning projects',
  writingHeading: 'Writing',
  writingIntro: 'AI agents, machine minds and the futures imagined in science fiction',
  contactHeading: 'Contact',
  contactText: 'Enquiries about projects, research and AI or ML opportunities',
};

export const thronglets = {
  // Plaything English subtitles, 00:11:39.400 to 00:11:44.400
  // Also quoted at https://recenserie.com/black-mirror-7x04-recensione-netflix-thronglets.html
  quote: 'You’re looking at the first lifeforms in history whose biology is entirely digital',
  speaker: 'Colin Ritman',
  source: 'Black Mirror, Plaything',
  sourceUrl: 'https://www.netflix.com/tudum/articles/black-mirror-plaything-ending-explained',
};

// Headings, navigation and short labels used across the site.
export const ui = {
  navigation: [{ href: '/', label: 'Home' }, { href: '/projects', label: 'Projects' }, { href: '/blog', label: 'Writing' }, { href: '/about', label: 'About' }, { href: '/contact', label: 'Contact' }],
  projectsButton: 'Projects', aboutButton: 'About', allProjects: 'All projects',
  allWriting: 'All writing', contactButton: 'Contact', codeButton: 'Source code',
  projectButton: 'About the project', demoButton: 'Try the demo', backProjects: '← Back to projects',
  projectsTitle: 'Projects', projectsIntro: 'Projects in brain computer interfaces, agentic AI and machine learning',
  moreProjects: 'More projects', githubButton: 'More on GitHub',
  writingTitle: 'Writing',
  writingIntro: 'I write about what happens when software can act on its own, when a brain becomes an interface, and when science fiction gives me a way to think about either.',
  mediumButton: 'Follow me on Medium',
  emailButton: 'Email', letterTo: 'Email',
  contactLinks: [{ title: 'GitHub', text: 'Project repositories', key: 'github' }, { title: 'University code', text: 'Coursework and group projects', key: 'universityGithub' }, { title: 'LinkedIn', text: 'Work and opportunities', key: 'linkedin' }],
  footerGithub: 'GitHub', footerUniversity: 'University code', footerLinkedin: 'LinkedIn', footerEmail: 'Email',
};

export const genecraft = {
  title: 'GeneCraft',
  kind: 'Minecraft · Agent sandbox',
  subtitle: 'Minecraft agents with saved memory and persistent jobs',
  description: 'A Minecraft Java plugin whose named agents remember conversations and carry out gathering, mining and building jobs using shared supplies',
  image: '/projects/genecraft.png',
  imageAlt: 'GeneCraft in Minecraft: a woodcutter agent accepts a request to gather 32 logs and save planks to shared supplies',
  imageCaption: 'A woodcutter accepting a gathering job in Minecraft',
  github: 'https://github.com/shrut10/genecraft',
  release: 'https://github.com/shrut10/genecraft/releases/latest',
  releaseButton: 'Get the plugin',
  stack: ['Java', 'Paper', 'Python', 'Agent memory'],
  question: 'Persistent jobs in a shared world',
  howHeading: 'In the game',
  implementationHeading: 'Implementation',
  motivation: 'GeneCraft connects conversation to actions in Minecraft, where a woodcutter can gather materials for a builder and their memory, jobs and supplies survive a server restart',
  implementation: 'A local Python bridge interprets requests and the Paper plugin checks and runs the chosen action, allowing gathering, mining and building to continue locally without a model call for every block',
  limits: 'Minecraft Java Edition and a Paper server are required, with an optional local bridge and an eligible ChatGPT account for AI chat, while the pathfinding demo works without an AI account',
  affiliation: 'An independent community project that is not an official Minecraft product or service and is not approved by or associated with Mojang or Microsoft',
  steps: [
    { title: 'Give an agent a job', text: 'Use Minecraft chat to assign gathering, mining or building work to an agent with its own name and saved memory' },
    { title: 'Watch the work', text: 'Agents move through the world and use shared supplies, with jobs paused when the player leaves the work area' },
    { title: 'Resume or cancel a job', text: 'Goals, jobs and supplies persist across sessions, with progress checks and cancellation available through Minecraft chat' },
  ],
};

export const intentlab = {
  title: 'IntentLab',
  subtitle: 'Classifying imagined hand movements from recorded EEG',
  description: 'An experiment that classifies imagined hand movements from recorded EEG and shows how model confidence affects each prediction',
  live: 'https://intentlab-bci.vercel.app',
  github: 'https://github.com/shrut10/intentlab-bci',
  recognition: 'Included in NeuroTechX’s community curated Awesome BCI resources',
  recognitionUrl: 'https://github.com/NeuroTechX/awesome-bci#tutorials-and-project-ideas',
  recognitionDetail: 'NeuroTechX’s Awesome BCI maintainers accepted IntentLab into the Tutorials and Project Ideas section, where the recorded EEG demonstration and teaching exercise are available to people learning about brain computer interfaces',
  recognitionContribution: 'https://github.com/NeuroTechX/awesome-bci/pull/100',
  teachingUrl: 'https://github.com/shrut10/intentlab-bci/blob/main/docs/TEACHING.md',
  question: 'Recognising imagined movement in unfamiliar recordings',
  motivation: 'IntentLab evaluates whether a model trained on one group of participants can recognise imagined movement in recordings from other people, with controls for inspecting correct and incorrect predictions',
  kind: 'EEG · Brain computer interfaces',
  image: '/projects/intentlab.png?v=neon-20261110',
  imageAlt: 'Recorded EEG traces, recording controls and left and right probabilities in IntentLab’s interactive demonstration',
  detailHeadings: { community: 'Community resources', question: 'The question', demo: 'How to use it', result: 'Results on unseen people', implementation: 'How it works' },
  implementation: [
    'The training pipeline compares simple baselines with a compact convolutional network using public EEG recordings, with the selected model served through ONNX and FastAPI',
    'The repository includes a calibration and alignment comparison, a participant reliability audit and a chronological calibration example for MOABB, alongside saved results and a teaching exercise',
  ],
  researchUpdate: {
    heading: 'Learning from unlabelled EEG',
    description: 'Masked channel pretraining is compared with training from scratch using 252 or 2,832 movement labels across three random seeds, with results reported as exploratory validation rather than a new independent test',
    detail: 'Timing measurements distinguish server processing, browser round trip time and the three second recording window, while an audit of a separate intracortical dataset documents that its recordings were unavailable to download and have not been used for training',
    link: 'https://intentlab-bci.vercel.app/research/pretraining',
  },
  limitation: 'The demonstration replays recorded experiments to classify two imagined movements; it has no live headset connection, cannot read thoughts and is not a medical device',
  result: '61.1%',
  resultLabel: 'Balanced accuracy on unseen participants',
  resultNote: 'An average across 21 unseen participants, giving each person equal weight, with a 95% bootstrap interval of 55.8 to 66.6% against a 50% chance baseline',
  evaluation: 'The compact neural network was selected using validation results before evaluation on a separate test set, with participants kept apart throughout to assess generalisation to unfamiliar people',
  uncertainty: 'The model did not meet the validation target for reliable control and accepts 2.9% of test trials at the default 75% confidence threshold, showing the reduction in usable commands when uncertain predictions are rejected',
  steps: [
    { title: 'Choose a recording', text: 'Pick a held out EEG trial from the public PhysioNet motor imagery dataset' },
    { title: 'Decode the signal', text: 'A compact neural network estimates left or right imagined movement from nine electrodes' },
    { title: 'Inspect the result', text: 'Compare the prediction with the recorded label while adjusting confidence, noise and channel availability to explore the model’s limits' },
  ],
  stack: ['Python', 'PyTorch', 'ONNX', 'FastAPI', 'Parquet', 'Docker', 'GitHub Actions'],
};

export const projects = [
  { id: 'comparison', kind: 'Machine learning · Individual coursework', icon: 'network', title: 'Neural network vs polynomial regression', description: 'A comparison on the same noisy data in which the polynomial model with five parameters had about 14% lower MSE on unseen data than the neural network, with an analysis, report and interactive plot', tags: ['PyTorch', 'NumPy', 'Plotly', 'pytest'], image: '/projects/model-comparison.png', imageAlt: 'Published comparison plot showing polynomial and neural network fits over the training and validation data', link: 'https://github.com/shrut10/Neural-Network-vs-Polynomial-Regression-for-Function-Approximation' },
  { id: 'housing', kind: 'Group coursework', icon: 'house', title: 'House prices & neighbourhoods', description: 'A group project adding neighbourhood graph features to a neural network for California house prices, reducing test MSE from 0.2569 to 0.1672, or 34.9% relative to the baseline', tags: ['Python', 'scikit learn', 'Graph features'], link: 'https://github.com/shrut10/House-Price-Prediction' },
  { id: 'pagerank', kind: 'Earlier project', icon: 'network', title: 'PageRank visualiser', description: 'A web crawler and SQLite link graph, with an iterative PageRank implementation and a D3 view of how pages connect', tags: ['Python', 'SQLite', 'PageRank', 'D3'], link: 'https://github.com/shrut10/pagerank' },
];

export const posts = [
  {
    title: 'Clayface and its implications for AI assisted Human Enhancement',
    excerpt: 'Clayface made me wonder what happens when a treatment can learn from the person it’s meant to help. Who gets to decide what it keeps, what it changes and when it stops?',
    topic: 'Human enhancement',
    published: '2026-11-13',
    link: 'https://medium.com/@rjayashruthi/clayface-and-its-implications-for-ai-assisted-human-enhancement-1eab0ec16e9a',
    image: {
      src: '/writing/clayface.webp',
      width: 1200,
      height: 675,
      alt: 'Dr Caitlyn Corr examines Matt Hagen in front of two glowing brain scans.',
      credit: 'Parisa Taghizadeh / © 2026 Warner Bros. Entertainment',
    },
  },
  {
    title: 'Controlling virtual worlds with brain computer interfaces',
    excerpt: 'A chapter in Michio Kaku’s The Future of the Mind sent me from games controlled by brain signals to lucid dreaming, and to the question of what it would feel like to inhabit a world that responds to imagined movement.',
    topic: 'Neurotechnology & VR',
    published: '2026-11-13',
    link: 'https://medium.com/@rjayashruthi/controlling-virtual-worlds-with-brain-computer-interfaces-427a6fb3cff7',
    image: {
      src: '/writing/virtual-worlds.webp',
      width: 1200,
      height: 668,
      alt: 'Moonlight falls across a dark sea and a low rocky shoreline.',
      credit: 'Martin Johnson Heade, Point Judith, Rhode Island, 1867–68. Cleveland Museum of Art, CC0.',
    },
  },
  {
    title: 'On Rogue Agents',
    excerpt: 'An AI agent is told to keep trying. What happens when it treats the limits of its access as part of the problem? I look at what the Hugging Face breach tells us about permission and autonomy.',
    topic: 'AI agents & safety',
    published: '2026-10-18',
    link: 'https://medium.com/@rjayashruthi/on-rogue-agents-0623c9ae57c1',
  },
  {
    title: 'What Channel 4’s “Humans” might teach us about machine minds',
    excerpt: 'I keep returning to Athena Morrow’s work in Humans and what it asks of us. How would we recognise a machine mind, especially when we want so badly to believe someone is still there?',
    topic: 'Machine minds',
    published: '2025-04-04',
    link: 'https://medium.com/@rjayashruthi/what-channel-4s-humans-teaches-us-about-machine-minds-cc752e3f576f',
    image: {
      src: '/writing/humans.webp',
      width: 980,
      height: 653,
      alt: 'Dr Athena Morrow shows Milo Khoury a small green device in Humans.',
      credit: 'Colin Hutton / Channel 4',
    },
  },
  {
    title: 'Bridging minds and machines through digital brain simulation',
    excerpt: 'What would it take to simulate a particular brain in software, including the changes through which it learns?',
    topic: 'Brain simulation',
    published: '2023-10-24',
    link: 'https://medium.com/@rjayashruthi/bridging-minds-and-machines-through-neural-networks-9a5f06778cc2',
  },
];

export const markovPaper = {
  title: 'Structural dependencies in Markov processes',
  excerpt: 'An overview of communicating classes, irreducibility, periodicity and the links between discrete and continuous time.',
  link: '/pdfs/markov-essay.pdf',
};

export const about = {
  title: 'About',
  intro: 'Jayashruthi Rajesh Babu (Shruthi) is a data science student at the University of Leeds, graduating in 2027, with project experience in brain computer interfaces, EEG decoding and agentic AI',
  paragraphs: [
    'Research interests include neuroscience, neurotechnology and artificial intelligence, particularly learning, decision making and the limits of understanding in artificial systems',
    'IntentLab uses machine learning to classify imagined hand movements from recorded EEG and is included in NeuroTechX’s community curated Awesome BCI resources',
    'Other work includes GeneCraft, which explores agent memory and persistent work in Minecraft, and essays on consciousness, cognition and computational neuroscience',
    'Professional interests are in AI and ML engineering, with an emphasis on practical systems and careful evaluation, and enquiries about opportunities and collaborations are welcome',
  ],
  currentHeading: 'Current interests',
  current: [
    'Brain computer interfaces and motor imagery through IntentLab',
    'Agentic AI, persistent memory and shared worlds through GeneCraft',
    'Deep learning and explainable AI',
    'The relationship between pattern recognition and understanding',
  ],
};

export const contact = {
  title: 'Contact',
  intro: 'Enquiries about AI and ML opportunities, research, collaborations and project work',
  note: 'Please use the email address below for enquiries about research, projects or AI and ML opportunities',
};
