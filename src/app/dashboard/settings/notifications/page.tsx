

const Notifications = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-200 p-10">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-2xl p-8"> 
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Notifications</h1>

        {/* Notifications settings sections */}
        <div className="flex space-x-12 mb-8"> 
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Notification Preferences</h2>

          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium text-gray-600">Email Notifcations</label>

              <select className="mt-1 block w-full py-2 px-4 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                <option>Enable</option>
                <option>Disable</option>
              </select>
            </div>

            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium text-gray-600">SMS Notifcations</label>

              <select className="mt-1 block w-full py-2 px-4 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                <option>Enable</option>
                <option>Disable</option>
              </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600">Push Notifications</label>
                <select className="mt-1 block w-full py-2 px-4 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                  <option>Enable</option>
                  <option>Disable</option>
                </select>
              </div>
          </div>
        </div>
        {/* Action settings */}
        <div className="flex justify-end space-x-4">
          <button className="px-6 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">Cancel</button>
          <button className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">Save Changes</button>

        </div>
      </div>
    </div>
  )
}

export default Notifications