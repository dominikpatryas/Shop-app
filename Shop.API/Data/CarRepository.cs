using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Shop.API.Models;

namespace Shop.API.Data
{
    public class CarRepository : ICarRepository
    {
        private readonly DataContext _context;
        public CarRepository(DataContext context)
        {
            _context = context;
        }

        public async Task<Photo> GetPhoto(int id)
        {
            var photo = await _context.Photos.FirstOrDefaultAsync(p => p.Id == id);

            return photo;
        }

        public async Task<Car> GetCar(int id)
        {
            var car = await _context.Cars.Include(x => x.Photos).FirstOrDefaultAsync(z => z.Id == id);

            return car;
        }

        public async Task<IEnumerable<Car>> GetCars()
        {
            var cars = await _context.Cars.Include(x => x.Photos).ToListAsync();

            return cars;
        }
    }
}