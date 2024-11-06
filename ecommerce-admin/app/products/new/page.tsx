export default function NewProduct() {
  return (
    <div className="">
      <h1>New Product</h1>
      <fieldset className="border">
        <legend>Product Name</legend>
        <input type="text" placeholder="Product Name" />
      </fieldset>
      <fieldset>
        <legend>Description</legend>
        <textarea
          placeholder="Description"
          className="h-[200px] resize-none"
        ></textarea>
      </fieldset>
      <fieldset>
        <legend>Price</legend>
        <input type="number" min={0} placeholder="Price in $USD" />
      </fieldset>
      <button className="btn-primary">Save Changes</button>
    </div>
  );
}
