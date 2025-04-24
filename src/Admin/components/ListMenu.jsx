export default function ListMenu({ id, label, icon, isActive, to }) {
  return (
    <div
      id={id}
      to={to}
      className={`hover:text-hijau flex ${
        isActive ? "bg-yellow-400 text-white" : ""
      }
      cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-yellow-200 hover:font-extrabold`}
    >
      <span className="mr-4 text-xl"> {icon} </span>
      {label}
    </div>
  );
}
