export const RsvpPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-orange-100">
      <h1 className="text-4xl font-bold mb-6">RSVP</h1>
      <p className="text-lg mb-4">Please let us know if you can make it!</p>
      <form className="w-96 max-w-full bg-gray-100 p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Name
          </label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Event
          </label>
          <div className="flex flex-col gap-2">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                value="wedding"
                className="form-checkbox text-blue-500"
              />
              <span className="ml-2 text-gray-700">Wedding</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                value="reception"
                className="form-checkbox text-blue-500"
              />
              <span className="ml-2 text-gray-700">Reception</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                value="both"
                className="form-checkbox text-blue-500"
              />
              <span className="ml-2 text-gray-700">Gulabi night</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                value="both"
                className="form-checkbox text-blue-500"
              />
              <span className="ml-2 text-gray-700">Cockata</span>
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
