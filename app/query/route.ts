import { sql } from '@vercel/postgres';

export async function GET() {
  const { rows } = await sql`
SELECT DISTINCT ON (customers.id) invoices.id, invoices.amount, invoices.date, customers.name
FROM invoices
JOIN customers ON invoices.customer_id = customers.id
ORDER BY customers.id, invoices.date DESC
LIMIT 5

  `;

  return Response.json(rows);
}
