FROM python:{{ cookiecutter.python_version }}-slim

WORKDIR /app

# Install Poetry
RUN pip install poetry

# Copy poetry configuration files
COPY pyproject.toml poetry.lock* ./

# Configure poetry to not use a virtual environment
RUN poetry config virtualenvs.create false

# Install dependencies
RUN poetry install --no-interaction --no-ansi --no-root

# Copy application code
COPY . .

# Install the application
RUN poetry install --no-interaction --no-ansi --no-root

# Command to run the application
CMD ["poetry", "run", "uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "{{ cookiecutter.backend_port }}"]
