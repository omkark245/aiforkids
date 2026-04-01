export const site = {
	name: 'AI For Kidds',
	tagline: 'Static AI learning website for Indian school students',
	url: 'https://aiforkidds.in',
	description:
		'AI education for Indian school students in Grades 1 to 12 with grade-based roadmaps, static practice resources, project ideas, and teacher support.',
	whatsAppNumber: '918698760799',
	phoneDisplay: '+91 8698760799',
	email: 'contact@aiforkidds.in',
	address: '2nd Floor, Above Sai Fitness, Trimurti Chowk, Pune-46',
	mapLink: 'https://maps.google.com/?q=Trimurti+Chowk+Pune',
	officeHours: 'Monday - Saturday, 10:00 AM - 6:00 PM',
};

export const navigation = [
	{ href: '/', label: 'Home' },
	{ href: '/learn-by-grade', label: 'Learn by Grade' },
	{ href: '/practice', label: 'Practice' },
	{ href: '/projects', label: 'Projects' },
	{ href: '/for-teachers', label: 'For Teachers' },
	{ href: '/about', label: 'About' },
	{ href: '/contact', label: 'Contact' },
];

export type GradeTrack = {
	grade: number;
	slug: string;
	stage: string;
	title: string;
	summary: string;
	focus: string;
	chapterRoadmap: string[];
	lessonHighlights: string[];
	practiceFocus: string[];
	teacherNote: string;
};

export type LearningBand = {
	name: string;
	grades: string;
	ages: string;
	summary: string;
	description: string;
	accent: string;
	points: string[];
	ctaLabel: string;
	href: string;
	message: string;
};

export type ContentCard = {
	title: string;
	description: string;
};

export type StepCard = {
	title: string;
	description: string;
};

export type FaqItem = {
	question: string;
	answer: string;
};

