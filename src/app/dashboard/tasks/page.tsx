
const Tasks = () => {
  const tasks =[
    {
      id: 1,
      title: 'Finish project report',
      description: 'Complete the project report and submit it to the manager',
      status:"In Progress",
      dueDate: "2021-09-10",
      priority: "High"
    },
    {
      id: 2,
      title: 'Update website content',
      description: 'Revise the homepage text to refect recent changes.',
      status:"Pending",
      dueDate: "2021-09-12",
      priority: "Medium"
    },
    {
      id: 3,
      title: 'Team meeting',
      description: 'Attend the weekly team meeting and provide updates on the project',
      status:"Completed",
      dueDate: "2021-09-15",
    },
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to to-blue-50 p-8">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-2xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Tasks</h1>

        {/* Task List sections */}
        <section className="space-y-6">
          {tasks.map((task) => (
            <div key={task.id} className="flex items-center justify-between bg-white rounded-lg shadow-md p-6 border-l-4"
            style={{
              borderColor:task.status === 'Completed' ? 'green' : task.status === 'In Progress' ? 'blue' : 'yellow',
            }}>
              <div className="flex flex-col">
                <h2 className="text-xl font-semibold text-gray-800">{task.title}</h2>
                <p className="text-sm text-gray-600 mt-2">Description : {task.description}</p>
                <p className="text-sm text-gray-600 mt-2">DueDate : {task.dueDate}</p>
              </div>

              <section className="flex space-x-4">
                <span className={`px-4 py-3 text-center text-sm rounded-full ${
                  task.status==="Completed"
                  ?"bg-green-100 text-green-600"
                  : task.status ==="In Progress" 
                  ? "bg-yellow-100 text-yellow-600" 
                  :"bg-red-100 text-red-600"}`}
                  >{task.status}</span>

                  {/* Buttons */}
                  <button className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">Edit</button>

                  {task.status !== 'Completed' && (
                    <button className="px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors">Mark as Completed</button>
                  )}
                  <button className="px-4 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">Delete</button>
              </section>
            </div>
          ))}
        </section>
      </div>
    </div>
  )
}

export default Tasks