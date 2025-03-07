import Link from "next/link"

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-2xl shadow-lg space-y-8">
        <div className="flex flex-col">
          <h1 className="text-3xl font-extrabold text-gray-800 mb-4 sm:mb-0">Dashboard</h1>
          <p className="text-lg text-gray-600 mt-3">Welcome back! Here you can manage your tasks, View analytics , and make adjustments.</p>
        </div>

      {/* dashboard Grid */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* task CArd */}
        <Link className="bg-blue-100 hover:bg-blue-200 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-200 ease-in-out transform hover:scale-105" href="/dashboard/tasks">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-blue-800">Tasks</h2>
          <span className="text-blue-500 text-2xl">📜</span></div>
          <p className="text-gray-700 mt-2">view organize, and manage your daily tasks</p>
          </Link>

          {/* Analytics */}
          <Link className="bg-green-100 hover:bg-green-200 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-200 ease-in-out transform hover:scale-105" href="/dashboard/analytics">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-blue-800">Analytics</h2>
          <span className="text-blue-500 text-2xl">📊</span></div>
          <p className="text-gray-700 mt-2">Gain insights into your performance and trends</p>
          </Link>
          {/* settings */}

          <Link className="bg-purple-100 hover:bg-purple-200 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-200 ease-in-out transform hover:scale-105" href="/dashboard/settings">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-blue-800">Settings</h2>
          <span className="text-blue-500 text-2xl">🔩</span></div>
          <p className="text-gray-700 mt-2">Cutomize and tweak your dashboard settings</p>
          </Link>
          {/* users */}

          <Link className="bg-yellow-100 hover:bg-yellow-200 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-200 ease-in-out transform hover:scale-105" href="/dashboard/users">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-blue-800">Users</h2>
          <span className="text-blue-500 text-2xl">👤</span></div>
          <p className="text-gray-700 mt-2">View and manage your user base.</p>
          </Link>
      </div>
    </div>
    </div>
  )
}

export default Dashboard