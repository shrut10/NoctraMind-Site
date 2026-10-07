import Link from 'next/link';
import PixelIcon from '@/components/PixelIcon';
import { intentlab } from '@/content/site';

export const metadata = { title: 'IntentLab — decoding imagined movement', description: intentlab.description, alternates: { canonical: '/projects/intentlab' } };

export default function IntentLab() {
  return <>
    <Link href="/projects" className="text-link breadcrumb">← Back to projects</Link>
    <header className="project-heading"><p className="eyebrow">Brain–computer interfaces · Personal project</p><h1>{intentlab.title}<PixelIcon name="brain" /></h1><p className="project-subtitle">{intentlab.subtitle}</p><p className="project-summary">{intentlab.description}</p><div className="button-row"><a className="button button-green" href={intentlab.live} target="_blank" rel="noopener noreferrer">Try the live experiment <span aria-hidden="true">↗</span></a><a className="button" href={intentlab.github} target="_blank" rel="noopener noreferrer">View on GitHub <span aria-hidden="true">↗</span></a></div></header>
    <div className="project-note"><PixelIcon name="terminal" /><p>{intentlab.limitation}</p></div>
    <section className="detail-section"><div><p className="eyebrow">Research question</p><h2>{intentlab.question}</h2></div><div className="prose"><p>{intentlab.motivation}</p></div></section>
    <section className="detail-section"><div><h2>Using the demonstration</h2></div><ol className="steps">{intentlab.steps.map((step, i) => <li key={step.title}><span className="step-number">{i + 1}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></li>)}</ol></section>
    <section className="results-board" aria-labelledby="results-title"><div className="result-number"><p className="eyebrow">Held-out test result</p><strong>{intentlab.result}</strong><p>{intentlab.resultLabel}</p><small>{intentlab.resultNote}</small></div><div className="prose"><h2 id="results-title">Evaluation on unseen participants</h2><p>{intentlab.evaluation}</p><p>{intentlab.uncertainty}</p><a className="text-link" href={`${intentlab.live}/research`} target="_blank" rel="noopener noreferrer">Read the research report ↗</a></div></section>
    <section className="detail-section"><div><h2>Implementation</h2></div><div className="prose"><p>Public EEG recordings are processed into Parquet files for a training pipeline that compares simple baselines with a compact convolutional network, with the selected model served through ONNX and FastAPI.</p><p>The public interface supports trial replay, uncertainty analysis and channel occlusion, while automated checks, Docker and GitHub Actions cover testing and deployment.</p><ul className="tags" aria-label="Technology stack">{intentlab.stack.map(tag => <li key={tag}>{tag}</li>)}</ul><div className="resource-links"><a href="https://physionet.org/content/eegmmidb/1.0.0/" target="_blank" rel="noopener noreferrer">Public dataset: PhysioNet EEGMMIDB ↗</a><a href={`${intentlab.github}/blob/main/docs/WALKTHROUGH.md`} target="_blank" rel="noopener noreferrer">Walk through the project ↗</a><a href={`${intentlab.live}/docs`} target="_blank" rel="noopener noreferrer">Explore the API ↗</a></div><p className="small-copy">Data: PhysioNet EEG Motor Movement/Imagery Dataset v1.0.0 · DOI: 10.13026/C28G6P · Open Data Commons Attribution licence</p></div></section>
    <div className="end-note"><PixelIcon name="sprout" /><p>Explore the recordings, predictions and evaluation results</p><a href={intentlab.live} className="button button-yellow" target="_blank" rel="noopener noreferrer">Open IntentLab ↗</a></div>
  </>;
}
