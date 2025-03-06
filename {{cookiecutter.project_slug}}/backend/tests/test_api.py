def test_root(client):
    """
    Test the root endpoint
    """
    response = client.get("/")
    assert response.status_code == 200
    assert "message" in response.json()
    assert "docs_url" in response.json()


def test_health_check(client):
    """
    Test the health check endpoint
    """
    response = client.get("/health")
    assert response.status_code == 200
    assert response.json()["status"] == "healthy"
    assert "timestamp" in response.json()
    assert "uptime" in response.json()


def test_api_status(client):
    """
    Test the API status endpoint
    """
    response = client.get("/api/status")
    assert response.status_code == 200
    assert "status" in response.json()
    assert "version" in response.json()


def test_submit_data(client):
    """
    Test the data submission endpoint
    """
    test_data = {
        "name": "Test User",
        "email": "test@example.com",
        "message": "This is a test message"
    }
    
    response = client.post(
        "/api/data/submit",
        json=test_data
    )
    assert response.status_code == 200
    assert response.json()["status"] == "success"
    assert "timestamp" in response.json()
    assert "data" in response.json()
    assert "received" in response.json()["data"]


def test_get_data(client):
    """
    Test the data retrieval

echo -e "${GREEN}Creating frontend files...${NC}"

# Create frontend Dockerfile
cat > "$PROJECT_DIR/frontend/Dockerfile" << 'EOF'
FROM node:16-alpine

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Start the application
CMD ["npm", "start"]
