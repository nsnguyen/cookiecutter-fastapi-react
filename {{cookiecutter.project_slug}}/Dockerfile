# Stage 1: Build the frontend using Node.js
FROM node:18-alpine AS frontend-builder

# Set the working directory inside the container for frontend files
WORKDIR /app/frontend

# Copy package.json and package-lock.json (if present) to install dependencies
COPY frontend/package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy the entire frontend source code into the container
COPY frontend/ ./

# Ensure the build directory exists to avoid errors during the build process
RUN mkdir -p /app/frontend/build

# Build the frontend (e.g., React app) into static files
RUN npm run build

# Stage 2: Build the backend with Python dependencies
FROM python:{{ cookiecutter.python_version }}-slim AS backend-builder

# Set the working directory for backend files
WORKDIR /app/backend

# Install system-level dependencies required for compiling Python packages
RUN apt-get update && apt-get install -y \
  gcc \
  libssl-dev \
  && rm -rf /var/lib/apt/lists/*

# Install Poetry, a dependency manager for Python
RUN pip install poetry

# Configure Poetry to install dependencies directly into the system environment
RUN poetry config virtualenvs.create false

# Copy the pyproject.toml file to define project dependencies
COPY backend/pyproject.toml ./

# Copy the rest of the backend source code
COPY backend/ ./

# Install Python dependencies listed in pyproject.toml, excluding dev dependencies
RUN poetry install --without dev

# Stage 3: Create the final production image
FROM python:{{ cookiecutter.python_version }}-slim AS production

# Set the root working directory for the combined app
WORKDIR /app

# Copy the backend files from the backend-builder stage
COPY --from=backend-builder /app/backend /app/backend

# Copy the frontend static files from the frontend-builder stage
COPY --from=frontend-builder /app/frontend/build /app/static

# Switch to the backend directory to install runtime dependencies
WORKDIR /app/backend

# Install Poetry and project dependencies in the final image
RUN pip install poetry && \
  poetry config virtualenvs.create false && \
  poetry install --without dev

# Expose port {{ cookiecutter.backend_port }}
EXPOSE {{ cookiecutter.backend_port }}

# Define the command to start the application
CMD poetry run uvicorn app.main:app --host 0.0.0.0 --port $PORT