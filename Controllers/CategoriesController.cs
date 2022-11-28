using ChuckNorrisJokes.Interfaces;
using ChuckNorrisJokes.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ChuckNorrisJokes.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {
        ICategoryService service;
        public CategoriesController(ICategoryService service) => this.service = service;

        [HttpGet]
        public Task<IEnumerable<string>> Get() => this.service.GetAllAsync("categories");
    }
}
