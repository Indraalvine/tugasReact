export default function Cards({ image, title, brand, description }) {
  return (
    <div className="card w-80 bg-base-100 shadow-xl h-50 pt-5">
      <div className="w-full h-48 flex justify-center">
        <img className="rounded-md h-52 object-cover" src={image} alt={title} />
      </div>
      <div className="card-body ">
        <h1 className="text-lg font-semibold">{brand}</h1>
        <p className="max-w-2xl">{description}</p>
        <div className="card-actions justify-end">
          <button className="bg-blue-500 rounded-lg border border-blue-500 hover:bg-white p-3 w-20 mt-2">
            Info
          </button>
        </div>
      </div>
    </div>
  );
}
