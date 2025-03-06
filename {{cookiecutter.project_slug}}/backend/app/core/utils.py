from datetime import datetime
from typing import Dict, Any

def get_timestamp() -> str:
    """
    Returns the current timestamp in ISO format
    """
    return datetime.now().isoformat()

def format_response(status: str, message: str, data: Dict[str, Any] = None) -> Dict[str, Any]:
    """
    Format a standardized API response
    
    Args:
        status: Status of the response (success, error, etc.)
        message: Human-readable message
        data: Optional data payload
        
    Returns:
        Formatted response dictionary
    """
    response = {
        "status": status,
        "message": message,
        "timestamp": get_timestamp()
    }
    
    if data is not None:
        response["data"] = data
        
    return response

def validate_data(data: Dict[str, Any]) -> bool:
    """
    Placeholder for data validation logic
    
    Args:
        data: The data to validate
        
    Returns:
        True if valid, False otherwise
    """
    # Implement your validation logic here
    return True if data else False
