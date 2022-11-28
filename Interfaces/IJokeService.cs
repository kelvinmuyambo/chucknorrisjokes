using ChuckNorrisJokes.Models;

namespace ChuckNorrisJokes.Interfaces
{
    public interface IJokeService: IBaseService<Joke>
    {
        Task<Joke> GetRandom(string? category);
        Task<SearchResult<Joke>> Search(string query);
    }
}
