const FeatureList = ({ features = [] }) => {
    const grouped = features.reduce((acc, item) => {
      const cat = item.category?.name || "General";
      acc[cat] = [...(acc[cat] || []), item];
      return acc;
    }, {});
  
    const getYouTubeEmbedUrl = (url) => {
      if (url.includes("youtu.be")) {
        const id = url.split("youtu.be/")[1];
        return `https://www.youtube.com/embed/${id}`;
      }
      if (url.includes("youtube.com/watch?v=")) {
        const id = new URL(url).searchParams.get("v");
        return `https://www.youtube.com/embed/${id}`;
      }
      return url;
    };
  
    return Object.entries(grouped).map(([category, items]) => (
      <div key={category} className="mt-4">
        <h4 className="font-semibold mb-2 text-purple-600 dark:text-purple-400">{category}</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map((item) => (
            <div
              key={item._id}
              className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow transition duration-300"
            >
              {item.mediaType === "video" ? (
                item.mediaUrl.includes("youtube.com") || item.mediaUrl.includes("youtu.be") ? (
                  <iframe
                    className="w-full h-40 rounded-t"
                    src={getYouTubeEmbedUrl(item.mediaUrl)}
                    title={item.name}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <video controls className="w-full h-40 object-cover rounded-t">
                    <source src={item.mediaUrl} />
                  </video>
                )
              ) : (
                <img
                  src={item.mediaUrl}
                  alt={item.name}
                  className="w-full h-40 object-cover"
                />
              )}
              <p className="text-xs text-center py-2 font-medium text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-900">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    ));
  };
  
  export default FeatureList;
  