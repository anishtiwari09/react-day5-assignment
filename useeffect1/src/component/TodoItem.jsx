export default function TodoItem({
  title,
  status,
  id,
  handleToggle,
  handleDelete
}) {
  return (
    <li>
      {title} - {status ? "Done" : "Pending"}
    </li>
  );
}
