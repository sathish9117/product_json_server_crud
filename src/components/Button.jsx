function Button({ className, onClick, type, title }) {
  return (
    <>
      <button
        onClick={onClick}
        type={type}
        className={`capitalize px-3 py-2 rounded-md bg-primary text-white shadow-md hover:bg-primary hover:text-white hover:shadow-md ${className}`}
      >
        {title}
      </button>
    </>
  );
}

export default Button;
