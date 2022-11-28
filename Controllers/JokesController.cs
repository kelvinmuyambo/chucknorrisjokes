using ChuckNorrisJokes.Interfaces;
using ChuckNorrisJokes.Models;
using Microsoft.AspNetCore.Mvc;

namespace ChuckNorrisJokes.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JokesController : ControllerBase
    {
        private IJokeService service;

        public JokesController(IJokeService service) => this.service = service;

        [HttpGet]
        public Task<Joke> Get(string? category) => this.service.GetRandom(category);

        [HttpGet]
        [Route("search")]
        public Task<SearchResult<Joke>> Search(string query) => this.service.Search(query);
    }
}
