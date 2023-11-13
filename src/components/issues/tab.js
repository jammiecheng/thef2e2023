export default function Tab({ position, state, setState, title }) {
  const clickHandler = () => {
    const newState = [0, 0, 0];
    newState[position] = 1;
    setState(newState);
  };
  return (
    <li
      onClick={clickHandler}
      className={
        "tab " +
        (state === 1
          ? "bg-[var(--color-primary-5)]"
          : "bg-[var(--color-primary-2)]")
      }
    >
      {title}
    </li>
  );
}
