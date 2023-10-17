import { useSession } from 'next-auth/react'; // Assuming you are using next-auth for authentication
import Link from 'next/link';
import TaskList from '../components/TaskList';
import Layout from '@/components/Layout';

function Dashboard() {
  // Retrieve user session information
  const { data: session } = useSession();

  if (!session) {
    // If the user is not authenticated, you can redirect to the login page or handle it accordingly
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500">You are not authenticated. Please log in.</p>
          <Link className="text-indigo-500 hover:underline" href="/login">
            Login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <header>
        
      </header>
      <main>
        {/* <TaskList /> */}
        <Layout>
        <h1 className="text-3xl font-extrabold text-gray-900">Welcome, {session.user.email}</h1>
        <Link className="text-indigo-500 hover:underline" href="/tasks/add">
          Add Task
        </Link>
        </Layout>
      </main>
    </div>
  );
}

export default Dashboard;
