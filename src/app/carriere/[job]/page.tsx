import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getJob, jobs } from '@/data/jobs';
import JobContent from '@/components/job-content';

interface JobPageProps {
  params: Promise<{ job: string }>;
}

export function generateStaticParams() {
  return jobs.map((job) => ({ job: job.slug }));
}

export async function generateMetadata({ params }: JobPageProps): Promise<Metadata> {
  const { job: slug } = await params;
  const job = getJob(slug);
  if (!job) return {};
  return {
    title: `${job.title} · Fiche de poste`,
    description: `Rejoignez Etayons à Antananarivo comme ${job.title}. ${job.tags.join(' · ')}. CDI, statut cadre, projets européens.`,
    alternates: { canonical: `https://etayons.fr/carriere/${job.slug}` },
  };
}

export default async function JobPage({ params }: JobPageProps) {
  const { job: slug } = await params;
  const job = getJob(slug);
  if (!job) notFound();

  return <JobContent job={job} />;
}
