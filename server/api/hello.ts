export default defineEventHandler(async () => {
  const [row] = await sql`SELECT version()`;
  return { 
    version: row?.version as string,
    hello: 'world'
  };
});