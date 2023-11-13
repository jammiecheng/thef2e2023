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
        "px-[var(--sp-1)] py-[var(--sp-3)] xl:p-[var(--sp-3)] rounded-t-[var(--sp-3)] text-center w-full subtitle cursor-pointer " +
        (state === 1
          ? "bg-[var(--color-primary-5)]"
          : "bg-[var(--color-primary-2)]")
      }
    >
      {title}
    </li>
  );
}
