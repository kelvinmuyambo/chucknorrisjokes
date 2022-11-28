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
        IBaseService<string> service;
        public CategoriesController(IBaseService<string> service) { 
            this.service = service;
        }

        [HttpGet]
        public Task<IEnumerable<string>> Get() => this.service.GetAllAsync("categories");
    }
}
