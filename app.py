from flask import Flask, render_template, request, redirect, url_for
from datetime import datetime  # Date kosam import

app = Flask(__name__)

# List to store tasks
tasks = []

@app.route('/')
def index():
    """
    Render the main page with the list of tasks.
    """
    return render_template('index.html', tasks=tasks)

@app.route('/add', methods=['POST'])
def add_task():
    """
    Add a new task to the task list.
    The task includes name, category, priority, date, and a default status of 'Pending'.
    """
    task_name = request.form['task']
    category = request.form['category']
    priority = request.form['priority']
    date = request.form['date']  # Form nunchi date accept cheyyadam
    
    # Adding new task with date as a dictionary
    task = {
        'name': task_name,
        'category': category,
        'priority': priority,
        'date': date,
        'status': 'Pending'
    }
    tasks.append(task)
    
    return redirect(url_for('index'))

@app.route('/update/<int:task_id>')
def update_task(task_id):
    """
    Update the status of a task to 'Completed' based on its task ID.
    """
    if 0 <= task_id < len(tasks):  # Check if task_id is valid
        tasks[task_id]['status'] = 'Completed'
    return redirect(url_for('index'))

@app.route('/delete/<int:task_id>')
def delete_task(task_id):
    """
    Delete a task from the list based on its task ID.
    """
    if 0 <= task_id < len(tasks):  # Check if task_id is valid
        tasks.pop(task_id)
    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True)
