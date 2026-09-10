export default function LucLink({ to, navigate, className, children, ...rest }) {
  return (
    <a
      href={to}
      className={className}
      onClick={(event) => {
        if (
          event.metaKey ||
          event.ctrlKey ||
          event.shiftKey ||
          event.altKey ||
          event.button !== 0
        ) {
          return;
        }
        navigate(to, event);
      }}
      {...rest}
    >
      {children}
    </a>
  );
}
