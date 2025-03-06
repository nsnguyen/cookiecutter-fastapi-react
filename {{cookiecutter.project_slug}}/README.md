# {{ cookiecutter.project_name }}

{{ cookiecutter.project_description }}

## Structure

- `backend/`: Python FastAPI application with Poetry
- `frontend/`: React application with TailwindCSS

## Getting Started

### Prerequisites

- {% if cookiecutter.use_docker == "yes" %}Docker and Docker Compose{% endif %}
- Node.js (for local frontend development)
- Python {{ cookiecutter.python_version }}+ (for local backend development)
- Poetry (for Python dependency management)

{% if cookiecutter.use_docker == "yes" %}
### Running with Docker

Start the entire application:

```bash
docker-compose up
```

Backend will be available at http://localhost:{{ cookiecutter.backend_port }}
Frontend will be available at http://localhost:{{ cookiecutter.frontend_port }}
{% endif %}

### Development

#### Backend

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   poetry install
   ```

3. Run the backend:
   ```bash
   poetry run uvicorn app.main:app --reload --port {{ cookiecutter.backend_port }}
   ```

#### Frontend

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the frontend:
   ```bash
   npm start
   ```

### API Documentation

FastAPI automatically generates OpenAPI documentation for your API.
When the backend is running, you can access the interactive API documentation at:

- Swagger UI: http://localhost:{{ cookiecutter.backend_port }}/docs
- ReDoc: http://localhost:{{ cookiecutter.backend_port }}/redoc

## Pages

- Home: http://localhost:{{ cookiecutter.frontend_port }}/
- Test Data Form: http://localhost:{{ cookiecutter.frontend_port }}/test_endpoint

## Author

{{ cookiecutter.author_name }} <{{ cookiecutter.author_email }}>