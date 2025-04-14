const ModelCard = ({ model,onClick }) => (
    <div className="p-4 border rounded shadow hover:shadow-lg transition-shadow duration-300"       onClick={() => onClick(model._id)}
>
      <img
        src={model.image || "/placeholder.png"}
        alt={model.name}
        className="mb-2 w-full h-48 object-cover rounded"
      />
      <h2 className="text-xl font-semibold">{model.name}</h2>
      <p className="text-gray-600">{model.description}</p>
    </div>
  );
  
  export default ModelCard;
  