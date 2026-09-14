import type { AboutItem, CertItem, ProjectItem, Tech, WorkItem } from '$lib/types';
import type { PageLoad } from './$types';

type PageData = {
	about: AboutItem[];
	certs: CertItem[];
	projects: ProjectItem[];
	tech: Tech;
	work: WorkItem[];
};

export const load: PageLoad = async ({ fetch }) => {
	const response = await fetch('/data/content.json');

	if (!response.ok) {
		throw new Error(`Failed to load data.json: ${response.status}`);
	}

	const data: PageData = await response.json();

	return { data };
};