export const gradeTracks: GradeTrack[] = [
	{
		grade: 1,
		slug: 'grade-1',
		stage: 'Discover',
		title: 'AI Around Me',
		summary: 'A playful introduction to smart machines, voice assistants, and pattern spotting.',
		focus: 'Observation, curiosity, and safe screen habits.',
		chapterRoadmap: ['What is AI?', 'Smart helpers at home', 'Patterns and predictions', 'Kind and safe technology'],
		lessonHighlights: ['Talk to a helper', 'Find the pattern', 'Machines that learn', 'AI in everyday life'],
		practiceFocus: ['Picture matching', 'Spot the smart tool', 'Yes or no recall cards'],
		teacherNote: 'Use storytelling, drawing, and pair discussion instead of text-heavy tasks.',
	},
	{
		grade: 2,
		slug: 'grade-2',
		stage: 'Discover',
		title: 'Patterns and Smart Helpers',
		summary: 'Build confidence with sorting, grouping, and simple smart-tool examples.',
		focus: 'Pattern literacy and classroom-friendly examples.',
		chapterRoadmap: ['Sorting and grouping', 'Machines that answer', 'Images and sounds', 'Using AI responsibly'],
		lessonHighlights: ['Sort it fast', 'Question and answer', 'Smart picture tools', 'Classroom tech manners'],
		practiceFocus: ['Sort and choose', 'Voice helper recall', 'Safety checklist'],
		teacherNote: 'Keep each activity short and tactile, with board work and oral responses.',
	},
	{
		grade: 3,
		slug: 'grade-3',
		stage: 'Build',
		title: 'Creative AI Basics',
		summary: 'Students start using simple prompts, image ideas, and structured thinking.',
		focus: 'Creative prompting with clear guardrails.',
		chapterRoadmap: ['What prompts do', 'AI for stories', 'AI for pictures', 'Checking good output'],
		lessonHighlights: ['Prompt and result', 'Write a tiny story', 'Describe an image idea', 'Better vs weaker answers'],
		practiceFocus: ['Prompt match-ups', 'Story sequencing', 'Output check cards'],
		teacherNote: 'Model strong prompts aloud and keep examples age-appropriate.',
	},
	{
		grade: 4,
		slug: 'grade-4',
		stage: 'Build',
		title: 'Pictures, Voice, and Imagination',
		summary: 'Explore how AI helps with images, speech, and classroom creativity.',
		focus: 'Creative confidence and responsible use.',
		chapterRoadmap: ['AI that listens', 'AI that sees', 'Creative classroom uses', 'How to check results'],
		lessonHighlights: ['Voice and text', 'What an image tool can do', 'Creative task planning', 'Check before you trust'],
		practiceFocus: ['Image idea prompts', 'Quick recall grids', 'Responsible-use check'],
		teacherNote: 'Blend spoken responses, worksheets, and simple digital demonstrations.',
	},
	{
		grade: 5,
		slug: 'grade-5',
		stage: 'Explore',
		title: 'Digital Thinking and Friendly Bots',
		summary: 'A bridge into structured AI thinking, classroom bots, and beginner research skills.',
		focus: 'Logic, questions, and short guided exploration.',
		chapterRoadmap: ['How chatbots work', 'Data and choices', 'Asking better questions', 'AI for school subjects'],
		lessonHighlights: ['Bot conversations', 'Data in daily life', 'Question improvement', 'Subject support examples'],
		practiceFocus: ['Bot response review', 'Question upgrade drills', 'Subject-based MCQs'],
		teacherNote: 'Introduce the idea of evidence and cross-checking answers.',
	},
	{
		grade: 6,
		slug: 'grade-6',
		stage: 'Explore',
		title: 'Data, Decisions, and Chatbots',
		summary: 'Students learn how data shapes AI decisions and where chatbots help or fail.',
		focus: 'Decision-making, bias awareness, and structured prompts.',
		chapterRoadmap: ['Data and decisions', 'Chatbot strengths', 'Chatbot limits', 'Study support with AI'],
		lessonHighlights: ['Data examples', 'Prompt scaffolds', 'Answer validation', 'Homework help habits'],
		practiceFocus: ['Chapter drills', 'Prompt improvement', 'True/false review'],
		teacherNote: 'Use real school examples such as timetables, transport, and attendance.',
	},
	{
		grade: 7,
		slug: 'grade-7',
		stage: 'Explore',
		title: 'Prompting, Research, and Logic',
		summary: 'Move from curiosity to purposeful prompting, research support, and reasoning.',
		focus: 'Prompt quality, logical steps, and safe research.',
		chapterRoadmap: ['Prompt structure', 'Research with AI', 'Fact-checking', 'Ethics for students'],
		lessonHighlights: ['Prompt templates', 'Research notes', 'Good source habits', 'Bias and fairness basics'],
		practiceFocus: ['Prompt rewrite drills', 'Fact-check checklist', 'Short-answer review'],
		teacherNote: 'Give students side-by-side examples of weak and strong prompts.',
	},
	{
		grade: 8,
		slug: 'grade-8',
		stage: 'Advance',
		title: 'CBSE AI Foundations',
		summary: 'Start formal AI learning with structured concepts, applications, and ethics.',
		focus: 'Foundation concepts aligned to school expectations.',
		chapterRoadmap: ['AI applications', 'Data and patterns', 'Responsible AI', 'AI across subjects'],
		lessonHighlights: ['Where AI is used', 'How data helps learning', 'Ethics in classwork', 'Subject integration'],
		practiceFocus: ['Concept MCQs', 'Case-based recall', 'Ethics questions'],
		teacherNote: 'Anchor each concept with a school or community use case.',
	},
	{
		grade: 9,
		slug: 'grade-9',
		stage: 'Advance',
		title: 'Responsible AI and Data',
		summary: 'Build exam-facing AI understanding with data literacy, bias awareness, and applied use.',
		focus: 'Core AI thinking with strong responsible-use habits.',
		chapterRoadmap: ['AI vs automation', 'Data quality', 'Bias and fairness', 'AI for projects'],
		lessonHighlights: ['Automation examples', 'Clean vs noisy data', 'Bias in outputs', 'Mini project planning'],
		practiceFocus: ['Scenario MCQs', 'Data quality questions', 'Revision sheets'],
		teacherNote: 'Turn each topic into compare-and-contrast classroom discussion prompts.',
	},
	{
		grade: 10,
		slug: 'grade-10',
		stage: 'Excel',
		title: 'Exam-ready AI Practice',
		summary: 'A static revision hub for Class 10 students preparing for CBSE-style AI questions.',
		focus: 'Concept recall, chapter summaries, and exam confidence.',
		chapterRoadmap: ['AI project cycle', 'Data and modeling', 'Applications of AI', 'Responsible AI revision'],
		lessonHighlights: ['Revision notes', 'One-page chapter recaps', 'Exam keyword focus', 'Expected question patterns'],
		practiceFocus: ['MCQ banks', 'Flash revision cards', 'Answer-key guided review'],
		teacherNote: 'Use the recap cards for weekly revision and quick board practice.',
	},
	{
		grade: 11,
		slug: 'grade-11',
		stage: 'Excel',
		title: 'AI Tools for Academics',
		summary: 'Help senior students use AI responsibly for research, writing, presentations, and project work.',
		focus: 'Academic productivity with strong source validation.',
		chapterRoadmap: ['Research workflows', 'Writing support', 'Presentation support', 'Ethical academic use'],
		lessonHighlights: ['Research planning', 'Draft improvement', 'Slide structuring', 'Citation and checks'],
		practiceFocus: ['Workflow checklists', 'Academic integrity prompts', 'Short case review'],
		teacherNote: 'Keep the emphasis on guided use, not shortcut culture.',
	},
	{
		grade: 12,
		slug: 'grade-12',
		stage: 'Launch',
		title: 'Applied AI and Portfolio Projects',
		summary: 'A practical static track for senior students building portfolio-ready AI work and study habits.',
		focus: 'Portfolio thinking, communication, and practical application.',
		chapterRoadmap: ['AI for capstone ideas', 'Problem framing', 'Project communication', 'Career-ready AI habits'],
		lessonHighlights: ['Project framing', 'AI-assisted planning', 'Portfolio writing', 'Future-ready workflows'],
		practiceFocus: ['Reflection prompts', 'Project planning sheets', 'Portfolio checklist'],
		teacherNote: 'Position the content as a bridge between school and higher-study expectations.',
	},
];

