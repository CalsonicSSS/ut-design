import { redirect } from 'next/navigation';

export default function DocPage() {
  // Redirect to the Getting Started page by default
  redirect('/doc/getting-started');
}
