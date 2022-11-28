using ChuckNorrisJokes.Interfaces;
using ChuckNorrisJokes.Models;

namespace ChuckNorrisJokes.Services
{
    public class JokeService: BaseService<Joke>, IJokeService
    {
        public Task<Joke> GetRandom(string? category)
        {
            string query = category == null || category == "random" ? "" : $"?category={category}";
            return clientService.GetAsync<Joke>("random" + query);
        }

        public Task<SearchResult<Joke>> Search(string query)
        {
            string url= $"search?query={query}";
            return clientService.GetAsync<SearchResult<Joke>>(url);
        }
    }
}
