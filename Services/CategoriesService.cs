using ChuckNorrisJokes.Interfaces;

namespace ChuckNorrisJokes.Services
{
    public class CategoriesService : BaseService<string>, ICategoryService
    {
        public async Task<IEnumerable<string>> GetAllAsync(string param = "") => await clientService.GetAsync<IEnumerable<string>>(param);
    }
}
