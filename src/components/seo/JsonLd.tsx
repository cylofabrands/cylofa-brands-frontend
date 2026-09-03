/**
 * Renders one or more JSON-LD graphs into the document. Server component —
 * the script ships in the initial HTML so HTML-only crawlers see it.
 */
export default function JsonLd({
  data,
  id,
}: {
  data: object | object[];
  id?: string;
}) {
  const graphs = Array.isArray(data) ? data : [data];
  return (
    <>
      {graphs.map((graph, i) => (
        <script
          key={id ? `${id}-${i}` : i}
          type="application/ld+json"
          // Content is built from static, trusted config — no user input.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
        />
      ))}
    </>
  );
}
