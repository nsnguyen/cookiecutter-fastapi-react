from pydantic import BaseModel, EmailStr, Field
from datetime import datetime
from typing import Optional, List, Dict, Any

class User(BaseModel):
    """
    User data model
    """
    id: Optional[int] = None
    name: str
    email: EmailStr
    created_at: datetime = Field(default_factory=datetime.now)
    
    class Config:
        schema_extra = {
            "example": {
                "name": "John Doe",
                "email": "john.doe@example.com"
            }
        }

class Message(BaseModel):
    """
    Message data model
    """
    id: Optional[int] = None
    user_id: Optional[int] = None
    content: str
    created_at: datetime = Field(default_factory=datetime.now)
    
    class Config:
        schema_extra = {
            "example": {
                "content": "This is a sample message"
            }
        }

class ApiResponse(BaseModel):
    """
    Standardized API response model
    """
    status: str
    message: str
    timestamp: datetime = Field(default_factory=datetime.now)
    data: Optional[Dict[str, Any]] = None
