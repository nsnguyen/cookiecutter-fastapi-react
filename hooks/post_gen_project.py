#!/usr/bin/env python
import os
import shutil

# Get the root project directory
PROJECT_DIRECTORY = os.path.realpath(os.path.curdir)

def remove_file(filepath):
    os.remove(os.path.join(PROJECT_DIRECTORY, filepath))

def remove_directory(dirpath):
    shutil.rmtree(os.path.join(PROJECT_DIRECTORY, dirpath))

if __name__ == '__main__':
    if '{{ cookiecutter.use_docker }}' == 'no':
        # If docker is not being used, remove docker-related files
        remove_file('docker-compose.yml')
        remove_file('backend/Dockerfile')
        remove_file('frontend/Dockerfile')
        remove_file('.dockerignore')
        
    print("FastAPI-React project has been created!")
    print("\nNext steps:")
    print("1. Change to your project directory:")
    print("   cd {{ cookiecutter.project_slug }}")
    
    if '{{ cookiecutter.use_docker }}' == 'yes':
        print("\n2. Run the application with Docker:")
        print("   docker-compose up")
    else:
        print("\n2. Set up and run the backend:")
        print("   cd backend")
        print("   poetry install")
        print("   poetry run uvicorn app.main:app --reload")
        print("\n3. In another terminal, set up and run the frontend:")
        print("   cd frontend")
        print("   npm install")
        print("   npm start")
    
    print("\nEnjoy your new project!")