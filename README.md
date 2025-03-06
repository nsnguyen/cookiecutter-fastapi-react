# Cookiecutter FastAPI-React Template

A cookiecutter template for creating a full-stack application with Python FastAPI backend and React frontend with TailwindCSS.

## Features

- **FastAPI Backend**: Modern Python web framework for building APIs
- **React Frontend**: With Tailwind CSS for styling
- **Routing**: Ready-to-use React Router setup
- **Docker Support**: Docker and Docker Compose configurations included
- **Poetry**: For Python dependency management
- **Development Tools**: Hot-reloading for both backend and frontend

## Usage

### Prerequisites

- [Cookiecutter](https://cookiecutter.readthedocs.io/en/stable/installation.html) (Python package)
- Python 3.9+
- Node.js and npm (for frontend development)
- Docker and Docker Compose (optional)

### Creating a New Project

```bash
# Install cookiecutter if you haven't already
pip install cookiecutter

# Generate a new project
cookiecutter gh:nsnguyen/cookiecutter-fastapi-react
```

### Template Development

If you want to modify this template or create your own based on it:

1. Clone the repository:

   ```bash
   git clone https://github.com/nsnguyen/cookiecutter-fastapi-react.git
   cd cookiecutter-fastapi-react
   ```

2. Make your desired changes to the files in the `{{cookiecutter.project_slug}}/` directory

3. Test your modified template by generating a project locally:

   ```bash
   # From the repository root directory
   cookiecutter .
   ```

4. Once satisfied, push to your own GitHub repository:

   ```bash
   git push origin main
   ```

5. Then use your modified template:
   ```bash
   cookiecutter gh:nsnguyen/cookiecutter-fastapi-react
   ```

Follow the prompts to configure your project:

- `project_name`: Name of your project
- `project_slug`: Directory name for your project (auto-generated from project name)
- `project_description`: Brief description of your project
- `author_name`: Your name
- `author_email`: Your email
- `version`: Initial version of your project
- `python_version`: Python version for backend development (3.9, 3.10, 3.11, 3.12)
- `use_docker`: Whether to include Docker configuration
- `frontend_port`: Port for the React frontend (default: 3000)
- `backend_port`: Port for the FastAPI backend (default: 8000)

### Project Structure

After generation, your project will have the following structure:

```
your-project-name/
├── backend/                # FastAPI application
│   ├── app/
│   │   ├── api/            # API endpoints
│   │   ├── core/           # Core utilities
│   │   ├── models/         # Data models
│   │   └── main.py         # Application entry point
│   ├── Dockerfile          # Backend Docker configuration
│   ├── pyproject.toml      # Poetry configuration
│   └── tests/              # Backend tests
├── frontend/               # React application
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/          # Page components
│   │   ├── services/       # API services
│   │   └── utils/          # Utility functions
│   ├── Dockerfile          # Frontend Docker configuration
│   └── package.json        # npm configuration
├── docker-compose.yml      # Docker Compose configuration
└── README.md               # Project README
```

### Running Your Project

#### With Docker

If you chose to include Docker, simply run:

```bash
cd your-project-name
docker-compose up
```

#### Without Docker

##### Backend

```bash
cd your-project-name/backend
poetry install
poetry run uvicorn app.main:app --reload
```

##### Frontend

```bash
cd your-project-name/frontend
npm install
npm start
```

## License

MIT
