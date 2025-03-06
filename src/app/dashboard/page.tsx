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
          <span className="text-blue-500 text-2xl">🩷</span></div>
          <p className="text-gray-700 mt-2">view organize, and manage your daily tasks</p>
          </Link>
      </div>
    </div>
    </div>
  )
}

export default Dashboard