export const trustMetrics = [
	{ value: '12', label: 'Grades mapped' },
	{ value: '4', label: 'Static learning zones' },
	{ value: '1', label: 'WhatsApp help line' },
	{ value: '100%', label: 'Static and crawlable pages' },
];

export const learningBands: LearningBand[] = [
	{
		name: 'AI Explorers',
		grades: 'Grades 1-4',
		ages: 'Ages 6-10',
		summary: 'Playful AI discovery for young learners.',
		description: 'A gentle introduction to smart tools through stories, games, curiosity, and classroom-safe digital habits.',
		accent: '#4cc27f',
		points: ['What AI is in daily life', 'Story-led activities', 'Simple smart tools', 'Foundational problem solving'],
		ctaLabel: 'Browse Grades 1-4',
		href: '/learn-by-grade/grade-1',
		message: 'Hi AI For Kidds, please guide me through the AI Explorers learning path for Grades 1 to 4.',
	},
	{
		name: 'AI Creators',
		grades: 'Grades 5-7',
		ages: 'Ages 10-13',
		summary: 'Creative tools, prompts, and logic building.',
		description: 'Students move from curiosity to making, with simple prompting, research habits, ethics, and creative projects.',
		accent: '#34b6d7',
		points: ['Prompting basics', 'AI in school subjects', 'Creative tool usage', 'Early ethics and checking'],
		ctaLabel: 'Browse Grades 5-7',
		href: '/learn-by-grade/grade-5',
		message: 'Hi AI For Kidds, I want help with the AI Creators path for Grades 5 to 7.',
	},
	{
		name: 'AI Innovators',
		grades: 'Grades 8-10',
		ages: 'Ages 13-16',
		summary: 'Exam-ready AI learning with real concepts.',
		description: 'A structured path for responsible AI, research, revision support, and stronger concept confidence for school expectations.',
		accent: '#7f74ff',
		points: ['CBSE-facing concepts', 'Revision-friendly practice', 'Research and fact-checking', 'Applied classroom cases'],
		ctaLabel: 'Browse Grades 8-10',
		href: '/learn-by-grade/grade-8',
		message: 'Hi AI For Kidds, help me find the AI Innovators path for Grades 8 to 10.',
	},
	{
		name: 'AI Leaders',
		grades: 'Grades 11-12',
		ages: 'Ages 16+',
		summary: 'Applied AI, productivity, and portfolio thinking.',
		description: 'Senior learners explore research workflows, presentations, ethical use, and future-ready project framing.',
		accent: '#f08f6d',
		points: ['AI for academics', 'Portfolio-ready projects', 'Career-facing habits', 'Responsible productivity'],
		ctaLabel: 'Browse Grades 11-12',
		href: '/learn-by-grade/grade-11',
		message: 'Hi AI For Kidds, I want help with the AI Leaders path for Grades 11 to 12.',
	},
];

