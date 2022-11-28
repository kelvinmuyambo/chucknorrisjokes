using ChuckNorrisJokes.Interfaces;

namespace ChuckNorrisJokes.Services
{
    public abstract class BaseService<T>: IBaseService<T>
    {
        public HttpClientService clientService { get; }

        public BaseService() => clientService = new HttpClientService();
    }
}
