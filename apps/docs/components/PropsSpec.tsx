function PropsSpec({
  data,
}: {
  data: Array<{
    name: string;
    type: string;
    defaultValue: string;
    description: string;
  }>;
}) {
  return (
    <div className="docs__table">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ name, type, description, defaultValue }) => (
            <tr key={name}>
              <td>{name}</td>
              <td>{Array.isArray(type) ? type.join(" | ") : type}</td>
              <td>{defaultValue}</td>
              <td>{description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PropsSpec;
