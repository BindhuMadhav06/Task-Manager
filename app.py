from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# List to store tasks
tasks = []

@app.route('/')
def index():
    return render_template('index.html', tasks=tasks)

@app.route('/add', methods=['POST'])
def add_task():
    task_name = request.form['task']
    category = request.form['category']
    priority = request.form['priority']
    date = request.form['date']

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
    if 0 <= task_id < len(tasks):
        tasks[task_id]['status'] = 'Completed'
    return redirect(url_for('index'))

@app.route('/delete/<int:task_id>')
def delete_task(task_id):
    if 0 <= task_id < len(tasks):
        tasks.pop(task_id)
    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True)
