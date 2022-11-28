namespace ChuckNorrisJokes.Interfaces
{
    public interface ICategoryService: IBaseService<string>
    {
       Task<IEnumerable<string>> GetAllAsync(string param);
    }
}
