// eslint-disable-next-line react/prop-types
export default function Button({ active, children }) {
  const backgroundColor = active ? "bg-gray-200 dark:bg-gray-900" : "";
  return (
    <button
      className={`
        py-2 w-full px-4 rounded-lg transition-colors
        ${backgroundColor}
        hover:bg-gray-200 dark:hover:bg-gray-900
        `}
    >
      {children}
    </button>
  );
}
