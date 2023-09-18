const Form = () => {
  const handleSubmit = () => {};

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' name='nick' placeholder='Nick' />
        <input type='text' name='subMonths' placeholder='SubMonths' />
        <input type='text' name='avatar' placeholder='Avatar' />
        <input type='text' name='description' placeholder='Description' />

        <button>Save new Sub!</button>
      </form>
    </div>
  );
};

export default Form;
