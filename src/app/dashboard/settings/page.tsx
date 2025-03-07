import Link from "next/link"

const Settings = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-200 p-10">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-2xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Settings</h1>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl">Customize Your account settings,Profile, and Notifcations here. Choose an option from the sidebar to begin</p>
        <div className="flex space-x-12">
          <div className="w-1/4 bg-white rounded-2xl p-6 space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Quick Links</h2>

            <ul className="space-y-4">
              <li>
            <Link className="flex items-center text-lg text-gray-800 hover:text-indigo-600  transition-colors py-2 px-4 rounded-md hover:bg-indigo-50" href="/dashboard/settings/account"><span>Account</span>
            </Link>
              </li>
              <li>
            <Link className="flex items-center text-lg text-gray-800 hover:text-yellow-600  transition-colors py-2 px-4 rounded-md hover:bg-yellow-50" href="/dashboard/settings/notifications"><span>Notifications</span>
            </Link>
              </li>
              <li>
            <Link className="flex items-center text-lg text-gray-800 hover:text-green-400  transition-colors py-2 px-4 rounded-md hover:bg-green-100" href="/dashboard/settings/profile"><span>Profile</span>
          </Link>
              </li>
            </ul>
          </div>
          <div className="flex-1 bg-white shadow-md rounded-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Select a settings</h2><p className="text-lg text-gray-600 maz-w-3xl">Choose an option from the sidebar to manage your account, or profile srttings</p></div>
        </div>
      </div>
    </div>
  )
}

export default Settings