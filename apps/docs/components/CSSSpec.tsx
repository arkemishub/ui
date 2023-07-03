function CSSSpec({
  data,
}: {
  data: Array<{
    name: string;
    type: string;
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
            {data.map(({ name, type, description }) => (
              <tr key={name}>
                <td>{name}</td>
                <td>{type}</td>
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
