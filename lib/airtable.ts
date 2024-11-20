export async function submitToAirtable(formData: {
  name: string;
  email: string;
  company: string;
  message: string;
}) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error('Failed to submit form');
  }

  return response.json();
}