1. How long did you spend on the coding test?

I approached the coding test in three main phases. First, I started with the high-level design, mapping out the workflow and determining the core features that should be included. I chose React as the framework early. Setting up the foundational structure and overall project organization took part of the initial time.

Next, I moved into the main coding phase, which involved creating the individual components, implementing the task manager’s core features, and adding the interactivity and state management. This coding phase was the most time-intensive, taking around two days to complete and refine.

overall coding test took 2 days and remaining time I have given to deployment and testing of project.



2. What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it ?

In the task manager, I implemented dynamic task filtering to make it easier for users to focus on specific tasks. By selecting a priority or completion status, users can view only the relevant tasks in the task list. This is done using JavaScript array filtering in React, which efficiently renders the filtered tasks without reloading the page.

code snippet: 
const Tasklist = ({
  status,
  todo,
  setPopup,
  handleDelete,
  handleCompleted,
  handleEdit
}) => {
  const renderSwitch = (status) => {
    switch (status) {
      case "All":
        return <List todo={todo} handleDelete={handleDelete} handleCompleted={handleCompleted} handleEdit={handleEdit} />;
      case "High":
        return <List todo={todo.filter((ele) => ele.priority === "High")} handleDelete={handleDelete} handleCompleted={handleCompleted} handleEdit={handleEdit} />;
      case "Medium":
        return <List todo={todo.filter((ele) => ele.priority === "Medium")} handleDelete={handleDelete} handleCompleted={handleCompleted} handleEdit={handleEdit} />;
      case "Low":
        return <List todo={todo.filter((ele) => ele.priority === "Low")} handleDelete={handleDelete} handleCompleted={handleCompleted} handleEdit={handleEdit} />;
      case "Complete":
        return <List todo={todo.filter((ele) => ele.completed)} handleDelete={handleDelete} handleCompleted={handleCompleted} handleEdit={handleEdit} />;
      case "Uncomplete":
        return <List todo={todo.filter((ele) => !ele.completed)} handleDelete={handleDelete} handleCompleted={handleCompleted} handleEdit={handleEdit} />;
      default:
        return <List todo={todo} handleDelete={handleDelete} handleCompleted={handleCompleted} handleEdit={handleEdit} />;
    }
  };




3. How would you track down a performance issue in production? Have you ever had to do this?

To track down a performance issue in production, I first try to reproduce the issue locally to understand what might be going wrong. In this Project, while deploying to Netlify, I encountered build failures that weren’t present in my local environment. To troubleshoot, I ran npm run build and served the build locally using serve -s build -l 4000. This allowed me to identify that Netlify was treating certain unused variables in my code as errors, which caused the build to fail.

After reviewing my code and cleaning up the unused imports and variables, I was able to successfully build and deploy the project on both Netlify and Vercel.

I’ve faced similar situations in my internship and various college projects, where maintaining deployment stability was crucial. In those cases, I learned the importance of testing thoroughly in production-like environments and having a structured debugging approach, starting from local replication to code review.


4. If you had more time, what additional features or improvements would you consider adding to the task management application?

If I had more time, I would focus on adding the following features and improvements to enhance the usability and functionality of the task management application:

Recurring Tasks:
 I would implement a feature to support recurring tasks, which would allow users to set tasks on a weekly, monthly, or custom schedule. This would be useful for tasks that need consistent reminders or actions.

Due Date Reminders and Notifications: 
I would add reminder notifications for tasks approaching their due dates. This could involve setting up push notifications or email reminders, ensuring users don’t miss high-priority or urgent tasks.

Subtasks and Task Dependencies: 
Introducing subtasks would allow users to break down larger tasks into smaller, manageable pieces, and dependencies would help in sequencing tasks logically.

Real-Time Collaboration:
 In a more advanced version, I’d introduce real-time collaboration features, enabling multiple users to interact with tasks or projects, which would be helpful in a team or organizational setting.

Analytics Dashboard: 
Lastly, an analytics dashboard could provide insights into completed tasks, productivity trends, and prioritization habits, helping users make more informed decisions about their time management.




