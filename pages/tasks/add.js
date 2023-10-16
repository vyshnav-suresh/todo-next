import { useSession } from 'next-auth/react'; // Assuming you are using next-auth for authentication
import { useState } from 'react';
import { useRouter } from 'next/router';
import TaskForm from '../../../components/TaskForm';

function AddTask() {
  // Retrieve user session information
  const { data: session } = useSession();
  const router = useRouter();

  if (!session) {
    // If the user is not authenticated, you can redirect to the login page or handle it accordingly
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500">You are not authenticated. Please log in.</p>
          <Link href="/login">
            <a className="text-indigo-500 hover:underline">Login</a>
          </Link>
        </div>
      </div>
    );
  }

  const handleTaskSubmit = async (taskData) => {
    // Implement the logic to save the task in your database here
    // You can use API routes to handle the task creation

    // For example, you can use a fetch request to an API route like /api/tasks/create
    const response = await fetch('/api/tasks/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...taskData, userId: session.user.id }),
    });

    if (response.ok) {
      router.push('/tasks'); // Redirect to the tasks list after successful task creation
    } else {
      // Handle the case where the task creation failed
      console.error('Task creation failed.');
    }
  };

  return (
    <div>
      <header>
        <h1 className="text-3xl font-extrabold text-gray-900">Add a New Task</h1>
      </header>
      <main>
        <TaskForm onSubmit={handleTaskSubmit} />
      </main>
    </div>
  );
}

export default AddTask;
