using ChuckNorrisJokes.Interfaces;

namespace ChuckNorrisJokes.Services
{
    public abstract class BaseService<T>: IBaseService<T>
    {
        protected HttpClientService clientService { get; }

        public BaseService()
        {
            this.clientService = new HttpClientService();
        }

        public virtual async Task<IEnumerable<T>> GetAllAsync(string param = "") => await this.clientService.GetAsync<IEnumerable<T>>(param);
    }
}
