import useForm from '../lib/useForm';

export default function CreateProduct() {
  const { inputs, handleChange } = useForm({
    name: 'Nice shoes',
    price: '34234',
    description: 'Best shoes',
  });

  return (
    <form>
      <label htmlFor="name">
        Name
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          value={inputs.name}
          onChange={handleChange}
        />
      </label>
      {/* <label htmlFor="price">
        price
        <input
          type="text"
          id="price"
          name="price"
          placeholder="price"
          value={name}
          onChange={newName}
        />
      </label> */}
    </form>
  );
}