export const homeBenefits: ContentCard[] = [
	{
		title: 'Child-friendly learning design',
		description: 'Content is organized by level and age so families can spot the right starting point quickly.',
	},
	{
		title: 'Made for mobile-first access',
		description: 'The experience stays clear and readable on the phones most students and parents already use.',
	},
	{
		title: 'Static, fast, and trustworthy',
		description: 'No login walls, dashboards, or form friction. Just lightweight pages and direct WhatsApp support.',
	},
	{
		title: 'Creative and academic balance',
		description: 'Students move from discovery to projects, revision, research support, and future-facing AI skills.',
	},
	{
		title: 'Teacher-friendly structure',
		description: 'Lesson ideas, worksheet support, and classroom language mirror the student-facing site structure.',
	},
	{
		title: 'Responsible AI emphasis',
		description: 'Every stage reinforces checking, safe use, and thoughtful learning habits rather than shortcut culture.',
	},
];

export const teachingSteps: StepCard[] = [
	{
		title: 'Discover',
		description: 'Students begin with clear examples, simple explanations, and age-appropriate AI use cases.',
	},
	{
		title: 'Practice',
		description: 'Static revision packs and short activities help build recall without needing a test engine.',
	},
	{
		title: 'Apply',
		description: 'Projects and classroom tasks turn AI concepts into something students can explain and share.',
	},
	{
		title: 'Reflect',
		description: 'Each stage encourages checking answers, thinking critically, and using AI responsibly.',
	},
];

export const siteFaqs: FaqItem[] = [
	{
		question: 'How do I know which page to start with?',
		answer: 'Start with the grade page that matches your class. If you are unsure, WhatsApp is the fastest way to get a recommendation.',
	},
	{
		question: 'Is the website fully static?',
		answer: 'Yes. This version avoids accounts, dashboards, and form submissions so it stays lightweight, crawlable, and easy to use on mobile.',
	},
	{
		question: 'Can teachers use the same resources in class?',
		answer: 'Yes. The same grade-first structure is designed to work for self-study, parent guidance, and teacher planning.',
	},
	{
		question: 'How do I ask for notes or worksheets?',
		answer: 'Use the WhatsApp links on any page. Share the grade and topic, and the team can point you to the right static resource.',
	},
];

