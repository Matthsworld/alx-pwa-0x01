# ALX Project 0x14

## API Overview
The **MoviesDatabase API** is a comprehensive service that allows users to access detailed information about movies, TV shows, actors, and more. Key features of the API include searching for movie and TV show details, retrieving cast and crew information, accessing trending content, and exploring various genres.

## Version
**API Version:** v1 (as stated in the MoviesDatabase API documentation)

## Available Endpoints
Below are the main endpoints available in the MoviesDatabase API:

1. **GET /movies**  
   Retrieve a list of movies based on filters like genre, year, or popularity.

2. **GET /movies/{id}**  
   Fetch detailed information about a specific movie by its ID.

3. **GET /tv-shows**  
   Get a list of TV shows with optional filtering by genre, year, or popularity.

4. **GET /tv-shows/{id}**  
   Access detailed information about a specific TV show by its ID.

5. **GET /actors/{id}**  
   Retrieve information about a specific actor, including their filmography.

6. **GET /trending**  
   Fetch the latest trending movies and TV shows.

## Request and Response Format
### Request Example:
A typical request to fetch movie details looks like this:
```bash
GET /movies/{id}
Headers:
  - Authorization: Bearer <API_KEY>

