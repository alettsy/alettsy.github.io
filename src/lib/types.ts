export type AboutItem = {
	type: string;
	content: string;
};

export type CertItem = {
	title: string;
	image: string;
};

export type ProjectItem = {
	title: string;
	description: string;
	link: string;
	tags: ProjectTag[];
};

export type ProjectTag = {
	name: string;
	color: string;
};

export type TechItem = string;

export type WorkItem = {
	title: string;
	company: string;
	country: string;
	when: string;
	points: string[];
};

export type Tech = {
	primary: TechItem[];
	other: TechItem[];
	tools: TechItem[];
};
