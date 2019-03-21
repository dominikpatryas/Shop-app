using System.Collections.Generic;
using System.Threading.Tasks;
using Shop.API.Models;

namespace Shop.API.Data
{
    public interface ICarRepository
    {
        Task<IEnumerable<Car>> GetCars();
        Task<Car> GetCar(int id);
    }
}