export const contactSteps: StepCard[] = [
	{
		title: 'Share your grade or need',
		description: 'Tell us whether you are a student, parent, teacher, or school and mention the grade or topic.',
	},
	{
		title: 'Get the right recommendation',
		description: 'We guide you to the best grade page, practice set, project card, or teacher resource without sending you through a form.',
	},
	{
		title: 'Continue on the right page',
		description: 'Once you know the correct starting point, the rest of the website is static and easy to browse at your own pace.',
	},
];

export const featuredQuote = {
	text:
		'The new structure makes the website feel calmer, clearer, and more premium. Parents can understand the journey quickly, and students can start without confusion.',
	name: 'Redesign direction',
	role: 'Template-aligned learning experience',
};

export const practiceCollections = [
	{
		title: 'Foundation Recall Packs',
		grades: 'Grades 1-4',
		description: 'Picture-led prompts, quick recall cards, and beginner AI vocabulary sheets.',
		message: 'Hi AI For Kidds, I want the Foundation Recall practice pack.',
	},
	{
		title: 'Middle School Chapter Drills',
		grades: 'Grades 5-8',
		description: 'Short MCQ sets and answer keys focused on prompts, data, logic, and responsible use.',
		message: 'Hi AI For Kidds, I want the Middle School chapter drills.',
	},
	{
		title: 'CBSE Revision Sets',
		grades: 'Grades 9-10',
		description: 'Static revision pages with chapter summaries, objective questions, and answer walkthroughs.',
		message: 'Hi AI For Kidds, I want the CBSE revision sets for AI.',
	},
	{
		title: 'Senior AI Workflows',
		grades: 'Grades 11-12',
		description: 'Study support, research prompts, and applied AI practice for presentations and portfolios.',
		message: 'Hi AI For Kidds, I want the senior AI workflow practice set.',
	},
];

export const projects = [
	{
		title: 'My Smart Classroom Poster',
		level: 'Beginner',
		duration: '35 min',
		audience: 'Grades 1-3',
		description: 'Create a poster showing where AI helps in school life and explain it in simple language.',
	},
	{
		title: 'Prompt-to-Picture Storyboard',
		level: 'Beginner',
		duration: '45 min',
		audience: 'Grades 4-6',
		description: 'Write image prompts and turn them into a simple four-panel visual story.',
	},
	{
		title: 'Chatbot Help Desk Map',
		level: 'Intermediate',
		duration: '55 min',
		audience: 'Grades 6-8',
		description: 'Design a static flow for how a school chatbot could answer common student questions.',
	},
	{
		title: 'AI Ethics Case Study',
		level: 'Intermediate',
		duration: '40 min',
		audience: 'Grades 8-10',
		description: 'Review a classroom AI scenario and explain what is fair, safe, or risky.',
	},
	{
		title: 'Research Workflow Planner',
		level: 'Advanced',
		duration: '60 min',
		audience: 'Grades 11-12',
		description: 'Build a research workflow that uses AI for planning but preserves academic integrity.',
	},
	{
		title: 'Portfolio Project Sheet',
		level: 'Advanced',
		duration: '75 min',
		audience: 'Grades 11-12',
		description: 'Turn one AI idea into a presentable project concept with goals, tools, and outputs.',
	},
];

export const teacherResources = [
	{
		title: 'Lesson plan kits',
		description: 'Static weekly lesson outlines by grade with outcomes, warmups, and discussion prompts.',
	},
	{
		title: 'Worksheet bundles',
		description: 'Printable recap sheets, concept checks, and classroom reflection prompts.',
	},
	{
		title: 'PPT-ready chapter guides',
		description: 'Slide-friendly summaries teachers can adapt for school periods and revision sessions.',
	},
	{
		title: 'School rollout support',
		description: 'A static overview of how to introduce AI learning gradually across grades and departments.',
	},
];

export function whatsappLink(message: string) {
	return `https://wa.me/${site.whatsAppNumber}?text=${encodeURIComponent(message)}`;
}
