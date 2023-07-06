function CSSSpec({
  data,
}: {
  data: Array<{
    name: string;
    description: string;
  }>;
}) {
  return (
    <>
      <div className="docs__table">
        <table>
          <thead>
            <tr>
              <th>Class Name</th>
              <th>Type</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {data.map(({ name, description }) => (
              <tr key={name}>
                <td>{name}</td>
                <td>{name.includes("--") ? "variant" : ""}</td>
                <td>{description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default CSSSpec;
